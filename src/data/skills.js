// Skill grid config. Copy lives in translations.js; `icon` keys map to
// components in Skills.jsx, `badge` renders a text badge where no
// recognizable logo exists in the icon library. Group order sets the
// hierarchy on the page: finance first, then the technology and applied
// AI that serve it, then the spatial differentiator, with supporting
// craft last and visually muted.
export const skillGroups = [
  {
    id: "finance",
    skills: [
      { id: "reconciliation", name: "Financial reconciliation", icon: "checkSquare", accent: true },
      { id: "budgeting", name: "Budgeting & reporting", icon: "reportMoney" },
      { id: "marketdata", name: "Financial & market data", icon: "trending" },
      { id: "integrity", name: "Transaction data integrity", icon: "shieldCheck" },
      { id: "accounting", name: "Accounting fundamentals", icon: "bank" },
      { id: "excelmodeling", name: "Excel modeling", icon: "grid" },
    ],
  },
  {
    id: "tech",
    skills: [
      { id: "python", name: "Python", icon: "python" },
      { id: "sql", name: "SQL", icon: "database" },
      { id: "apis", name: "APIs", icon: "plug" },
      { id: "tableau", name: "Tableau", badge: "TB" },
      { id: "powerbi", name: "Power BI", icon: "barchart" },
      { id: "github", name: "Git & GitHub", icon: "github" },
    ],
  },
  {
    id: "ai",
    skills: [
      { id: "finbert", name: "FinBERT", badge: "FBERT", accent: true },
      { id: "sentiment", name: "Sentiment analysis", icon: "message" },
      { id: "vader", name: "VADER", badge: "VADER" },
      { id: "sklearn", name: "scikit-learn", icon: "sklearn" },
      { id: "randomforest", name: "Random Forest", icon: "tree" },
      { id: "lightgbm", name: "LightGBM", badge: "LGBM" },
      { id: "xgboost", name: "XGBoost", badge: "XGB" },
    ],
  },
  {
    id: "spatial",
    skills: [
      { id: "arcgis", name: "ArcGIS", icon: "arcgis" },
      { id: "locationintel", name: "Location intelligence", icon: "mappin" },
      { id: "accessibility", name: "Accessibility analysis", icon: "buildings" },
      { id: "spatialscoring", name: "Spatial scoring", icon: "layers" },
      { id: "equity", name: "Equity analysis", icon: "users" },
      { id: "hpi", name: "HPI", badge: "HPI" },
    ],
  },
  {
    // Supporting craft — rendered as quiet text pills rather than full
    // cards, so it never reads as equal in weight to the groups above.
    id: "additional",
    muted: true,
    skills: [
      { id: "figma", name: "Figma" },
      { id: "adobe", name: "Adobe Creative Suite" },
      { id: "dataviz", name: "Data visualization" },
      { id: "presentation", name: "Presentation design" },
    ],
  },
];
