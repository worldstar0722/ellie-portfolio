import { useLanguage } from "../hooks/useLanguage.jsx";
import { Reveal } from "./motion.jsx";

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    {
      label: t.contact.linkedin,
      href: "https://www.linkedin.com/in/worldstar0722/",
    },
    { label: t.contact.github, href: "https://github.com/worldstar0722" },
    {
      label: t.contact.chat,
      href: "https://calendly.com/worldstar0722/30min",
    },
    { label: t.contact.email, href: "mailto:gaeunc0722@gmail.com" },
  ];

  return (
    <footer id="contact" className="bg-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-8 md:py-32">
        <Reveal>
          <h2 className="max-w-2xl text-4xl font-bold tracking-headline md:text-6xl">
            {t.contact.heading}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">
            {t.contact.body}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mt-14 flex flex-wrap items-center gap-8">
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
                  className="link-underline text-[12px] font-medium uppercase tracking-label !text-white hover:!text-white/70"
                >
                  {link.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Document hierarchy: Resume stays primary; Academic CV is the
            secondary option for research-facing readers. */}
        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col gap-2 text-[11px] font-medium uppercase tracking-label sm:flex-row sm:items-center sm:gap-10">
            <p>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline !text-white hover:!text-white/70"
              >
                {t.contact.resume} <span aria-hidden="true">↗</span>
              </a>
              <span className="ml-2 normal-case text-white/40">
                — {t.contact.resumeNote}
              </span>
            </p>
            <p>
              <a
                href="/academic-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline !text-white/70 hover:!text-white/50"
              >
                {t.contact.academicCv} <span aria-hidden="true">↗</span>
              </a>
              <span className="ml-2 normal-case text-white/40">
                — {t.contact.academicCvNote}
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-20 border-t border-white/10 pt-8">
            {/* The single blush accent detail */}
            <span aria-hidden="true" className="mb-6 block h-px w-10 bg-blush" />
            <div className="flex flex-col gap-2 text-[11px] font-medium uppercase tracking-label text-white/40 sm:flex-row sm:items-center sm:justify-between">
              <p>{t.contact.note}</p>
              <p>{t.contact.copyright}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
