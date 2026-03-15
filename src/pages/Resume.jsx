import { motion } from 'framer-motion';
import { FiDownload, FiFileText } from 'react-icons/fi';

const Resume = () => {
  const resumeUrl = '/Aryan_cv.pdf';

  return (
    <div className="min-h-[calc(100vh-64px)] py-20 px-6 relative">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
            {'< resume >'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
            My Resume
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              View or download my resume below.
            </p>
            <a
              href={resumeUrl}
              download="Aryan_Singh_Resume.pdf"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-dark transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
            >
              <FiDownload size={16} className="group-hover:-translate-y-0.5 transition-transform" />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* PDF Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-foreground/5 bg-surface-light/50"
        >
          <iframe
            src={resumeUrl}
            title="Aryan Singh Resume"
            className="w-full bg-white"
            style={{ height: '85vh', minHeight: '600px' }}
          />
          {/* Fallback */}
          <div className="p-8 text-center border-t border-foreground/5">
            <FiFileText size={32} className="mx-auto text-muted mb-3" />
            <p className="text-muted text-sm mb-4">
              Can't see the PDF?{' '}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                Open in a new tab
              </a>{' '}
              or use the download button above.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
