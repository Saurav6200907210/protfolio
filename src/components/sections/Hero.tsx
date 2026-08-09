import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl mb-8"
          >
            <img 
              src="/saurav image.png" 
              alt="Professional Profile" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
              Hi, I'm <span className="text-primary">Saurav</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6 h-10">
              <span className="inline-block border-r-2 border-primary pr-1 animate-pulse">
                DevOps Engineer & Full Stack Developer
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Building scalable infrastructure and crafting elegant web experiences. Bridging the gap between development and operations.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a href="#contact" className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5">
              <Mail className="w-5 h-5" />
              Contact Me
            </a>
            <a href="/resume.pdf" className="px-6 py-3 rounded-full bg-white text-foreground font-medium border border-border flex items-center gap-2 hover:bg-muted transition-all shadow-sm hover:-translate-y-0.5">
              <Download className="w-5 h-5" />
              Download Resume
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a href="https://github.com/Saurav6200907210" target="_blank" rel="noreferrer" className="p-3 bg-white border border-border rounded-full hover:bg-muted transition-all text-foreground hover:text-primary shadow-sm hover:-translate-y-0.5">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/saurav-kumar-devops" target="_blank" rel="noreferrer" className="p-3 bg-white border border-border rounded-full hover:bg-muted transition-all text-foreground hover:text-primary shadow-sm hover:-translate-y-0.5">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
