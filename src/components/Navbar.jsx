import { useState, useEffect } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'achievements', 'resume', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { hash: '#home', label: 'Home', id: 'home' },
    { hash: '#about', label: 'About', id: 'about' },
    { hash: '#skills', label: 'Skills', id: 'skills' },
    { hash: '#projects', label: 'Projects', id: 'projects' },
    { hash: '#certifications', label: 'Certifications', id: 'certifications' },
    { hash: '#achievements', label: 'Achievements', id: 'achievements' },
    { hash: '#resume', label: 'Resume', id: 'resume' },
    { hash: '#contact', label: 'Contact', id: 'contact' },
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
        <a href="#home" className="relative group" onClick={handleNavClick}>
          <span className="text-lg font-bold text-foreground tracking-tight">
            &lt;<span className="text-primary">Aryan</span> /&gt;
          </span>
        </a>

        <ul
          className={`
            md:flex md:flex-row md:items-center md:gap-1 md:static md:bg-transparent md:shadow-none md:p-0 md:translate-y-0 md:opacity-100 md:border-0
            fixed top-16 left-4 right-4 bg-surface-light/95 backdrop-blur-2xl rounded-2xl border border-foreground/10 shadow-2xl shadow-black/40 p-4 flex flex-col gap-1 transition-all duration-300 ease-out z-40
            ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none md:pointer-events-auto'}
          `}
        >
          {navLinks.map((link) => (
            <li key={link.id} className="list-none">
              <a
                href={link.hash}
                onClick={handleNavClick}
                className={`block px-4 py-2 rounded-lg text-[13px] font-medium tracking-wide uppercase transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-primary bg-primary-light'
                    : 'text-muted hover:text-foreground hover:bg-foreground/5'
                }`}
              >
                {link.label}
              </a>
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
