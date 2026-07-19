import { ArrowUp, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const links = [
  ["/", "Home"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/resume", "Resume"],
  ["/contact", "Contact"],
];
export function Layout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    <>
      <header>
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span>SM</span>Shubham Mane
        </Link>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "open" : ""}>
          {links.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={pathname === to ? "active" : ""}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>
          <Link className="brand" to="/">
            <span>SM</span>Shubham Mane
          </Link>
          <p>
            Building thoughtful data products with machine learning and
            curiosity.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <a
            href="https://github.com/ShubhamMane1211"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={17} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/shubhammane1211/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={17} /> LinkedIn
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Shubham Mane.</p>
      </footer>
      <button
        className="back-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
