import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck, FiArrowUpRight } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

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
    <div className="min-h-[calc(100vh-64px)] py-20 px-6 relative">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-[4px] mb-3 block font-mono">
            {'< contact >'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight mb-6">
            Let's Work
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Together</span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
            Have a project in mind or just want to connect? Drop me a message and
            I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Contact Links */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
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

          {/* Contact Form */}
          <motion.form
            className="lg:col-span-3 relative p-8 sm:p-10 rounded-2xl bg-surface-light/50 border border-foreground/5"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="text-lg font-bold text-foreground mb-6">Send a Message</h2>

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
    </div>
  );
};

export default Contact;
