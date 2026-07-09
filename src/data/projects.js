export const projects = [
  {
    id: "super-bowl-ad-analytics",
    number: "01",
    image: "/images/super-bowl-placeholder.jpg",
    relatedResearch: "super-bowl-framework",
    tools: ["Python", "Twitter API", "Tableau"],
    en: {
      title: "Super Bowl Advertising Analytics",
      subtitle: "Measuring what a $7M spot actually earns on social media",
      problem:
        "Ad Meter rankings capture likability, but brands lack a rigorous way to measure how Super Bowl ads actually perform across social conversation — volume, sentiment, and reach move independently of the rankings.",
      approach:
        "Collected 64,230 tweets across 59 Super Bowl LX brands via the Twitter API, engineered six engagement and sentiment metrics, and combined them into a composite Winning Score Model visualized in Tableau.",
      result:
        "The model showed almost no correlation with Ad Meter rankings (R² < 0.05), demonstrating that high visibility does not imply positive reception — a framework brands can use to evaluate real audience response.",
    },
    ko: {
      title: "슈퍼볼 광고 애널리틱스",
      subtitle: "700만 달러짜리 광고가 소셜에서 실제로 얻는 것",
      problem:
        "Ad Meter 순위는 호감도를 측정하지만, 브랜드에게는 슈퍼볼 광고가 소셜 대화에서 실제로 어떤 성과를 내는지 — 볼륨, 감성, 도달률이 순위와 무관하게 움직이는지 — 측정할 엄밀한 방법이 없습니다.",
      approach:
        "Twitter API로 슈퍼볼 LX 59개 브랜드의 트윗 64,230건을 수집하고, 6개의 참여·감성 지표를 설계해 Tableau로 시각화한 복합 Winning Score 모델로 결합했습니다.",
      result:
        "모델은 Ad Meter 순위와 거의 상관이 없었으며(R² < 0.05), 높은 노출이 긍정적 반응을 의미하지 않는다는 것을 입증했습니다 — 브랜드가 실제 반응을 평가할 수 있는 프레임워크입니다.",
    },
  },
  {
    id: "stock-prediction-finbert",
    number: "02",
    image: "/images/stock-prediction-placeholder.jpg",
    relatedResearch: "stock-sentiment",
    tools: ["Python", "scikit-learn", "XGBoost"],
    en: {
      title: "Stock Price Prediction with FinBERT",
      subtitle: "Does investor sentiment add signal beyond price history?",
      problem:
        "Classical models built only on historical prices struggle to anticipate direction changes, and the weak-form efficient market hypothesis says they never will.",
      approach:
        "Combined FinBERT-scored investor sentiment with S&P 500 market data, then benchmarked Random Forest, LightGBM, and XGBoost classifiers on next-move prediction.",
      result:
        "Sentiment features consistently improved accuracy and reduced false positives across all three models — empirical evidence against weak-form EMH.",
    },
    ko: {
      title: "FinBERT 기반 주가 예측",
      subtitle: "투자자 심리는 가격 이력 너머의 신호를 줄 수 있을까?",
      problem:
        "과거 가격만으로 구축된 전통적 모델은 방향 전환 예측에 취약하며, 약형 효율적 시장 가설은 그것이 불가능하다고 말합니다.",
      approach:
        "FinBERT로 점수화한 투자자 감성과 S&P 500 시장 데이터를 결합하고, Random Forest·LightGBM·XGBoost 분류기를 다음 변동 예측 과제로 비교 평가했습니다.",
      result:
        "감성 피처는 세 모델 모두에서 정확도를 높이고 오탐을 줄였습니다 — 약형 효율적 시장 가설에 대한 실증적 반증입니다.",
    },
  },
  {
    id: "slc-civic-center",
    number: "03",
    image: "/images/civic-center-placeholder.jpg",
    relatedResearch: null,
    tools: ["HPI", "Equity analysis"],
    en: {
      title: "SLC Civic Center Healthy Urban Planning",
      subtitle: "Applying health-first planning to a downtown civic block",
      problem:
        "Salt Lake City's civic center area concentrates public services but underperforms on health-promoting urban qualities — walkability, shade, gathering space, and equitable access.",
      approach:
        "Evaluated the district against Healthy Places Index (HPI) criteria and ran an equity analysis of who the current layout serves and excludes, translating gaps into design recommendations.",
      result:
        "A prioritized set of interventions that reframes the civic center as public health infrastructure, grounded in measurable equity indicators.",
    },
    ko: {
      title: "SLC 시빅센터 건강 도시계획",
      subtitle: "도심 시빅 블록에 적용한 건강 중심 계획",
      problem:
        "솔트레이크시티 시빅센터 일대는 공공 서비스가 밀집해 있지만 보행성, 그늘, 모임 공간, 공평한 접근성 등 건강 증진 도시 요소에서는 미흡합니다.",
      approach:
        "Healthy Places Index(HPI) 기준으로 지구를 평가하고, 현재 배치가 누구를 위하고 누구를 배제하는지 형평성 분석을 수행해 격차를 설계 제안으로 옮겼습니다.",
      result:
        "측정 가능한 형평성 지표에 근거해 시빅센터를 공중보건 인프라로 재정의하는 우선순위 개입안을 도출했습니다.",
    },
  },
  {
    id: "urban-transect-study",
    number: "04",
    image: "/images/transect-placeholder.jpg",
    relatedResearch: null,
    tools: ["QGIS", "Fieldwork"],
    en: {
      title: "Urban Transect Field Study",
      subtitle: "Reading a city section by section, on foot and in GIS",
      problem:
        "Zoning maps describe what a city should be; they rarely capture how land use, ecology, and street life actually change block by block.",
      approach:
        "Walked a full urban-to-edge transect documenting land use, vegetation, and street conditions, then digitized and analyzed observations in QGIS against parcel and census layers.",
      result:
        "A layered spatial narrative of the transect revealing where the built pattern diverges from plan — and where small interventions would matter most.",
    },
    ko: {
      title: "도시 트랜섹트 현장 연구",
      subtitle: "걸어서, 그리고 GIS로 도시를 단면별로 읽기",
      problem:
        "용도지역 지도는 도시가 어때야 하는지를 말하지만, 토지 이용·생태·가로 생활이 블록마다 실제로 어떻게 변하는지는 담지 못합니다.",
      approach:
        "도심에서 도시 경계까지 트랜섹트 전 구간을 걸으며 토지 이용, 식생, 가로 환경을 기록하고, 관찰 자료를 QGIS에서 필지·센서스 레이어와 함께 디지털화·분석했습니다.",
      result:
        "계획과 실제 건조 환경이 어긋나는 지점, 그리고 작은 개입이 가장 큰 효과를 낼 지점을 드러내는 층위적 공간 서사를 완성했습니다.",
    },
  },
];
