import { memo, useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { journeyCities } from "../data/journey.js";

const STYLE_URL = "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json";

// Paper-toned blank style: initial paint before the vector style loads,
// and the graceful fallback if the CDN is unreachable.
const fallbackStyle = {
  version: 8,
  sources: {},
  layers: [
    { id: "bg", type: "background", paint: { "background-color": "#F7F4EE" } },
  ],
};

// Recolor CARTO Positron to the site palette: field-paper land, white
// water, hairline borders, and only country/city labels at low opacity.
function themeStyle(style) {
  const keepLabel = /^place_(country|city|continent|state)/;
  style.layers = style.layers.filter((layer) => {
    if (layer.type !== "symbol") return true;
    return keepLabel.test(layer.id);
  });
  for (const layer of style.layers) {
    layer.paint = layer.paint ?? {};
    if (layer.type === "background") {
      layer.paint["background-color"] = "#F7F4EE";
    } else if (layer.type === "fill") {
      if (/water/.test(layer.id)) {
        layer.paint["fill-color"] = "#FFFFFF";
      } else {
        // landcover / landuse / parks: flatten into the paper tone
        layer.paint["fill-color"] = "#F7F4EE";
        layer.paint["fill-opacity"] = 1;
      }
    } else if (layer.type === "line") {
      if (/boundary|admin/.test(layer.id)) {
        layer.paint["line-color"] = "#DDD8CF";
        layer.paint["line-opacity"] = 0.8;
      } else if (/water/.test(layer.id)) {
        layer.paint["line-color"] = "#FFFFFF";
      } else {
        // roads, rails, bridges: barely-there texture on the paper
        layer.paint["line-color"] = "#EDE9E1";
      }
    } else if (layer.type === "symbol") {
      layer.paint["text-color"] = "#9A958B";
      layer.paint["text-opacity"] = 0.75;
      layer.paint["text-halo-color"] = "#F7F4EE";
    }
  }
  return style;
}

// Great-circle interpolation (spherical linear interpolation between
// two lon/lat points), with longitudes unwrapped so the Korea → SLC
// arc crosses the Pacific instead of wrapping around the map.
function greatCircle(from, to, steps = 96) {
  const toRad = (d) => (d * Math.PI) / 180;
  const toDeg = (r) => (r * 180) / Math.PI;
  const [lon1, lat1] = from.map(toRad);
  const [lon2, lat2] = to.map(toRad);
  const d =
    2 *
    Math.asin(
      Math.sqrt(
        Math.sin((lat2 - lat1) / 2) ** 2 +
          Math.cos(lat1) * Math.cos(lat2) * Math.sin((lon2 - lon1) / 2) ** 2
      )
    );
  const points = [];
  for (let i = 0; i <= steps; i++) {
    const f = i / steps;
    const A = Math.sin((1 - f) * d) / Math.sin(d);
    const B = Math.sin(f * d) / Math.sin(d);
    const x = A * Math.cos(lat1) * Math.cos(lon1) + B * Math.cos(lat2) * Math.cos(lon2);
    const y = A * Math.cos(lat1) * Math.sin(lon1) + B * Math.cos(lat2) * Math.sin(lon2);
    const z = A * Math.sin(lat1) + B * Math.sin(lat2);
    points.push([toDeg(Math.atan2(y, x)), toDeg(Math.atan2(z, Math.sqrt(x * x + y * y)))]);
  }
  // Unwrap longitudes eastward so the line stays continuous
  for (let i = 1; i < points.length; i++) {
    while (points[i][0] < points[i - 1][0] - 180) points[i][0] += 360;
  }
  return points;
}

function buildRoute() {
  const coords = journeyCities.map((c) => c.coordinates);
  const line = [
    ...coords.slice(0, 3), // Gwangyang → Seoul → Incheon (short hops)
    ...greatCircle(coords[2], coords[3]).slice(1), // Incheon → SLC arc
  ];
  return {
    type: "Feature",
    geometry: { type: "LineString", coordinates: line },
  };
}

function addRouteLayer(map) {
  if (map.getSource("journey-route")) return;
  map.addSource("journey-route", { type: "geojson", data: buildRoute() });
  map.addLayer({
    id: "journey-route-line",
    type: "line",
    source: "journey-route",
    paint: {
      "line-color": "#C05B3C",
      "line-width": 1.5,
      "line-opacity": 0.55,
    },
  });
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

// Haversine distance in km, to scale flight duration with the hop length
function distanceKm(from, to) {
  const toRad = (d) => (d * Math.PI) / 180;
  const dLat = toRad(to[1] - from[1]);
  const dLon = toRad(to[0] - from[0]);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(from[1])) * Math.cos(toRad(to[1])) * Math.sin(dLon / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(a));
}

function JourneyMap({ cityNames, activeId, onSelect }) {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const markersRef = useRef({});
  const firstFlight = useRef(true);
  const onSelectRef = useRef(onSelect);
  onSelectRef.current = onSelect;

  useEffect(() => {
    const initial =
      journeyCities.find((c) => c.id === activeId) ?? journeyCities[0];

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: fallbackStyle,
      center: initial.coordinates,
      zoom: initial.zoom,
      interactive: false,
      attributionControl: false,
    });
    map.addControl(
      new maplibregl.AttributionControl({
        compact: true,
        customAttribution: "© CARTO © OpenMapTiles © OpenStreetMap",
      })
    );
    mapRef.current = map;

    map.on("style.load", () => addRouteLayer(map));

    // Swap in the themed vector basemap; keep the paper fallback if the
    // style CDN is unreachable.
    fetch(STYLE_URL)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then((style) => map.setStyle(themeStyle(style)))
      .catch(() => {});

    // City markers as DOM buttons: clickable even though the map itself
    // is non-interactive.
    for (const city of journeyCities) {
      const el = document.createElement("button");
      el.type = "button";
      el.className = "city-marker";
      el.innerHTML =
        '<span class="city-marker-dot" aria-hidden="true"></span><span class="city-marker-label"></span>';
      el.addEventListener("click", () => onSelectRef.current(city.id));
      new maplibregl.Marker({ element: el, anchor: "left", offset: [-10, 0] })
        .setLngLat(city.coordinates)
        .addTo(map);
      markersRef.current[city.id] = el;
    }

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = {};
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Labels follow the language toggle
  useEffect(() => {
    for (const city of journeyCities) {
      const el = markersRef.current[city.id];
      if (!el) continue;
      el.querySelector(".city-marker-label").textContent = cityNames[city.id];
      el.setAttribute("aria-label", cityNames[city.id]);
    }
  }, [cityNames]);

  // Camera + marker state follow the active city
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    for (const [id, el] of Object.entries(markersRef.current)) {
      el.classList.toggle("is-active", id === activeId);
    }
    const city = journeyCities.find((c) => c.id === activeId);
    if (!city) return;
    if (firstFlight.current) {
      firstFlight.current = false;
      return; // map is initialized on the active city
    }
    if (prefersReducedMotion()) {
      map.jumpTo({ center: city.coordinates, zoom: city.zoom });
    } else {
      // Explicit duration: MapLibre skips (rather than clamps) flights
      // whose computed duration exceeds maxDuration, which froze the
      // trans-Pacific hop. Short Korean hops stay quick; the ocean
      // crossing gets a longer cinematic arc.
      const from = map.getCenter();
      const km = distanceKm([from.lng, from.lat], city.coordinates);
      map.flyTo({
        center: city.coordinates,
        zoom: city.zoom,
        curve: 1.4,
        duration: km > 3000 ? 2800 : 1200,
      });
    }
  }, [activeId]);

  return (
    <div
      ref={containerRef}
      className="h-[320px] w-full overflow-hidden rounded-[20px] border-hairline border-solid shadow-[0_2px_20px_rgba(35,39,47,0.05)] md:h-[440px]"
      aria-label={journeyCities.map((c) => cityNames[c.id]).join(" → ")}
    />
  );
}

export default memo(JourneyMap);
