import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";
import type { Item } from "../constants";

interface SectionListProps {
  title?: string;
  items: Item[];
  viewAllHref?: string;
  viewAllText?: string;
  showImages?: boolean;
  showBorder?: boolean;
}

const SectionList: React.FC<SectionListProps> = ({
  title,
  items,
  viewAllHref,
  viewAllText,
  showImages = false,
  showBorder = true,
}) => (
  <section
    className={`mb-12 animate-fade-in-up ${
      showBorder ? "border-t border-neutral-800 pt-10" : ""
    }`}
  >
    {title && (
      <div className="mb-6 flex items-baseline justify-between gap-4">
        <h2 className="flex items-center text-2xl font-semibold text-white">
          <span className="mr-2 text-accent">*</span>
          {title}
        </h2>

        {viewAllHref && (
          <Link
            to={viewAllHref}
            className="group inline-flex shrink-0 items-center gap-1 text-sm text-accent hover:underline"
          >
            {viewAllText}
            <FiArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        )}
      </div>
    )}

    <div className="space-y-1">
      {items.map((item) => (
        <a
          key={`${item.title}-${item.meta ?? ""}`}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group -mx-4 flex items-start gap-5 rounded-lg p-4 transition-colors duration-200 hover:bg-surface focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50 sm:gap-6"
        >
          {showImages && item.image && (
            <img
              src={item.image}
              alt=""
              loading="lazy"
              // Width is fixed and only the height stretches to the row, so the
              // bottom edge lines up with the tag row. Do not give this an
              // aspect ratio: deriving width from the stretched height feeds
              // back into the text column's wrapping and the image runs away.
              className="h-24 w-24 shrink-0 rounded border border-neutral-800 object-cover sm:h-auto sm:w-[7rem] sm:self-stretch"
            />
          )}

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-semibold text-white transition-colors duration-200 group-hover:text-accent sm:text-xl">
              {item.title}
            </h3>

            {item.meta && (
              <p className="mt-1 text-sm text-gray-500">{item.meta}</p>
            )}

            <p className="mt-2 text-pretty text-sm leading-relaxed sm:text-base">
              {item.description}
            </p>

            {item.tags && (
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-neutral-800 px-2 py-0.5 text-xs text-gray-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <FiArrowUpRight className="mt-1.5 h-4 w-4 shrink-0 text-gray-600 transition-colors duration-200 group-hover:text-accent" />
        </a>
      ))}
    </div>
  </section>
);

export default SectionList;
