// Featured work + case study content. Visual assets are referenced by
// name from public/images/ (e.g. /images/project01_dashboard.jpg) and
// render as polished labeled placeholders until uploaded.
export const projects = [
  {
    id: "super-bowl-analytics",
    number: "01",
    featured: true, // large card
    tools: ["Python", "Twitter/X API", "Tableau", "NLP", "Data Visualization"],
    cover: { name: "project01_cover", hint: "Tableau dashboard screenshot", ratio: "16:9" },
    links: { github: "https://github.com/worldstar0722" },
    en: {
      title: "Super Bowl Advertising Analytics",
      subtitle: "Measuring what a $7M ad spot actually earns on social media.",
      role: "First Author · Researcher · Data Analyst",
      problem:
        "Super Bowl ads receive massive visibility, but visibility does not always mean positive audience reception.",
      method:
        "Analyzed 64,230 tweets from 59 Super Bowl LX brands, engineered 6 metrics into a composite Winning Score Model, and compared social-media performance against Ad Meter rankings.",
      result:
        "Found R² < 0.05 versus Ad Meter rankings — high visibility does not necessarily equal positive reception.",
      caseStudy: {
        summary:
          "A composite social-scoring model testing whether Super Bowl visibility translates into positive reception.",
        timeline: "Timeline: TBD",
        problem: {
          question: "Do the most visible Super Bowl ads actually earn positive audience response?",
          why: "Brands pay roughly $7M per 30-second spot; likability panels alone can't justify that spend.",
        },
        data: {
          dataset: "64,230 tweets referencing 59 Super Bowl LX brands, collected via the Twitter/X API.",
          source: "Data source note: collection window and query terms to be documented.",
          cleaning: "Deduplicated retweets, filtered spam accounts, and normalized brand mentions before scoring.",
        },
        method: {
          workflow: "Engineered six engagement and sentiment metrics, combined into a composite Winning Score Model.",
          model: "Sentiment scoring plus reach, volume, and engagement features weighted into a single index.",
          assumptions: "Assumes tweet-level sentiment approximates broader audience reception during the broadcast window.",
        },
        findings: [
          "Winning Score rankings diverged sharply from USA Today Ad Meter rankings.",
          "R² < 0.05 — visibility explained almost none of the variance in reception.",
          "High-volume brands often skewed negative, not positive.",
        ],
        metrics: [
          { label: "Tweets analyzed", value: "64,230" },
          { label: "Brands scored", value: "59" },
          { label: "Composite metrics", value: "6" },
          { label: "R² vs. Ad Meter", value: "< 0.05" },
        ],
        impact: {
          decision: "Gives brand teams a framework to evaluate real social response, not just panel likability.",
          changed: "Reframed “winning” the Super Bowl as reception quality rather than airtime visibility.",
          next: "Extend to multi-year data and add engagement-weighted sentiment.",
        },
      },
      gallery: [
        { name: "project01_dashboard", hint: "Tableau dashboard screenshot", ratio: "16:9" },
        { name: "project01_sentiment_chart", hint: "Sentiment distribution chart", ratio: "4:3" },
        { name: "project01_ranking_chart", hint: "Brand ranking comparison chart", ratio: "16:9" },
        { name: "project01_methodology", hint: "Methodology diagram", ratio: "16:9" },
      ],
    },
    ko: {
      title: "슈퍼볼 광고 애널리틱스",
      subtitle: "700만 달러짜리 광고가 소셜에서 실제로 얻는 것을 측정합니다.",
      role: "제1저자 · 연구원 · 데이터 애널리스트",
      problem:
        "슈퍼볼 광고는 엄청난 노출을 얻지만, 노출이 곧 긍정적인 반응을 의미하지는 않습니다.",
      method:
        "슈퍼볼 LX 59개 브랜드의 트윗 64,230건을 분석하고, 6개 지표를 하나의 Winning Score 모델로 결합해 소셜 성과를 Ad Meter 순위와 비교했습니다.",
      result:
        "Ad Meter 순위 대비 R² < 0.05 — 많이 보인다고 좋게 받아들여지는 것은 아니었습니다.",
      caseStudy: {
        summary: "슈퍼볼의 노출이 긍정적 반응으로 이어지는지 검증한 복합 소셜 스코어링 모델.",
        timeline: "기간: 추후 기재",
        problem: {
          question: "가장 많이 보인 슈퍼볼 광고가 실제로 긍정적인 반응을 얻었을까?",
          why: "30초에 약 700만 달러 — 호감도 패널만으로는 그 지출을 정당화할 수 없습니다.",
        },
        data: {
          dataset: "Twitter/X API로 수집한 슈퍼볼 LX 59개 브랜드 관련 트윗 64,230건.",
          source: "데이터 출처 노트: 수집 기간과 검색어는 추후 문서화.",
          cleaning: "리트윗 중복 제거, 스팸 계정 필터링, 브랜드 표기 정규화 후 스코어링.",
        },
        method: {
          workflow: "6개의 참여·감성 지표를 설계해 하나의 Winning Score 모델로 결합했습니다.",
          model: "감성 점수에 도달률·볼륨·참여 피처를 가중 결합한 단일 지수.",
          assumptions: "방송 시간대의 트윗 감성이 전체 시청자 반응을 근사한다고 가정.",
        },
        findings: [
          "Winning Score 순위는 USA Today Ad Meter 순위와 크게 어긋났습니다.",
          "R² < 0.05 — 노출은 반응의 분산을 거의 설명하지 못했습니다.",
          "볼륨이 큰 브랜드일수록 오히려 부정적으로 기우는 경우가 많았습니다.",
        ],
        metrics: [
          { label: "분석한 트윗", value: "64,230" },
          { label: "스코어링한 브랜드", value: "59" },
          { label: "복합 지표", value: "6" },
          { label: "Ad Meter 대비 R²", value: "< 0.05" },
        ],
        impact: {
          decision: "패널 호감도가 아니라 실제 소셜 반응으로 광고를 평가할 프레임워크를 제공합니다.",
          changed: "슈퍼볼에서 '이긴다'의 의미를 노출량이 아닌 반응의 질로 재정의했습니다.",
          next: "다년도 데이터로 확장하고 참여 가중 감성 지표를 추가할 계획입니다.",
        },
      },
      gallery: [
        { name: "project01_dashboard", hint: "Tableau 대시보드 스크린샷", ratio: "16:9" },
        { name: "project01_sentiment_chart", hint: "감성 분포 차트", ratio: "4:3" },
        { name: "project01_ranking_chart", hint: "브랜드 순위 비교 차트", ratio: "16:9" },
        { name: "project01_methodology", hint: "방법론 다이어그램", ratio: "16:9" },
      ],
    },
  },
  {
    id: "finbert-stock-prediction",
    number: "02",
    featured: true,
    tools: ["Python", "FinBERT", "scikit-learn", "Random Forest", "LightGBM", "XGBoost"],
    cover: { name: "project02_pipeline", hint: "Model pipeline diagram", ratio: "16:9" },
    links: { github: "https://github.com/worldstar0722" },
    en: {
      title: "Stock Price Prediction with FinBERT",
      subtitle: "Testing whether investor sentiment adds signal beyond price history.",
      role: "Co-Author · Machine Learning Researcher · Data Analyst",
      problem:
        "Traditional market data may miss investor sentiment signals that appear in financial text.",
      method:
        "Combined FinBERT sentiment features with historical S&P 500 market data and compared Random Forest, LightGBM, and XGBoost models.",
      result:
        "Sentiment features improved accuracy and reduced false positives — evidence against weak-form EMH in this setting.",
      caseStudy: {
        summary: "An ML comparison testing whether financial-text sentiment improves next-move prediction.",
        timeline: "Timeline: TBD",
        problem: {
          question: "Does investor sentiment carry predictive signal beyond historical prices?",
          why: "Weak-form EMH says price history is fully priced in; if text sentiment adds signal, that assumption breaks.",
        },
        data: {
          dataset: "Historical S&P 500 market data joined with FinBERT-scored financial text sentiment.",
          source: "Data source note: text corpus and market data windows to be documented.",
          cleaning: "Aligned sentiment scores to trading days and handled missing sessions before feature engineering.",
        },
        method: {
          workflow: "Built matched feature sets with and without sentiment, then benchmarked three classifiers.",
          model: "Random Forest, LightGBM, and XGBoost compared on identical splits.",
          assumptions: "Assumes FinBERT sentiment meaningfully proxies investor mood at daily granularity.",
        },
        findings: [
          "Sentiment features improved accuracy across all three models.",
          "False positives dropped when sentiment was included.",
          "Results provide evidence against weak-form EMH in this setting.",
        ],
        metrics: [
          { label: "Models compared", value: "3" },
          { label: "Index covered", value: "S&P 500" },
          { label: "Sentiment engine", value: "FinBERT" },
          { label: "False positives", value: "Reduced" },
        ],
        impact: {
          decision: "Supports adding NLP-derived features to quantitative screening pipelines.",
          changed: "Shifted the question from “which model” to “which information” drives performance.",
          next: "Test intraday granularity and alternative financial-text sources.",
        },
      },
      gallery: [
        { name: "project02_pipeline", hint: "Model pipeline diagram", ratio: "16:9" },
        { name: "project02_feature_importance", hint: "Feature importance chart", ratio: "4:3" },
        { name: "project02_model_comparison", hint: "Model performance comparison table", ratio: "16:9" },
        { name: "project02_sentiment_time", hint: "Sentiment-over-time chart", ratio: "16:9" },
      ],
    },
    ko: {
      title: "FinBERT 기반 주가 예측",
      subtitle: "투자자 심리가 가격 이력 너머의 신호를 주는지 검증합니다.",
      role: "공동저자 · 머신러닝 연구원 · 데이터 애널리스트",
      problem:
        "전통적인 시장 데이터는 금융 텍스트에 나타나는 투자자 심리 신호를 놓칠 수 있습니다.",
      method:
        "FinBERT 감성 피처를 S&P 500 과거 데이터와 결합하고 Random Forest, LightGBM, XGBoost 모델을 비교했습니다.",
      result:
        "감성 피처는 정확도를 높이고 오탐을 줄였습니다 — 이 설정에서 약형 효율적 시장 가설에 대한 반증입니다.",
      caseStudy: {
        summary: "금융 텍스트 감성이 주가 방향 예측을 개선하는지 검증한 ML 비교 연구.",
        timeline: "기간: 추후 기재",
        problem: {
          question: "투자자 심리는 과거 가격 너머의 예측 신호를 담고 있을까?",
          why: "약형 EMH는 가격 이력이 모두 반영되어 있다고 말합니다. 텍스트 감성이 신호를 더한다면 그 가정이 깨집니다.",
        },
        data: {
          dataset: "FinBERT로 점수화한 금융 텍스트 감성과 결합한 S&P 500 과거 시장 데이터.",
          source: "데이터 출처 노트: 텍스트 코퍼스와 시장 데이터 기간은 추후 문서화.",
          cleaning: "감성 점수를 거래일에 정렬하고 결측 세션을 처리한 뒤 피처를 설계했습니다.",
        },
        method: {
          workflow: "감성 포함/미포함 피처셋을 동일 조건으로 만들어 세 분류기를 벤치마크했습니다.",
          model: "동일한 분할에서 Random Forest · LightGBM · XGBoost 비교.",
          assumptions: "FinBERT 감성이 일 단위 투자자 심리를 유의미하게 근사한다고 가정.",
        },
        findings: [
          "감성 피처는 세 모델 모두에서 정확도를 높였습니다.",
          "감성을 포함하자 오탐이 줄었습니다.",
          "이 설정에서 약형 EMH에 반하는 실증 결과를 얻었습니다.",
        ],
        metrics: [
          { label: "비교한 모델", value: "3" },
          { label: "대상 지수", value: "S&P 500" },
          { label: "감성 엔진", value: "FinBERT" },
          { label: "오탐", value: "감소" },
        ],
        impact: {
          decision: "퀀트 스크리닝 파이프라인에 NLP 파생 피처를 더할 근거를 제공합니다.",
          changed: "'어떤 모델'이 아니라 '어떤 정보'가 성능을 끌어올리는지로 질문을 바꿨습니다.",
          next: "일중 단위와 대안 금융 텍스트 소스를 테스트할 계획입니다.",
        },
      },
      gallery: [
        { name: "project02_pipeline", hint: "모델 파이프라인 다이어그램", ratio: "16:9" },
        { name: "project02_feature_importance", hint: "피처 중요도 차트", ratio: "4:3" },
        { name: "project02_model_comparison", hint: "모델 성능 비교 표", ratio: "16:9" },
        { name: "project02_sentiment_time", hint: "시간에 따른 감성 차트", ratio: "16:9" },
      ],
    },
  },
  {
    id: "slc-civic-center",
    number: "03",
    featured: false,
    tools: ["HPI", "Equity Analysis", "ArcGIS", "Urban Planning"],
    cover: { name: "project03_site_map", hint: "ArcGIS site map export", ratio: "4:3" },
    links: {},
    en: {
      title: "SLC Civic Center Healthy Urban Planning",
      subtitle: "Applying health-first planning to a downtown civic block.",
      role: "Urban Planning Analyst · Researcher",
      problem:
        "Downtown civic spaces need to be evaluated not only by land use, but also by health, access, equity, and public-life outcomes.",
      method:
        "Used a health-first planning framework to assess civic-center conditions and identify planning opportunities.",
      result:
        "Translated planning observations into clearer recommendations for healthier, more equitable urban design.",
      caseStudy: {
        summary: "A health-first evaluation of Salt Lake City's civic core, from site assessment to policy recommendations.",
        timeline: "Timeline: TBD",
        problem: {
          question: "How healthy and equitable is the Civic Center district for the people who use it daily?",
          why: "Civic space is public-health infrastructure; land-use maps alone can't show who it serves or excludes.",
        },
        data: {
          dataset: "Healthy Places Index (HPI) indicators joined with site assessment observations.",
          source: "Data source note: HPI vintage and census layers to be documented.",
          cleaning: "Matched HPI tracts to the study boundary and structured field notes into scorable criteria.",
        },
        method: {
          workflow: "Assessed the district against HPI criteria, then ran an equity analysis of access and exposure.",
          model: "Health-first planning framework: walkability, shade, gathering space, equitable access.",
          assumptions: "Assumes tract-level HPI indicators are meaningful at the district scale.",
        },
        findings: [
          "The district concentrates public services but underperforms on health-promoting qualities.",
          "Access and comfort are unevenly distributed across user groups.",
          "Small physical interventions map to measurable equity indicators.",
        ],
        metrics: [
          { label: "Framework", value: "HPI" },
          { label: "Lens", value: "Equity" },
          { label: "Scale", value: "District" },
          { label: "Output", value: "Policy set" },
        ],
        impact: {
          decision: "Supports prioritizing traffic calming, green-space programming, and anti-displacement policy.",
          changed: "Reframed the civic center as public-health infrastructure, not just land use.",
          next: "Quantify recommendations with before/after HPI scenario scoring.",
        },
      },
      gallery: [
        { name: "project03_site_map", hint: "ArcGIS site map export", ratio: "4:3" },
        { name: "project03_equity_diagram", hint: "Equity analysis diagram", ratio: "16:9" },
        { name: "project03_planning_board", hint: "Planning recommendation board", ratio: "16:9" },
        { name: "project03_before_after", hint: "Before/after spatial concept", ratio: "16:9" },
      ],
    },
    ko: {
      title: "SLC 시빅센터 건강 도시계획",
      subtitle: "도심 시빅 블록에 건강 우선 계획을 적용합니다.",
      role: "도시계획 애널리스트 · 연구원",
      problem:
        "도심 시빅 공간은 토지 이용만이 아니라 건강, 접근성, 형평성, 공공생활의 결과로 평가되어야 합니다.",
      method:
        "건강 우선 계획 프레임워크로 시빅센터의 현황을 평가하고 계획 기회를 발굴했습니다.",
      result:
        "현장 관찰을 더 건강하고 공평한 도시 설계를 위한 명확한 권고안으로 옮겼습니다.",
      caseStudy: {
        summary: "현장 평가에서 정책 제안까지, 솔트레이크시티 시빅 코어의 건강 우선 평가.",
        timeline: "기간: 추후 기재",
        problem: {
          question: "시빅센터 지구는 매일 그곳을 쓰는 사람들에게 얼마나 건강하고 공평한가?",
          why: "시빅 공간은 공중보건 인프라입니다. 토지이용 지도만으로는 누구를 위하고 누구를 배제하는지 보이지 않습니다.",
        },
        data: {
          dataset: "현장 평가 관찰과 결합한 Healthy Places Index(HPI) 지표.",
          source: "데이터 출처 노트: HPI 버전과 센서스 레이어는 추후 문서화.",
          cleaning: "HPI 트랙트를 연구 경계에 맞추고 현장 노트를 평가 가능한 기준으로 구조화했습니다.",
        },
        method: {
          workflow: "HPI 기준으로 지구를 평가한 뒤 접근성과 노출의 형평성 분석을 수행했습니다.",
          model: "건강 우선 계획 프레임워크: 보행성, 그늘, 모임 공간, 공평한 접근.",
          assumptions: "트랙트 단위 HPI 지표가 지구 스케일에서도 유의미하다고 가정.",
        },
        findings: [
          "공공 서비스는 밀집해 있지만 건강 증진 요소는 미흡했습니다.",
          "접근성과 쾌적함이 이용자 집단별로 고르지 않았습니다.",
          "작은 물리적 개입이 측정 가능한 형평성 지표와 연결됩니다.",
        ],
        metrics: [
          { label: "프레임워크", value: "HPI" },
          { label: "관점", value: "형평성" },
          { label: "스케일", value: "지구" },
          { label: "결과물", value: "정책 제안" },
        ],
        impact: {
          decision: "교통정온화, 녹지 프로그램, 반(反)젠트리피케이션 정책의 우선순위를 뒷받침합니다.",
          changed: "시빅센터를 토지 이용이 아닌 공중보건 인프라로 재정의했습니다.",
          next: "권고안을 전후 HPI 시나리오 스코어링으로 정량화할 계획입니다.",
        },
      },
      gallery: [
        { name: "project03_site_map", hint: "ArcGIS 사이트 맵", ratio: "4:3" },
        { name: "project03_equity_diagram", hint: "형평성 분석 다이어그램", ratio: "16:9" },
        { name: "project03_planning_board", hint: "계획 권고 보드", ratio: "16:9" },
        { name: "project03_before_after", hint: "전후 공간 콘셉트", ratio: "16:9" },
      ],
    },
  },
  {
    id: "urban-transect-study",
    number: "04",
    featured: false,
    tools: ["ArcGIS", "Fieldwork", "Urban Observation", "Spatial Analysis"],
    cover: { name: "project04_arcgis_map", hint: "ArcGIS transect map export", ratio: "4:3" },
    links: {},
    en: {
      title: "Urban Transect Field Study",
      subtitle: "Reading a city section by section, on foot and in ArcGIS.",
      role: "Field Researcher · Spatial Analyst",
      problem:
        "Urban form changes gradually across districts, but those transitions are often hard to understand from data alone.",
      method:
        "Conducted field observation and spatial documentation across an urban transect, using ArcGIS to organize and interpret spatial patterns.",
      result:
        "Built a clearer understanding of how land use, mobility, density, and public space shift across the city.",
      caseStudy: {
        summary: "A walked urban-to-edge transect, digitized and interpreted in ArcGIS.",
        timeline: "Timeline: TBD",
        problem: {
          question: "How do land use, mobility, density, and public space actually change block by block?",
          why: "Zoning maps describe intent; they rarely capture the lived transitions between districts.",
        },
        data: {
          dataset: "Field observations — land use, vegetation, street condition — recorded along a full transect.",
          source: "Data source note: transect route and observation protocol to be documented.",
          cleaning: "Standardized field notes into categories before digitizing against parcel and census layers.",
        },
        method: {
          workflow: "Walked the transect, documented conditions, then digitized observations in ArcGIS.",
          model: "Layered spatial comparison against parcel and census data.",
          assumptions: "Assumes a single transect is representative of broader district transitions.",
        },
        findings: [
          "Built form diverges from plan most visibly at district seams.",
          "Mobility and public-space quality shift faster than land-use categories suggest.",
          "Small sites at transitions offer outsized intervention opportunities.",
        ],
        metrics: [
          { label: "Method", value: "Transect" },
          { label: "Tooling", value: "ArcGIS" },
          { label: "Mode", value: "On foot" },
          { label: "Output", value: "Spatial narrative" },
        ],
        impact: {
          decision: "Points planners to seam locations where small interventions matter most.",
          changed: "Connected on-the-ground observation to parcel-level data in one narrative.",
          next: "Repeat across additional transects to test generality.",
        },
      },
      gallery: [
        { name: "project04_arcgis_map", hint: "ArcGIS transect map export", ratio: "4:3" },
        { name: "project04_field_photo_grid", hint: "Field photo grid", ratio: "square" },
        { name: "project04_annotated_map", hint: "Annotated observation map", ratio: "16:9" },
        { name: "project04_pattern_diagram", hint: "Urban pattern diagram", ratio: "16:9" },
      ],
    },
    ko: {
      title: "도시 트랜섹트 현장 연구",
      subtitle: "걸어서, 그리고 ArcGIS로 도시를 단면별로 읽습니다.",
      role: "현장 연구원 · 공간 분석가",
      problem:
        "도시의 형태는 지구를 가로지르며 서서히 변하지만, 그 전환은 데이터만으로 이해하기 어렵습니다.",
      method:
        "도시 트랜섹트를 따라 현장 관찰과 공간 기록을 수행하고, ArcGIS로 공간 패턴을 정리·해석했습니다.",
      result:
        "토지 이용, 이동성, 밀도, 공공 공간이 도시를 가로지르며 어떻게 변하는지 명확하게 파악했습니다.",
      caseStudy: {
        summary: "도심에서 도시 경계까지 걸어서 기록하고 ArcGIS로 해석한 트랜섹트 연구.",
        timeline: "기간: 추후 기재",
        problem: {
          question: "토지 이용, 이동성, 밀도, 공공 공간은 블록마다 실제로 어떻게 달라지는가?",
          why: "용도지역 지도는 의도를 말할 뿐, 지구 사이의 실제 전환은 담지 못합니다.",
        },
        data: {
          dataset: "트랜섹트 전 구간에서 기록한 토지 이용·식생·가로 환경 현장 관찰 자료.",
          source: "데이터 출처 노트: 트랜섹트 경로와 관찰 프로토콜은 추후 문서화.",
          cleaning: "현장 노트를 범주로 표준화한 뒤 필지·센서스 레이어와 함께 디지털화했습니다.",
        },
        method: {
          workflow: "트랜섹트를 걸으며 기록하고, 관찰 자료를 ArcGIS에서 디지털화했습니다.",
          model: "필지·센서스 데이터와의 층위적 공간 비교.",
          assumptions: "하나의 트랜섹트가 더 넓은 지구 전환을 대표한다고 가정.",
        },
        findings: [
          "계획과 실제 건조 환경의 어긋남은 지구의 경계에서 가장 뚜렷했습니다.",
          "이동성과 공공 공간의 질은 용도 분류보다 빠르게 변했습니다.",
          "전환부의 작은 부지가 큰 개입 기회를 제공합니다.",
        ],
        metrics: [
          { label: "방법", value: "트랜섹트" },
          { label: "도구", value: "ArcGIS" },
          { label: "방식", value: "도보" },
          { label: "결과물", value: "공간 서사" },
        ],
        impact: {
          decision: "작은 개입이 가장 큰 효과를 내는 경계 지점을 계획가에게 알려줍니다.",
          changed: "현장 관찰과 필지 단위 데이터를 하나의 서사로 연결했습니다.",
          next: "추가 트랜섹트에서 반복해 일반성을 검증할 계획입니다.",
        },
      },
      gallery: [
        { name: "project04_arcgis_map", hint: "ArcGIS 트랜섹트 맵", ratio: "4:3" },
        { name: "project04_field_photo_grid", hint: "현장 사진 그리드", ratio: "square" },
        { name: "project04_annotated_map", hint: "주석 달린 관찰 지도", ratio: "16:9" },
        { name: "project04_pattern_diagram", hint: "도시 패턴 다이어그램", ratio: "16:9" },
      ],
    },
  },
];
