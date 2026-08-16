// Skill grid config. `icon` keys map to components in Skills.jsx;
// `badge` renders a text badge when no recognizable logo exists in the
// icon library (Tableau/Power BI/Excel/Adobe were removed from
// simple-icons, and research tools have no official marks).
export const skillGroups = [
  {
    id: "finance",
    skills: [
      { id: "reconciliation", name: "Financial reconciliation", icon: "checkSquare" },
      { id: "budgeting", name: "Budgeting & reporting", icon: "reportMoney" },
      { id: "accounting", name: "Accounting fundamentals", icon: "bank" },
      { id: "excelmodeling", name: "Excel modeling", icon: "grid" },
    ],
  },
  {
    id: "data",
    skills: [
      { id: "python", name: "Python", icon: "python" },
      { id: "sql", name: "SQL", icon: "database" },
      { id: "yahoofinance", name: "Yahoo Finance API", icon: "trending" },
      { id: "tableau", name: "Tableau", badge: "TB" },
      { id: "powerbi", name: "Power BI", icon: "barchart" },
    ],
  },
  {
    id: "ml",
    skills: [
      { id: "finbert", name: "FinBERT", badge: "FBERT", accent: true },
      { id: "vader", name: "VADER", badge: "VADER" },
      { id: "sklearn", name: "scikit-learn", icon: "sklearn" },
      { id: "randomforest", name: "Random Forest", icon: "tree" },
      { id: "lightgbm", name: "LightGBM", badge: "LGBM" },
      { id: "xgboost", name: "XGBoost", badge: "XGB" },
    ],
  },
  {
    id: "urban",
    skills: [
      { id: "arcgis", name: "ArcGIS", icon: "arcgis" },
      { id: "hpi", name: "HPI", badge: "HPI" },
      { id: "fieldresearch", name: "Field Research", icon: "mappin" },
      { id: "equity", name: "Equity Analysis", icon: "users" },
      { id: "urbanplanning", name: "Urban Planning", icon: "buildings" },
    ],
  },
  {
    id: "design",
    skills: [
      { id: "figma", name: "Figma", icon: "figma" },
      { id: "adobe", name: "Adobe Creative Suite", badge: "ADOBE" },
      { id: "dataviz", name: "Data Visualization", icon: "piechart" },
      { id: "presentation", name: "Presentation Design", icon: "presentation" },
    ],
  },
];
