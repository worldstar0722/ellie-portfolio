import { useLanguage } from "../hooks/useLanguage.jsx";
import { Reveal } from "./motion.jsx";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { label: t.footer.email, href: "mailto:gaeunc0722@gmail.com" },
    {
      label: t.footer.linkedin,
      href: "https://www.linkedin.com/in/worldstar0722/",
    },
    { label: t.footer.resume, href: "/resume.pdf" },
  ];

  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-36">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-headline md:text-6xl">
            {t.footer.heading}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            {t.footer.subline}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          {/* Primary CTA */}
          <a
            href="https://calendly.com/worldstar0722/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline mt-14 inline-flex text-base font-semibold uppercase tracking-label !text-white hover:!text-white/70"
          >
            {t.footer.coffeeChat} <span aria-hidden="true">↗</span>
          </a>

          <ul className="mt-8 flex flex-wrap items-center gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={
                    link.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="link-underline text-[12px] font-medium uppercase tracking-label !text-white/80 hover:!text-white/60"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-24 border-t border-white/10 pt-8">
            {/* The single blush accent detail */}
            <span aria-hidden="true" className="mb-6 block h-px w-10 bg-blush" />
            <div className="flex flex-col gap-2 text-[11px] font-medium uppercase tracking-label text-white/40 sm:flex-row sm:items-center sm:justify-between">
              <p>{t.footer.note}</p>
              <p>{t.footer.copyright}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
