export const translations = {
  en: {
    nav: {
      name: "ELLIE CHOI",
      work: "WORK",
      skills: "SKILLS",
      experience: "EXPERIENCE",
      journey: "JOURNEY",
      recognition: "RECOGNITION",
      contact: "CONTACT",
      langEn: "EN",
      langKo: "KO",
    },
    hero: {
      tagline: "DATA · BUSINESS · URBAN · CREATIVE",
      headlineLine1: "Turning data",
      headlineLine2: "into decisions.",
      subline:
        "Information systems · business analytics · urban planning — University of Utah",
      resume: "RESUME",
      linkedin: "LINKEDIN",
      coffeeChat: "COFFEE CHAT",
    },
    projects: {
      heading: "Featured Projects",
      problemLabel: "Problem",
      tookLabel: "What I did",
      takeawayLabel: "Takeaway",
    },
    skills: {
      heading: "Skills",
      categories: [
        {
          id: "data",
          label: "DATA",
          items: [
            "Python (pandas, scikit-learn, nltk)",
            "SQL / MySQL",
            "Tableau",
            "Power BI",
          ],
        },
        {
          id: "business",
          label: "BUSINESS",
          items: [
            "Excel modeling",
            "Financial reconciliation & reporting",
            "Accounting fundamentals",
          ],
        },
        {
          id: "urban",
          label: "URBAN",
          items: [
            "QGIS",
            "Healthy Places Index (HPI)",
            "Field research",
            "Land-use analysis",
          ],
        },
        {
          id: "creative",
          label: "CREATIVE",
          items: [
            "Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro, InDesign)",
            "Figma",
          ],
        },
      ],
    },
    experience: {
      heading: "Experience",
      entries: [
        {
          id: "ta",
          title: "Teaching Assistant — Information Systems",
          org: "David Eccles School of Business",
          period: "Aug 2025 – Present",
          detail:
            "Support IS 2010 (Spreadsheet Analysis) and IS 3060 through labs, grading, and 1-on-1 Excel modeling guidance.",
          // TODO: replace {N} with the real student count
          metric: "Serving {N}+ students",
        },
        {
          id: "finance",
          title: "Student Finance Operations Assistant",
          org: "College of Architecture & Planning",
          period: "2026 – Present",
          detail:
            "Process and reconcile financial transactions, maintaining data integrity across budgeting and reporting workflows.",
          // TODO: replace {N} with the real monthly transaction volume
          metric: "{N}+ transactions monthly",
        },
        {
          id: "ambassador",
          title: "IS Department Ambassador",
          org: "University of Utah",
          period: "Jun 2025 – Present",
          detail:
            "Liaison between IS students and faculty; organize events and mentor students.",
          // TODO: replace {N} with real event and attendee counts
          metric: "{N} events · {N}+ attendees",
        },
      ],
    },
    journey: {
      heading: "Journey",
      subheading:
        "Four cities, one throughline: understanding how people and places work.",
      stops: [
        {
          id: "gwangyang",
          city: "Gwangyang",
          period: "Beginnings",
          story: "Where curiosity started — taking machines apart.",
        },
        {
          id: "seoul",
          city: "Seoul",
          period: "Discovery",
          story: "Media production meets business at a specialized high school.",
        },
        {
          id: "incheon",
          city: "Incheon",
          period: "Transition",
          story:
            "Information Systems begins; 1st place, Adobe Social Impact Challenge.",
        },
        {
          id: "slc",
          city: "Salt Lake City",
          period: "Now",
          story:
            "Data analytics meets urban planning at the University of Utah.",
        },
      ],
    },
    recognition: {
      heading: "Leadership & Recognition",
      items: [
        "1st Place, Adobe Social Impact Challenge (UAC)",
        "Executive Director, International Students in Business Club",
        "New Horizon Scholarship",
        "Music Director, short film “HELLPER” — official selection, Bucheon International Fantastic Film Festival (BIFAN)",
      ],
    },
    footer: {
      heading: "Let's talk.",
      subline:
        "Currently exploring data & business analyst opportunities — let's talk.",
      coffeeChat: "Coffee Chat",
      email: "EMAIL",
      linkedin: "LINKEDIN",
      resume: "RESUME",
      note: "Made with data and 매화 · Salt Lake City",
      copyright: "© 2026 Ellie (Gaeun) Choi",
    },
  },
  ko: {
    nav: {
      name: "ELLIE CHOI",
      work: "프로젝트",
      skills: "스킬",
      experience: "경력",
      journey: "여정",
      recognition: "수상",
      contact: "연락처",
      langEn: "EN",
      langKo: "KO",
    },
    hero: {
      tagline: "데이터 · 비즈니스 · 도시 · 크리에이티브",
      headlineLine1: "데이터에서",
      headlineLine2: "결정으로.",
      subline: "정보시스템 · 비즈니스 애널리틱스 · 도시계획 — 유타대학교",
      resume: "이력서",
      linkedin: "링크드인",
      coffeeChat: "커피챗",
    },
    projects: {
      heading: "프로젝트",
      problemLabel: "문제",
      tookLabel: "무엇을 했나",
      takeawayLabel: "배운 것",
    },
    skills: {
      heading: "스킬",
      categories: [
        {
          id: "data",
          label: "데이터",
          items: [
            "Python (pandas, scikit-learn, nltk)",
            "SQL / MySQL",
            "Tableau",
            "Power BI",
          ],
        },
        {
          id: "business",
          label: "비즈니스",
          items: ["엑셀 모델링", "재무 정산·리포팅", "회계 기초"],
        },
        {
          id: "urban",
          label: "도시",
          items: [
            "QGIS",
            "Healthy Places Index (HPI)",
            "현장 연구",
            "토지이용 분석",
          ],
        },
        {
          id: "creative",
          label: "크리에이티브",
          items: [
            "Adobe Creative Suite (Photoshop, Illustrator, Premiere Pro, InDesign)",
            "Figma",
          ],
        },
      ],
    },
    experience: {
      heading: "경력",
      entries: [
        {
          id: "ta",
          title: "조교 — 정보시스템",
          org: "데이비드 에클스 경영대학",
          period: "2025년 8월 – 현재",
          detail:
            "IS 2010(스프레드시트 분석)과 IS 3060 수업에서 실습과 채점, 1:1 엑셀 모델링 지도를 맡고 있습니다.",
          // TODO: replace {N} with the real student count
          metric: "{N}명 이상의 학생 지원",
        },
        {
          id: "finance",
          title: "학생 재무 운영 어시스턴트",
          org: "건축·도시계획대학",
          period: "2026년 – 현재",
          detail:
            "예산과 리포팅 워크플로 전반의 데이터 정합성을 지키며 재무 거래를 처리·정산합니다.",
          // TODO: replace {N} with the real monthly transaction volume
          metric: "월 {N}건 이상의 거래 처리",
        },
        {
          id: "ambassador",
          title: "IS 학과 앰배서더",
          org: "유타대학교",
          period: "2025년 6월 – 현재",
          detail:
            "IS 학생과 교수진을 잇는 다리 역할로, 행사를 기획하고 학생들을 멘토링합니다.",
          // TODO: replace {N} with real event and attendee counts
          metric: "행사 {N}회 · 참가자 {N}명 이상",
        },
      ],
    },
    journey: {
      heading: "여정",
      subheading:
        "네 도시를 거쳐 온 하나의 질문 — 사람과 장소는 어떻게 움직이는가.",
      stops: [
        {
          id: "gwangyang",
          city: "광양",
          period: "시작",
          story: "호기심이 시작된 곳 — 기계를 분해하던 어린 시절.",
        },
        {
          id: "seoul",
          city: "서울",
          period: "발견",
          story: "특성화고에서 미디어 제작과 비즈니스가 만난 시간.",
        },
        {
          id: "incheon",
          city: "인천",
          period: "전환",
          story: "정보시스템 공부의 시작, 어도비 소셜 임팩트 챌린지 1위.",
        },
        {
          id: "slc",
          city: "솔트레이크시티",
          period: "현재",
          story: "유타대학교에서 데이터 애널리틱스와 도시계획이 만나는 지금.",
        },
      ],
    },
    recognition: {
      heading: "리더십 & 수상",
      items: [
        "어도비 소셜 임팩트 챌린지 1위 (UAC)",
        "International Students in Business 클럽 총괄 디렉터",
        "New Horizon 장학금",
        "단편영화 〈HELLPER〉 음악감독 — 부천국제판타스틱영화제(BIFAN) 공식 초청",
      ],
    },
    footer: {
      heading: "이야기 나눠요.",
      subline:
        "지금 데이터·비즈니스 애널리스트 포지션을 찾고 있어요 — 편하게 연락 주세요.",
      coffeeChat: "커피챗",
      email: "이메일",
      linkedin: "링크드인",
      resume: "이력서",
      note: "데이터와 매화로 만들었습니다 · 솔트레이크시티",
      copyright: "© 2026 Ellie (Gaeun) Choi",
    },
  },
};
