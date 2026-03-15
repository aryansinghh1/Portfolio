import { motion } from 'framer-motion';
import { FiBookOpen, FiMapPin, FiCalendar } from 'react-icons/fi';

const About = () => {
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

  return (
    <div className="min-h-[calc(100vh-64px)] py-20 px-6 relative">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
            {'< about >'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
            About Me
          </h1>
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

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-8">
            Education
          </h2>

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
                {/* Timeline dot */}
                <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-primary-light border-2 border-primary group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />

                <div className="p-6 rounded-2xl bg-surface-light/50 border border-foreground/5 hover:border-primary/20 hover:bg-surface-light transition-all duration-500">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                    {edu.institution}
                  </h3>
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
    </div>
  );
};

export default About;
