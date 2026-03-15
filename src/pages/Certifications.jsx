import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiHash, FiDownload, FiFileText } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      title: "FLAMES '25 Summer Training Program",
      subtitle: 'Master DSA with Java/C++',
      issuer: 'W3Grads / The Angaar Batch',
      date: 'June – July 2025',
      credentialId: 'FLAMES25DSA1816',
      color: 'from-violet-500/20 to-indigo-500/20',
    },
    {
      title: 'Introduction to Internet of Things',
      subtitle: 'IoT fundamentals and applications',
      issuer: 'Coursera',
      date: '2024',
      pdf: '/Introduction_To_Internet_Of_Things.pdf',
      color: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      title: 'Introduction to Hardware and Operating Systems',
      subtitle: 'Computer hardware & OS concepts',
      issuer: 'Coursera',
      date: '2024',
      pdf: '/Introduction_to_Hardware_and_Operating_Systems.pdf',
      color: 'from-amber-500/20 to-orange-500/20',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] py-20 px-6 relative">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
            {'< certifications >'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
            Certifications
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
            Professional certifications and training programs I have completed.
          </p>
        </motion.div>

        {/* Certification Cards */}
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
                {/* Card Header */}
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
                    </div>
                  </div>
                </div>

                {/* Embedded PDF */}
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
