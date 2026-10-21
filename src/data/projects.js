// Central project data: homepage cards + full case study pages
// (/work/<slug>). Slugs are stable — they are shared links.
//
// Every claim here is bounded by sources/verified-content.json in the
// 2026-10-20 evidence bundle, and every `evidence` figure maps to a file
// the bundle's asset manifest marks "selected". Assets the manifest holds
// for review (the GIS access-score map, the unresolved baseline run, the
// synthetic query output, the housing and Adobe material) are deliberately
// absent and must not be added without clearance.
//
// Fields that are facts rather than prose — team, mentors, course — live at
// the project level so EN and KO cannot drift apart on them.
export const projects = [
  {
    slug: "stock-price-prediction-finbert",
    number: "01",
    group: "fintech",
    researchBacked: true,
    tools: [
      "Python",
      "FinBERT",
      "scikit-learn",
      "Random Forest",
      "LightGBM",
      "Gradient Boosting",
    ],
    team: ["Maryam Ahmad", "Ellie Choi", "Yerke Nokenova", "Julia Park"],
    mentors: ["Emre Ertan", "Chong Oh"],
    cover: { file: "project02_cover.jpg", fit: "contain" },
    links: {},
    en: {
      title: "Investor Sentiment & Stock Price Prediction",
      category: "MARKET INTELLIGENCE · FINANCIAL MACHINE LEARNING",
      subtitle:
        "Can news-headline sentiment add signal to next-day price direction?",
      role: "Co-author",
      projectType: "Market Intelligence · Financial Machine Learning · NLP",
      timeline: "2026",
      status: "Research project · archived evaluation materials",
      coverAlt:
        "Original research poster: Predicting Future Stock Price Movements Using Historical Market Data and Investor Sentiment",
      outcome:
        "The archived model comparison sits near 0.50 accuracy. The materials in hand do not establish a consistent benefit from the sentiment features.",
      proofPoints: [
        "S&P 500 prices (Yahoo Finance) + Google News RSS headlines",
        "FinBERT sentiment as model features",
        "LightGBM, Random Forest and Gradient Boosting, with and without sentiment",
        "Precision, recall, F1 and confusion matrices",
      ],
      snapshot: [
        { label: "Role", value: "Co-author" },
        { label: "Data", value: "S&P 500 prices + news headlines" },
        { label: "Models", value: "LightGBM · Random Forest · Gradient Boosting" },
        { label: "Evaluation", value: "Precision · recall · F1 · confusion matrices" },
        { label: "Status", value: "Archived evaluation snapshot" },
      ],
      researchContext: {
        paper:
          "Predicting Stock Price Movements Using Market Data and Investor Sentiment",
        credit:
          "Co-author, with Maryam Ahmad, Yerke Nokenova and Julia Park · Faculty mentors: Emre Ertan and Chong Oh",
        text: "A student research project testing whether sentiment extracted from financial news headlines adds predictive signal to next-day S&P 500 direction beyond market data alone. Three models were trained with and without the sentiment features and compared on precision, recall, F1 and confusion matrices.",
      },
      overview:
        "The project pairs daily S&P 500 market data from Yahoo Finance with headlines collected from Google News RSS, scores those headlines with FinBERT, and feeds the resulting sentiment features into three classifiers alongside the market variables. Each model was trained both with and without sentiment so the two conditions could be compared directly.",
      problem:
        "Price history alone may not capture what investors already expect. The question was whether a text-derived feature changes classification performance on next-day direction — and, just as importantly, whether any change is large and consistent enough to mean anything.",
      data: {
        dataset:
          "Daily S&P 500 market data paired with financial news headlines, with FinBERT sentiment scores joined to trading days.",
        source:
          "Market data from the Yahoo Finance API; headlines from Google News RSS.",
        cleaning:
          "Sentiment scores were aligned to trading days and merged with the market variables before training, so both conditions saw the same rows.",
        limitations:
          "Daily-granularity sentiment smooths over intraday movement. Headline-level sentiment does not capture full article context. The evaluation materials available are an archived snapshot rather than a re-runnable experiment, so the exact configuration behind any single number cannot be reconstructed from them.",
      },
      methodSteps: [
        "Framed next-day direction as a binary classification problem",
        "Collected S&P 500 market data through the Yahoo Finance API",
        "Collected financial news headlines from Google News RSS",
        "Scored headlines with FinBERT and aligned scores to trading days",
        "Trained each model with and without the sentiment features",
        "Compared precision, recall, F1 and confusion matrices across models",
      ],
      findings: [
        "In the archived model comparison, accuracy for the compared models sits near 0.50 — close to the coin-flip baseline for binary direction.",
        "The confusion matrices show how errors distribute across LightGBM, Random Forest and Gradient Boosting, rather than resolving to one headline score.",
        "On this evidence, a consistent incremental benefit from the sentiment features is not established. Reading a gain from one model while ignoring the others would not be supportable.",
      ],
      metrics: [
        { label: "Models compared", value: "3" },
        { label: "Index covered", value: "S&P 500" },
        { label: "Sentiment engine", value: "FinBERT" },
        { label: "Archived accuracy", value: "≈0.50" },
      ],
      impact:
        "What this project actually demonstrates is the evaluation discipline, not a trading edge: holding the data fixed, varying only the feature set, and reading confusion matrices rather than a single accuracy number. It does not refute weak-form market efficiency, and nothing here supports treating the models as a deployable strategy.",
      reflection: {
        learned:
          "A model comparison is only as trustworthy as its provenance. Numbers that cannot be traced back to a specific run are evidence of an attempt, not of a result.",
        improve:
          "Re-run the comparison end to end with fixed seeds and a recorded configuration, so each reported number has an experiment attached to it.",
        expand:
          "Test intraday granularity and full article text rather than headlines alone.",
      },
      evidence: [
        {
          file: "project02_cover.jpg",
          alt: "Original research poster: Predicting Future Stock Price Movements Using Historical Market Data and Investor Sentiment",
          caption:
            "Original research poster (March 2026). The findings above reflect a later reading of the archived evaluation materials.",
          credit:
            "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park · Faculty mentors: Emre Ertan, Chong Oh",
        },
        {
          file: "stock-sentiment-research-method.png",
          alt: "Methods panel: market data, news headlines, FinBERT sentiment features and modeling",
          caption:
            "Methods panel cropped from the original research poster: market data, news headlines, FinBERT features and modeling.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
        {
          file: "PROJECT02_stock_price_trends.png",
          alt: "Figure 1 from the poster: stock price trends for the tracked tickers",
          caption: "Figure 1 — stock price trends across the tracked tickers.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
        {
          file: "PROJECT02_predicted_probability_distribution.png",
          alt: "Figure 2 from the poster: distribution of predicted probabilities clustered near 0.5",
          caption:
            "Figure 2 — distribution of predicted probabilities. The mass sits close to 0.5, which is the same picture the accuracy figures give.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
        {
          file: "PROJECT02_model_comparison.png",
          alt: "Figure 3a from the poster: model comparison across precision, recall, F1 and accuracy",
          caption:
            "Figure 3a — model comparison on precision, recall, F1 and accuracy, with and without sentiment features.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
        {
          file: "PROJECT02_confusion_matrix.png",
          alt: "Figure 3b from the poster: confusion matrices for the stock-only and stock-plus-FinBERT conditions",
          caption:
            "Figure 3b — confusion matrices for the stock-only and stock-plus-FinBERT conditions.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
        {
          file: "stock-model-evaluation.png",
          alt: "Archived model comparison chart across the three classifiers",
          caption:
            "Archived model-comparison output, also visible in the research poster. Accuracy sits around 0.50 in this snapshot; no validated trading edge is established.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
        {
          file: "stock-confusion-matrices.png",
          alt: "Archived confusion matrices for LightGBM, Random Forest and Gradient Boosting",
          caption:
            "Archived confusion matrices for LightGBM, Random Forest and Gradient Boosting — the third model is Gradient Boosting, not XGBoost.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
      ],
    },
    ko: {
      title: "투자자 심리와 주가 예측",
      category: "마켓 인텔리전스 · 금융 머신러닝",
      subtitle: "뉴스 헤드라인의 감성은 다음 날 주가 방향 예측에 신호를 더할 수 있을까?",
      role: "공동저자",
      projectType: "마켓 인텔리전스 · 금융 머신러닝 · NLP",
      timeline: "2026년",
      status: "연구 프로젝트 · 아카이브된 평가 자료",
      coverAlt:
        "원본 연구 포스터 — 과거 시장 데이터와 투자자 심리를 활용한 주가 변동 예측",
      outcome:
        "아카이브된 모델 비교의 정확도는 0.50 부근입니다. 현재 확보한 자료로는 감성 피처의 일관된 성능 개선을 입증할 수 없습니다.",
      proofPoints: [
        "S&P 500 가격(Yahoo Finance) + Google News RSS 헤드라인",
        "모델 피처로 사용한 FinBERT 감성",
        "LightGBM · Random Forest · Gradient Boosting, 감성 포함/미포함 비교",
        "정밀도 · 재현율 · F1 · 혼동 행렬",
      ],
      snapshot: [
        { label: "역할", value: "공동저자" },
        { label: "데이터", value: "S&P 500 가격 + 뉴스 헤드라인" },
        { label: "모델", value: "LightGBM · Random Forest · Gradient Boosting" },
        { label: "평가", value: "정밀도 · 재현율 · F1 · 혼동 행렬" },
        { label: "상태", value: "아카이브된 평가 스냅샷" },
      ],
      researchContext: {
        paper: "시장 데이터와 투자자 심리를 활용한 주가 변동 예측",
        credit:
          "공동저자 — Maryam Ahmad, Yerke Nokenova, Julia Park와 함께 · 지도교수: Emre Ertan, Chong Oh",
        text: "금융 뉴스 헤드라인에서 추출한 감성이 시장 데이터만으로는 얻을 수 없는 예측 신호를 다음 날 S&P 500 방향 예측에 더하는지 검증한 학부 연구입니다. 세 개의 모델을 감성 피처 포함·미포함 두 조건으로 학습하고 정밀도, 재현율, F1, 혼동 행렬로 비교했습니다.",
      },
      overview:
        "Yahoo Finance의 S&P 500 일별 시장 데이터와 Google News RSS에서 수집한 헤드라인을 결합하고, 헤드라인을 FinBERT로 점수화해 시장 변수와 함께 세 개의 분류 모델에 투입했습니다. 각 모델은 감성 피처를 넣은 조건과 넣지 않은 조건 모두에서 학습해 직접 비교했습니다.",
      problem:
        "가격 이력만으로는 투자자가 이미 기대하고 있는 바를 담지 못할 수 있습니다. 텍스트에서 끌어낸 피처가 다음 날 방향 분류 성능을 바꾸는지, 그리고 그 변화가 의미를 가질 만큼 크고 일관적인지를 함께 물었습니다.",
      data: {
        dataset:
          "FinBERT 감성 점수를 거래일에 결합한 S&P 500 일별 시장 데이터와 금융 뉴스 헤드라인.",
        source: "시장 데이터는 Yahoo Finance API, 헤드라인은 Google News RSS.",
        cleaning:
          "감성 점수를 거래일에 정렬해 시장 변수와 병합한 뒤 학습했기 때문에 두 조건이 동일한 데이터를 사용했습니다.",
        limitations:
          "일 단위 감성은 일중 움직임을 평탄화합니다. 헤드라인 단위 감성은 기사 전체의 맥락을 담지 못합니다. 또한 확보한 평가 자료는 재실행 가능한 실험이 아니라 아카이브된 스냅샷이어서, 개별 수치의 정확한 실험 조건을 복원할 수 없습니다.",
      },
      methodSteps: [
        "다음 날 주가 방향을 이진 분류 문제로 정의",
        "Yahoo Finance API로 S&P 500 시장 데이터 수집",
        "Google News RSS로 금융 뉴스 헤드라인 수집",
        "FinBERT로 헤드라인을 점수화하고 거래일에 정렬",
        "각 모델을 감성 피처 포함·미포함 조건으로 학습",
        "정밀도·재현율·F1·혼동 행렬을 모델별로 비교",
      ],
      findings: [
        "아카이브된 모델 비교에서 비교 대상 모델들의 정확도는 0.50 부근 — 이진 방향 예측의 무작위 기준선에 가깝습니다.",
        "혼동 행렬은 LightGBM, Random Forest, Gradient Boosting에서 오류가 어떻게 분포하는지를 보여줄 뿐, 하나의 대표 수치로 수렴하지 않습니다.",
        "이 근거만으로는 감성 피처의 일관된 성능 개선을 입증할 수 없습니다. 한 모델의 개선만 골라 쓰고 나머지를 생략하는 해석은 뒷받침되지 않습니다.",
      ],
      metrics: [
        { label: "비교한 모델", value: "3" },
        { label: "대상 지수", value: "S&P 500" },
        { label: "감성 엔진", value: "FinBERT" },
        { label: "아카이브 정확도", value: "≈0.50" },
      ],
      impact:
        "이 프로젝트가 실제로 보여 주는 것은 트레이딩 우위가 아니라 평가의 태도입니다 — 데이터를 고정하고 피처만 바꾸는 설계, 그리고 하나의 정확도 수치가 아니라 혼동 행렬을 읽는 습관. 약형 시장 효율성을 반증하지 않으며, 이 모델을 실제 전략으로 쓸 근거도 없습니다.",
      reflection: {
        learned:
          "모델 비교의 신뢰도는 그 출처만큼입니다. 특정 실행으로 되짚을 수 없는 수치는 결과가 아니라 시도의 기록일 뿐입니다.",
        improve:
          "시드와 설정을 기록한 상태로 비교를 처음부터 다시 실행해, 보고하는 모든 수치에 실험을 붙이고 싶습니다.",
        expand: "헤드라인이 아닌 기사 전문과 일중 단위로 확장해 검증할 수 있습니다.",
      },
      evidence: [
        {
          file: "project02_cover.jpg",
          alt: "원본 연구 포스터 — 과거 시장 데이터와 투자자 심리를 활용한 주가 변동 예측",
          caption:
            "원본 연구 포스터 (2026년 3월). 위의 핵심 발견은 아카이브된 평가 자료를 이후에 다시 읽은 결과입니다.",
          credit:
            "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park · 지도교수: Emre Ertan, Chong Oh",
        },
        {
          file: "stock-sentiment-research-method.png",
          alt: "방법론 패널 — 시장 데이터, 뉴스 헤드라인, FinBERT 감성 피처와 모델링",
          caption:
            "연구 포스터에서 잘라 낸 방법론 패널 — 시장 데이터, 뉴스 헤드라인, FinBERT 피처, 모델링.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
        {
          file: "PROJECT02_stock_price_trends.png",
          alt: "포스터의 Figure 1 — 대상 종목의 주가 추이",
          caption: "Figure 1 — 대상 종목의 주가 추이.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
        {
          file: "PROJECT02_predicted_probability_distribution.png",
          alt: "포스터의 Figure 2 — 0.5 부근에 몰린 예측 확률 분포",
          caption:
            "Figure 2 — 예측 확률 분포. 분포가 0.5 부근에 몰려 있으며, 이는 정확도 수치가 보여 주는 것과 같은 그림입니다.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
        {
          file: "PROJECT02_model_comparison.png",
          alt: "포스터의 Figure 3a — 정밀도·재현율·F1·정확도 기준 모델 비교",
          caption:
            "Figure 3a — 감성 피처 포함 여부에 따른 정밀도·재현율·F1·정확도 모델 비교.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
        {
          file: "PROJECT02_confusion_matrix.png",
          alt: "포스터의 Figure 3b — 가격 단독 조건과 가격+FinBERT 조건의 혼동 행렬",
          caption:
            "Figure 3b — 가격 단독 조건과 가격+FinBERT 조건의 혼동 행렬.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
        {
          file: "stock-model-evaluation.png",
          alt: "세 모델에 대한 아카이브된 모델 비교 차트",
          caption:
            "연구 포스터에도 실린 아카이브 모델 비교 결과. 이 스냅샷의 정확도는 0.50 부근이며, 검증된 트레이딩 우위를 입증하지 않습니다.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
        {
          file: "stock-confusion-matrices.png",
          alt: "LightGBM, Random Forest, Gradient Boosting의 아카이브된 혼동 행렬",
          caption:
            "LightGBM, Random Forest, Gradient Boosting의 아카이브 혼동 행렬 — 세 번째 모델은 XGBoost가 아니라 Gradient Boosting입니다.",
          credit: "Maryam Ahmad, Ellie Choi, Yerke Nokenova, Julia Park",
        },
      ],
    },
  },
  {
    slug: "finance-chatbot-evaluation",
    number: "02",
    group: "appliedai",
    researchBacked: true,
    inProgress: true,
    privateRepo: true,
    tools: ["Python", "Gemma (Ollama)", "Google Colab", "Git/GitHub"],
    team: ["Ellie Choi", "Anne Lee", "GaHyun Choi"],
    mentors: ["Matt Pecsok"],
    cover: {
      file: "finance-chatbot-evaluation-workflow.png",
      sources: [
        "finance-chatbot-evaluation-workflow.svg",
        "finance-chatbot-evaluation-workflow.png",
      ],
      fit: "contain",
    },
    links: {},
    en: {
      title: "Finance Chatbot Evaluation: Prompt Trade-offs",
      category: "APPLIED AI · LLM EVALUATION",
      subtitle:
        "When a chatbot prompt is improved, do all metrics rise together — or do trade-offs appear?",
      role: "Undergraduate researcher · team collaboration",
      projectType: "Applied AI · LLM Evaluation · Research",
      timeline: "Fall 2026 – present",
      status: "In progress · pilot implementation",
      coverAlt:
        "Schematic of the evaluation workflow: versioned prompts, a simulated customer agent, the chatbot under test, logged conversations and an evaluator with human review",
      outcome:
        "A working evaluation pipeline and a research question still open. No comparative prompt-effect findings are validated yet.",
      proofPoints: [
        "Simulated customer agent converses with a finance-company chatbot",
        "Evaluator agent scores each conversation across multiple metrics",
        "Versioned prompts and structured conversation logs",
        "Gemma via Ollama, run in Google Colab",
      ],
      snapshot: [
        { label: "Role", value: "Undergraduate researcher" },
        { label: "Status", value: "In-progress pilot" },
        { label: "Stack", value: "Python · Gemma/Ollama · Colab" },
        { label: "Output", value: "Evaluation pipeline + logs" },
        { label: "Mentor", value: "Matt Pecsok" },
      ],
      researchContext: {
        paper: "Finance Chatbot Evaluation: Prompt Trade-offs in Financial Services",
        credit:
          "Undergraduate researcher, with Anne Lee and GaHyun Choi · Faculty mentor: Matt Pecsok",
        text: "An in-progress study of how prompt changes affect the behaviour of a financial-services chatbot. The pipeline is the research instrument: a simulated customer agent holds a conversation with the chatbot under test, and an evaluator agent scores the exchange across several metrics, with every prompt version and conversation preserved for comparison.",
      },
      overview:
        "Most prompt work reports a single improved number. This project is built to catch the case that number hides — where sharpening a prompt lifts one metric and quietly costs another. The pipeline runs three roles in Python: a customer agent that generates realistic requests, the finance chatbot under test, and an evaluator that scores the resulting conversation. Prompts are versioned and conversations are written to structured logs, so any later comparison can point at the exact inputs that produced it.",
      problem:
        "A chatbot in financial services has to be more than fluent. It has to stay accurate about products and terms, stay inside what it was actually given, and decline the things it should decline. Those pull against each other, so the question is not whether a prompt change helps, but what it costs elsewhere.",
      data: {
        dataset:
          "Generated conversations between a simulated customer agent and the chatbot under test, with per-conversation evaluator scores.",
        source:
          "Produced inside the project's own pipeline. The repository is private; prompt text, logs and intermediate outputs are not published.",
        cleaning:
          "Prompts are explicitly versioned and conversations are written to structured records, so a run can be traced back to the prompt that produced it.",
        limitations:
          "This is a pilot implementation, not a validated study. No comparative prompt-effect result is established. An evaluator response that parses cleanly against the expected schema is only structurally valid — it says nothing about whether the score itself is right or whether the evaluator actually grounded it in the conversation. Separating those two questions is part of the work, not a solved problem.",
      },
      methodSteps: [
        "Framed the question as a trade-off question, not a single-metric improvement",
        "Built the customer-agent, chatbot and evaluator roles in Python",
        "Ran Gemma through Ollama in Google Colab",
        "Versioned every prompt so conditions can be compared",
        "Wrote structured conversation and scoring logs for reproducible analysis",
        "Reviewed evaluator output by hand against the conversation it scored",
      ],
      findings: [
        "The pipeline runs end to end and produces structured, comparable records — that is the current result.",
        "Structural validity and behavioural correctness are different checks. A score that fits the schema can still be unfaithful to the conversation it claims to describe, so both are reviewed.",
        "The comparative question — whether prompt improvements lift every metric or trade against each other — is still open.",
      ],
      metrics: [
        { label: "Pipeline roles", value: "3" },
        { label: "Model", value: "Gemma / Ollama" },
        { label: "Prompt handling", value: "Versioned" },
        { label: "Stage", value: "Pilot" },
      ],
      impact:
        "Evaluation infrastructure is the point here. If prompt changes are going to be judged at all, the judging has to be reproducible, versioned and auditable first — which is the same requirement any model has before it touches a financial workflow.",
      reflection: {
        learned:
          "Writing the evaluator was harder than writing the chatbot. Deciding what a good answer is, precisely enough for another model to score it, forces the quality question into the open.",
        improve:
          "Strengthen the check that an evaluator score is actually grounded in the conversation, rather than merely well-formed.",
        expand:
          "Extend the comparison across more prompt versions and metrics once the pilot stabilises.",
      },
      evidence: [
        {
          file: "finance-chatbot-evaluation-workflow.png",
          sources: [
            "finance-chatbot-evaluation-workflow.svg",
            "finance-chatbot-evaluation-workflow.png",
          ],
          alt: "Workflow schematic: versioned prompts feed a simulated customer agent and the chatbot under test; conversation logs feed an evaluator and human review",
          caption:
            "Explanatory schematic of the evaluation workflow, drawn for this write-up from the project's pipeline. It is not a screenshot, a deployed application or a performance chart.",
          credit:
            "Team: Ellie Choi, Anne Lee, GaHyun Choi · Faculty mentor: Matt Pecsok",
        },
      ],
    },
    ko: {
      title: "금융 챗봇 평가: 프롬프트의 트레이드오프",
      category: "응용 AI · LLM 평가",
      subtitle:
        "챗봇 프롬프트를 개선하면 모든 지표가 함께 오를까, 아니면 트레이드오프가 생길까?",
      role: "학부 연구원 · 팀 협업",
      projectType: "응용 AI · LLM 평가 · 연구",
      timeline: "2026년 가을 – 현재",
      status: "진행 중 · 파일럿 구현",
      coverAlt:
        "평가 워크플로 도식 — 버전 관리된 프롬프트, 시뮬레이션 고객 에이전트, 평가 대상 챗봇, 대화 로그, 평가자와 사람 검토",
      outcome:
        "작동하는 평가 파이프라인과 아직 열려 있는 연구 질문. 프롬프트 효과에 대한 비교 결과는 아직 검증되지 않았습니다.",
      proofPoints: [
        "시뮬레이션 고객 에이전트가 금융사 챗봇과 대화",
        "평가자 에이전트가 각 대화를 여러 지표로 채점",
        "버전 관리된 프롬프트와 구조화된 대화 로그",
        "Google Colab에서 Ollama로 Gemma 실행",
      ],
      snapshot: [
        { label: "역할", value: "학부 연구원" },
        { label: "상태", value: "진행 중인 파일럿" },
        { label: "스택", value: "Python · Gemma/Ollama · Colab" },
        { label: "결과물", value: "평가 파이프라인 + 로그" },
        { label: "지도", value: "Matt Pecsok" },
      ],
      researchContext: {
        paper: "금융 서비스 챗봇 평가: 프롬프트의 트레이드오프",
        credit:
          "학부 연구원 — Anne Lee, GaHyun Choi와 함께 · 지도교수: Matt Pecsok",
        text: "프롬프트 변화가 금융 서비스 챗봇의 행동을 어떻게 바꾸는지 검증하는 진행 중인 연구입니다. 파이프라인 자체가 연구 도구입니다 — 시뮬레이션 고객 에이전트가 평가 대상 챗봇과 대화하고, 평가자 에이전트가 그 대화를 여러 지표로 채점하며, 모든 프롬프트 버전과 대화가 비교를 위해 보존됩니다.",
      },
      overview:
        "프롬프트 작업은 대개 개선된 수치 하나로 보고됩니다. 이 프로젝트는 그 수치가 가리는 경우 — 프롬프트를 다듬어 한 지표를 올리는 대신 다른 지표를 조용히 잃는 경우 — 를 잡아내기 위해 설계했습니다. 파이프라인은 Python으로 세 역할을 실행합니다. 현실적인 요청을 만드는 고객 에이전트, 평가 대상인 금융 챗봇, 그리고 그 대화를 채점하는 평가자입니다. 프롬프트는 버전으로 관리하고 대화는 구조화된 로그로 남겨, 이후의 모든 비교가 그것을 만든 입력을 가리킬 수 있게 했습니다.",
      problem:
        "금융 서비스 챗봇은 말이 매끄러운 것만으로는 부족합니다. 상품과 약관에 대해 정확해야 하고, 주어진 근거 안에 머물러야 하며, 거절해야 할 것은 거절해야 합니다. 이 요구들은 서로 당기기 때문에, 질문은 프롬프트 변경이 도움이 되는가가 아니라 그 대가로 무엇을 잃는가입니다.",
      data: {
        dataset:
          "시뮬레이션 고객 에이전트와 평가 대상 챗봇 사이에서 생성된 대화, 그리고 대화별 평가자 점수.",
        source:
          "프로젝트 자체 파이프라인에서 생성됩니다. 저장소는 비공개이며 프롬프트 원문, 로그, 중간 산출물은 공개하지 않습니다.",
        cleaning:
          "프롬프트를 명시적으로 버전 관리하고 대화를 구조화된 기록으로 남겨, 각 실행을 그것을 만든 프롬프트까지 추적할 수 있습니다.",
        limitations:
          "검증된 연구가 아니라 파일럿 구현입니다. 프롬프트 효과에 대한 비교 결과는 확립되지 않았습니다. 평가자 응답이 정해진 스키마에 맞게 파싱된다는 것은 구조적 유효성일 뿐, 점수 자체가 옳은지 또는 평가자가 실제로 대화에 근거했는지는 말해 주지 않습니다. 이 둘을 분리하는 일이 아직 해결된 문제가 아니라 연구의 일부입니다.",
      },
      methodSteps: [
        "단일 지표 개선이 아니라 트레이드오프 질문으로 문제를 정의",
        "고객 에이전트·챗봇·평가자 역할을 Python으로 구현",
        "Google Colab에서 Ollama로 Gemma 실행",
        "조건 비교가 가능하도록 모든 프롬프트를 버전 관리",
        "재현 가능한 분석을 위해 구조화된 대화·채점 로그 작성",
        "평가자 출력이 채점 대상 대화와 맞는지 직접 검토",
      ],
      findings: [
        "파이프라인이 처음부터 끝까지 작동하며 비교 가능한 구조화 기록을 생성합니다 — 현재까지의 결과는 여기까지입니다.",
        "구조적 유효성과 행동의 정확성은 별개의 점검입니다. 스키마에 맞는 점수도 그것이 설명한다고 주장하는 대화에 충실하지 않을 수 있어, 두 가지를 모두 봅니다.",
        "비교 질문 — 프롬프트 개선이 모든 지표를 함께 올리는가, 서로 맞바꾸는가 — 는 아직 열려 있습니다.",
      ],
      metrics: [
        { label: "파이프라인 역할", value: "3" },
        { label: "모델", value: "Gemma / Ollama" },
        { label: "프롬프트 관리", value: "버전 관리" },
        { label: "단계", value: "파일럿" },
      ],
      impact:
        "여기서 핵심은 평가 인프라입니다. 프롬프트 변경을 평가하려면 그 평가가 먼저 재현 가능하고, 버전으로 관리되며, 감사 가능해야 합니다 — 어떤 모델이든 금융 업무에 닿기 전에 요구되는 조건과 같습니다.",
      reflection: {
        learned:
          "챗봇보다 평가자를 쓰는 일이 더 어려웠습니다. 좋은 답변이 무엇인지를 다른 모델이 채점할 수 있을 만큼 정확하게 정의해야 했고, 그 과정에서 품질 기준이 드러났습니다.",
        improve:
          "평가자 점수가 형식만 갖춘 것이 아니라 실제로 대화에 근거했는지를 확인하는 장치를 강화하고 싶습니다.",
        expand:
          "파일럿이 안정되면 더 많은 프롬프트 버전과 지표로 비교를 확장할 수 있습니다.",
      },
      evidence: [
        {
          file: "finance-chatbot-evaluation-workflow.png",
          sources: [
            "finance-chatbot-evaluation-workflow.svg",
            "finance-chatbot-evaluation-workflow.png",
          ],
          alt: "워크플로 도식 — 버전 관리된 프롬프트가 시뮬레이션 고객 에이전트와 평가 대상 챗봇으로 이어지고, 대화 로그가 평가자와 사람 검토로 이어짐",
          caption:
            "이 소개 글을 위해 프로젝트의 파이프라인을 바탕으로 새로 그린 설명용 도식입니다. 스크린샷이나 배포된 애플리케이션, 성능 차트가 아닙니다.",
          credit:
            "팀: Ellie Choi, Anne Lee, GaHyun Choi · 지도교수: Matt Pecsok",
        },
      ],
    },
  },
  {
    slug: "super-bowl-advertising-analytics",
    number: "03",
    group: "transferable",
    researchBacked: true,
    tools: ["Python", "Tableau", "NLP"],
    team: ["Ellie Choi", "Cienna Kim", "Doahn Lee", "Hangu Lee"],
    mentors: ["Chong Oh"],
    cover: { file: "super-bowl-research-poster.jpg", fit: "contain" },
    links: {},
    en: {
      title: "Measuring Attention, Engagement, and Reception",
      category: "ALTERNATIVE DATA · MEASUREMENT DESIGN",
      subtitle: "Does visibility actually translate into value?",
      role: "First author",
      projectType: "Alternative Data · Measurement Design · Research",
      timeline: "2026",
      status: "Completed research poster",
      coverAlt:
        "Research poster: A Multidimensional Framework for Winning Super Bowl Advertising",
      outcome:
        "Digital engagement and traditional viewer preference turned out to measure different things: R² < 0.05 between the composite score and Ad Meter rank.",
      proofPoints: [
        "64,230 tweets across 59 Super Bowl LX brands",
        "Six engineered measures; five combined into the composite score",
        "Composite Winning Score vs. an independent benchmark",
        "R² < 0.05 against Ad Meter rank",
      ],
      snapshot: [
        { label: "Role", value: "First author" },
        { label: "Dataset", value: "64,230 tweets · 59 brands" },
        { label: "Source", value: "2026 Game Day Analytics Challenge" },
        { label: "Key result", value: "R² < 0.05 vs. Ad Meter" },
        { label: "Status", value: "Research completed" },
      ],
      researchContext: {
        paper: "A Multidimensional Framework for Winning Super Bowl Advertising",
        credit:
          "First author, with Cienna Kim, Doahn Lee and Hangu Lee · Faculty advisor: Chong Oh",
        text: "A study of whether social-media visibility lines up with audience reception, using the 2026 Game Day Analytics Challenge dataset of 64,230 tweets from 59 Super Bowl LX brands. A composite Winning Score was built from engineered measures and compared against USA Today's Ad Meter ranking as an independent benchmark.",
      },
      overview:
        "This is a measurement-design project. The dataset was supplied by the 2026 Game Day Analytics Challenge rather than collected independently, so the work sits in what you do with data once you have it: defining measures that stay comparable across brands of very different sizes, normalising them, combining them into one score, and then testing that score against a benchmark built a completely different way.",
      problem:
        "Super Bowl advertising gets judged on mentions or on sentiment, one at a time. Neither says much on its own — a brand can be talked about constantly and liked very little. The question was whether a multidimensional score would rank brands differently from a viewer-voted ranking, and what it would mean if it did.",
      data: {
        dataset:
          "64,230 tweets from 59 Super Bowl LX brands, across an in-game and a 24-hour post-game window.",
        source:
          "The 2026 Game Day Analytics Challenge dataset, supplied for the competition. The tweets were not independently collected through the Twitter/X API.",
        cleaning:
          "Roughly 30,000 irrelevant tweets were removed before six measures were engineered: Viral Index, Positive Ratio, Engagement Efficiency, ROI Efficiency, Sustained Ratio and Net Sentiment.",
        limitations:
          "ROI Efficiency normalises engagement by an assumed $8M ad cost applied uniformly to every brand — real spend varies, and this is an efficiency proxy, not a measured financial return. Twitter/X only; volume is not reach; the window is 24 hours, so no long-term brand equity is measured. Tweet-level sentiment approximates audience reception rather than representing it.",
      },
      methodSteps: [
        "Took the supplied Game Day Analytics Challenge dataset as the starting point",
        "Cleaned roughly 30,000 irrelevant tweets from the 64,230",
        "Engineered six measures spanning visibility, sentiment, engagement and momentum",
        "Normalised the measures so brands of different sizes stayed comparable",
        "Aggregated five of them into a weighted composite Winning Score",
        "Compared the composite against Ad Meter rank as an independent benchmark",
      ],
      findings: [
        "High visibility did not reliably accompany positive reception — the loudest brands were often not the best received.",
        "Against Ad Meter rank the composite produced R² < 0.05, close to no explanatory relationship at all.",
        "The reading the poster takes from that is divergence rather than failure: a viewer-voted ranking and a digital-engagement score are measuring different dimensions, so neither substitutes for the other.",
      ],
      metrics: [
        { label: "Tweets analyzed", value: "64,230" },
        { label: "Brands scored", value: "59" },
        { label: "Engineered measures", value: "6" },
        { label: "R² vs. Ad Meter", value: "< 0.05" },
      ],
      impact:
        "This is not a finance project, and the transferable part is the method rather than the subject: defining measures that stay comparable across units, normalising them by a stated cost assumption, combining them deliberately, and then testing the result against something built independently. ROI Efficiency here is engagement normalised by an assumed media cost — it is not measured revenue, profit or financial return, and nothing in the study establishes a sales effect.",
      reflection: {
        learned:
          "A composite score is only as credible as its weakest component and its stated assumptions. The $8M baseline is the clearest example: uniform, convenient, and something a reader has to be told about rather than left to discover.",
        improve:
          "Weight sentiment by engagement, and validate the score against more than one season.",
        expand:
          "Apply the same structure to other high-visibility campaigns judged against an outside ranking.",
      },
      evidence: [
        {
          file: "super-bowl-research-poster.jpg",
          alt: "Full research poster: A Multidimensional Framework for Winning Super Bowl Advertising",
          caption:
            "The original research poster. Engagement-efficiency proxies on it are not measured financial ROI.",
          credit:
            "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee · Faculty advisor: Chong Oh",
        },
        {
          file: "super-bowl-visibility-sentiment.png",
          alt: "Scatter plot of tweet volume against positive ratio by brand",
          caption:
            "Volume and positive reception are distinct measures. Cropped from the research poster.",
          credit: "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
        {
          file: "super-bowl-ad-meter-comparison.png",
          alt: "Scatter plot of composite Winning Score against Ad Meter rank with a near-flat trend line",
          caption:
            "Winning Score against Ad Meter rank; the poster reports R² < 0.05. This is a divergence between two measurement approaches, not a validation of sales impact.",
          credit: "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
        {
          file: "super-bowl-gdac-sentiment-breakdown.png",
          alt: "Tableau sentiment breakdown by brand from the earlier competition phase",
          caption:
            "An earlier Game Day Analytics Challenge Tableau export, filtered to 25 brands. This is a related phase of the same work, not a second 59-brand study.",
          credit: "Team No Brady: Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
        {
          file: "PROJECT01_tweet_volume_per_brand.png",
          alt: "Archived chart of tweet volume by brand",
          caption: "Archived analysis export: tweet volume by brand.",
          credit: "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
        {
          file: "PROJECT01_engagement_vs_virality_matrix.png",
          alt: "Archived matrix plotting engagement depth against virality by brand",
          caption:
            "Archived analysis export: engagement depth against virality. High virality and deep engagement are not the same axis.",
          credit: "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
        {
          file: "PROJECT01_engagement_per_1M.png",
          alt: "Archived chart of engagement per one million impressions by brand",
          caption: "Archived analysis export: engagement per million impressions.",
          credit: "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
        {
          file: "PROJECT01_engagement_per_impression.png",
          alt: "Archived chart of engagement per impression by brand",
          caption:
            "Archived analysis export: engagement per impression — one of the normalised efficiency measures, not a financial return.",
          credit: "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
      ],
    },
    ko: {
      title: "주목도·참여도, 그리고 수용도의 측정",
      category: "대안 데이터 · 지표 설계",
      subtitle: "노출은 정말 가치로 이어질까?",
      role: "제1저자",
      projectType: "대안 데이터 · 지표 설계 · 연구",
      timeline: "2026년",
      status: "연구 포스터 완료",
      coverAlt: "연구 포스터 — 슈퍼볼 광고의 성공을 측정하는 다차원 프레임워크",
      outcome:
        "디지털 참여도와 전통적인 시청자 선호도는 서로 다른 것을 측정하고 있었습니다 — 복합 점수와 Ad Meter 순위 사이의 R²는 0.05 미만이었습니다.",
      proofPoints: [
        "슈퍼볼 LX 59개 브랜드의 트윗 64,230건",
        "설계한 지표 6개 중 5개를 복합 점수로 결합",
        "복합 Winning Score를 독립적인 벤치마크와 비교",
        "Ad Meter 순위 대비 R² < 0.05",
      ],
      snapshot: [
        { label: "역할", value: "제1저자" },
        { label: "데이터셋", value: "트윗 64,230건 · 브랜드 59개" },
        { label: "출처", value: "2026 Game Day Analytics Challenge" },
        { label: "핵심 결과", value: "Ad Meter 대비 R² < 0.05" },
        { label: "상태", value: "연구 완료" },
      ],
      researchContext: {
        paper: "슈퍼볼 광고의 성공을 측정하는 다차원 프레임워크",
        credit:
          "제1저자 — Cienna Kim, Doahn Lee, Hangu Lee와 함께 · 지도교수: Chong Oh",
        text: "2026 Game Day Analytics Challenge가 제공한 슈퍼볼 LX 59개 브랜드의 트윗 64,230건을 사용해, 소셜미디어 노출이 실제 시청자 수용도와 일치하는지 검증한 연구입니다. 설계한 지표들로 복합 Winning Score를 만들고, 완전히 다른 방식으로 만들어진 USA Today Ad Meter 순위를 독립적인 벤치마크로 삼아 비교했습니다.",
      },
      overview:
        "이 프로젝트는 지표 설계에 관한 연구입니다. 데이터셋은 직접 수집한 것이 아니라 2026 Game Day Analytics Challenge에서 제공받았고, 따라서 작업의 본질은 데이터를 확보한 다음에 하는 일에 있습니다 — 규모가 크게 다른 브랜드들 사이에서도 비교 가능한 지표를 정의하고, 정규화하고, 하나의 점수로 결합한 뒤, 전혀 다른 방식으로 만들어진 벤치마크와 맞춰 보는 일입니다.",
      problem:
        "슈퍼볼 광고는 언급량이나 감성 중 하나만으로 평가되곤 합니다. 어느 쪽도 단독으로는 많은 것을 말해 주지 못합니다 — 끊임없이 회자되면서도 거의 호감을 얻지 못하는 브랜드가 있기 때문입니다. 다차원 점수가 시청자 투표 기반 순위와 다른 결과를 내는지, 그리고 다르다면 그것이 무엇을 뜻하는지를 물었습니다.",
      data: {
        dataset:
          "슈퍼볼 LX 59개 브랜드의 트윗 64,230건, 경기 중과 경기 후 24시간 두 구간.",
        source:
          "대회용으로 제공된 2026 Game Day Analytics Challenge 데이터셋입니다. Twitter/X API로 직접 수집한 트윗이 아닙니다.",
        cleaning:
          "약 3만 건의 무관한 트윗을 제거한 뒤 여섯 개 지표를 설계했습니다 — Viral Index, Positive Ratio, Engagement Efficiency, ROI Efficiency, Sustained Ratio, Net Sentiment.",
        limitations:
          "ROI Efficiency는 모든 브랜드에 동일하게 가정한 800만 달러 광고비로 참여도를 정규화한 값입니다. 실제 집행액은 브랜드마다 다르며, 이는 효율 대리 지표일 뿐 측정된 재무 수익이 아닙니다. Twitter/X만 대상이고, 볼륨은 실제 도달이 아니며, 관측 구간이 24시간이어서 장기 브랜드 자산은 측정하지 않았습니다. 트윗 단위 감성은 시청자 반응을 근사할 뿐 대표하지는 않습니다.",
      },
      methodSteps: [
        "제공된 Game Day Analytics Challenge 데이터셋을 출발점으로 설정",
        "64,230건에서 약 3만 건의 무관한 트윗을 정제",
        "노출·감성·참여·지속성을 아우르는 여섯 개 지표 설계",
        "규모가 다른 브랜드도 비교 가능하도록 지표를 정규화",
        "그중 다섯 개를 가중 결합해 복합 Winning Score 산출",
        "독립적인 벤치마크인 Ad Meter 순위와 복합 점수를 비교",
      ],
      findings: [
        "높은 노출이 긍정적 수용과 함께 가지는 않았습니다 — 가장 많이 회자된 브랜드가 가장 좋게 받아들여진 브랜드인 경우는 드물었습니다.",
        "Ad Meter 순위와 비교한 복합 점수의 R²는 0.05 미만으로, 설명력이 거의 없는 수준이었습니다.",
        "포스터는 이를 실패가 아니라 차원의 분기로 읽습니다. 시청자 투표 순위와 디지털 참여 점수는 서로 다른 차원을 측정하므로 어느 쪽도 다른 쪽을 대체하지 않습니다.",
      ],
      metrics: [
        { label: "분석한 트윗", value: "64,230" },
        { label: "스코어링한 브랜드", value: "59" },
        { label: "설계한 지표", value: "6" },
        { label: "Ad Meter 대비 R²", value: "< 0.05" },
      ],
      impact:
        "이 프로젝트는 금융 프로젝트가 아니며, 전이되는 것은 주제가 아니라 방법입니다 — 단위가 달라도 비교 가능한 지표를 정의하고, 명시한 비용 가정으로 정규화하고, 의도를 가지고 결합한 뒤, 독립적으로 만들어진 기준과 맞춰 검증하는 절차입니다. 여기서 ROI Efficiency는 가정된 미디어 비용으로 정규화한 참여도이며, 측정된 매출·이익·재무 수익이 아닙니다. 이 연구는 판매 효과를 입증하지 않습니다.",
      reflection: {
        learned:
          "복합 점수의 신뢰도는 가장 약한 구성 요소와 명시된 가정이 결정합니다. 800만 달러 기준선이 가장 분명한 예입니다 — 일률적이고 편리하지만, 독자가 알아서 발견하게 둘 것이 아니라 먼저 밝혀야 하는 가정입니다.",
        improve:
          "감성에 참여도 가중치를 적용하고, 한 시즌이 아닌 여러 시즌으로 점수를 검증하고 싶습니다.",
        expand:
          "외부 순위와 비교해 평가하는 다른 고노출 캠페인에도 같은 구조를 적용할 수 있습니다.",
      },
      evidence: [
        {
          file: "super-bowl-research-poster.jpg",
          alt: "연구 포스터 전체 — 슈퍼볼 광고의 성공을 측정하는 다차원 프레임워크",
          caption:
            "원본 연구 포스터입니다. 여기 실린 참여 효율 지표는 측정된 재무 ROI가 아닙니다.",
          credit:
            "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee · 지도교수: Chong Oh",
        },
        {
          file: "super-bowl-visibility-sentiment.png",
          alt: "브랜드별 트윗 볼륨과 긍정 비율의 산점도",
          caption:
            "볼륨과 긍정적 수용은 서로 다른 지표입니다. 연구 포스터에서 잘라 냈습니다.",
          credit: "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
        {
          file: "super-bowl-ad-meter-comparison.png",
          alt: "복합 Winning Score와 Ad Meter 순위의 산점도, 거의 평평한 추세선",
          caption:
            "Winning Score와 Ad Meter 순위의 비교. 포스터는 R² < 0.05를 보고합니다. 두 측정 방식의 분기를 보여 줄 뿐, 판매 효과를 검증한 것은 아닙니다.",
          credit: "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
        {
          file: "super-bowl-gdac-sentiment-breakdown.png",
          alt: "이전 대회 단계의 브랜드별 Tableau 감성 분포",
          caption:
            "이전 Game Day Analytics Challenge 단계의 Tableau 출력으로, 25개 브랜드로 필터링되어 있습니다. 같은 작업의 선행 단계이며 별개의 59개 브랜드 연구가 아닙니다.",
          credit: "Team No Brady: Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
        {
          file: "PROJECT01_tweet_volume_per_brand.png",
          alt: "브랜드별 트윗 볼륨 아카이브 차트",
          caption: "아카이브 분석 출력 — 브랜드별 트윗 볼륨.",
          credit: "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
        {
          file: "PROJECT01_engagement_vs_virality_matrix.png",
          alt: "브랜드별 참여 깊이와 확산성을 대비한 아카이브 매트릭스",
          caption:
            "아카이브 분석 출력 — 참여 깊이 대 확산성. 확산성이 높은 것과 참여가 깊은 것은 같은 축이 아닙니다.",
          credit: "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
        {
          file: "PROJECT01_engagement_per_1M.png",
          alt: "브랜드별 100만 노출당 참여도 아카이브 차트",
          caption: "아카이브 분석 출력 — 100만 노출당 참여도.",
          credit: "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
        {
          file: "PROJECT01_engagement_per_impression.png",
          alt: "브랜드별 노출당 참여도 아카이브 차트",
          caption:
            "아카이브 분석 출력 — 노출당 참여도. 정규화한 효율 지표 중 하나이며 재무 수익이 아닙니다.",
          credit: "Ellie Choi, Cienna Kim, Doahn Lee, Hangu Lee",
        },
      ],
    },
  },
  {
    slug: "where-should-you-invest-slc",
    number: "04",
    group: "proptech",
    tools: ["ArcGIS Pro", "Excel"],
    team: [],
    mentors: [],
    course: "CMP 4450 — GIS for Urban Ecologists",
    cover: { file: "project04_cover.png", fit: "contain" },
    links: {},
    en: {
      title: "SLC Residential Accessibility Screening",
      category: "PROPTECH · LOCATION INTELLIGENCE",
      subtitle:
        "Which residential zones sit within walking distance of a school, a park, and light rail at once?",
      role: "Individual GIS project",
      projectType: "PropTech · Location Intelligence · Spatial Analysis",
      timeline: "Summer 2026",
      status: "Completed course project · score-map verification outstanding",
      coverAlt:
        "Project poster: Where Should You Invest in Salt Lake City? Scoring residential neighbourhoods by walkable access to schools, parks and TRAX light rail",
      outcome:
        "713 of 2,711 residential zones (26.3%) meet all three proximity criteria, and transit — not schools or parks — is what separates them.",
      proofPoints: [
        "2,711 residential zones across Salt Lake City",
        "Five public UGRC datasets",
        "1-mile school and 0.5-mile park/TRAX straight-line buffers",
        "713 zones (26.3%) meet all three criteria",
      ],
      snapshot: [
        { label: "Role", value: "Individual GIS project" },
        { label: "Course", value: "CMP 4450" },
        { label: "Tools", value: "ArcGIS Pro · Excel" },
        { label: "Data", value: "Five public UGRC datasets" },
        { label: "Status", value: "Completed · Summer 2026" },
      ],
      overview:
        "Walkability studies usually map one amenity at a time, which makes a simple question awkward to answer: which neighbourhoods have everything nearby at once? This project combines proximity to schools, parks and TRAX light rail into a single 0–3 count for every residential zone in Salt Lake City, using five public datasets from Utah's open GIS portal.",
      problem:
        "As a screening question this is useful — it narrows a city down to a shortlist before anyone looks at prices or condition. The analysis stays deliberately on that side of the line: it reports which zones are close to what, and does not attempt to say what any of it is worth.",
      data: {
        dataset:
          "Five public datasets from the Utah Geospatial Resource Center (UGRC): schools PreK–12, local parks, TRAX light rail stations, municipal boundaries, and SLC zoning. Zones with codes beginning \"R\" define the 2,711 residential analysis units.",
        source:
          "Utah Geospatial Resource Center (UGRC) open data portal. Basemap: Esri and OpenStreetMap contributors.",
        cleaning:
          "All layers were clipped to the Salt Lake City municipal boundary, residential zones were selected by zoning code, and dissolved straight-line buffers were created at 1 mile for schools and 0.5 mile for parks and TRAX stations.",
        limitations:
          "The buffers measure straight-line proximity, not network walking distance — Salt Lake City's unusually large grid blocks and the I-15 barrier both make real walking routes longer than the buffer suggests. This is not a validated walkability index. There is no sale-price, rent or yield data, so nothing here establishes investment return. TRAX only; bus routes are excluded; the three amenities are weighted equally. The reported counts come from the project's own poster and report, not from an independent recomputation of the original GIS layers.",
      },
      methodSteps: [
        "Clipped all five UGRC datasets to the Salt Lake City municipal boundary",
        "Selected the 2,711 residential zones by zoning code",
        "Built dissolved straight-line buffers: 1 mi schools, 0.5 mi parks, 0.5 mi TRAX",
        "Flagged each zone 1 or 0 per amenity using Select by Location",
        "Summed the three flags into a 0–3 count per zone",
        "Exported the attribute table to Excel for the summary counts",
      ],
      findings: [
        "713 of 2,711 residential zones (26.3%) fall inside all three buffers.",
        "Transit is what separates them: 2,678 zones are near a school and 2,652 near a park, but only 742 are near a TRAX station.",
        "Because schools and parks are distributed across the city and rail is not, the west-side gap in combined proximity is a transit gap rather than an amenity gap.",
      ],
      metrics: [
        { label: "Residential zones", value: "2,711" },
        { label: "All three amenities", value: "713" },
        { label: "Share", value: "26.3%" },
        { label: "Near TRAX", value: "742" },
      ],
      highlights: [
        {
          label: "SCREENING LENS",
          text: "As a first filter this narrows 2,711 zones to 713 worth looking at more closely. It is a starting point for due diligence on price, condition and context — not a substitute for it.",
        },
        {
          label: "PLANNING LENS",
          text: "On the west side, extending transit rather than adding schools or parks is what would raise combined proximity most.",
        },
      ],
      impact:
        "A few standard GIS operations — clip, select, buffer, overlay — applied to free public data produce a map that narrows where to look. The result is a proximity screen and should be read as one: it says what is near what, not what anything is worth.",
      reflection: {
        learned:
          "Combining three layers into one count made the transit bottleneck obvious in a way three separate maps never did.",
        improve:
          "Replace straight-line buffers with network-based walking distances using real street geometry, and reconcile the score-map symbology against the reported counts before publishing that map.",
        expand:
          "Join assessor or sales data to test whether the top tier actually commands a premium, and add frequent-bus coverage alongside rail.",
      },
      evidence: [
        {
          file: "slc-gis-amenity-distribution.png",
          alt: "Map of school, park and TRAX station distribution across Salt Lake City",
          caption: "Distribution of schools, parks and TRAX stations.",
          credit:
            "Ellie Choi · Data: UGRC · Basemap: Esri, OpenStreetMap contributors",
        },
        {
          file: "slc-gis-amenity-buffers.png",
          alt: "Map of one-mile school and half-mile park and TRAX walking buffers",
          caption:
            "One-mile school and half-mile park/TRAX straight-line buffers over the 2,711 residential analysis units.",
          credit:
            "Ellie Choi · Data: UGRC · Basemap: Esri, OpenStreetMap contributors",
        },
        {
          file: "PROJECT04_score_map.png",
          alt: "Map of combined amenity access scores across Salt Lake City residential zones, graduated from gray to dark green",
          caption:
            "Combined access scores by residential zone, graduated from no access to all three amenities. Scores reflect straight-line proximity, not network walking distance.",
          credit:
            "Ellie Choi · Data: UGRC · Basemap: Esri, OpenStreetMap contributors",
        },
        {
          file: "PROJECT04_amenity_map.png",
          alt: "Poster layout of Map 1, the amenity distribution map",
          caption: "Map 1 as laid out on the poster — amenity distribution.",
          credit:
            "Ellie Choi · Data: UGRC · Basemap: Esri, OpenStreetMap contributors",
        },
        {
          file: "PROJECT04_buffer_map.png",
          alt: "Poster layout of Map 2, the walking-buffer overlay map",
          caption: "Map 2 as laid out on the poster — walking-buffer overlay.",
          credit:
            "Ellie Choi · Data: UGRC · Basemap: Esri, OpenStreetMap contributors",
        },
      ],
    },
    ko: {
      title: "솔트레이크시티 주거지 접근성 스크리닝",
      category: "프롭테크 · 로케이션 인텔리전스",
      subtitle:
        "학교, 공원, 경전철이 동시에 도보권에 있는 주거 구역은 어디인가?",
      role: "단독 GIS 프로젝트",
      projectType: "프롭테크 · 로케이션 인텔리전스 · 공간 분석",
      timeline: "2026년 여름",
      status: "수업 프로젝트 완료 · 점수 지도 검증 미완",
      coverAlt:
        "프로젝트 포스터 — 솔트레이크시티, 어디에 투자해야 할까? 학교·공원·트랙스 경전철 도보 접근성으로 주거 지역 점수화",
      outcome:
        "주거 구역 2,711개 중 713개(26.3%)가 세 가지 근접 조건을 모두 충족했고, 그 차이를 만드는 것은 학교나 공원이 아니라 대중교통이었습니다.",
      proofPoints: [
        "솔트레이크시티 주거 구역 2,711개",
        "공공 UGRC 데이터셋 5종",
        "학교 1마일, 공원·트랙스 0.5마일 직선 버퍼",
        "713개 구역(26.3%)이 세 조건 모두 충족",
      ],
      snapshot: [
        { label: "역할", value: "단독 GIS 프로젝트" },
        { label: "수업", value: "CMP 4450" },
        { label: "도구", value: "ArcGIS Pro · Excel" },
        { label: "데이터", value: "공공 UGRC 데이터셋 5종" },
        { label: "상태", value: "완료 · 2026년 여름" },
      ],
      overview:
        "보행성 연구는 보통 생활 인프라를 하나씩 따로 지도화하기 때문에, '무엇이든 한 번에 가까운 동네는 어디인가'라는 단순한 질문에 답하기 어렵습니다. 이 프로젝트는 유타주 공공 GIS 포털의 데이터 5종을 사용해, 솔트레이크시티의 모든 주거 구역에 학교·공원·트랙스 경전철 근접 여부를 합산한 0–3 점수를 부여했습니다.",
      problem:
        "스크리닝 질문으로서 이것은 유용합니다 — 가격이나 상태를 보기 전에 도시 전체를 후보군으로 좁혀 주기 때문입니다. 분석은 의도적으로 그 선을 지킵니다. 어떤 구역이 무엇에 가까운지를 보고할 뿐, 그것의 가치가 얼마인지는 말하지 않습니다.",
      data: {
        dataset:
          "유타 지리정보센터(UGRC)의 공공 데이터 5종 — PreK–12 학교, 지역 공원, 트랙스 경전철역, 행정경계, SLC 조닝. 코드가 \"R\"로 시작하는 구역이 2,711개의 주거 분석 단위를 이룹니다.",
        source:
          "유타 지리정보센터(UGRC) 공공 데이터 포털. 배경지도: Esri, OpenStreetMap 기여자.",
        cleaning:
          "모든 레이어를 솔트레이크시티 행정경계로 클립하고 조닝 코드로 주거 구역을 선택한 뒤, 학교 1마일·공원 0.5마일·트랙스 0.5마일의 직선 버퍼를 생성해 디졸브했습니다.",
        limitations:
          "버퍼는 실제 가로망 기준 도보 거리가 아니라 직선 근접도를 측정합니다. 솔트레이크시티의 유난히 큰 격자 블록과 I-15 단절 때문에 실제 보행 경로는 버퍼가 시사하는 것보다 깁니다. 검증된 보행성 지수가 아닙니다. 실거래가·임대료·수익률 데이터가 없으므로 투자 수익을 입증하지 않습니다. 버스 노선은 제외하고 트랙스만 반영했으며 세 인프라에 동일 가중치를 적용했습니다. 보고된 수치는 프로젝트의 포스터와 보고서에 기재된 값이며, 원본 GIS 레이어로 독립적으로 재계산한 값이 아닙니다.",
      },
      methodSteps: [
        "UGRC 데이터 5종을 솔트레이크시티 행정경계로 클립",
        "조닝 코드로 주거 구역 2,711개 선택",
        "직선 버퍼 생성 — 학교 1마일, 공원 0.5마일, 트랙스 0.5마일",
        "Select by Location으로 인프라별 1/0 플래그 부여",
        "세 플래그를 합산해 구역당 0–3 점수 산출",
        "속성 테이블을 Excel로 내보내 요약 집계",
      ],
      findings: [
        "주거 구역 2,711개 중 713개(26.3%)가 세 버퍼 안에 모두 들어갑니다.",
        "차이를 만드는 것은 대중교통입니다. 학교 근접은 2,678개, 공원 근접은 2,652개이지만 트랙스역 근접은 742개에 그칩니다.",
        "학교와 공원은 도시 전역에 분포하지만 철도는 그렇지 않기 때문에, 웨스트사이드의 통합 근접성 격차는 인프라 격차가 아니라 교통 격차입니다.",
      ],
      metrics: [
        { label: "주거 구역", value: "2,711" },
        { label: "세 조건 모두 충족", value: "713" },
        { label: "비율", value: "26.3%" },
        { label: "트랙스 근접", value: "742" },
      ],
      highlights: [
        {
          label: "스크리닝 관점",
          text: "1차 필터로서 2,711개 구역을 더 들여다볼 만한 713개로 좁혀 줍니다. 가격·상태·맥락에 대한 실사를 대체하지 않고, 그 출발점이 되는 도구입니다.",
        },
        {
          label: "계획 관점",
          text: "웨스트사이드에서는 학교나 공원을 늘리는 것보다 대중교통을 연장하는 편이 통합 근접성을 가장 크게 높입니다.",
        },
      ],
      impact:
        "클립, 선택, 버퍼, 오버레이 같은 표준 GIS 작업 몇 가지를 무료 공공 데이터에 적용하는 것만으로 어디부터 살펴볼지 좁혀 주는 지도를 만들 수 있습니다. 결과는 근접성 스크린이며, 그렇게 읽혀야 합니다 — 무엇이 무엇에 가까운지를 말할 뿐 가치를 말하지 않습니다.",
      reflection: {
        learned:
          "세 레이어를 하나의 점수로 합치자, 지도를 따로 볼 때는 보이지 않던 교통 병목이 분명해졌습니다.",
        improve:
          "직선 버퍼를 실제 가로 형상 기반의 네트워크 도보 거리로 바꾸고, 점수 지도의 심볼로지를 보고된 수치와 대조해 정리한 뒤에야 그 지도를 싣고 싶습니다.",
        expand:
          "과세·실거래 자료를 결합해 상위 구간이 실제로 프리미엄을 갖는지 검증하고, 철도와 함께 고빈도 버스 노선을 더할 수 있습니다.",
      },
      evidence: [
        {
          file: "slc-gis-amenity-distribution.png",
          alt: "솔트레이크시티의 학교·공원·트랙스역 분포 지도",
          caption: "학교, 공원, 트랙스역의 분포.",
          credit:
            "Ellie Choi · 데이터: UGRC · 배경지도: Esri, OpenStreetMap 기여자",
        },
        {
          file: "slc-gis-amenity-buffers.png",
          alt: "학교 1마일, 공원·트랙스 0.5마일 도보 버퍼 지도",
          caption:
            "2,711개 주거 분석 단위 위에 놓인 학교 1마일, 공원·트랙스 0.5마일 직선 버퍼.",
          credit:
            "Ellie Choi · 데이터: UGRC · 배경지도: Esri, OpenStreetMap 기여자",
        },
        {
          file: "PROJECT04_score_map.png",
          alt: "솔트레이크시티 주거 구역의 통합 접근성 점수 지도 — 회색에서 진한 초록으로 단계 구분",
          caption:
            "주거 구역별 통합 접근성 점수. 접근 불가부터 세 인프라 모두 충족까지 단계로 구분했습니다. 점수는 실제 가로망 도보 거리가 아니라 직선 근접도를 반영합니다.",
          credit:
            "Ellie Choi · 데이터: UGRC · 배경지도: Esri, OpenStreetMap 기여자",
        },
        {
          file: "PROJECT04_amenity_map.png",
          alt: "포스터에 실린 지도 1 — 인프라 분포 지도",
          caption: "포스터 레이아웃의 지도 1 — 인프라 분포.",
          credit:
            "Ellie Choi · 데이터: UGRC · 배경지도: Esri, OpenStreetMap 기여자",
        },
        {
          file: "PROJECT04_buffer_map.png",
          alt: "포스터에 실린 지도 2 — 도보 버퍼 오버레이 지도",
          caption: "포스터 레이아웃의 지도 2 — 도보 버퍼 오버레이.",
          credit:
            "Ellie Choi · 데이터: UGRC · 배경지도: Esri, OpenStreetMap 기여자",
        },
      ],
    },
  },
  {
    slug: "uber-ride-hailing-database",
    number: "05",
    group: "technical",
    tools: ["MySQL", "SQL", "LucidChart"],
    team: ["Ellie Choi", "Richard Conti", "Julia Park"],
    mentors: [],
    course: "IS 4420 — Database Fundamentals",
    cover: { file: "uber-database-erds.png", fit: "contain" },
    links: {},
    en: {
      title: "Uber-Inspired Ride-Hailing Database",
      category: "DATA MODELING · SQL",
      subtitle:
        "Designing a 17-entity relational model for rides, drivers, payments and support.",
      role: "Data modeling and DDL — team of three",
      projectType: "Data Modeling · Relational Databases · SQL",
      timeline: "Summer 2026",
      status: "Completed student team project",
      coverAlt:
        "Conceptual and logical entity-relationship diagrams for the ride-hailing database",
      outcome:
        "A 17-entity MySQL prototype the team populated with synthetic classroom data and queried ten different ways.",
      proofPoints: [
        "Conceptual, logical and physical ERDs in LucidChart",
        "DDL exported from the model",
        "Business rules and conflicting-requirements analysis",
        "Team prototype: 17 entities, synthetic data, 10 analytical queries",
      ],
      snapshot: [
        { label: "My scope", value: "ERDs · DDL export · business rules" },
        { label: "Course", value: "IS 4420" },
        { label: "Team", value: "Three students" },
        { label: "Tools", value: "MySQL · LucidChart" },
        { label: "Status", value: "Completed · Summer 2026" },
      ],
      overview:
        "A classroom database prototype modelled on a ride-hailing service. My part was the data model: working the domain up through conceptual, logical and physical ERDs in LucidChart, exporting the DDL from the finished model, and writing up the business rules — including the places where two stated requirements could not both hold and a decision had to be made. The team as a whole delivered the 17-entity schema with DDL/DML, synthetic records and ten analytical queries covering rides, drivers and riders, payments, ratings, cancellations and support.",
      problem:
        "Ride-hailing looks simple until it is modelled. A single trip touches riders, drivers, vehicles, pricing, payment, rating and sometimes a support case, and the requirements given in the brief did not all agree with each other. Resolving those conflicts in the model, rather than patching around them later, was the substance of the work.",
      data: {
        dataset:
          "Synthetic classroom records generated by the team to populate and exercise the schema.",
        source:
          "No real ride-hailing data was used. All records are invented for coursework.",
        cleaning:
          "Entities, keys and relationships were resolved in the logical model before the physical model and DDL were generated.",
        limitations:
          "This is a coursework prototype, not Uber client work and not a production system. The data is synthetic, so query outputs demonstrate that the schema answers a question — not any real operational or revenue figure. The SQL and query outputs remain classroom source material and are not published here.",
      },
      methodSteps: [
        "Gathered the domain requirements and identified where they conflicted",
        "Built the conceptual ERD to settle entities and relationships",
        "Developed the logical model with keys, cardinality and normalisation",
        "Produced the physical model and exported the DDL",
        "Documented business rules and the conflicting-requirements resolutions",
        "Presented the design — teammates handled SQL debugging, data loading and final assembly",
      ],
      findings: [
        "Seventeen entities were needed to cover rides, drivers and riders, vehicles, payments, ratings, cancellations and support without overloading any one table.",
        "Several stated requirements could not coexist; each conflict was resolved explicitly in the model and written up rather than left implicit.",
        "The team's ten analytical queries confirmed the schema could answer operational questions across all of those areas.",
      ],
      metrics: [
        { label: "Entities modeled", value: "17" },
        { label: "ERD stages", value: "3" },
        { label: "Team queries", value: "10" },
        { label: "Team size", value: "3" },
      ],
      impact:
        "The transferable part is the modelling discipline: resolving contradictory requirements at design time, and producing a schema someone else can query without first asking what a column means.",
      reflection: {
        learned:
          "The conflicting-requirements analysis turned out to be the most useful deliverable. Writing down why a rule was chosen made the model reviewable.",
        improve:
          "Add indexing and query-plan analysis rather than stopping at a correct schema.",
        expand:
          "Model surge pricing and driver scheduling, which the current design deliberately leaves out.",
      },
      evidence: [
        {
          file: "uber-database-erds.png",
          alt: "Conceptual and logical entity-relationship diagrams for the ride-hailing database",
          caption:
            "Conceptual and logical ERDs from the completed classroom prototype.",
          credit:
            "Team: Ellie Choi, Richard Conti, Julia Park · Ellie: data modeling and DDL export",
        },
        {
          file: "uber-database-physical-model.png",
          alt: "Physical data model and design evolution for the ride-hailing database",
          caption:
            "Physical model and design evolution. A classroom prototype with generated sample data, not production architecture.",
          credit: "Ellie Choi, Richard Conti, Julia Park",
        },
      ],
    },
    ko: {
      title: "우버 기반 차량 호출 데이터베이스",
      category: "데이터 모델링 · SQL",
      subtitle:
        "운행, 기사, 결제, 고객 지원을 아우르는 17개 엔터티 관계 모델 설계.",
      role: "데이터 모델링과 DDL — 3인 팀",
      projectType: "데이터 모델링 · 관계형 데이터베이스 · SQL",
      timeline: "2026년 여름",
      status: "학생 팀 프로젝트 완료",
      coverAlt: "차량 호출 데이터베이스의 개념·논리 ERD",
      outcome:
        "팀이 합성 수업용 데이터로 채우고 열 가지 방식으로 질의한 17개 엔터티 MySQL 프로토타입.",
      proofPoints: [
        "LucidChart로 작성한 개념·논리·물리 ERD",
        "모델에서 내보낸 DDL",
        "비즈니스 규칙과 상충 요구사항 분석",
        "팀 산출물: 17개 엔터티, 합성 데이터, 분석 쿼리 10개",
      ],
      snapshot: [
        { label: "담당 범위", value: "ERD · DDL 내보내기 · 비즈니스 규칙" },
        { label: "수업", value: "IS 4420" },
        { label: "팀", value: "학생 3인" },
        { label: "도구", value: "MySQL · LucidChart" },
        { label: "상태", value: "완료 · 2026년 여름" },
      ],
      overview:
        "차량 호출 서비스를 모델로 삼은 수업용 데이터베이스 프로토타입입니다. 제가 맡은 부분은 데이터 모델이었습니다 — LucidChart에서 개념·논리·물리 ERD로 도메인을 단계적으로 정리하고, 완성된 모델에서 DDL을 내보내고, 비즈니스 규칙을 문서화했습니다. 여기에는 명시된 두 요구사항이 동시에 성립할 수 없어 결정을 내려야 했던 지점들도 포함됩니다. 팀 전체로는 17개 엔터티 스키마와 DDL/DML, 합성 레코드, 그리고 운행·기사·탑승자·결제·평점·취소·고객지원을 다루는 분석 쿼리 10개를 제출했습니다.",
      problem:
        "차량 호출은 모델링을 시작하기 전까지는 단순해 보입니다. 운행 한 건이 탑승자, 기사, 차량, 요금, 결제, 평점, 때로는 고객 지원까지 건드리고, 과제에 주어진 요구사항들은 서로 완전히 일치하지도 않았습니다. 이 충돌을 나중에 땜질하지 않고 모델 단계에서 해소하는 것이 작업의 핵심이었습니다.",
      data: {
        dataset: "스키마를 채우고 검증하기 위해 팀이 생성한 합성 수업용 레코드.",
        source: "실제 차량 호출 데이터는 사용하지 않았습니다. 모든 레코드는 수업용으로 만든 것입니다.",
        cleaning:
          "물리 모델과 DDL을 생성하기 전에 논리 모델에서 엔터티, 키, 관계를 정리했습니다.",
        limitations:
          "우버의 실제 업무나 운영 시스템이 아니라 수업 프로토타입입니다. 데이터가 합성이므로 쿼리 결과는 스키마가 질문에 답할 수 있음을 보여 줄 뿐, 실제 운영 수치나 매출을 뜻하지 않습니다. SQL과 쿼리 출력은 수업 원자료로 남겨 두었으며 여기에 공개하지 않습니다.",
      },
      methodSteps: [
        "도메인 요구사항을 수집하고 상충 지점을 식별",
        "엔터티와 관계를 확정하는 개념 ERD 작성",
        "키·카디널리티·정규화를 반영한 논리 모델 개발",
        "물리 모델을 만들고 DDL 내보내기",
        "비즈니스 규칙과 상충 요구사항 해소 방안 문서화",
        "설계 발표 — SQL 디버깅·데이터 적재·최종 취합은 팀원들이 담당",
      ],
      findings: [
        "운행, 기사와 탑승자, 차량, 결제, 평점, 취소, 고객 지원을 한 테이블에 몰지 않고 담으려면 17개 엔터티가 필요했습니다.",
        "명시된 요구사항 중 몇 가지는 동시에 성립할 수 없었고, 각 충돌을 모델에서 명시적으로 해소해 암묵적으로 남기지 않고 문서화했습니다.",
        "팀의 분석 쿼리 10개로 이 스키마가 해당 영역 전반의 운영 질문에 답할 수 있음을 확인했습니다.",
      ],
      metrics: [
        { label: "모델링한 엔터티", value: "17" },
        { label: "ERD 단계", value: "3" },
        { label: "팀 쿼리", value: "10" },
        { label: "팀 규모", value: "3" },
      ],
      impact:
        "전이되는 것은 모델링의 태도입니다 — 모순된 요구사항을 설계 시점에 해소하고, 컬럼의 의미를 되묻지 않아도 다른 사람이 바로 질의할 수 있는 스키마를 남기는 일입니다.",
      reflection: {
        learned:
          "상충 요구사항 분석이 가장 쓸모 있는 산출물이었습니다. 왜 그 규칙을 택했는지 적어 두자 모델을 검토할 수 있게 되었습니다.",
        improve: "올바른 스키마에서 멈추지 않고 인덱싱과 실행 계획 분석까지 해 보고 싶습니다.",
        expand:
          "현재 설계가 의도적으로 제외한 탄력 요금과 기사 스케줄링을 모델링할 수 있습니다.",
      },
      evidence: [
        {
          file: "uber-database-erds.png",
          alt: "차량 호출 데이터베이스의 개념·논리 개체관계도",
          caption: "완료된 수업 프로토타입의 개념·논리 ERD.",
          credit:
            "팀: Ellie Choi, Richard Conti, Julia Park · Ellie: 데이터 모델링과 DDL 내보내기",
        },
        {
          file: "uber-database-physical-model.png",
          alt: "차량 호출 데이터베이스의 물리 데이터 모델과 설계 변천",
          caption:
            "물리 모델과 설계 변천. 생성된 샘플 데이터를 쓴 수업 프로토타입이며 실제 운영 아키텍처가 아닙니다.",
          credit: "Ellie Choi, Richard Conti, Julia Park",
        },
      ],
    },
  },
  {
    slug: "salesforce-athletics-recruiting",
    number: "06",
    group: "technical",
    tools: ["Salesforce"],
    team: ["Ellie Choi", "Doahn Lee", "Eubon Shin"],
    mentors: [],
    cover: { file: "salesforce-recruiting-kanban.png", fit: "contain" },
    links: {},
    en: {
      title: "Athletics Recruiting CRM in Salesforce",
      category: "CRM PROTOTYPE · PROCESS DESIGN",
      subtitle:
        "Turning a recruiting pipeline into five objects and a board someone can actually work from.",
      role: "Team collaborator",
      projectType: "CRM · Process Design · Competition Prototype",
      timeline: "September 2025",
      status: "Completed student competition prototype",
      coverAlt:
        "Salesforce Kanban board of athlete prospects across the five recruiting stages, with demonstration records",
      outcome:
        "A working Salesforce prototype built in a weekend competition: five objects, a Kanban pipeline, automated follow-ups and a role-based dashboard.",
      proofPoints: [
        "Five domain objects: athlete prospect, communication, campus visit, offer, evaluation",
        "Five-stage recruiting pipeline as a Kanban board",
        "Automated follow-up reminders",
        "Role-based dashboard and an implementation guide",
      ],
      snapshot: [
        { label: "Role", value: "Team collaborator" },
        { label: "Event", value: "Salesforce–Eccles IDEAthon" },
        { label: "Team", value: "Three students" },
        { label: "Objects", value: "5" },
        { label: "Status", value: "Prototype · September 2025" },
      ],
      overview:
        "Built for the Salesforce–Eccles IDEAthon. Athletics recruiting is a long pipeline with a lot of touchpoints, usually tracked across spreadsheets and inboxes. The team modelled it as five Salesforce objects — athlete prospect, communication, campus visit, offer and evaluation — and moved prospects through a five-stage pipeline from initial contact to committed, with follow-up reminders and a dashboard scoped by role.",
      problem:
        "The hard part of recruiting software is not storing names. It is that a prospect's state is spread across conversations, visits and evaluations held by different people, and the thing that gets missed is the follow-up nobody owns.",
      data: {
        dataset:
          "Demonstration athlete records created for the prototype.",
        source:
          "No real prospect data was used. Everything shown is invented for the competition demo.",
        cleaning: "",
        limitations:
          "This is a competition prototype. It was not adopted by any university, never ran against real recruiting data, and no conversion or efficiency gain was measured. The prototype's visit-limit reminders are configurable alerts set to the figure used in the team's guide — they are not verified NCAA compliance logic and should not be relied on as rules.",
      },
      methodSteps: [
        "Mapped the recruiting process into five pipeline stages",
        "Modelled five domain objects and their relationships in Salesforce",
        "Built the Kanban board so prospects move by stage",
        "Configured automated follow-up reminders",
        "Built a role-based dashboard over the pipeline",
        "Wrote an implementation guide for handover",
      ],
      findings: [
        "Five objects were enough to hold the process without forcing staff into free-text notes.",
        "Making the stage the primary view, rather than the record, is what surfaces the prospects nobody has contacted recently.",
        "Role-based dashboards matter here because a coach and an administrator need different slices of the same pipeline.",
      ],
      metrics: [
        { label: "Domain objects", value: "5" },
        { label: "Pipeline stages", value: "5" },
        { label: "Team size", value: "3" },
        { label: "Build window", value: "IDEAthon" },
      ],
      impact:
        "The transferable work is process modelling on a CRM platform: naming the entities, deciding what a stage change means, and automating the handoff that otherwise depends on someone remembering. Whether it would hold up in a real athletics department is untested.",
      reflection: {
        learned:
          "Choosing the five stages was the real design decision. Everything after that followed from where the boundaries were drawn.",
        improve:
          "Validate the visit and contact rules against the actual governing requirements rather than a figure carried over from the guide.",
        expand:
          "Add reporting on pipeline velocity to see where prospects stall.",
      },
      evidence: [
        {
          file: "salesforce-recruiting-kanban.png",
          alt: "Salesforce Kanban board of athlete prospects across five recruiting stages, with demonstration records",
          caption:
            "The recruiting Kanban prototype, shown with demonstration athlete records. A student competition project, not a university deployment.",
          credit: "Ellie Choi, Doahn Lee, Eubon Shin",
        },
        {
          file: "salesforce-recruiting-dashboard.png",
          alt: "Salesforce recruiting pipeline dashboard with demonstration records",
          caption:
            "Recruiting pipeline dashboard, shown with demonstration records. The prototype's alert logic is configurable, not verified NCAA guidance.",
          credit: "Ellie Choi, Doahn Lee, Eubon Shin",
        },
      ],
    },
    ko: {
      title: "Salesforce 기반 선수 리크루팅 CRM",
      category: "CRM 프로토타입 · 프로세스 설계",
      subtitle:
        "리크루팅 파이프라인을 다섯 개의 오브젝트와 실제로 일할 수 있는 보드로.",
      role: "팀 협업",
      projectType: "CRM · 프로세스 설계 · 대회 프로토타입",
      timeline: "2025년 9월",
      status: "학생 대회 프로토타입 완료",
      coverAlt:
        "다섯 단계 리크루팅 파이프라인에 데모 레코드가 배치된 Salesforce 칸반 보드",
      outcome:
        "대회 기간에 만든 작동하는 Salesforce 프로토타입 — 오브젝트 5개, 칸반 파이프라인, 자동 팔로업, 역할 기반 대시보드.",
      proofPoints: [
        "도메인 오브젝트 5개: 선수 후보, 커뮤니케이션, 캠퍼스 방문, 오퍼, 평가",
        "칸반 보드로 구현한 5단계 리크루팅 파이프라인",
        "자동 팔로업 리마인더",
        "역할 기반 대시보드와 구현 가이드",
      ],
      snapshot: [
        { label: "역할", value: "팀 협업" },
        { label: "행사", value: "Salesforce–Eccles IDEAthon" },
        { label: "팀", value: "학생 3인" },
        { label: "오브젝트", value: "5" },
        { label: "상태", value: "프로토타입 · 2025년 9월" },
      ],
      overview:
        "Salesforce–Eccles IDEAthon을 위해 만든 프로토타입입니다. 선수 리크루팅은 접점이 많은 긴 파이프라인이고, 보통 스프레드시트와 메일함에 흩어져 관리됩니다. 팀은 이를 선수 후보, 커뮤니케이션, 캠퍼스 방문, 오퍼, 평가의 다섯 Salesforce 오브젝트로 모델링하고, 최초 접촉부터 합류 확정까지 5단계 파이프라인으로 후보를 이동시키면서 팔로업 리마인더와 역할별 대시보드를 붙였습니다.",
      problem:
        "리크루팅 소프트웨어의 어려움은 이름을 저장하는 데 있지 않습니다. 후보의 현재 상태가 서로 다른 사람이 가진 대화, 방문, 평가에 흩어져 있고, 결국 놓치는 것은 아무도 책임지지 않는 후속 연락이라는 점에 있습니다.",
      data: {
        dataset: "프로토타입용으로 만든 데모 선수 레코드.",
        source:
          "실제 선수 후보 데이터는 사용하지 않았습니다. 화면에 보이는 것은 모두 대회 데모용으로 만든 가상 데이터입니다.",
        cleaning: "",
        limitations:
          "대회 프로토타입입니다. 어느 대학에도 도입되지 않았고, 실제 리크루팅 데이터로 운영된 적이 없으며, 전환율이나 효율 개선을 측정하지 않았습니다. 방문 횟수 리마인더는 팀 가이드에 쓰인 수치로 설정한 구성 가능한 알림일 뿐, 검증된 NCAA 규정 로직이 아니며 규칙으로 신뢰해서는 안 됩니다.",
      },
      methodSteps: [
        "리크루팅 과정을 다섯 개 파이프라인 단계로 정리",
        "Salesforce에서 다섯 도메인 오브젝트와 관계를 모델링",
        "단계별로 후보가 이동하는 칸반 보드 구축",
        "자동 팔로업 리마인더 설정",
        "파이프라인 위에 역할 기반 대시보드 구성",
        "인수인계를 위한 구현 가이드 작성",
      ],
      findings: [
        "담당자가 자유 서술 메모에 기대지 않고도 프로세스를 담기에 오브젝트 다섯 개면 충분했습니다.",
        "레코드가 아니라 단계를 기본 화면으로 두는 선택이, 최근에 아무도 연락하지 않은 후보를 드러나게 합니다.",
        "코치와 행정 담당자는 같은 파이프라인에서 서로 다른 단면을 필요로 하므로 역할 기반 대시보드가 중요했습니다.",
      ],
      metrics: [
        { label: "도메인 오브젝트", value: "5" },
        { label: "파이프라인 단계", value: "5" },
        { label: "팀 규모", value: "3" },
        { label: "제작 기간", value: "IDEAthon" },
      ],
      impact:
        "전이되는 작업은 CRM 플랫폼 위에서의 프로세스 모델링입니다 — 엔터티에 이름을 붙이고, 단계 변경이 무엇을 뜻하는지 정하고, 누군가의 기억에 의존하던 인계를 자동화하는 일. 실제 체육부 현장에서 통할지는 검증되지 않았습니다.",
      reflection: {
        learned:
          "다섯 단계를 어떻게 나눌지가 진짜 설계 결정이었습니다. 그 경계를 어디에 그었는가에서 나머지가 따라왔습니다.",
        improve:
          "방문·접촉 규칙을 가이드에서 옮겨 온 수치가 아니라 실제 규정 요건과 대조해 검증하고 싶습니다.",
        expand: "후보가 어디서 정체되는지 보기 위해 파이프라인 속도 리포팅을 더할 수 있습니다.",
      },
      evidence: [
        {
          file: "salesforce-recruiting-kanban.png",
          alt: "다섯 단계 리크루팅 파이프라인에 데모 레코드가 배치된 Salesforce 칸반 보드",
          caption:
            "데모 선수 레코드로 보여 주는 리크루팅 칸반 프로토타입. 대학에 도입된 시스템이 아니라 학생 대회 프로젝트입니다.",
          credit: "Ellie Choi, Doahn Lee, Eubon Shin",
        },
        {
          file: "salesforce-recruiting-dashboard.png",
          alt: "데모 레코드가 표시된 Salesforce 리크루팅 파이프라인 대시보드",
          caption:
            "데모 레코드로 보여 주는 리크루팅 파이프라인 대시보드. 프로토타입의 알림 로직은 구성 가능한 설정이며 검증된 NCAA 가이드가 아닙니다.",
          credit: "Ellie Choi, Doahn Lee, Eubon Shin",
        },
      ],
    },
  },
  {
    slug: "slc-civic-center-healthy-urban-planning",
    number: "07",
    group: "additional",
    tools: ["HPI", "Site observation", "Pedestrian counts"],
    team: ["Ellie Choi", "Hannah Dudley"],
    mentors: [],
    course: "CMP 4060/6060 — Healthy Urban Planning",
    cover: { file: "green-loop-civic-center-health-pathway.png", fit: "contain" },
    links: {},
    en: {
      title: "SLC Green Loop / Civic Center Health Planning",
      category: "URBAN ANALYTICS · HEALTHY PLANNING",
      subtitle:
        "Assessing a downtown civic block within Salt Lake City's Green Loop context.",
      role: "Student team analysis — two people",
      projectType: "Urban Analytics · Healthy Planning",
      timeline: "Spring 2026",
      status: "Completed student team analysis",
      coverAlt:
        "Diagram of the hypothesized pathway from public-space improvements through physical activity to health outcomes",
      outcome:
        "A set of recommendations — traffic calming, active green-space programming and anti-displacement policy — argued from site observation rather than from model output.",
      proofPoints: [
        "Site observations of the Civic Center block",
        "HPI comparisons across the surrounding area",
        "Pedestrian-count data",
        "Health-pathway framework linking space to activity to outcomes",
      ],
      snapshot: [
        { label: "Role", value: "Student team analysis" },
        { label: "Course", value: "CMP 4060/6060" },
        { label: "With", value: "Hannah Dudley" },
        { label: "Methods", value: "Observation · HPI · pedestrian counts" },
        { label: "Status", value: "Completed · Spring 2026" },
      ],
      overview:
        "Green Loop and Civic Center are one piece of work, not two: the Civic Center block was assessed within the wider Green Loop context. The analysis used site observations, Health Place Index comparisons and pedestrian counts to look at equity, green-space access and chronic-disease risk, then set out what could change.",
      problem:
        "A civic block is usually evaluated on land use and physical form. That misses who actually uses it, who can reach it, and whether being there encourages the kind of activity that affects long-term health.",
      data: {
        dataset:
          "Site observations, HPI comparisons and pedestrian-count data for the Civic Center block and surrounding area.",
        source: "",
        cleaning:
          "Observations were structured into comparable criteria so the block could be assessed against the surrounding area rather than in isolation.",
        limitations:
          "The health pathway is a hypothesized relationship drawn from the planning literature, not a measured effect. No disease reduction was demonstrated, no policy was adopted, and the recommendations have not been evaluated. Conclusions rest on observational data and framework indicators at district scale.",
      },
      methodSteps: [
        "Defined the assessment question for the Civic Center block",
        "Conducted site observations across the block and its approaches",
        "Compared HPI indicators for the surrounding area",
        "Collected and reviewed pedestrian-count data",
        "Applied a health-pathway framework linking space to activity to outcomes",
        "Translated the findings into design and policy recommendations",
      ],
      findings: [
        "Assessing the block on health and equity rather than land use alone changed which problems looked urgent.",
        "Pedestrian counts and observation together showed where the block is avoided, which indicators at district scale do not reveal.",
        "The recommendations group into three: traffic calming, active green-space programming, and anti-displacement policy alongside any improvement.",
      ],
      metrics: [
        { label: "Framework", value: "HPI" },
        { label: "Scale", value: "Civic block" },
        { label: "Team", value: "2" },
        { label: "Output", value: "Recommendations" },
      ],
      impact:
        "The analysis gives a planner a defensible way to compare civic blocks on health and equity rather than land use alone. The recommendations are a proposal derived from the framework and the site work — not an evaluated outcome.",
      reflection: {
        learned:
          "Framework indicators only persuade when they are tied to something observable on the site. The walk mattered as much as the index.",
        improve:
          "Score before/after scenarios so the recommendations can be compared rather than listed.",
        expand: "Apply the same assessment to other blocks along the Green Loop.",
      },
      evidence: [
        {
          file: "green-loop-civic-center-health-pathway.png",
          alt: "Diagram of the hypothesized pathway from public-space improvements through physical activity to health outcomes",
          caption:
            "The hypothesized relationship between public-space improvements, physical activity and health. A framework for the recommendations, not measured disease reduction.",
          credit: "Ellie Choi and Hannah Dudley · CMP 4060/6060",
        },
        {
          file: "project03_cover.png",
          alt: "Wide layout of the health-pathway diagram, from Civic Center beautification through physical activity to health outcomes",
          caption:
            "The same pathway in the wider layout used on the project board. The health outcomes on the right are the hypothesized end of the chain, not measured results.",
          credit: "Ellie Choi and Hannah Dudley · CMP 4060/6060",
        },
      ],
    },
    ko: {
      title: "SLC 그린루프 / 시빅센터 건강 계획",
      category: "어반 애널리틱스 · 건강 도시계획",
      subtitle:
        "솔트레이크시티 그린루프 맥락 속에서 도심 시빅 블록을 진단합니다.",
      role: "학생 팀 분석 — 2인",
      projectType: "어반 애널리틱스 · 건강 도시계획",
      timeline: "2026년 봄",
      status: "학생 팀 분석 완료",
      coverAlt:
        "공공 공간 개선에서 신체 활동을 거쳐 건강 결과로 이어지는 가설적 경로 다이어그램",
      outcome:
        "교통정온화, 능동적 녹지 프로그램, 비자발적 이주 방지 정책 — 모델 출력이 아니라 현장 관찰에서 도출한 권고안.",
      proofPoints: [
        "시빅센터 블록 현장 관찰",
        "주변 지역 HPI 비교",
        "보행자 통행량 데이터",
        "공간–활동–건강을 잇는 건강 경로 프레임워크",
      ],
      snapshot: [
        { label: "역할", value: "학생 팀 분석" },
        { label: "수업", value: "CMP 4060/6060" },
        { label: "공동", value: "Hannah Dudley" },
        { label: "방법", value: "관찰 · HPI · 보행자 통행량" },
        { label: "상태", value: "완료 · 2026년 봄" },
      ],
      overview:
        "그린루프와 시빅센터는 별개의 두 작업이 아니라 하나입니다. 시빅센터 블록을 더 넓은 그린루프 맥락 안에서 진단했습니다. 현장 관찰, Health Place Index 비교, 보행자 통행량 데이터를 활용해 형평성, 녹지 접근성, 만성질환 위험을 살핀 뒤 무엇을 바꿀 수 있을지 정리했습니다.",
      problem:
        "시빅 블록은 보통 토지 이용과 물리적 형태로 평가됩니다. 그 방식은 실제로 누가 그곳을 쓰는지, 누가 닿을 수 있는지, 그곳에 머무는 일이 장기적 건강에 영향을 주는 활동으로 이어지는지를 놓칩니다.",
      data: {
        dataset:
          "시빅센터 블록과 주변 지역에 대한 현장 관찰, HPI 비교, 보행자 통행량 데이터.",
        source: "",
        cleaning:
          "관찰 내용을 비교 가능한 기준으로 구조화해, 블록을 고립적으로가 아니라 주변 지역과 견주어 진단했습니다.",
        limitations:
          "건강 경로는 계획 문헌에서 가져온 가설적 관계이며 측정된 효과가 아닙니다. 질병 감소를 입증하지 않았고, 채택된 정책도 없으며, 권고안의 효과는 평가되지 않았습니다. 결론은 지구 스케일의 관찰 데이터와 프레임워크 지표에 기반합니다.",
      },
      methodSteps: [
        "시빅센터 블록에 대한 진단 질문 정의",
        "블록과 접근로 전반에 대한 현장 관찰 수행",
        "주변 지역의 HPI 지표 비교",
        "보행자 통행량 데이터 수집·검토",
        "공간–활동–건강을 잇는 건강 경로 프레임워크 적용",
        "발견을 설계·정책 권고안으로 전환",
      ],
      findings: [
        "토지 이용만이 아니라 건강과 형평성으로 블록을 진단하자, 시급해 보이는 문제의 우선순위가 달라졌습니다.",
        "보행자 통행량과 현장 관찰을 함께 보면 이 블록이 어디에서 회피되는지가 드러났고, 이는 지구 스케일 지표만으로는 보이지 않았습니다.",
        "권고안은 세 갈래로 모입니다 — 교통정온화, 능동적 녹지 프로그램, 그리고 모든 개선과 함께 가야 할 비자발적 이주 방지 정책.",
      ],
      metrics: [
        { label: "프레임워크", value: "HPI" },
        { label: "스케일", value: "시빅 블록" },
        { label: "팀", value: "2" },
        { label: "결과물", value: "권고안" },
      ],
      impact:
        "계획가가 시빅 블록을 토지 이용만이 아니라 건강과 형평성으로 비교할 수 있는 근거를 제공합니다. 권고안은 프레임워크와 현장 작업에서 도출한 제안이며, 효과가 평가된 결과는 아닙니다.",
      reflection: {
        learned:
          "프레임워크 지표는 현장에서 눈으로 확인할 수 있는 것과 연결될 때만 설득력을 가집니다. 직접 걷는 일이 지수만큼 중요했습니다.",
        improve:
          "권고안을 나열하는 데서 그치지 않고 전후 시나리오를 점수화해 비교할 수 있게 하고 싶습니다.",
        expand: "같은 진단을 그린루프를 따라 늘어선 다른 블록에도 적용할 수 있습니다.",
      },
      evidence: [
        {
          file: "green-loop-civic-center-health-pathway.png",
          alt: "공공 공간 개선에서 신체 활동을 거쳐 건강 결과로 이어지는 가설적 경로 다이어그램",
          caption:
            "공공 공간 개선, 신체 활동, 건강 사이의 가설적 관계. 권고안의 프레임워크이며 측정된 질병 감소가 아닙니다.",
          credit: "Ellie Choi, Hannah Dudley · CMP 4060/6060",
        },
        {
          file: "project03_cover.png",
          alt: "시빅센터 미화에서 신체 활동을 거쳐 건강 결과로 이어지는 건강 경로 다이어그램의 와이드 레이아웃",
          caption:
            "프로젝트 보드에 쓰인 와이드 레이아웃의 같은 경로도. 오른쪽의 건강 결과는 가설적 연결의 끝단이며 측정된 결과가 아닙니다.",
          credit: "Ellie Choi, Hannah Dudley · CMP 4060/6060",
        },
      ],
    },
  },
];
