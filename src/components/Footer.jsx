import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { href: 'mailto:aryansinghkush2522@gmail.com', icon: <FiMail size={18} />, label: 'Email' },
    { href: 'https://github.com/aryansinghh1', icon: <FiGithub size={18} />, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/aryan32/', icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
  ];

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="relative border-t border-foreground/5">
      <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold text-foreground tracking-tight">
              &lt;<span className="text-primary">Aryan</span> /&gt;
            </span>
            <p className="text-muted text-sm mt-3 leading-relaxed max-w-xs">
              Building digital experiences with clean code and modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/5 flex items-center justify-center text-muted hover:text-primary hover:bg-primary-light hover:border-primary/20 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <p className="text-muted text-sm mt-4">aryansinghkush2522@gmail.com</p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-foreground/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-surface-lighter text-xs">
            &copy; {new Date().getFullYear()} Aryan Singh. All rights reserved.
          </p>
          <p className="text-surface-lighter text-xs">
            Designed & Built by Aryan Singh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
