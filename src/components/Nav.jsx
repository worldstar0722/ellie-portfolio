import { useEffect, useState } from "react";
import { useLanguage } from "../hooks/useLanguage.jsx";

export default function Nav() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#journey", label: t.nav.journey },
    { href: "#research", label: t.nav.research },
    { href: "#work", label: t.nav.work },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`sticky top-0 z-50 border-b-hairline transition-colors duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md" : "bg-white"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-8">
        <a
          href="#top"
          className="text-[13px] font-semibold uppercase tracking-wide2 text-ink transition-colors duration-200 hover:text-navy"
        >
          {t.nav.name}
        </a>

        <div className="flex items-center gap-5 md:gap-7">
          <ul className="hidden items-center gap-6 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] uppercase tracking-label text-ink/60 transition-colors duration-200 hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="flex items-center gap-1.5 text-[11px] uppercase tracking-label"
            role="group"
            aria-label="Language"
          >
            <button
              type="button"
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
              className={`transition-colors duration-200 hover:text-navy ${
                lang === "en" ? "font-semibold text-ink" : "text-ink/40"
              }`}
            >
              {t.nav.langEn}
            </button>
            <span aria-hidden="true" className="text-ink/30">
              /
            </span>
            <button
              type="button"
              onClick={() => setLang("ko")}
              aria-pressed={lang === "ko"}
              className={`transition-colors duration-200 hover:text-navy ${
                lang === "ko" ? "font-semibold text-ink" : "text-ink/40"
              }`}
            >
              {t.nav.langKo}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
