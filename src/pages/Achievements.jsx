import { motion } from 'framer-motion';
import { FiZap, FiHeart, FiGlobe, FiCalendar } from 'react-icons/fi';

const Achievements = () => {
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

  return (
    <div className="min-h-[calc(100vh-64px)] py-20 px-6 relative">
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
            {'< achievements >'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
            Achievements
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
            Hackathons, volunteering, and experiences that shaped my journey beyond code.
          </p>
        </motion.div>

        {/* Achievement Cards */}
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
    </div>
  );
};

export default Achievements;
