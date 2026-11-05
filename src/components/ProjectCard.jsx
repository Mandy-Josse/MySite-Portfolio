
import { useNavigate } from "react-router";

export default function ProjectCard({
  title,
  category,
  image,
  slug,
  active = false,
}) {
  const navigate = useNavigate();

  const navigateToProject = () => {
    if (!slug || !active) return;
    navigate(slug);
  };

  return (
    <article
      className={`
        relative flex h-full w-full flex-col
        rounded-2xl overflow-hidden
        border border-[#D7EBE8]
        bg-white
        transition-all duration-500
        ${active ? "shadow-xl shadow-teal-900/20" : "shadow-sm"}
        ${active && slug ? "cursor-pointer" : ""}
      `}
      onClick={navigateToProject}
      onKeyDown={(e) => {
        if (active && slug && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          navigateToProject();
        }
      }}
      role={active && slug ? "link" : undefined}
      tabIndex={active && slug ? 0 : undefined}
      aria-label={active && slug ? `View ${title}` : undefined}
    >
      {/* Image */}
      <div
        className={`
          relative w-full overflow-hidden
          bg-[#EAF8F6]
          transition-all duration-500
          ${active ? "h-[68%] shrink-0" : "h-full shrink-0"}
        `}
      >
        {image ? (
          <img
            src={image}
            alt={title}
            draggable="false"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-[#86B8B0]">
            <span className="text-4xl">✳</span>
            <span className="text-xs uppercase tracking-widest">
              Project preview
            </span>
          </div>
        )}
      </div>

      {/* Information */}
      <div
        className={`
          flex items-start justify-between gap-3
          px-5 pt-3
          bg-white
          transition-all duration-500
          ${active ? "min-h-0 flex-1 opacity-100 translate-y-0" : "hidden"}
        `}
      >
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold text-[#174C49]">
            {title}
          </h3>

          <p className="mt-1 text-xs text-[#668681]">
            {category}
          </p>
        </div>
      </div>
    </article>
  );
}
