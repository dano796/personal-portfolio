import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LocalStatus from "./LocalStatus";

const NAV_ITEMS = [
  { key: "h", label: "home", to: "/" },
  { key: "w", label: "work", to: "/work" },
  { key: "p", label: "projects", to: "/projects" },
  { key: "c", label: "certs", to: "/certifications" },
];

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      const active = document.activeElement;
      if (
        active instanceof HTMLInputElement ||
        active instanceof HTMLTextAreaElement ||
        (active instanceof HTMLElement && active.isContentEditable)
      ) {
        return;
      }

      const match = NAV_ITEMS.find((item) => item.key === event.key.toLowerCase());
      if (match) navigate(match.to);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  // Baseline (not center) alignment: the status readout is a smaller font than
  // the links, so centering their boxes would leave its text sitting high.
  return (
    <nav className="mb-12 flex items-baseline justify-between gap-4 text-sm">
      <div className="flex gap-3 sm:gap-4">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              `transition-colors duration-200 hover:text-accent ${
                isActive ? "text-accent" : "text-fg"
              }`
            }
          >
            <span className="hidden text-gray-600 sm:inline">[{item.key}] </span>
            {item.label}
          </NavLink>
        ))}
      </div>

      <LocalStatus />
    </nav>
  );
};

export default Navbar;
