import { NavLink } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-neutral-800 backdrop-blur-2xll">
      <div className="max-w-3xl mx-auto px-6 flex items-center justify-between py-4">
        <NavLink
          to="/"
          className="text-base font-bold tracking-tight text-neutral-200 hover:text-white transition-colors duration-200"
        >
          DO
        </NavLink>

        <div className="flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm transition-colors duration-200 ${
                isActive
                  ? "text-violet-300"
                  : "text-neutral-400 hover:text-violet-300"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-sm transition-colors duration-200 ${
                isActive
                  ? "text-violet-300"
                  : "text-neutral-400 hover:text-violet-300"
              }`
            }
          >
            Projects
          </NavLink>

          <span className="w-px h-4 bg-neutral-700" />

          <a
            href="https://github.com/dano796"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-neutral-500 hover:text-violet-300 transition-colors duration-200"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-ortiza/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-neutral-500 hover:text-violet-300 transition-colors duration-200"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
