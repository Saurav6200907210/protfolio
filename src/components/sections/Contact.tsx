import { motion } from 'framer-motion';
import { Mail, MapPin, Download } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-white/80 backdrop-blur-xl border border-border rounded-3xl p-8 md:p-12 shadow-xl shadow-primary/5"
        >
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Let's Connect</h2>
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <a href="mailto:sonukumarteg245@gmail.com" className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Email</h4>
                <p className="text-sm text-muted-foreground">sonukumarteg245@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-border">
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Location</h4>
                <p className="text-sm text-muted-foreground">Raipur, Chhattisgarh</p>
              </div>
            </div>

            <a href="https://github.com/Saurav6200907210" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-foreground/5 text-foreground rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">GitHub</h4>
                <p className="text-sm text-muted-foreground">@Saurav6200907210</p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/saurav-kumar-devops" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all group">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">LinkedIn</h4>
                <p className="text-sm text-muted-foreground">/in/saurav-kumar-devops</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center">
            <a 
              href="/resume.pdf" 
              className="px-8 py-4 rounded-full bg-foreground text-background font-medium flex items-center gap-2 hover:bg-foreground/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Download className="w-5 h-5" />
              Download Full Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
