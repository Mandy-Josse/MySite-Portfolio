
import { Link } from "react-router";
 
export default function ProjectCard({
  title,
  category,
  image,
  slug,
}) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="group block cursor-pointer"
    >
      <article>
        <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-800">
          {image ? (
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-neutral-600">
              Project image
            </div>
          )}
        </div>

        <div className="mt-4 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="mt-1 text-sm text-neutral-500">
              {category}
            </p>
          </div>

          <span className="text-neutral-500 transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </div>
      </article>
    </Link>
  );
}
