// Central project data: homepage cards + full case study pages
// (/work/<slug>). Visual assets live in public/images/<name>.jpg and
// render as labeled placeholders until uploaded.
export const projects = [
  {
    slug: "super-bowl-advertising-analytics",
    number: "01",
    researchBacked: true,
    tools: ["Python", "Twitter/X API", "Tableau", "NLP"],
    cover: { name: "project01_cover", file: "project01_cover.jpg", hint: "cover image", ratio: "4:3" },
    links: { github: "https://github.com/worldstar0722" },
    en: {
      title: "Super Bowl Advertising Analytics",
      category: "RESEARCH · MARKETING ANALYTICS · NLP",
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
      researchContext: {
        paper: "A Multidimensional Framework for Winning Super Bowl Advertising",
        credit: "First Author · Advisor: Chong Oh",
        text: "This project began as a research study on Super Bowl advertising performance. It tested whether social-media visibility aligned with audience reception by analyzing 64,230 tweets from 59 Super Bowl LX brands and comparing a 6-metric Winning Score Model against Ad Meter rankings.",
      },
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
          file: "PROJECT01_sentiment_breakdown.png",
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
        { name: "project01_cover", file: "project01_cover.jpg", hint: "cover image", ratio: "4:3" },
        { name: "project01_dashboard", hint: "Tableau dashboard screenshot", ratio: "16:9" },
        { name: "project01_sentiment_distribution", file: "PROJECT01_sentiment_breakdown.png", hint: "sentiment distribution chart", ratio: "16:9" },
        { name: "project01_brand_ranking_chart", hint: "brand ranking comparison chart", ratio: "16:9" },
        { name: "project01_winning_score_model_diagram", hint: "methodology diagram", ratio: "4:3" },
        { name: "project01_ad_meter_comparison", hint: "Ad Meter comparison chart", ratio: "16:9" },
        { name: "PROJECT01_tweet_volume_per_brand", file: "PROJECT01_tweet_volume_per_brand.png", hint: "tweet volume per brand", ratio: "16:9" },
        { name: "PROJECT01_engagement_vs_virality_matrix", file: "PROJECT01_engagement_vs_virality_matrix.png", hint: "engagement vs. virality matrix", ratio: "16:9" },
        { name: "PROJECT01_engagement_per_1M", file: "PROJECT01_engagement_per_1M.png", hint: "engagement per 1M impressions", ratio: "16:9" },
        { name: "PROJECT01_engagement_per_impression", file: "PROJECT01_engagement_per_impression.png", hint: "engagement per impression", ratio: "16:9" },
      ],
    },
    ko: {
      title: "슈퍼볼 광고 애널리틱스",
      category: "리서치 · 마케팅 애널리틱스 · NLP",
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
      researchContext: {
        paper: "슈퍼볼 광고의 성공을 측정하는 다차원 프레임워크",
        credit: "제1저자 · 지도교수 Chong Oh",
        text: "이 프로젝트는 슈퍼볼 광고 성과에 대한 연구에서 출발했습니다. 슈퍼볼 LX 59개 브랜드의 트윗 64,230건을 분석하고 6개 지표의 Winning Score 모델을 Ad Meter 순위와 비교해, 소셜미디어 노출이 실제 시청자 반응과 일치하는지 검증했습니다.",
      },
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
          file: "PROJECT01_sentiment_breakdown.png",
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
        { name: "project01_cover", file: "project01_cover.jpg", hint: "커버 이미지", ratio: "4:3" },
        { name: "project01_dashboard", hint: "Tableau 대시보드 스크린샷", ratio: "16:9" },
        { name: "project01_sentiment_distribution", file: "PROJECT01_sentiment_breakdown.png", hint: "감성 분포 차트", ratio: "16:9" },
        { name: "project01_brand_ranking_chart", hint: "브랜드 순위 비교 차트", ratio: "16:9" },
        { name: "project01_winning_score_model_diagram", hint: "방법론 다이어그램", ratio: "4:3" },
        { name: "project01_ad_meter_comparison", hint: "Ad Meter 비교 차트", ratio: "16:9" },
        { name: "PROJECT01_tweet_volume_per_brand", file: "PROJECT01_tweet_volume_per_brand.png", hint: "브랜드별 트윗 볼륨", ratio: "16:9" },
        { name: "PROJECT01_engagement_vs_virality_matrix", file: "PROJECT01_engagement_vs_virality_matrix.png", hint: "참여도 대 확산성 매트릭스", ratio: "16:9" },
        { name: "PROJECT01_engagement_per_1M", file: "PROJECT01_engagement_per_1M.png", hint: "100만 노출당 참여도", ratio: "16:9" },
        { name: "PROJECT01_engagement_per_impression", file: "PROJECT01_engagement_per_impression.png", hint: "노출당 참여도", ratio: "16:9" },
      ],
    },
  },
  {
    slug: "stock-price-prediction-finbert",
    number: "02",
    researchBacked: true,
    tools: ["Python", "FinBERT", "scikit-learn", "Random Forest", "LightGBM", "XGBoost"],
    cover: { name: "project02_cover", file: "project02_cover.jpg", hint: "cover image", ratio: "4:3" },
    links: { github: "https://github.com/worldstar0722" },
    en: {
      title: "Stock Price Prediction with FinBERT",
      category: "RESEARCH · FINANCIAL MACHINE LEARNING · NLP",
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
      researchContext: {
        paper: "Predicting Future Stock Price Movements Using Historical Market Data and Investor Sentiment",
        credit: "Co-Author · Mentors: Emre Ertan & Chong Oh",
        text: "This project tested whether FinBERT-based investor sentiment features improved stock movement prediction beyond historical S&P 500 market data. It compared Random Forest, LightGBM, and XGBoost models and evaluated whether sentiment features improved accuracy and reduced false positives.",
      },
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
          file: "PROJECT02_model_comparison.png",
          hint: "model comparison table/chart",
          ratio: "21:9",
          note: "Accuracy with and without sentiment, across all three models.",
        },
        {
          name: "project02_confusion_matrix",
          file: "PROJECT02_confusion_matrix.png",
          hint: "confusion matrix",
          ratio: "16:9",
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
        { name: "project02_cover", file: "project02_cover.jpg", hint: "cover image", ratio: "4:3" },
        { name: "project02_model_pipeline", hint: "model pipeline diagram", ratio: "16:9" },
        { name: "project02_sentiment_over_time", hint: "sentiment-over-time chart", ratio: "16:9" },
        { name: "project02_feature_importance", hint: "feature importance chart", ratio: "16:9" },
        { name: "project02_model_comparison", file: "PROJECT02_model_comparison.png", hint: "model comparison table/chart", ratio: "21:9" },
        { name: "project02_confusion_matrix", file: "PROJECT02_confusion_matrix.png", hint: "confusion matrix", ratio: "16:9" },
        { name: "PROJECT02_stock_price_trends", file: "PROJECT02_stock_price_trends.png", hint: "stock price trends", ratio: "16:9" },
        { name: "PROJECT02_predicted_probability_distribution", file: "PROJECT02_predicted_probability_distribution.png", hint: "predicted probability distribution", ratio: "16:9" },
      ],
    },
    ko: {
      title: "FinBERT 기반 주가 예측",
      category: "리서치 · 금융 머신러닝 · NLP",
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
      researchContext: {
        paper: "과거 시장 데이터와 투자자 심리를 활용한 주가 변동 예측",
        credit: "공동저자 · 멘토 Emre Ertan & Chong Oh",
        text: "FinBERT 기반 투자자 감성 피처가 S&P 500 과거 시장 데이터를 넘어 주가 변동 예측을 개선하는지 검증한 프로젝트입니다. Random Forest, LightGBM, XGBoost 모델을 비교하고, 감성 피처가 정확도를 높이고 오탐을 줄이는지 평가했습니다.",
      },
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
          file: "PROJECT02_model_comparison.png",
          hint: "모델 비교 표/차트",
          ratio: "21:9",
          note: "감성 포함 여부에 따른 세 모델의 정확도 비교.",
        },
        {
          name: "project02_confusion_matrix",
          file: "PROJECT02_confusion_matrix.png",
          hint: "혼동 행렬",
          ratio: "16:9",
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
        { name: "project02_cover", file: "project02_cover.jpg", hint: "커버 이미지", ratio: "4:3" },
        { name: "project02_model_pipeline", hint: "모델 파이프라인 다이어그램", ratio: "16:9" },
        { name: "project02_sentiment_over_time", hint: "시간에 따른 감성 차트", ratio: "16:9" },
        { name: "project02_feature_importance", hint: "피처 중요도 차트", ratio: "16:9" },
        { name: "project02_model_comparison", file: "PROJECT02_model_comparison.png", hint: "모델 비교 표/차트", ratio: "21:9" },
        { name: "project02_confusion_matrix", file: "PROJECT02_confusion_matrix.png", hint: "혼동 행렬", ratio: "16:9" },
        { name: "PROJECT02_stock_price_trends", file: "PROJECT02_stock_price_trends.png", hint: "주가 추이", ratio: "16:9" },
        { name: "PROJECT02_predicted_probability_distribution", file: "PROJECT02_predicted_probability_distribution.png", hint: "예측 확률 분포", ratio: "16:9" },
      ],
    },
  },
  {
    slug: "slc-civic-center-healthy-urban-planning",
    number: "03",
    tools: ["HPI", "Equity Analysis", "ArcGIS", "Urban Planning"],
    cover: { name: "project03_cover", file: "project03_cover.png", hint: "cover image", ratio: "21:9" },
    links: {},
    en: {
      title: "SLC Civic Center Healthy Urban Planning",
      category: "URBAN ANALYTICS · PLANNING",
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
        { name: "project03_cover", file: "project03_cover.png", hint: "cover image", ratio: "21:9" },
        { name: "project03_site_map", hint: "ArcGIS site map export", ratio: "4:3" },
        { name: "project03_equity_analysis", hint: "equity analysis diagram", ratio: "16:9" },
        { name: "project03_health_planning_framework", hint: "HPI framework diagram", ratio: "16:9" },
        { name: "project03_recommendation_board", hint: "planning board", ratio: "16:9" },
        { name: "project03_before_after_concept", hint: "before/after spatial concept", ratio: "16:9" },
      ],
    },
    ko: {
      title: "SLC 시빅센터 건강 도시계획",
      category: "어반 애널리틱스 · 도시계획",
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
        { name: "project03_cover", file: "project03_cover.png", hint: "커버 이미지", ratio: "21:9" },
        { name: "project03_site_map", hint: "ArcGIS 사이트 맵", ratio: "4:3" },
        { name: "project03_equity_analysis", hint: "형평성 분석 다이어그램", ratio: "16:9" },
        { name: "project03_health_planning_framework", hint: "HPI 프레임워크 다이어그램", ratio: "16:9" },
        { name: "project03_recommendation_board", hint: "계획 보드", ratio: "16:9" },
        { name: "project03_before_after_concept", hint: "전후 공간 콘셉트", ratio: "16:9" },
      ],
    },
  },
  {
    slug: "where-should-you-invest-slc",
    number: "04",
    tools: ["ArcGIS Pro", "Spatial Statistics", "Excel"],
    cover: {
      name: "project04_cover",
      file: "project04_cover.png",
      hint: "ArcGIS amenity access score map",
      ratio: "4:3",
    },
    links: {},
    docLinks: ["report", "presentation", "poster"],
    en: {
      title: "Where Should You Invest in Salt Lake City?",
      category: "URBAN ANALYTICS · GIS · PROPTECH",
      subtitle:
        "Scoring residential neighborhoods by walkable access to schools, parks, and TRAX light rail.",
      role: "Sole Researcher · GIS Analyst",
      projectType: "Urban Analytics · GIS · PropTech",
      timeline: "CMP 4450 — GIS for Urban Ecologists · Summer 2026",
      outcome:
        "Turned three separate amenity maps into one 0–3 access score that ranks every residential zone in the city.",
      proofPoints: [
        "2,711 residential zones",
        "3-amenity composite score",
        "713 zones at full access",
        "Transit is the bottleneck",
      ],
      snapshot: [
        { label: "Role", value: "Sole Researcher · GIS Analyst" },
        { label: "Tools", value: "ArcGIS Pro · Spatial Statistics · Excel" },
        { label: "Output", value: "0–3 composite access score map for 2,711 residential zones" },
        { label: "Method", value: "Buffer analysis + Select by Location overlay" },
        { label: "Status", value: "Completed · Summer 2026" },
      ],
      overview:
        "This project turns three separate amenity maps into one investment-screening layer for Salt Lake City. Using five public GIS datasets from Utah's open data portal, every residential zone in the city was scored 0–3 based on walkable access to schools, parks, and TRAX light rail stations. The result is a single map that a homebuyer, investor, or city planner can use to compare neighborhoods at a glance — without needing GIS skills.",
      problem:
        "Existing walkability studies map each amenity separately, making it hard to answer a simple question: which neighborhoods have everything within walking distance? This project asked how a combined access score could serve as a practical screening tool for housing investment — and what spatial patterns it would reveal across Salt Lake City.",
      data: {
        dataset:
          "Five public datasets from the Utah Geospatial Resource Center (UGRC) open data portal (opendata.gis.utah.gov): Utah Schools PreK–12 (points), Utah Local Parks (polygons), TRAX Light Rail Stations (points — Blue, Red, Green lines), Utah Municipal Boundaries (polygons), and SLC Zoning (polygons).",
        source:
          "All data from the official state GIS portal (UGRC). Zoning codes beginning with \"R\" defined the 2,711 residential analysis units.",
        cleaning:
          "Clipped all layers to the SLC municipal boundary. Selected residential zones using ZONING LIKE 'R%'. Created dissolved walking-distance buffers: 1 mile for schools, 0.5 mile for parks and TRAX stations.",
        limitations:
          "Straight-line buffers overstate walkability compared to real street networks (large grid blocks, I-15 barrier). No home-price data — the score is a proxy for value, not a real valuation. TRAX only (bus routes excluded); equal weights applied to all three amenities.",
      },
      methodSteps: [
        "Clipped all five UGRC datasets to the Salt Lake City municipal boundary",
        "Selected 2,711 residential zones using ZONING LIKE 'R%' and exported as analysis layer",
        "Created dissolved walking-distance buffers (1 mi schools · 0.5 mi parks · 0.5 mi TRAX)",
        "Used Select by Location (Intersect) + Calculate Field to score each zone per amenity (1 or 0)",
        "Calculated composite Score = Sch + Park + Trax (integer 0–3 per zone)",
        "Symbolized with graduated colors (gray → dark green) and exported Table to Excel for summary",
      ],
      findings: [
        "713 zones (26.3%) scored 3/3: walkable access to all three amenities — school, park, and TRAX.",
        "Transit is the bottleneck: 2,678 zones reach a school and 2,652 reach a park, but only 742 reach a TRAX station.",
        "Score-3 zones trace the TRAX corridor: Downtown, Central City, Liberty Wells, Ballpark, Sugar House.",
        "The west side gap is a transit gap, not an amenity gap — schools and parks are distributed citywide, rail is not.",
        "Score-2 zones adjacent to the TRAX line carry the highest upside potential if service expands.",
      ],
      metrics: [
        { label: "Residential zones", value: "2,711" },
        { label: "Full access (3/3)", value: "713" },
        { label: "Share at full access", value: "26.3%" },
        { label: "Zones reaching TRAX", value: "742" },
      ],
      charts: [],
      highlights: [
        {
          label: "INVESTMENT LENS",
          text: "Rail-served (score-3) zones signal stable long-term value. Score-2 zones next to TRAX carry the clearest upside if service expands.",
        },
        {
          label: "PLANNING LENS",
          text: "On the west side, extending transit — not adding schools or parks — is what would raise combined access most, with equity benefits for lower-income neighborhoods.",
        },
      ],
      impact:
        "The project demonstrates how a few standard GIS tools — clip, select, buffer, overlay — applied to free open data can produce a decision-ready map. The score works as a first investment-screening filter: it narrows down where to look without replacing the deeper due diligence on price, condition, and neighborhood context.",
      reflection: {
        learned:
          "Combining three amenity layers into one score made the spatial story instantly clearer. The transit bottleneck was not obvious from looking at each map separately — the combined score surfaced it immediately.",
        improve:
          "Replace straight-line buffers with a network-based walkability analysis using actual street geometry to account for SLC's large grid blocks and the I-15 barrier.",
        expand:
          "Join sales or assessor data to test whether score-3 zones actually command a price premium. Add weighted scoring and frequent-bus coverage for a more complete transit access picture.",
      },
      gallery: [
        { name: "project04_cover", file: "project04_cover.png", hint: "ArcGIS amenity access score map", ratio: "4:3" },
        { name: "project04_score_map", file: "PROJECT04_score_map.png", hint: "Map 3 amenity access scores export", ratio: "4:3" },
        { name: "project04_buffer_map", file: "PROJECT04_buffer_map.png", hint: "Map 2 walking buffer overlay", ratio: "4:3" },
        { name: "project04_amenity_map", file: "PROJECT04_amenity_map.png", hint: "Map 1 amenity distribution", ratio: "4:3" },
      ],
    },
    ko: {
      title: "솔트레이크시티, 어디에 투자해야 할까?",
      category: "어반 애널리틱스 · GIS · 프롭테크",
      subtitle:
        "학교, 공원, 트랙스(TRAX) 경전철까지 걸어갈 수 있는지로 주거 지역을 점수화했습니다.",
      role: "단독 연구자 · GIS 분석가",
      projectType: "어반 애널리틱스 · GIS · 프롭테크",
      timeline: "CMP 4450 — 도시생태학자를 위한 GIS · 2026년 여름",
      outcome:
        "따로 놀던 세 개의 인프라 지도를 하나의 0–3 접근성 점수로 합쳐, 도시의 모든 주거 구역에 순위를 매겼습니다.",
      proofPoints: [
        "주거 구역 2,711개",
        "3개 인프라 복합 점수",
        "만점 구역 713개",
        "병목은 대중교통",
      ],
      snapshot: [
        { label: "역할", value: "단독 연구자 · GIS 분석가" },
        { label: "도구", value: "ArcGIS Pro · 공간 통계 · Excel" },
        { label: "결과물", value: "주거 구역 2,711개의 0–3 복합 접근성 점수 지도" },
        { label: "방법", value: "버퍼 분석 + Select by Location 오버레이" },
        { label: "상태", value: "완료 · 2026년 여름" },
      ],
      overview:
        "따로 존재하던 세 개의 생활 인프라 지도를 솔트레이크시티의 투자 스크리닝 레이어 하나로 합친 프로젝트입니다. 유타주 공공 데이터 포털의 GIS 데이터 다섯 종을 활용해, 도시의 모든 주거 구역에 학교·공원·트랙스 경전철역까지의 도보 접근성을 기준으로 0–3점을 부여했습니다. 그 결과 주택 구매자, 투자자, 도시계획가가 GIS를 몰라도 한눈에 동네를 비교할 수 있는 지도 한 장이 만들어졌습니다.",
      problem:
        "기존 보행성 연구는 인프라를 각각 따로 지도화하기 때문에, '무엇이든 걸어서 갈 수 있는 동네는 어디인가'라는 단순한 질문에 답하기 어렵습니다. 이 프로젝트는 통합 접근성 점수가 주거 투자 스크리닝 도구로 쓰일 수 있는지, 그리고 그 점수가 솔트레이크시티에서 어떤 공간 패턴을 드러내는지 물었습니다.",
      data: {
        dataset:
          "유타 지리정보센터(UGRC) 공공 데이터 포털(opendata.gis.utah.gov)의 데이터 다섯 종: 유타 학교 PreK–12(포인트), 유타 지역 공원(폴리곤), 트랙스 경전철역(포인트 — 블루·레드·그린 라인), 유타 행정경계(폴리곤), SLC 조닝(폴리곤).",
        source:
          "모두 유타주 공식 GIS 포털(UGRC) 데이터이며, 조닝 코드가 \"R\"로 시작하는 구역을 2,711개의 주거 분석 단위로 정의했습니다.",
        cleaning:
          "모든 레이어를 SLC 행정경계로 클립하고, ZONING LIKE 'R%' 조건으로 주거 구역을 선택했습니다. 도보 거리 버퍼는 학교 1마일, 공원과 트랙스역 0.5마일로 생성해 디졸브했습니다.",
        limitations:
          "직선 버퍼는 실제 가로망 대비 보행성을 과대평가합니다(큰 격자 블록, I-15 단절). 주택 가격 데이터가 없어 점수는 가치의 대리 지표일 뿐 실제 감정가가 아닙니다. 버스 노선은 제외하고 트랙스만 반영했으며, 세 인프라에 동일 가중치를 적용했습니다.",
      },
      methodSteps: [
        "UGRC 데이터 다섯 종을 솔트레이크시티 행정경계로 클립",
        "ZONING LIKE 'R%'로 주거 구역 2,711개를 선택해 분석 레이어로 내보내기",
        "도보 거리 버퍼 생성 (학교 1마일 · 공원 0.5마일 · 트랙스 0.5마일)",
        "Select by Location(Intersect)과 Calculate Field로 인프라별 1/0 점수 부여",
        "복합 점수 Score = Sch + Park + Trax 계산 (구역당 0–3 정수)",
        "그러데이션 색상(회색 → 진한 초록)으로 심볼화하고 속성 테이블을 Excel로 내보내 요약",
      ],
      findings: [
        "713개 구역(26.3%)이 3/3 만점 — 학교, 공원, 트랙스 모두 도보권입니다.",
        "병목은 대중교통입니다. 학교는 2,678개, 공원은 2,652개 구역이 닿지만 트랙스역은 742개에 그쳤습니다.",
        "만점 구역은 트랙스 노선을 따라 이어집니다 — 다운타운, 센트럴 시티, 리버티 웰스, 볼파크, 슈가하우스.",
        "웨스트사이드의 격차는 인프라 격차가 아니라 교통 격차입니다. 학교와 공원은 도시 전역에 분포하지만 철도는 그렇지 않습니다.",
        "트랙스 노선에 인접한 2점 구역이 노선 확장 시 가장 큰 상승 여력을 가집니다.",
      ],
      metrics: [
        { label: "주거 구역", value: "2,711" },
        { label: "만점 구역 (3/3)", value: "713" },
        { label: "만점 비율", value: "26.3%" },
        { label: "트랙스 도보권 구역", value: "742" },
      ],
      charts: [],
      highlights: [
        {
          label: "투자 관점",
          text: "철도가 닿는 3점 구역은 장기적으로 안정적인 가치를 시사합니다. 트랙스 옆 2점 구역은 노선이 확장될 경우 상승 여력이 가장 뚜렷합니다.",
        },
        {
          label: "계획 관점",
          text: "웨스트사이드에서는 학교나 공원을 늘리는 것보다 대중교통을 연장하는 편이 통합 접근성을 가장 크게 높이며, 저소득 지역의 형평성 개선 효과도 큽니다.",
        },
      ],
      impact:
        "클립, 선택, 버퍼, 오버레이 같은 표준 GIS 도구 몇 가지를 무료 공공 데이터에 적용하는 것만으로 의사결정에 바로 쓸 수 있는 지도를 만들 수 있음을 보여줍니다. 이 점수는 1차 투자 스크리닝 필터로, 가격·상태·지역 맥락에 대한 심층 실사를 대체하지 않으면서 어디부터 살펴볼지 범위를 좁혀 줍니다.",
      reflection: {
        learned:
          "세 개의 인프라 레이어를 하나의 점수로 합치자 공간적 이야기가 훨씬 선명해졌습니다. 교통 병목은 지도를 따로 볼 때는 드러나지 않았지만, 통합 점수는 그것을 즉시 보여 주었습니다.",
        improve:
          "직선 버퍼 대신 실제 가로 형상을 이용한 네트워크 기반 보행성 분석으로 바꿔, SLC의 큰 격자 블록과 I-15 단절을 반영하고 싶습니다.",
        expand:
          "실거래가나 과세 자료를 결합해 3점 구역이 실제로 가격 프리미엄을 갖는지 검증하고, 가중 점수와 고빈도 버스 노선을 더해 교통 접근성을 더 정확히 그려낼 수 있습니다.",
      },
      gallery: [
        { name: "project04_cover", file: "project04_cover.png", hint: "ArcGIS 접근성 점수 지도", ratio: "4:3" },
        { name: "project04_score_map", file: "PROJECT04_score_map.png", hint: "지도 3 인프라 접근성 점수", ratio: "4:3" },
        { name: "project04_buffer_map", file: "PROJECT04_buffer_map.png", hint: "지도 2 도보 버퍼 오버레이", ratio: "4:3" },
        { name: "project04_amenity_map", file: "PROJECT04_amenity_map.png", hint: "지도 1 인프라 분포", ratio: "4:3" },
      ],
    },
  },
];
