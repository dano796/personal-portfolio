import { CONTACT } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-neutral-800/40">
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between py-6">
        <p className="text-neutral-600 text-sm">{CONTACT.copyright}</p>
        <div className="flex items-center gap-5">
          <a
            href="https://www.linkedin.com/in/daniel-ortiza/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 hover:text-violet-300 transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dano796"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-neutral-600 hover:text-violet-300 transition-colors duration-200"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
