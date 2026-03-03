import { motion } from 'framer-motion';
import { FiCode, FiCloud, FiDatabase, FiLayout, FiCpu, FiUsers } from 'react-icons/fi';

const About = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <FiCode size={18} />,
      skills: ['Java', 'JavaScript', 'C++', 'Python'],
    },
    {
      title: 'Concepts',
      icon: <FiCpu size={18} />,
      skills: ['DBMS', 'DSA', 'OOPs', 'SQL'],
    },
    {
      title: 'Tools / Platforms',
      icon: <FiCloud size={18} />,
      skills: ['AWS (Management Console)', 'Apache CloudStack', 'Docker'],
    },
    {
      title: 'Web',
      icon: <FiLayout size={18} />,
      skills: ['MERN Stack', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      title: 'Soft Skills',
      icon: <FiUsers size={18} />,
      skills: ['Teamwork', 'Problem Solving', 'Communication', 'Adaptability'],
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

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2 className="text-xs font-semibold text-foreground uppercase tracking-widest mb-8">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="group p-5 rounded-2xl bg-surface-light/50 border border-foreground/5 hover:border-primary/20 hover:bg-surface-light transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 flex-shrink-0">
                    {category.icon}
                  </div>
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">{category.title}</h3>
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
        </motion.div>
      </div>
    </div>
  );
};

export default About;
