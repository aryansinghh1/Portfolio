import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiBookOpen,
  FiMapPin,
  FiCalendar,
  FiCode,
  FiCloud,
  FiDatabase,
  FiLayout,
  FiCpu,
  FiUsers,
  FiArrowUpRight,
  FiSend,
  FiCheck,
  FiZap,
  FiHeart,
  FiGlobe,
  FiAward,
  FiHash,
  FiDownload,
  FiFileText,
  FiDownload as FiDownloadIcon,
} from 'react-icons/fi';
import aryanPhoto from '../assets/aryan_formal.png';
import w3gradsCert from '../assets/w3grads.png';
import iotCert from '../assets/Introduction To Internet Of Things.pdf';
import hardwareCert from '../assets/Introduction to Hardware and Operating Systems.pdf';
import resumePdf from '../assets/Aryan_cv2.pdf';

const roles = ['Web Developer', 'Cloud Engineer', 'Full Stack Developer', 'DevOps Enthusiast'];

const Portfolio = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  const stats = [
    { value: '5+', label: 'Technologies' },
    { value: '7+', label: 'Projects' },
    { value: 'B.Tech', label: 'IT Student' },
  ];

  const education = [
    {
      institution: 'Lovely Professional University',
      degree: 'Bachelor of Technology - Information Technology',
      grade: 'CGPA: 7.33',
      location: 'Punjab, India',
      period: 'August 2023 – Present',
    },
    {
      institution: 'M.J.R.P Public School',
      degree: 'Intermediate',
      grade: 'Percentage: 79.8%',
      location: 'Kaithwailya, Ghazipur',
      period: 'April 2022 – March 2023',
    },
    {
      institution: 'M.J.R.P Public School',
      degree: 'Matriculation',
      grade: 'Percentage: 70.4%',
      location: 'Kaithwaliya, Ghazipur',
      period: 'April 2020 – March 2021',
    },
  ];

  const skillCategories = [
    {
      title: 'Languages',
      icon: <FiCode size={18} />,
      skills: ['Java', 'JavaScript', 'C++', 'Python'],
    },
    {
      title: 'Web Development',
      icon: <FiLayout size={18} />,
      skills: ['MERN Stack', 'Bootstrap', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    {
      title: 'Cloud & DevOps',
      icon: <FiCloud size={18} />,
      skills: ['AWS (Management Console)', 'Apache CloudStack', 'Docker', 'CI/CD Pipelines'],
    },
    {
      title: 'Databases',
      icon: <FiDatabase size={18} />,
      skills: ['MongoDB', 'MySQL'],
    },
    {
      title: 'Core Concepts',
      icon: <FiCpu size={18} />,
      skills: ['DSA', 'DBMS', 'OOPs', 'Responsive Design'],
    },
    {
      title: 'Soft Skills',
      icon: <FiUsers size={18} />,
      skills: ['Teamwork', 'Problem Solving', 'Communication', 'Adaptability'],
    },
  ];

  const projects = [
    {
      title: 'University Management System',
      description:
        'A full-stack university platform with role-based access control for Admin, Faculty, and Students. Features a faculty attendance system with real-time student visibility and structured MongoDB schemas with proper relationships and validation.',
      tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Firebase', 'Tailwind CSS'],
      color: 'from-violet-500/20 to-indigo-500/20',
      number: '01',
      github: 'https://github.com/aryansinghh1/UMS',
      date: 'Feb 2026 – Present',
    },
    {
      title: 'Youtube Clone',
      description:
        'A fully functional YouTube clone built with React and Vite, featuring real-time video fetching from the YouTube Data API v3. The app replicates core YouTube features including video browsing, search, watch history, and a responsive dark-themed UI.',
      tags: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'],
      color: 'from-violet-500/20 to-indigo-500/20',
      number: '02',
      github: 'https://github.com/aryansinghh1/YouTube_Clone',
      date: 'Jan 2026 – Feb 2026',
    },
    {
      title: 'Dockerized Static Website Deployment',
      description:
        'Created a static website using HTML, CSS, and Tailwind CSS, then containerized it with Docker to run inside a lightweight container. Built the Docker image, ran it locally, and tested the application in-browser using mapped ports for smooth deployment.',
      tags: ['Docker', 'HTML', 'CSS', 'DevOps'],
      color: 'from-cyan-500/20 to-blue-500/20',
      number: '03',
      github: 'https://hub.docker.com/r/aryansinghh1/flask-mini',
      date: 'Nov 2025 – Dec 2025',
    },
    {
      title: 'Hotel Buddy',
      description:
        'A web-based chatbot that helps users search and find hotels easily. Integrated the Gemini API to handle user queries like location, budget, and hotel amenities. Performed cross-browser testing to ensure consistent UX across Chrome, Firefox, and Edge.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Gemini API'],
      color: 'from-amber-500/20 to-orange-500/20',
      number: '04',
      github: 'https://github.com/aryansinghh1/Hotel-Buddy-',
      date: 'September 2025',
    },
  ];

  const certifications = [
    {
      title: "FLAMES '25 Summer Training Program",
      subtitle: 'Master DSA with Java/C++',
      issuer: 'W3Grads / The Angaar Batch',
      date: 'June – July 2025',
      credentialId: 'FLAMES25DSA1816',
      image: w3gradsCert,
      color: 'from-violet-500/20 to-indigo-500/20',
    },
    {
      title: 'Introduction to Internet of Things',
      subtitle: 'IoT fundamentals and applications',
      issuer: 'NPTEL',
      date: '2024',
      pdf: iotCert,
      color: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      title: 'Introduction to Hardware and Operating Systems',
      subtitle: 'Computer hardware & OS concepts',
      issuer: 'Coursera',
      date: '2024',
      pdf: hardwareCert,
      color: 'from-amber-500/20 to-orange-500/20',
    },
  ];

  const achievements = [
    {
      title: 'Hack AI Hackathon 2025',
      description: 'Participated in the Hack AI Hackathon, competing with teams to build innovative AI-powered solutions under time constraints.',
      icon: <FiZap size={22} />,
      year: '2025',
      type: 'Hackathon',
      color: 'from-violet-500/20 to-indigo-500/20',
    },
    {
      title: 'Yoga Session – The Art of Living',
      description: 'Completed a 3-week yoga and wellness program organized by The Art of Living, focusing on mindfulness and holistic well-being.',
      icon: <FiHeart size={22} />,
      year: '2024',
      type: 'Wellness',
      color: 'from-rose-500/20 to-pink-500/20',
    },
    {
      title: 'Namami Gange Community Development Project',
      description: 'Volunteered for the Namami Gange initiative, contributing to community development and environmental awareness campaigns.',
      icon: <FiGlobe size={22} />,
      year: '2024',
      type: 'Volunteering',
      color: 'from-cyan-500/20 to-teal-500/20',
    },
  ];

  const contactLinks = [
    {
      icon: <FiMail size={20} />,
      label: 'Email',
      value: 'aryansinghkush2522@gmail.com',
      href: 'mailto:aryansinghkush2522@gmail.com',
      color: 'group-hover:from-red-500/10 group-hover:to-orange-500/10',
    },
    {
      icon: <FiGithub size={20} />,
      label: 'GitHub',
      value: 'aryansinghh1',
      href: 'https://github.com/aryansinghh1',
      color: 'group-hover:from-gray-500/10 group-hover:to-gray-400/10',
    },
    {
      icon: <FiLinkedin size={20} />,
      label: 'LinkedIn',
      value: 'aryan32',
      href: 'https://www.linkedin.com/in/aryan32/',
      color: 'group-hover:from-blue-500/10 group-hover:to-cyan-500/10',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 opacity-[0.03] grid-pattern" />
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

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tight mb-6">
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
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                View My Work
                <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 text-foreground rounded-xl font-semibold text-sm border border-foreground/10 hover:bg-foreground/5 hover:border-foreground/20 transition-all duration-300"
              >
                Let's Talk
              </a>
            </div>

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
                  className="w-9 h-9 rounded-lg bg-foreground/5 border border-foreground/5 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 hover:bg-primary-light transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-violet-500/20 to-accent/20 rounded-[2rem] blur-2xl opacity-70" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-[340px] lg:h-[340px] rounded-[1.5rem] overflow-hidden border-2 border-foreground/10 shadow-2xl shadow-primary/10">
                <img
                  src={aryanPhoto}
                  alt="Aryan Singh"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <div className="relative border-y border-foreground/5 bg-surface/50 backdrop-blur-sm mt-10">
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
                  <p className="text-2xl sm:text-3xl font-extrabold text-foreground mb-1">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-muted font-medium uppercase tracking-wider">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
              {'< about >'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              About Me
            </h2>
            <div className="max-w-2xl">
              <p className="text-muted text-base sm:text-lg leading-[1.8] mb-4">
                I am currently pursuing{' '}
                <span className="text-foreground font-medium">B.Tech in Information Technology</span> from{' '}
                <span className="text-foreground font-medium">Lovely Professional University</span>.
              </p>
              <p className="text-muted text-base sm:text-lg leading-[1.8]">
                I specialize in full-stack web development with the MERN stack, cloud
                infrastructure, and DevOps practices. I love turning complex problems into
                simple, clean solutions through code.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-8">
              Education
            </h3>

            <div className="relative pl-8 border-l-2 border-foreground/10 space-y-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.12 }}
                >
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-primary-light border-2 border-primary group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />

                  <div className="p-6 rounded-2xl bg-surface-light/50 border border-foreground/5 hover:border-primary/20 hover:bg-surface-light transition-all duration-500">
                    <h4 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                      {edu.institution}
                    </h4>
                    <p className="text-sm text-foreground font-medium mb-3">
                      {edu.degree}
                      <span className="text-primary font-semibold ml-2">| {edu.grade}</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
                      <span className="inline-flex items-center gap-1.5">
                        <FiMapPin size={12} />
                        {edu.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <FiCalendar size={12} />
                        {edu.period}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
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
            <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="group p-6 rounded-2xl bg-surface-light/50 border border-foreground/5 hover:border-primary/20 hover:bg-surface-light transition-all duration-500"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium text-muted bg-foreground/[0.04] border border-foreground/5 rounded-lg group-hover:text-foreground group-hover:border-primary/15 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
              {'< projects >'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              Featured Work
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Projects I've built that demonstrate my skills in solving real problems with code.
            </p>
          </motion.div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="group relative overflow-hidden rounded-2xl bg-surface-light/50 border border-foreground/5 hover:border-primary/20 transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
                  <span className="text-6xl sm:text-7xl font-black text-foreground/[0.03] group-hover:text-primary/10 transition-colors duration-500 leading-none select-none">
                    {project.number}
                  </span>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-xl bg-foreground/5 border border-foreground/5 flex items-center justify-center text-muted group-hover:text-primary group-hover:border-primary/20 group-hover:bg-primary-light transition-all duration-300 flex-shrink-0"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FiArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                      </a>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <FiCalendar size={12} className="text-muted" />
                      <span className="text-xs font-mono text-muted">{project.date}</span>
                    </div>

                    <p className="text-muted text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1.5 text-xs font-mono font-medium text-muted bg-foreground/5 border border-foreground/5 rounded-lg group-hover:text-primary group-hover:border-primary/10 group-hover:bg-primary-light transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted hover:text-primary transition-colors duration-200 ml-auto"
                      >
                        <FiGithub size={13} />
                        Source
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 relative">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
              {'< certifications >'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              Certifications
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Professional certifications and training programs I have completed.
            </p>
          </motion.div>

          <div className="space-y-10">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                className="group relative overflow-hidden rounded-2xl bg-surface-light/50 border border-foreground/5 hover:border-primary/20 transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative p-8 sm:p-10">
                  <div className="flex flex-col sm:flex-row gap-6 items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                      <FiAward size={24} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-sm text-muted mb-4">{cert.subtitle}</p>

                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-foreground/5 border border-foreground/5 rounded-lg font-medium">
                          {cert.issuer}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <FiCalendar size={12} />
                          {cert.date}
                        </span>
                        {cert.credentialId && (
                          <span className="inline-flex items-center gap-1.5 font-mono">
                            <FiHash size={12} />
                            {cert.credentialId}
                          </span>
                        )}
                        {cert.pdf && (
                          <a
                            href={cert.pdf}
                            download
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
                          >
                            <FiDownload size={12} />
                            Download
                          </a>
                        )}
                        {cert.image && (
                          <a
                            href={cert.image}
                            download
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-200"
                          >
                            <FiDownload size={12} />
                            Download
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {cert.pdf && (
                    <div className="rounded-xl overflow-hidden border border-foreground/5 bg-white">
                      <iframe
                        src={cert.pdf}
                        title={cert.title}
                        className="w-full bg-white"
                        style={{ height: '500px' }}
                      />
                      <div className="p-4 text-center border-t border-foreground/5 bg-surface-light/50">
                        <p className="text-muted text-xs">
                          <FiFileText size={12} className="inline mr-1.5 -mt-0.5" />
                          Can't see the PDF?{' '}
                          <a
                            href={cert.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline font-medium"
                          >
                            Open in new tab
                          </a>
                        </p>
                      </div>
                    </div>
                  )}

                  {cert.image && (
                    <div className="rounded-xl overflow-hidden border border-foreground/5">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-6 relative">
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
              {'< achievements >'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              Achievements
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Hackathons, volunteering, and experiences that shaped my journey beyond code.
            </p>
          </motion.div>

          <div className="space-y-6">
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-surface-light/50 border border-foreground/5 hover:border-primary/20 transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    {item.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1.5 text-xs font-mono font-medium text-muted bg-foreground/5 border border-foreground/5 rounded-lg group-hover:text-primary group-hover:border-primary/10 group-hover:bg-primary-light transition-all duration-300">
                        {item.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs text-muted">
                        <FiCalendar size={12} />
                        {item.year}
                      </span>
                    </div>

                    <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-20 px-6 relative">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
              {'< resume >'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              My Resume
            </h2>
            <div className="flex flex-wrap items-center gap-4">
              <p className="text-muted text-base sm:text-lg leading-relaxed">
                View or download my resume below.
              </p>
              <a
                href={resumePdf}
                download="Aryan_Singh_Resume.pdf"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
              >
                <FiDownloadIcon size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl overflow-hidden border border-foreground/5 bg-surface-light/50"
          >
            <embed
              src={`${resumePdf}#toolbar=1&navpanes=0&scrollbar=1`}
              type="application/pdf"
              className="w-full"
              style={{ height: '85vh', minHeight: '600px' }}
            />
            <div className="p-6 text-center border-t border-foreground/5">
              <FiFileText size={16} className="inline mr-1.5 -mt-0.5 text-muted" />
              <span className="text-muted text-sm">
                Can't see the PDF?{' '}
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Open in a new tab
                </a>{' '}
                or use the download button above.
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
              {'< contact >'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              Let's Work
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Together</span>
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Have a project in mind or just want to connect? Drop me a message and
              I'll get back to you as soon as possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <motion.div
              className="lg:col-span-2 space-y-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {contactLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className={`group relative flex items-center gap-4 p-5 rounded-2xl bg-gradient-to-br from-transparent to-transparent bg-surface-light/50 border border-foreground/5 hover:border-primary/20 transition-all duration-500 ${link.color}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-foreground/5 flex items-center justify-center text-muted group-hover:text-primary transition-colors duration-300">
                    {link.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs text-muted font-medium uppercase tracking-wider">{link.label}</span>
                    <span className="block text-sm font-semibold text-foreground truncate mt-0.5">{link.value}</span>
                  </div>
                  <FiArrowUpRight size={16} className="text-muted group-hover:text-primary group-hover:rotate-45 transition-all duration-300 flex-shrink-0" />
                </a>
              ))}
            </motion.div>

            <motion.form
              className="lg:col-span-3 relative p-8 sm:p-10 rounded-2xl bg-surface-light/50 border border-foreground/5"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="text-lg font-bold text-foreground mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-foreground/[0.03] border border-foreground/10 rounded-xl text-sm text-foreground placeholder-surface-lighter focus:outline-none focus:border-primary/50 focus:bg-foreground/[0.05] transition-all duration-300 font-[inherit]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-foreground/[0.03] border border-foreground/10 rounded-xl text-sm text-foreground placeholder-surface-lighter focus:outline-none focus:border-primary/50 focus:bg-foreground/[0.05] transition-all duration-300 font-[inherit]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-muted uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-foreground/[0.03] border border-foreground/10 rounded-xl text-sm text-foreground placeholder-surface-lighter resize-y focus:outline-none focus:border-primary/50 focus:bg-foreground/[0.05] transition-all duration-300 font-[inherit]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full flex items-center justify-center gap-2.5 py-4 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    submitted
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/20'
                      : 'bg-primary text-white hover:bg-primary-dark hover:shadow-2xl hover:shadow-primary/20'
                  }`}
                >
                  {submitted ? (
                    <>
                      <FiCheck size={16} /> Message Sent Successfully
                    </>
                  ) : (
                    <>
                      Send Message <FiSend size={14} />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
