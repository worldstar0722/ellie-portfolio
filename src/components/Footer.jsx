import { useLanguage } from "../hooks/useLanguage.jsx";
import { useScrollFade } from "../hooks/useScrollFade.js";

export default function Footer() {
  const { t } = useLanguage();
  const ref = useScrollFade();

  const links = [
    { label: t.footer.email, href: "mailto:hello@elliechoi.com" },
    { label: t.footer.linkedin, href: "https://www.linkedin.com/" },
    { label: t.footer.github, href: "https://github.com/" },
    {
      label: t.footer.coffeeChat,
      href: "https://calendly.com/worldstar0722/30min",
    },
  ];

  return (
    <footer id="contact" className="bg-navy text-white">
      <div
        ref={ref}
        className="fade-section mx-auto max-w-6xl px-6 py-20 sm:px-8 md:py-28"
      >
        <h2 className="text-4xl font-semibold tracking-headline md:text-6xl">
          {t.footer.heading}
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
          {t.footer.subline}
        </p>

        <ul className="mt-14 flex flex-wrap items-center gap-8">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="link-underline text-[12px] font-medium uppercase tracking-label !text-white hover:!text-white/70"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-20 border-t border-white/10 pt-8">
          {/* The single blush accent detail */}
          <span
            aria-hidden="true"
            className="mb-6 block h-px w-10 bg-blush"
          />
          <div className="flex flex-col gap-2 text-[11px] uppercase tracking-label text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>{t.footer.note}</p>
            <p>{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
