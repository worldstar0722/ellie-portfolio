import { useEffect, useState } from "react";
import { useLanguage } from "../hooks/useLanguage.jsx";
import Logo from "./Logo.jsx";

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
    { href: "#work", label: t.nav.work },
    { href: "#research", label: t.nav.research },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#contact", label: t.nav.contact },
  ];

  const ctas = [
    { href: "/resume.pdf", label: t.nav.resume },
    { href: "https://calendly.com/worldstar0722/30min", label: t.nav.chat },
  ];

  return (
    <header className="sticky top-0 z-50 border-b-hairline bg-white/70 backdrop-blur-xl backdrop-saturate-150">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ease-out sm:px-8 ${
          scrolled ? "h-12" : "h-16"
        }`}
      >
        <a
          href="#top"
          className="group flex items-center gap-3 transition-opacity duration-200 hover:opacity-70"
        >
          <Logo
            className={`w-auto transition-all duration-300 ease-out ${
              scrolled ? "h-[22px]" : "h-[26px]"
            }`}
          />
          <span className="hidden text-[13px] font-semibold uppercase tracking-wide2 text-ink sm:block">
            {t.nav.name}
          </span>
          <span className="sr-only sm:hidden">{t.nav.name}</span>
        </a>

        <div className="flex items-center gap-5 md:gap-6">
          <ul className="hidden items-center gap-5 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[11px] font-medium uppercase tracking-label text-ink/60 transition-colors duration-200 hover:text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="hidden items-center gap-5 border-l-hairline pl-5 sm:flex">
            {ctas.map((cta) => (
              <li key={cta.href}>
                <a
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-medium uppercase tracking-label text-navy transition-opacity duration-200 hover:opacity-70"
                >
                  {cta.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-label"
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
