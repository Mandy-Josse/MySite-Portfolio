
import { useLanguage } from "../context/LanguageContext";
import projectsInfo from "../data/projectsInfo";

export default function ProjectInfo({ projectId }) {
  const { language } = useLanguage();

  const info = projectsInfo[projectId];

  if (!info) return null;

  const items = [
    {
      label: language === "fr" ? "Équipe" : "Team",
      value: info.groupSize[language],
    },
    {
      label: language === "fr" ? "Livrables" : "Deliverables",
      value: info.deliverables,
    },
    {
      label: language === "fr" ? "Durée" : "Duration",
      value: info.duration[language],
    },
  ];

  return (
    <section className="w-full border-y border-teal-800/20 py-8">
      <div className="grid grid-cols-3 divide-x divide-teal-800/20">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center justify-center gap-2 px-2 text-center"
          >
            <span className="text-xs uppercase tracking-widest text-teal-700/60">
              {item.label}
            </span>

            <span className="text-base font-medium text-[#174C49] md:text-lg">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
