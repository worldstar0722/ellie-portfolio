import { SiPython, SiScikitlearn, SiArcgis, SiFigma } from "react-icons/si";
import {
  FiDatabase,
  FiBarChart2,
  FiGrid,
  FiMapPin,
  FiUsers,
  FiPieChart,
  FiCheckSquare,
  FiTrendingUp,
  FiGithub,
  FiLink,
  FiMessageSquare,
  FiLayers,
  FiCloud,
  FiCpu,
} from "react-icons/fi";
import {
  TbBinaryTree,
  TbBuildings,
  TbPresentation,
  TbReportMoney,
  TbBuildingBank,
  TbShieldCheck,
} from "react-icons/tb";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { skillGroups } from "../data/skills.js";
import Section from "./Section.jsx";
import { Reveal, Stagger, StaggerChild } from "./motion.jsx";

const icons = {
  checkSquare: FiCheckSquare,
  shieldCheck: TbShieldCheck,
  plug: FiLink,
  github: FiGithub,
  message: FiMessageSquare,
  layers: FiLayers,
  cloud: FiCloud,
  robot: FiCpu,
  reportMoney: TbReportMoney,
  bank: TbBuildingBank,
  trending: FiTrendingUp,
  python: SiPython,
  database: FiDatabase,
  barchart: FiBarChart2,
  grid: FiGrid,
  sklearn: SiScikitlearn,
  tree: TbBinaryTree,
  arcgis: SiArcgis,
  mappin: FiMapPin,
  users: FiUsers,
  buildings: TbBuildings,
  figma: SiFigma,
  piechart: FiPieChart,
  presentation: TbPresentation,
};

// The brand marks stay — they identify the tool — but unframed, at one
// size, so the list does not read as a grid of identical boxes.
function SkillMark({ skill }) {
  const Icon = skill.icon ? icons[skill.icon] : null;

  return (
    <span
      aria-hidden="true"
      className={`flex w-6 shrink-0 items-center justify-center ${
        skill.accent ? "text-clay-text" : "text-navy"
      }`}
    >
      {Icon ? (
        <Icon size={18} />
      ) : (
        <span className="text-micro font-bold tracking-label">
          {skill.badge}
        </span>
      )}
    </span>
  );
}

export default function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills" heading={t.skills.heading}>
      <Reveal>
        <p className="mb-12 max-w-2xl text-h4 font-bold tracking-headline text-ink md:text-h3">
          {t.skills.subtitle}
        </p>
      </Reveal>

      <div className="space-y-16">
        {skillGroups.map((group) => {
          const groupCopy = t.skills.groups[group.id];
          return (
            <div key={group.id}>
              <Reveal>
                <h3 className="mb-2 text-micro font-medium uppercase tracking-wide2 text-ink/65">
                  {groupCopy.label}
                </h3>
              </Reveal>
              {group.muted ? (
                /* Supporting craft: one quiet line, not a row of chips. */
                <Reveal>
                  <p className="border-t-hairline pt-4 text-body text-ink/65">
                    {group.skills
                      .map(
                        (skill) =>
                          groupCopy.items[skill.id]?.name ?? skill.name
                      )
                      .join("  ·  ")}
                  </p>
                </Reveal>
              ) : (
                <Stagger
                  as="ul"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {group.skills.map((skill) => (
                    <StaggerChild
                      as="li"
                      key={skill.id}
                      className="flex items-baseline gap-4 border-t-hairline py-2 sm:pr-8"
                    >
                      <SkillMark skill={skill} />
                      <span className="min-w-0">
                        <span className="block text-body font-semibold text-ink">
                          {groupCopy.items[skill.id]?.name ?? skill.name}
                        </span>
                        {groupCopy.items[skill.id]?.desc ? (
                          <span className="block text-micro text-ink/65">
                            {groupCopy.items[skill.id].desc}
                          </span>
                        ) : null}
                      </span>
                    </StaggerChild>
                  ))}
                </Stagger>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
