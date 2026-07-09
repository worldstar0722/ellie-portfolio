import { SiPython, SiScikitlearn, SiArcgis, SiFigma } from "react-icons/si";
import {
  FiDatabase,
  FiBarChart2,
  FiGrid,
  FiMapPin,
  FiUsers,
  FiPieChart,
} from "react-icons/fi";
import { TbBinaryTree, TbBuildings, TbPresentation } from "react-icons/tb";
import { useLanguage } from "../hooks/useLanguage.jsx";
import { skillGroups } from "../data/skills.js";
import Section from "./Section.jsx";
import { Reveal, Stagger, StaggerChild } from "./motion.jsx";

const icons = {
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

function SkillMark({ skill }) {
  const Icon = skill.icon ? icons[skill.icon] : null;

  return (
    <span
      aria-hidden="true"
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-hairline border-solid bg-[#F7F4EE]/80 text-navy"
    >
      {Icon ? (
        <Icon size={19} />
      ) : (
        <span className="text-[9px] font-bold tracking-label">
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
        <p className="mb-12 max-w-2xl text-2xl font-bold leading-snug tracking-headline text-ink md:mb-16 md:text-3xl">
          {t.skills.subtitle}
        </p>
      </Reveal>

      <div className="space-y-14 md:space-y-16">
        {skillGroups.map((group) => {
          const groupCopy = t.skills.groups[group.id];
          return (
            <div key={group.id}>
              <Reveal>
                <h3 className="mb-6 text-[10px] font-medium uppercase tracking-wide2 text-ink/40">
                  {groupCopy.label}
                </h3>
              </Reveal>
              <Stagger
                as="ul"
                className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              >
                {group.skills.map((skill) => (
                  <StaggerChild
                    as="li"
                    key={skill.id}
                    className="group flex items-center gap-4 rounded-2xl border-hairline border-solid bg-white p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-clay/40 hover:shadow-[0_4px_16px_rgba(35,39,47,0.06)]"
                  >
                    <SkillMark skill={skill} />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-ink">
                        {groupCopy.items[skill.id]?.name ?? skill.name}
                      </span>
                      <span className="mt-0.5 line-clamp-2 block text-xs leading-snug text-ink/50">
                        {groupCopy.items[skill.id]?.desc}
                      </span>
                    </span>
                  </StaggerChild>
                ))}
              </Stagger>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
