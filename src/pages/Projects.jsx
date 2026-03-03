import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiCalendar } from 'react-icons/fi';

const Projects = () => {
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
      title: 'Dockerized Static Website Deployment',
      description:
        'Created a static website using HTML, CSS, and Tailwind CSS, then containerized it with Docker to run inside a lightweight container. Built the Docker image, ran it locally, and tested the application in-browser using mapped ports for smooth deployment.',
      tags: ['Docker', 'HTML', 'CSS', 'Tailwind CSS', 'DevOps'],
      color: 'from-cyan-500/20 to-blue-500/20',
      number: '02',
      github: 'https://hub.docker.com/r/aryansinghh1/flask-mini',
      date: 'Nov 2025 – Dec 2025',
    },
    {
      title: 'Hotel Buddy',
      description:
        'A web-based chatbot that helps users search and find hotels easily. Integrated the Gemini API to handle user queries like location, budget, and hotel amenities. Performed cross-browser testing to ensure consistent UX across Chrome, Firefox, and Edge.',
      tags: ['JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Gemini API'],
      color: 'from-amber-500/20 to-orange-500/20',
      number: '03',
      github: 'https://github.com/aryansinghh1/Hotel-Buddy-',
      date: 'September 2025',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] py-20 px-6 relative">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
            {'< projects >'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
            Featured Work
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
            Projects I've built that demonstrate my skills in solving real problems with code.
          </p>
        </motion.div>

        {/* Project Cards */}
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
              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              <div className="relative p-8 sm:p-10 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">
                {/* Number */}
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
    </div>
  );
};

export default Projects;
