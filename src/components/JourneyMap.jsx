import { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Line,
  Marker,
} from "react-simple-maps";
import { geoNaturalEarth1 } from "d3-geo";
import land from "world-atlas/land-110m.json";
import { journeyCities, mapFrame } from "../data/journey.js";

const sizes = {
  desktop: { width: 900, height: 340, pad: 36, dot: 4, activeDot: 5.5, font: 11 },
  mobile: { width: 375, height: 230, pad: 14, dot: 3.5, activeDot: 5, font: 9.5 },
};

function makeProjection({ width, height, pad }) {
  return geoNaturalEarth1()
    .rotate(mapFrame.rotate)
    .fitExtent(
      [
        [pad, pad],
        [width - pad, height - pad],
      ],
      mapFrame.extent
    );
}

const projections = {
  desktop: makeProjection(sizes.desktop),
  mobile: makeProjection(sizes.mobile),
};

function JourneyMap({ variant = "desktop", cityNames, activeId, onSelect }) {
  const size = sizes[variant];
  const projection = projections[variant];
  const route = journeyCities.map((c) => c.coordinates);

  return (
    <ComposableMap
      projection={projection}
      width={size.width}
      height={size.height}
      style={{ width: "100%", height: "auto" }}
      role="img"
      aria-label={journeyCities.map((c) => cityNames[c.id]).join(" → ")}
    >
      <Geographies geography={land}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#F6F6F7"
              stroke="#EBEBEB"
              strokeWidth={0.5}
              style={{
                default: { outline: "none" },
                hover: { outline: "none", fill: "#F6F6F7" },
                pressed: { outline: "none" },
              }}
            />
          ))
        }
      </Geographies>

      <Line
        coordinates={route}
        fill="none"
        stroke="#C05B3C"
        strokeWidth={1.25}
        strokeLinecap="round"
        pathLength={1}
        className="journey-arc"
      />

      {journeyCities.map((city) => {
        const isActive = city.id === activeId;
        const label = city.label[variant];
        return (
          <Marker key={city.id} coordinates={city.coordinates}>
            <circle
              r={isActive ? size.activeDot : size.dot}
              fill={isActive ? "#C05B3C" : "#FFFFFF"}
              stroke="#C05B3C"
              strokeWidth={1.25}
              tabIndex={-1}
              onClick={() => onSelect(city.id)}
              style={{ cursor: "pointer", transition: "r 0.2s ease, fill 0.2s ease" }}
            >
              <title>{cityNames[city.id]}</title>
            </circle>
            <text
              dx={label.dx}
              dy={label.dy}
              textAnchor={label.anchor}
              onClick={() => onSelect(city.id)}
              style={{
                fontSize: size.font,
                fontWeight: isActive ? 600 : 400,
                fill: isActive ? "#23272F" : "rgba(35,39,47,0.55)",
                cursor: "pointer",
                transition: "fill 0.2s ease",
              }}
            >
              {cityNames[city.id]}
            </text>
          </Marker>
        );
      })}
    </ComposableMap>
  );
}

export default memo(JourneyMap);
