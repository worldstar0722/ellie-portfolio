// Geographic config for the Journey map. Copy lives in translations.js.
// zoom = camera zoom when the city is active (Korean cities slightly
// closer so Seoul and Incheon read as clearly distinct stops).
export const journeyCities = [
  { id: "gwangyang", coordinates: [127.7, 34.94], zoom: 8.5 },
  { id: "seoul", coordinates: [126.98, 37.57], zoom: 9 },
  { id: "incheon", coordinates: [126.71, 37.46], zoom: 9 },
  { id: "slc", coordinates: [-111.89, 40.76], zoom: 8 },
];
