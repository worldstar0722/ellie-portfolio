// Central project data: homepage cards + full case study pages
// (/work/<slug>). Visual assets live in public/images/<name>.jpg and
// render as labeled placeholders until uploaded.
export const projects = [
  {
    slug: "super-bowl-advertising-analytics",
    number: "01",
    tools: ["Python", "Twitter/X API", "Tableau", "NLP", "Data Visualization"],
    cover: { name: "project01_cover", hint: "cover image", ratio: "16:9" },
    links: { github: "https://github.com/worldstar0722" },
    en: {
      title: "Super Bowl Advertising Analytics",
      subtitle: "Measuring what a $7M spot actually earns on social media.",
      role: "First Author · Researcher · Data Analyst",
      projectType: "Marketing Analytics · Research · Social Media Analytics",
      timeline: "Timeline to be added",
      outcome:
        "Found that high visibility does not necessarily equal positive audience reception.",
      proofPoints: [
        "64,230 tweets",
        "59 Super Bowl LX brands",
        "6-metric Winning Score Model",
        "R² < 0.05 vs. Ad Meter rankings",
      ],
      snapshot: [
        { label: "Role", value: "First Author" },
        { label: "Dataset", value: "64,230 tweets · 59 brands" },
        { label: "Output", value: "Winning Score Model + dashboard" },
        { label: "Key result", value: "R² < 0.05 vs. Ad Meter" },
        { label: "Status", value: "Research completed · visuals to be uploaded" },
      ],
      overview:
        "This project analyzed how Super Bowl brands performed on social media and whether online visibility aligned with audience reception. I built a multidimensional framework using tweet volume, engagement, sentiment, and brand-level metrics. The project compared social-media performance against Ad Meter rankings to test whether popular ads were also positively received.",
      problem:
        "Super Bowl advertising is expensive, but attention alone does not prove effectiveness. The project asked whether high-visibility ads also generated positive audience response, and how brands could be compared beyond simple viewership or engagement counts. The answer matters to brand and marketing teams deciding how to evaluate — and justify — a $7M media buy.",
      data: {
        dataset: "64,230 tweets from 59 Super Bowl LX brands.",
        source: "Final data source links and collection notes will be added later.",
        cleaning:
          "Data cleaning and metric engineering transformed raw social-media activity into comparable brand-level indicators.",
        limitations:
          "Tweet-level sentiment approximates, but does not fully represent, broader audience reception.",
      },
      methodSteps: [
        "Defined the advertising performance question",
        "Collected brand-related Twitter/X data",
        "Cleaned and structured tweet-level data",
        "Engineered six performance metrics",
        "Built a composite Winning Score Model",
        "Compared results with Ad Meter rankings",
      ],
      findings: [
        "High visibility did not reliably predict positive audience reception.",
        "The Winning Score Model captured multiple dimensions of brand performance.",
        "The weak relationship with Ad Meter rankings suggested that social buzz and traditional audience ratings measure different outcomes.",
      ],
      metrics: [
        { label: "Tweets analyzed", value: "64,230" },
        { label: "Brands scored", value: "59" },
        { label: "Composite metrics", value: "6" },
        { label: "R² vs. Ad Meter", value: "< 0.05" },
      ],
      charts: [
        {
          name: "project01_sentiment_distribution",
          hint: "sentiment distribution chart",
          ratio: "16:9",
          note: "How sentiment split across brands — volume leaders often skewed negative.",
        },
        {
          name: "project01_ad_meter_comparison",
          hint: "Ad Meter comparison chart",
          ratio: "16:9",
          note: "Winning Score vs. Ad Meter rank — the near-zero correlation in one view.",
        },
      ],
      impact:
        "The project helps marketers evaluate advertising performance beyond exposure. It supports better post-campaign analysis by separating visibility, sentiment, engagement, and audience reception.",
      reflection: {
        learned:
          "Composite metrics are only as credible as their weakest component — metric design deserved as much rigor as modeling.",
        improve:
          "Add engagement-weighted sentiment and validate the score against multi-year data.",
        expand:
          "Generalize the framework to other high-visibility campaigns beyond the Super Bowl.",
      },
      gallery: [
        { name: "project01_cover", hint: "cover image", ratio: "16:9" },
        { name: "project01_dashboard", hint: "Tableau dashboard screenshot", ratio: "16:9" },
        { name: "project01_sentiment_distribution", hint: "sentiment distribution chart", ratio: "16:9" },
        { name: "project01_brand_ranking_chart", hint: "brand ranking comparison chart", ratio: "16:9" },
        { name: "project01_winning_score_model_diagram", hint: "methodology diagram", ratio: "4:3" },
        { name: "project01_ad_meter_comparison", hint: "Ad Meter comparison chart", ratio: "16:9" },
      ],
    },
    ko: {
      title: "슈퍼볼 광고 애널리틱스",
      subtitle: "700만 달러짜리 광고가 소셜에서 실제로 얻는 것을 측정합니다.",
      role: "제1저자 · 연구원 · 데이터 애널리스트",
      projectType: "마케팅 애널리틱스 · 연구 · 소셜미디어 분석",
      timeline: "기간: 추후 기재",
      outcome: "높은 노출이 긍정적 반응을 보장하지 않는다는 것을 확인했습니다.",
      proofPoints: [
        "트윗 64,230건",
        "슈퍼볼 LX 브랜드 59개",
        "6개 지표의 Winning Score 모델",
        "Ad Meter 순위 대비 R² < 0.05",
      ],
      snapshot: [
        { label: "역할", value: "제1저자" },
        { label: "데이터셋", value: "트윗 64,230건 · 브랜드 59개" },
        { label: "결과물", value: "Winning Score 모델 + 대시보드" },
        { label: "핵심 결과", value: "Ad Meter 대비 R² < 0.05" },
        { label: "상태", value: "연구 완료 · 비주얼 업로드 예정" },
      ],
      overview:
        "슈퍼볼 브랜드들이 소셜미디어에서 어떤 성과를 냈는지, 온라인 노출이 실제 반응과 일치하는지 분석한 프로젝트입니다. 트윗 볼륨, 참여, 감성, 브랜드 지표를 결합한 다차원 프레임워크를 만들고, 소셜 성과를 Ad Meter 순위와 비교해 인기 있는 광고가 정말 좋게 받아들여졌는지 검증했습니다.",
      problem:
        "슈퍼볼 광고는 비싸지만, 주목받는 것만으로 효과가 증명되지는 않습니다. 노출이 큰 광고가 긍정적인 반응도 얻었는지, 단순 조회수나 참여 수치를 넘어 브랜드를 어떻게 비교할 수 있는지를 물었습니다. 700만 달러의 미디어 집행을 평가하고 정당화해야 하는 브랜드·마케팅 팀에게 필요한 답입니다.",
      data: {
        dataset: "슈퍼볼 LX 59개 브랜드의 트윗 64,230건.",
        source: "최종 데이터 출처와 수집 노트는 추후 추가됩니다.",
        cleaning:
          "데이터 정제와 지표 설계를 통해 원시 소셜 활동을 비교 가능한 브랜드 지표로 변환했습니다.",
        limitations:
          "트윗 단위 감성은 전체 시청자 반응을 근사할 뿐, 완전히 대표하지는 않습니다.",
      },
      methodSteps: [
        "광고 성과 질문 정의",
        "브랜드 관련 Twitter/X 데이터 수집",
        "트윗 단위 데이터 정제·구조화",
        "6개 성과 지표 설계",
        "복합 Winning Score 모델 구축",
        "Ad Meter 순위와 결과 비교",
      ],
      findings: [
        "높은 노출은 긍정적 반응을 안정적으로 예측하지 못했습니다.",
        "Winning Score 모델은 브랜드 성과의 여러 차원을 포착했습니다.",
        "Ad Meter 순위와의 약한 상관은 소셜 버즈와 전통적 시청자 평가가 서로 다른 것을 측정함을 시사합니다.",
      ],
      metrics: [
        { label: "분석한 트윗", value: "64,230" },
        { label: "스코어링한 브랜드", value: "59" },
        { label: "복합 지표", value: "6" },
        { label: "Ad Meter 대비 R²", value: "< 0.05" },
      ],
      charts: [
        {
          name: "project01_sentiment_distribution",
          hint: "감성 분포 차트",
          ratio: "16:9",
          note: "브랜드별 감성 분포 — 볼륨 상위 브랜드가 오히려 부정적으로 기우는 경향.",
        },
        {
          name: "project01_ad_meter_comparison",
          hint: "Ad Meter 비교 차트",
          ratio: "16:9",
          note: "Winning Score 대 Ad Meter 순위 — 0에 가까운 상관을 한눈에.",
        },
      ],
      impact:
        "노출을 넘어 광고 성과를 평가하도록 돕는 프로젝트입니다. 가시성, 감성, 참여, 반응을 분리해 캠페인 사후 분석의 질을 높입니다.",
      reflection: {
        learned:
          "복합 지표의 신뢰도는 가장 약한 구성 요소가 결정합니다 — 지표 설계에 모델링만큼의 엄밀함이 필요했습니다.",
        improve: "참여 가중 감성을 더하고 다년도 데이터로 점수를 검증하고 싶습니다.",
        expand: "슈퍼볼을 넘어 고노출 캠페인 전반으로 프레임워크를 일반화할 수 있습니다.",
      },
      gallery: [
        { name: "project01_cover", hint: "커버 이미지", ratio: "16:9" },
        { name: "project01_dashboard", hint: "Tableau 대시보드 스크린샷", ratio: "16:9" },
        { name: "project01_sentiment_distribution", hint: "감성 분포 차트", ratio: "16:9" },
        { name: "project01_brand_ranking_chart", hint: "브랜드 순위 비교 차트", ratio: "16:9" },
        { name: "project01_winning_score_model_diagram", hint: "방법론 다이어그램", ratio: "4:3" },
        { name: "project01_ad_meter_comparison", hint: "Ad Meter 비교 차트", ratio: "16:9" },
      ],
    },
  },
  {
    slug: "stock-price-prediction-finbert",
    number: "02",
    tools: ["Python", "FinBERT", "scikit-learn", "Random Forest", "LightGBM", "XGBoost"],
    cover: { name: "project02_cover", hint: "cover image", ratio: "16:9" },
    links: { github: "https://github.com/worldstar0722" },
    en: {
      title: "Stock Price Prediction with FinBERT",
      subtitle: "Does investor sentiment add signal beyond price history?",
      role: "Co-Author · ML Researcher · Data Analyst",
      projectType: "Financial Analytics · Machine Learning · NLP",
      timeline: "Timeline to be added",
      outcome: "Sentiment features improved accuracy and reduced false positives.",
      proofPoints: [
        "FinBERT sentiment features",
        "S&P 500 market data",
        "Random Forest / LightGBM / XGBoost comparison",
        "Reduced false positives",
      ],
      snapshot: [
        { label: "Role", value: "Co-Author" },
        { label: "Data", value: "S&P 500 + sentiment features" },
        { label: "Output", value: "Model comparison" },
        { label: "Models", value: "Random Forest · LightGBM · XGBoost" },
        { label: "Status", value: "Research completed · visuals to be uploaded" },
      ],
      overview:
        "This project tested whether investor sentiment can improve stock movement prediction beyond historical market data. FinBERT was used to extract financial sentiment features, which were combined with market variables and evaluated across multiple machine learning models.",
      problem:
        "Market price history may not capture investor expectations reflected in financial text. The project asked whether sentiment features could add predictive signal and improve classification performance — a question that matters to anyone building quantitative screening pipelines, and to the broader debate about weak-form market efficiency.",
      data: {
        dataset: "Historical S&P 500 market data combined with FinBERT-based sentiment features.",
        source: "Detailed source links, feature definitions, and preprocessing notes will be added later.",
        cleaning:
          "Sentiment scores were aligned to trading days and merged with market variables before model training.",
        limitations:
          "Results are specific to this setting; daily-granularity sentiment may smooth over intraday signals.",
      },
      methodSteps: [
        "Defined the prediction question",
        "Prepared market data",
        "Generated FinBERT sentiment features",
        "Combined sentiment and market features",
        "Trained Random Forest, LightGBM, and XGBoost models",
        "Compared model performance and false positives",
      ],
      findings: [
        "Sentiment features improved model accuracy.",
        "Sentiment features reduced false positives.",
        "Results suggested that financial text can add signal beyond price history in this setting.",
      ],
      metrics: [
        { label: "Models compared", value: "3" },
        { label: "Index covered", value: "S&P 500" },
        { label: "Sentiment engine", value: "FinBERT" },
        { label: "False positives", value: "Reduced" },
      ],
      charts: [
        {
          name: "project02_model_comparison",
          hint: "model comparison table/chart",
          ratio: "16:9",
          note: "Accuracy with and without sentiment, across all three models.",
        },
        {
          name: "project02_confusion_matrix",
          hint: "confusion matrix",
          ratio: "4:3",
          note: "Where false positives fell once sentiment features were added.",
        },
      ],
      impact:
        "The project supports financial decision-making by testing whether text-based sentiment can strengthen predictive modeling. It also connects machine learning results to a broader question about market efficiency.",
      reflection: {
        learned:
          "Feature provenance mattered more than model choice — the interesting variance came from the information, not the algorithm.",
        improve: "Test intraday granularity and alternative financial-text sources.",
        expand: "Extend to sector-level indices and event-window analysis.",
      },
      gallery: [
        { name: "project02_cover", hint: "cover image", ratio: "16:9" },
        { name: "project02_model_pipeline", hint: "model pipeline diagram", ratio: "16:9" },
        { name: "project02_sentiment_over_time", hint: "sentiment-over-time chart", ratio: "16:9" },
        { name: "project02_feature_importance", hint: "feature importance chart", ratio: "16:9" },
        { name: "project02_model_comparison", hint: "model comparison table/chart", ratio: "16:9" },
        { name: "project02_confusion_matrix", hint: "confusion matrix", ratio: "4:3" },
      ],
    },
    ko: {
      title: "FinBERT 기반 주가 예측",
      subtitle: "투자자 심리는 가격 이력 너머의 신호를 줄 수 있을까?",
      role: "공동저자 · ML 연구원 · 데이터 애널리스트",
      projectType: "금융 애널리틱스 · 머신러닝 · NLP",
      timeline: "기간: 추후 기재",
      outcome: "감성 피처가 정확도를 높이고 오탐을 줄였습니다.",
      proofPoints: [
        "FinBERT 감성 피처",
        "S&P 500 시장 데이터",
        "Random Forest / LightGBM / XGBoost 비교",
        "오탐 감소",
      ],
      snapshot: [
        { label: "역할", value: "공동저자" },
        { label: "데이터", value: "S&P 500 + 감성 피처" },
        { label: "결과물", value: "모델 비교" },
        { label: "모델", value: "Random Forest · LightGBM · XGBoost" },
        { label: "상태", value: "연구 완료 · 비주얼 업로드 예정" },
      ],
      overview:
        "투자자 심리가 과거 시장 데이터를 넘어 주가 변동 예측을 개선할 수 있는지 검증한 프로젝트입니다. FinBERT로 금융 감성 피처를 추출해 시장 변수와 결합하고, 여러 머신러닝 모델에서 평가했습니다.",
      problem:
        "가격 이력은 금융 텍스트에 반영된 투자자 기대를 담지 못할 수 있습니다. 감성 피처가 예측 신호를 더하고 분류 성능을 개선하는지를 물었습니다 — 퀀트 스크리닝 파이프라인을 만드는 사람들과 약형 시장 효율성 논쟁 모두에 중요한 질문입니다.",
      data: {
        dataset: "FinBERT 기반 감성 피처와 결합한 S&P 500 과거 시장 데이터.",
        source: "상세 출처, 피처 정의, 전처리 노트는 추후 추가됩니다.",
        cleaning: "감성 점수를 거래일에 정렬하고 시장 변수와 병합한 뒤 모델을 학습했습니다.",
        limitations:
          "결과는 이 설정에 한정되며, 일 단위 감성은 일중 신호를 평탄화할 수 있습니다.",
      },
      methodSteps: [
        "예측 질문 정의",
        "시장 데이터 준비",
        "FinBERT 감성 피처 생성",
        "감성·시장 피처 결합",
        "Random Forest, LightGBM, XGBoost 학습",
        "모델 성능과 오탐 비교",
      ],
      findings: [
        "감성 피처는 모델 정확도를 높였습니다.",
        "감성 피처는 오탐을 줄였습니다.",
        "이 설정에서 금융 텍스트가 가격 이력 너머의 신호를 더할 수 있음을 시사합니다.",
      ],
      metrics: [
        { label: "비교한 모델", value: "3" },
        { label: "대상 지수", value: "S&P 500" },
        { label: "감성 엔진", value: "FinBERT" },
        { label: "오탐", value: "감소" },
      ],
      charts: [
        {
          name: "project02_model_comparison",
          hint: "모델 비교 표/차트",
          ratio: "16:9",
          note: "감성 포함 여부에 따른 세 모델의 정확도 비교.",
        },
        {
          name: "project02_confusion_matrix",
          hint: "혼동 행렬",
          ratio: "4:3",
          note: "감성 피처 추가 후 오탐이 어디서 줄었는지.",
        },
      ],
      impact:
        "텍스트 기반 감성이 예측 모델링을 강화할 수 있는지 검증해 금융 의사결정을 뒷받침합니다. 머신러닝 결과를 시장 효율성이라는 더 큰 질문과도 연결합니다.",
      reflection: {
        learned:
          "모델 선택보다 피처의 출처가 중요했습니다 — 의미 있는 차이는 알고리즘이 아니라 정보에서 나왔습니다.",
        improve: "일중 단위와 대안 금융 텍스트 소스를 테스트하고 싶습니다.",
        expand: "섹터 지수와 이벤트 윈도 분석으로 확장할 수 있습니다.",
      },
      gallery: [
        { name: "project02_cover", hint: "커버 이미지", ratio: "16:9" },
        { name: "project02_model_pipeline", hint: "모델 파이프라인 다이어그램", ratio: "16:9" },
        { name: "project02_sentiment_over_time", hint: "시간에 따른 감성 차트", ratio: "16:9" },
        { name: "project02_feature_importance", hint: "피처 중요도 차트", ratio: "16:9" },
        { name: "project02_model_comparison", hint: "모델 비교 표/차트", ratio: "16:9" },
        { name: "project02_confusion_matrix", hint: "혼동 행렬", ratio: "4:3" },
      ],
    },
  },
  {
    slug: "slc-civic-center-healthy-urban-planning",
    number: "03",
    tools: ["HPI", "Equity Analysis", "ArcGIS", "Urban Planning"],
    cover: { name: "project03_cover", hint: "cover image", ratio: "16:9" },
    links: {},
    en: {
      title: "SLC Civic Center Healthy Urban Planning",
      subtitle: "Applying health-first planning to a downtown civic block.",
      role: "Urban Planning Analyst · Researcher",
      projectType: "Urban Analytics · Planning · Spatial Analysis",
      timeline: "Timeline to be added",
      outcome:
        "Translated health-first planning observations into clearer urban design recommendations.",
      proofPoints: [
        "Health-first planning framework",
        "Equity-focused site analysis",
        "Downtown civic block recommendations",
      ],
      snapshot: [
        { label: "Role", value: "Urban Planning Analyst" },
        { label: "Framework", value: "HPI" },
        { label: "Tools", value: "ArcGIS · equity analysis" },
        { label: "Output", value: "Planning recommendation board" },
        { label: "Status", value: "Visuals to be uploaded" },
      ],
      overview:
        "This project applied a health-first planning lens to a downtown civic block in Salt Lake City. The analysis considered access, equity, public life, and spatial conditions to identify opportunities for healthier and more inclusive urban design.",
      problem:
        "Civic spaces should be evaluated not only by land use, but also by health, equity, accessibility, and public-life outcomes. This project asked how a downtown civic block could better support people through planning and design — an answer relevant to planners, city agencies, and the communities the block serves.",
      data: {
        dataset: "Planning observations, site context, and equity considerations.",
        source: "Final map exports and planning visuals will be uploaded later.",
        cleaning: "Site observations were structured into scorable criteria and organized with ArcGIS-based spatial analysis.",
        limitations: "District-scale conclusions rest on framework indicators and observational data.",
      },
      methodSteps: [
        "Defined the planning question",
        "Studied the downtown civic site context",
        "Applied a health-first planning framework",
        "Evaluated access and equity factors",
        "Organized spatial findings in ArcGIS",
        "Translated findings into recommendations",
      ],
      findings: [
        "The site could be evaluated through health and equity, not only physical form.",
        "Spatial analysis helped clarify access and public-life patterns.",
        "Planning recommendations connected site observations to healthier urban design outcomes.",
      ],
      metrics: [
        { label: "Framework", value: "HPI" },
        { label: "Lens", value: "Equity" },
        { label: "Scale", value: "Civic block" },
        { label: "Output", value: "Recommendations" },
      ],
      charts: [
        {
          name: "project03_equity_analysis",
          hint: "equity analysis diagram",
          ratio: "16:9",
          note: "Who the block currently serves — and where access falls short.",
        },
        {
          name: "project03_recommendation_board",
          hint: "planning board",
          ratio: "16:9",
          note: "The recommendation set, from traffic calming to green-space programming.",
        },
      ],
      impact:
        "The project supports urban planning decisions by connecting health, equity, and spatial design. It shows how analytical frameworks can improve civic-space recommendations.",
      reflection: {
        learned:
          "Framework indicators only persuade when tied to observable site conditions — the walk mattered as much as the index.",
        improve: "Quantify recommendations with before/after HPI scenario scoring.",
        expand: "Apply the same health-first lens to other civic districts.",
      },
      gallery: [
        { name: "project03_cover", hint: "cover image", ratio: "16:9" },
        { name: "project03_site_map", hint: "ArcGIS site map export", ratio: "4:3" },
        { name: "project03_equity_analysis", hint: "equity analysis diagram", ratio: "16:9" },
        { name: "project03_health_planning_framework", hint: "HPI framework diagram", ratio: "16:9" },
        { name: "project03_recommendation_board", hint: "planning board", ratio: "16:9" },
        { name: "project03_before_after_concept", hint: "before/after spatial concept", ratio: "16:9" },
      ],
    },
    ko: {
      title: "SLC 시빅센터 건강 도시계획",
      subtitle: "도심 시빅 블록에 건강 우선 계획을 적용합니다.",
      role: "도시계획 애널리스트 · 연구원",
      projectType: "어반 애널리틱스 · 계획 · 공간 분석",
      timeline: "기간: 추후 기재",
      outcome: "건강 우선 관찰을 더 명확한 도시 설계 권고안으로 옮겼습니다.",
      proofPoints: ["건강 우선 계획 프레임워크", "형평성 중심 현장 분석", "도심 시빅 블록 권고안"],
      snapshot: [
        { label: "역할", value: "도시계획 애널리스트" },
        { label: "프레임워크", value: "HPI" },
        { label: "도구", value: "ArcGIS · 형평성 분석" },
        { label: "결과물", value: "계획 권고 보드" },
        { label: "상태", value: "비주얼 업로드 예정" },
      ],
      overview:
        "솔트레이크시티 도심의 시빅 블록에 건강 우선 계획의 관점을 적용한 프로젝트입니다. 접근성, 형평성, 공공생활, 공간 조건을 함께 살펴 더 건강하고 포용적인 도시 설계의 기회를 찾았습니다.",
      problem:
        "시빅 공간은 토지 이용만이 아니라 건강, 형평성, 접근성, 공공생활의 결과로 평가되어야 합니다. 도심 시빅 블록이 계획과 설계를 통해 사람들을 어떻게 더 잘 지원할 수 있는지를 물었습니다 — 계획가, 시 기관, 그리고 이 블록을 쓰는 커뮤니티 모두에게 필요한 답입니다.",
      data: {
        dataset: "계획 관찰, 부지 맥락, 형평성 요소.",
        source: "최종 지도와 계획 비주얼은 추후 업로드됩니다.",
        cleaning: "현장 관찰을 평가 가능한 기준으로 구조화하고 ArcGIS 공간 분석으로 정리했습니다.",
        limitations: "지구 스케일 결론은 프레임워크 지표와 관찰 데이터에 기반합니다.",
      },
      methodSteps: [
        "계획 질문 정의",
        "도심 시빅 부지 맥락 조사",
        "건강 우선 계획 프레임워크 적용",
        "접근성·형평성 요인 평가",
        "ArcGIS로 공간 발견 정리",
        "발견을 권고안으로 전환",
      ],
      findings: [
        "부지는 물리적 형태만이 아니라 건강과 형평성으로 평가될 수 있었습니다.",
        "공간 분석이 접근성과 공공생활 패턴을 명확히 했습니다.",
        "권고안은 현장 관찰을 더 건강한 도시 설계 결과와 연결했습니다.",
      ],
      metrics: [
        { label: "프레임워크", value: "HPI" },
        { label: "관점", value: "형평성" },
        { label: "스케일", value: "시빅 블록" },
        { label: "결과물", value: "권고안" },
      ],
      charts: [
        {
          name: "project03_equity_analysis",
          hint: "형평성 분석 다이어그램",
          ratio: "16:9",
          note: "이 블록이 지금 누구를 위하는지 — 접근성이 부족한 지점은 어디인지.",
        },
        {
          name: "project03_recommendation_board",
          hint: "계획 보드",
          ratio: "16:9",
          note: "교통정온화부터 녹지 프로그램까지, 권고안 전체.",
        },
      ],
      impact:
        "건강, 형평성, 공간 설계를 연결해 도시계획 의사결정을 뒷받침합니다. 분석 프레임워크가 시빅 공간 권고안의 질을 어떻게 높이는지 보여줍니다.",
      reflection: {
        learned:
          "프레임워크 지표는 눈에 보이는 현장 조건과 연결될 때만 설득력을 가집니다 — 걷는 일이 지수만큼 중요했습니다.",
        improve: "전후 HPI 시나리오 스코어링으로 권고안을 정량화하고 싶습니다.",
        expand: "같은 건강 우선 관점을 다른 시빅 지구에도 적용할 수 있습니다.",
      },
      gallery: [
        { name: "project03_cover", hint: "커버 이미지", ratio: "16:9" },
        { name: "project03_site_map", hint: "ArcGIS 사이트 맵", ratio: "4:3" },
        { name: "project03_equity_analysis", hint: "형평성 분석 다이어그램", ratio: "16:9" },
        { name: "project03_health_planning_framework", hint: "HPI 프레임워크 다이어그램", ratio: "16:9" },
        { name: "project03_recommendation_board", hint: "계획 보드", ratio: "16:9" },
        { name: "project03_before_after_concept", hint: "전후 공간 콘셉트", ratio: "16:9" },
      ],
    },
  },
  {
    slug: "urban-transect-field-study",
    number: "04",
    tools: ["ArcGIS", "Fieldwork", "Urban Observation", "Spatial Analysis"],
    cover: { name: "project04_cover", hint: "cover image", ratio: "16:9" },
    links: {},
    en: {
      title: "Urban Transect Field Study",
      subtitle: "Reading a city section by section, on foot and in ArcGIS.",
      role: "Field Researcher · Spatial Analyst",
      projectType: "Urban Analytics · Field Research · Spatial Analysis",
      timeline: "Timeline to be added",
      outcome:
        "Built a clearer understanding of how land use, mobility, density, and public space shift across the city.",
      proofPoints: [
        "Transect-based observation",
        "Spatial pattern documentation",
        "Urban form analysis",
      ],
      snapshot: [
        { label: "Role", value: "Field Researcher" },
        { label: "Tools", value: "ArcGIS · field observation" },
        { label: "Output", value: "Transect map + observation analysis" },
        { label: "Method", value: "On-foot transect" },
        { label: "Status", value: "Visuals to be uploaded" },
      ],
      overview:
        "This project studied urban change through a transect-based field observation method. By combining on-foot observation with ArcGIS mapping, the project documented how urban form, mobility, land use, and public space shift across different sections of the city.",
      problem:
        "Urban transitions are often gradual and difficult to understand through data alone. This project asked how field observation and spatial mapping could reveal patterns across a city transect — patterns useful to planners deciding where small interventions matter most.",
      data: {
        dataset: "Field observations, site notes, and photos gathered along the transect.",
        source: "Final map exports, field photo grids, and annotated diagrams will be uploaded later.",
        cleaning: "Observations were standardized into categories and digitized for ArcGIS mapping.",
        limitations: "A single transect approximates, but cannot fully represent, citywide transitions.",
      },
      methodSteps: [
        "Defined the transect study question",
        "Conducted on-foot field observation",
        "Documented land use and mobility patterns",
        "Organized spatial observations in ArcGIS",
        "Compared patterns across sections",
        "Summarized urban form findings",
      ],
      findings: [
        "Fieldwork revealed spatial transitions that would be hard to see from data alone.",
        "ArcGIS mapping helped organize and compare observations.",
        "The transect method clarified changes in land use, density, movement, and public space.",
      ],
      metrics: [
        { label: "Method", value: "Transect" },
        { label: "Tooling", value: "ArcGIS" },
        { label: "Mode", value: "On foot" },
        { label: "Output", value: "Spatial narrative" },
      ],
      charts: [
        {
          name: "project04_transect_diagram",
          hint: "transect diagram",
          ratio: "16:9",
          note: "The full section — how form and use change along the route.",
        },
        {
          name: "project04_annotated_observation_map",
          hint: "annotated observation map",
          ratio: "16:9",
          note: "Field notes pinned to place: where transitions actually happen.",
        },
      ],
      impact:
        "The project supports urban analysis by combining human observation with spatial tools. It demonstrates how field research and mapping can produce clearer planning insights.",
      reflection: {
        learned:
          "Walking the line surfaced transitions no dataset flagged — observation is a data source, not a supplement.",
        improve: "Standardize the observation protocol for repeatability.",
        expand: "Repeat across additional transects to test how general the patterns are.",
      },
      gallery: [
        { name: "project04_cover", hint: "cover image", ratio: "16:9" },
        { name: "project04_arcgis_map", hint: "ArcGIS map export", ratio: "4:3" },
        { name: "project04_transect_diagram", hint: "transect diagram", ratio: "16:9" },
        { name: "project04_field_photo_grid", hint: "field photo grid", ratio: "4:3" },
        { name: "project04_annotated_observation_map", hint: "annotated observation map", ratio: "16:9" },
        { name: "project04_urban_pattern_diagram", hint: "urban pattern diagram", ratio: "16:9" },
      ],
    },
    ko: {
      title: "도시 트랜섹트 현장 연구",
      subtitle: "걸어서, 그리고 ArcGIS로 도시를 단면별로 읽습니다.",
      role: "현장 연구원 · 공간 분석가",
      projectType: "어반 애널리틱스 · 현장 연구 · 공간 분석",
      timeline: "기간: 추후 기재",
      outcome:
        "토지 이용, 이동성, 밀도, 공공 공간이 도시를 가로지르며 어떻게 변하는지 명확하게 파악했습니다.",
      proofPoints: ["트랜섹트 기반 관찰", "공간 패턴 기록", "도시 형태 분석"],
      snapshot: [
        { label: "역할", value: "현장 연구원" },
        { label: "도구", value: "ArcGIS · 현장 관찰" },
        { label: "결과물", value: "트랜섹트 맵 + 관찰 분석" },
        { label: "방법", value: "도보 트랜섹트" },
        { label: "상태", value: "비주얼 업로드 예정" },
      ],
      overview:
        "트랜섹트 기반 현장 관찰로 도시의 변화를 연구한 프로젝트입니다. 도보 관찰과 ArcGIS 매핑을 결합해 도시 형태, 이동성, 토지 이용, 공공 공간이 도시의 구간마다 어떻게 달라지는지 기록했습니다.",
      problem:
        "도시의 전환은 점진적이어서 데이터만으로 이해하기 어렵습니다. 현장 관찰과 공간 매핑이 트랜섹트를 따라 어떤 패턴을 드러낼 수 있는지를 물었습니다 — 작은 개입이 가장 큰 효과를 낼 지점을 정해야 하는 계획가에게 유용한 패턴입니다.",
      data: {
        dataset: "트랜섹트를 따라 수집한 현장 관찰, 노트, 사진.",
        source: "최종 지도, 현장 사진 그리드, 주석 다이어그램은 추후 업로드됩니다.",
        cleaning: "관찰을 범주로 표준화하고 ArcGIS 매핑을 위해 디지털화했습니다.",
        limitations: "하나의 트랜섹트는 도시 전체의 전환을 근사할 뿐 완전히 대표하지 않습니다.",
      },
      methodSteps: [
        "트랜섹트 연구 질문 정의",
        "도보 현장 관찰 수행",
        "토지 이용·이동성 패턴 기록",
        "ArcGIS로 공간 관찰 정리",
        "구간별 패턴 비교",
        "도시 형태 발견 요약",
      ],
      findings: [
        "현장 연구는 데이터만으로 보기 어려운 공간 전환을 드러냈습니다.",
        "ArcGIS 매핑이 관찰의 정리와 비교를 도왔습니다.",
        "트랜섹트 방법이 토지 이용, 밀도, 이동, 공공 공간의 변화를 명확히 했습니다.",
      ],
      metrics: [
        { label: "방법", value: "트랜섹트" },
        { label: "도구", value: "ArcGIS" },
        { label: "방식", value: "도보" },
        { label: "결과물", value: "공간 서사" },
      ],
      charts: [
        {
          name: "project04_transect_diagram",
          hint: "트랜섹트 다이어그램",
          ratio: "16:9",
          note: "전체 단면 — 경로를 따라 형태와 용도가 어떻게 변하는지.",
        },
        {
          name: "project04_annotated_observation_map",
          hint: "주석 달린 관찰 지도",
          ratio: "16:9",
          note: "장소에 고정된 현장 노트: 전환이 실제로 일어나는 곳.",
        },
      ],
      impact:
        "사람의 관찰과 공간 도구를 결합해 도시 분석을 뒷받침합니다. 현장 연구와 매핑이 어떻게 더 명확한 계획 인사이트를 만드는지 보여줍니다.",
      reflection: {
        learned:
          "직접 걷자 어떤 데이터셋도 표시하지 않은 전환이 드러났습니다 — 관찰은 보조 자료가 아니라 데이터 소스입니다.",
        improve: "재현 가능하도록 관찰 프로토콜을 표준화하고 싶습니다.",
        expand: "추가 트랜섹트에서 반복해 패턴의 일반성을 검증할 수 있습니다.",
      },
      gallery: [
        { name: "project04_cover", hint: "커버 이미지", ratio: "16:9" },
        { name: "project04_arcgis_map", hint: "ArcGIS 맵", ratio: "4:3" },
        { name: "project04_transect_diagram", hint: "트랜섹트 다이어그램", ratio: "16:9" },
        { name: "project04_field_photo_grid", hint: "현장 사진 그리드", ratio: "4:3" },
        { name: "project04_annotated_observation_map", hint: "주석 달린 관찰 지도", ratio: "16:9" },
        { name: "project04_urban_pattern_diagram", hint: "도시 패턴 다이어그램", ratio: "16:9" },
      ],
    },
  },
];
