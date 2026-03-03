import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import aryanPhoto from '../assets/aryan_formal.png';

const roles = ['Web Developer', 'Cloud Engineer', 'Full Stack Developer', 'DevOps Enthusiast'];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: '5+', label: 'Technologies' },
    { value: '7+', label: 'Projects' },
    { value: 'B.Tech', label: 'IT Student' },
  ];

  return (
    <>
      {/* Hero */}
      <section className="min-h-[calc(100vh-64px)] flex items-center relative overflow-hidden">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20 w-full relative z-10">
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-light border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-primary">Available for opportunities</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
              I build things
              <br />
              for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-accent">web & cloud</span>
            </h1>

            <div className="h-8 mb-6 overflow-hidden">
              <motion.p
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-lg sm:text-xl text-muted font-mono font-medium"
              >
                {'// '}{roles[roleIndex]}
              </motion.p>
            </div>

            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
              B.Tech IT student at LPU, passionate about building scalable web applications
              and designing cloud infrastructure that makes a difference.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                View My Work
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-white rounded-xl font-semibold text-sm border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-300"
              >
                Let's Talk
              </Link>
            </div>

            {/* Social row */}
            <div className="flex gap-3 justify-center lg:justify-start">
              {[
                { href: 'mailto:aryansinghkush2522@gmail.com', icon: <FiMail size={16} /> },
                { href: 'https://github.com/aryansinghh1', icon: <FiGithub size={16} /> },
                { href: 'https://www.linkedin.com/in/aryan32/', icon: <FiLinkedin size={16} /> },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target={i > 0 ? '_blank' : undefined}
                  rel={i > 0 ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 hover:bg-primary-light transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-violet-500/20 to-accent/20 rounded-[2rem] blur-2xl opacity-60" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px] rounded-[1.5rem] overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src={aryanPhoto}
                  alt="Aryan Singh"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/40 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="relative border-y border-white/5 bg-surface/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p className="text-2xl sm:text-3xl font-extrabold text-white mb-1">{stat.value}</p>
                <p className="text-xs sm:text-sm text-muted font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
              {'< skills >'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What I Work With
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Cloud Computing', desc: 'AWS, Azure cloud infrastructure and services', icon: '/' },
              { name: 'DevOps', desc: 'CI/CD pipelines, automation, and deployment', icon: '>' },
              { name: 'Docker', desc: 'Containerized applications for scalable deployments', icon: '#' },
              { name: 'MERN Stack', desc: 'MongoDB, Express, React, Node.js full-stack apps', icon: '{' },
              { name: 'Responsive Design', desc: 'Mobile-first interfaces across all devices', icon: '<' },
              { name: 'Java & C++', desc: 'Object-oriented programming and data structures', icon: '*' },
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative p-6 rounded-2xl bg-surface-light/50 border border-white/5 hover:border-primary/20 hover:bg-surface-light transition-all duration-500"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                <div className="absolute top-4 right-4 text-3xl font-mono text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                  {skill.icon}
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center mb-4">
                  <span className="text-primary font-mono font-bold text-sm">{skill.icon}{skill.icon}</span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2 tracking-wide">{skill.name}</h3>
                <p className="text-xs text-muted leading-relaxed">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
