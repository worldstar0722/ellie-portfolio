// Geographic config for the Journey map. Copy lives in translations.js;
// label placement is in projected viewBox units per breakpoint.
export const journeyCities = [
  {
    id: "gwangyang",
    coordinates: [127.7, 34.94],
    label: {
      desktop: { dx: 0, dy: 22, anchor: "middle" },
      mobile: { dx: 2, dy: 18, anchor: "middle" },
    },
  },
  {
    id: "seoul",
    coordinates: [126.98, 37.57],
    label: {
      desktop: { dx: 12, dy: -6, anchor: "start" },
      mobile: { dx: 8, dy: -8, anchor: "start" },
    },
  },
  {
    id: "incheon",
    coordinates: [126.71, 37.46],
    label: {
      desktop: { dx: -12, dy: 2, anchor: "end" },
      mobile: { dx: -8, dy: 0, anchor: "end" },
    },
  },
  {
    id: "slc",
    coordinates: [-111.89, 40.76],
    label: {
      desktop: { dx: -14, dy: 2, anchor: "end" },
      mobile: { dx: -10, dy: 0, anchor: "end" },
    },
  },
];

// Pacific-centered frame that keeps Korea and the US mountain west in view.
export const mapFrame = {
  rotate: [-187.5, 0, 0],
  extent: {
    type: "MultiPoint",
    coordinates: [
      [112, 20],
      [-100, 63],
    ],
  },
};
