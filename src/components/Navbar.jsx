import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/skills', label: 'Skills' },
    { to: '/projects', label: 'Projects' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/achievements', label: 'Achievements' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-2xl border-b border-foreground/5 shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 h-16">
        <NavLink to="/" className="relative group">
          <span className="text-lg font-bold text-foreground tracking-tight">
            &lt;<span className="text-primary">Aryan</span> /&gt;
          </span>
        </NavLink>

        <ul
          className={`
            md:flex md:flex-row md:items-center md:gap-1 md:static md:bg-transparent md:shadow-none md:p-0 md:translate-y-0 md:opacity-100 md:border-0
            fixed top-16 left-4 right-4 bg-surface-light/95 backdrop-blur-2xl rounded-2xl border border-foreground/10 shadow-2xl shadow-black/40 p-4 flex flex-col gap-1 transition-all duration-300 ease-out z-40
            ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none md:pointer-events-auto'}
          `}
        >
          {navLinks.map((link) => (
            <li key={link.to} className="list-none">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded-lg text-[13px] font-medium tracking-wide uppercase transition-all duration-200 ${
                    isActive
                      ? 'text-primary bg-primary-light'
                      : 'text-muted hover:text-foreground hover:bg-foreground/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg bg-foreground/5 border border-foreground/5 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 transition-all duration-300 cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-muted hover:text-foreground hover:bg-foreground/5 transition-all cursor-pointer"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
