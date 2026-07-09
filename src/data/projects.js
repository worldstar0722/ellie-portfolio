// Featured case studies. Format per card: one-line problem → tool tags →
// 1–2 result images → one-line takeaway.
// TODO: {N} metric placeholders below need real numbers.
// TODO: image files need to be dropped into public/images/ (gray
// placeholder blocks render until then).
export const projects = [
  {
    id: "gameday-analytics",
    number: "01",
    tags: ["Python", "Twitter API", "NLP", "Tableau"],
    images: ["/images/gameday-tableau.jpg"], // TODO: Tableau dashboard screenshot
    en: {
      title: "Game Day Analytics Challenge",
      date: "Feb 2026",
      problem: "Which Super Bowl commercials actually earned their airtime?",
      whatIDid:
        "Pulled Super Bowl commercial tweets via the Twitter API, engineered sentiment and return-on-ad-spend (ROAS) metrics in Python (pandas, nltk), and built interactive Tableau dashboards presented to a panel of industry judges.",
      // TODO: replace {N} with the real tweet count
      metric: "{N} tweets analyzed",
      takeaway:
        "High visibility didn't mean positive reception — a metric framework judges could act on.",
    },
    ko: {
      title: "게임데이 애널리틱스 챌린지",
      date: "2026년 2월",
      problem: "슈퍼볼 광고는 정말 그 광고비만큼의 가치를 했을까?",
      whatIDid:
        "Twitter API로 슈퍼볼 광고 트윗을 수집하고, Python(pandas, nltk)으로 감성 지표와 광고비 대비 수익률(ROAS) 지표를 설계했으며, 업계 심사위원단 앞에서 인터랙티브 Tableau 대시보드를 발표했습니다.",
      // TODO: replace {N} with the real tweet count
      metric: "트윗 {N}건 분석",
      takeaway:
        "많이 보였다고 좋게 남는 것은 아니라는 사실 — 심사위원이 바로 쓸 수 있는 지표 프레임워크로 증명했습니다.",
    },
  },
  {
    id: "slc-civic-center",
    number: "02",
    tags: ["QGIS", "HPI", "Spatial analysis", "Policy"],
    images: ["/images/civic-center-map.jpg"], // TODO: QGIS map or analysis visual
    en: {
      title: "SLC Civic Center Healthy Urban Planning Analysis",
      date: "Spring 2026",
      problem:
        "How healthy and equitable is Salt Lake City's Civic Center district for the people who live there?",
      whatIDid:
        "Conducted a site assessment and Healthy Places Index (HPI) data analysis evaluating equity, green-space access, and chronic-disease risk; proposed traffic calming, active-use green space programming, and anti-gentrification policies.",
      metric: "",
      takeaway:
        "A health-first redesign agenda grounded in measurable equity data.",
    },
    ko: {
      title: "SLC 시빅센터 건강 도시계획 분석",
      date: "2026년 봄",
      problem:
        "솔트레이크시티 시빅센터 지구는 그곳에 사는 사람들에게 얼마나 건강하고 공평한 공간일까?",
      whatIDid:
        "현장 조사와 Healthy Places Index(HPI) 데이터 분석으로 형평성, 녹지 접근성, 만성질환 위험을 평가하고 교통정온화, 활동형 녹지 프로그램, 젠트리피케이션 방지 정책을 제안했습니다.",
      metric: "",
      takeaway: "측정 가능한 형평성 데이터에 근거한 건강 우선 재설계 어젠다.",
    },
  },
  {
    id: "adobe-social-impact",
    number: "03",
    tags: ["Adobe Creative Suite", "Branding", "Web design"],
    images: ["/images/adobe-challenge.jpg"], // TODO: design deliverables
    en: {
      title: "Adobe Social Impact Challenge — 1st Place",
      date: "2023",
      problem:
        "A company needed branding that communicated its social impact mission.",
      whatIDid:
        "Designed webpage layouts and marketing assets in Adobe Creative Suite (Photoshop, Express); won 1st place among all participating teams, and later served as a TA for the 2025 edition of the same challenge.",
      metric: "",
      takeaway: "Brand systems that made a mission legible — 1st place among all teams.",
    },
    ko: {
      title: "어도비 소셜 임팩트 챌린지 — 1위",
      date: "2023",
      problem: "사회적 임팩트 미션을 전달할 브랜딩이 필요했던 기업.",
      whatIDid:
        "Adobe Creative Suite(Photoshop, Express)로 웹페이지 레이아웃과 마케팅 에셋을 디자인해 전체 참가팀 중 1위를 차지했고, 2025년 대회에서는 TA로 참여했습니다.",
      metric: "",
      takeaway: "미션을 읽히게 만든 브랜드 시스템 — 전체 팀 중 1위.",
    },
  },
];
