import { COPYRIGHT, INSPIRATION } from "../constants";

const Footer: React.FC = () => (
  <footer className="flex flex-col gap-2 border-t border-neutral-800 pt-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
    <span>{COPYRIGHT}</span>

    <span>
      design inspired by{" "}
      <a
        href={INSPIRATION.href}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors duration-200 hover:text-accent"
      >
        {INSPIRATION.label}
      </a>
    </span>
  </footer>
);

export default Footer;
