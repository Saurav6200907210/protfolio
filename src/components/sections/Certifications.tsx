import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, X } from 'lucide-react';

const certifications = [
  {
    id: 1,
    name: 'Introduction to Linux',
    issuer: 'Course Certificate',
    date: '2024',
    image: '/certificate/introduction-to-linux.png'
  },
  {
    id: 2,
    name: 'Introduction to DevOps & SRE',
    issuer: 'Course Certificate',
    date: '2024',
    image: '/certificate/introduction-to-devops-sre.png'
  },
  {
    id: 3,
    name: 'Mastering Kubernetes',
    issuer: 'Course Certificate',
    date: '2024',
    image: '/certificate/mastering-kubernetes.png'
  },
  {
    id: 4,
    name: 'Docker',
    issuer: 'Course Certificate',
    date: '2024',
    image: '/certificate/docker saurav.png'
  },
  {
    id: 5,
    name: 'Full Stack Development',
    issuer: 'Course Certificate',
    date: '2024',
    image: '/certificate/full stack.png'
  },
  {
    id: 6,
    name: 'Certificate',
    issuer: 'Course Certificate',
    date: '2024',
    image: '/certificate/image.png'
  }
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-background rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all group"
            >
              <div 
                className="aspect-video relative overflow-hidden cursor-pointer"
                onClick={() => setSelectedCert(cert.image)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white/90 text-foreground px-4 py-2 rounded-full font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all">
                    <ExternalLink className="w-4 h-4" /> View Preview
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-foreground mb-1 leading-tight">{cert.name}</h3>
                    <p className="text-sm font-medium text-primary">{cert.issuer}</p>
                  </div>
                  <Award className="w-6 h-6 text-accent flex-shrink-0" />
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
                  <span>Issued: {cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
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
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
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
