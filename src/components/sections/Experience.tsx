import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, X, Award } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Vaidsys Technologies',
    role: 'DevOps Engineer Intern',
    duration: 'Jan 2026 - Feb 2026',
    responsibilities: [
      'Designed and implemented CI/CD pipelines using Jenkins and GitHub Actions, reducing manual deployment efforts and improving release automation.',
      'Containerized applications using Docker and deployed scalable workloads on Kubernetes, following cloud-native deployment practices.',
      'Provisioned and managed AWS infrastructure using Terraform and automated server configuration with Ansible.',
      'Configured Prometheus and Grafana for real-time application monitoring, infrastructure observability, and performance visualization.'
    ],
    certificate: 'https://drive.google.com/file/d/1m5GN1ortxzpr3VFW6StBbYdcNpuIzJCC/view'
  },
  {
    id: 2,
    company: 'Waverley Solutions',
    role: 'MERN Stack Developer Intern',
    duration: 'Jul 2025 - Oct 2025',
    responsibilities: [
      'Developed and maintained full-stack web applications using React.js, Node.js, Express.js, and MongoDB with responsive and user-friendly interfaces.',
      'Built secure and scalable RESTful APIs and reusable frontend components, improving application maintainability and development speed.',
      'Optimized API performance, database queries, and application workflows to deliver faster response times and better user experience.',
      'Collaborated with the development team using Git/GitHub, participated in code reviews, debugging, and feature implementation following agile development practices.'
    ],
    certificate: 'https://drive.google.com/file/d/1Mn3jMrX0A3ggN8JiLAE3_xZszyZhdXwt/view'
  }
];

export default function Experience() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background transform -translate-x-[15px] md:-translate-x-1/2 mt-1 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                <div className="ml-12 md:ml-0 md:w-1/2 p-6 bg-white rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow group">
                  <div className="flex items-center gap-3 text-primary font-semibold mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{exp.role}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>

                  {exp.certificate && (
                    exp.certificate.includes('drive.google.com') || exp.certificate.endsWith('.pdf') ? (
                      <a 
                        href={exp.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors font-medium text-sm mt-2"
                      >
                        <Award className="w-4 h-4" />
                        View Certificate
                      </a>
                    ) : (
                      <button 
                        onClick={() => setSelectedCert(exp.certificate!)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-colors font-medium text-sm mt-2"
                      >
                        <Award className="w-4 h-4" />
                        View Certificate
                      </button>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white p-2 rounded-2xl shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedCert(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-white text-foreground rounded-full flex items-center justify-center shadow-lg hover:bg-muted transition-colors border border-border"
              >
                <X className="w-5 h-5" />
              </button>
              <img src={selectedCert} alt="Certificate Full View" className="w-full rounded-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
