import { useState, useEffect } from 'react';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative bg-background py-16 border-t border-border overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
            
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-1 group cursor-pointer" onClick={scrollToTop}>
                <span className="text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">Saurav</span>
                <span className="text-primary font-bold text-2xl animate-pulse">.</span>
              </div>
              <p className="text-sm text-muted-foreground text-center md:text-left max-w-xs">
                Building robust digital experiences with a focus on DevOps and Full Stack Development.
              </p>
            </div>
            
            {/* Socials */}
            <div className="flex items-center gap-5">
              <a href="https://github.com/Saurav6200907210" 
                 className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300" 
                 target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/saurav-kumar-devops" 
                 className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:bg-[#0077b5] hover:text-white hover:shadow-lg hover:shadow-[#0077b5]/20 hover:-translate-y-1 transition-all duration-300" 
                 target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:sonukumarteg245@gmail.com" 
                 className="p-3 rounded-full bg-muted/50 text-muted-foreground hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-1 transition-all duration-300" 
                 aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <span>© {new Date().getFullYear()}</span>
                <span className="w-1 h-1 bg-border rounded-full mx-1"></span>
                <span className="flex items-center gap-1">Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /></span>
              </div>
            </div>
            
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 bg-background/80 backdrop-blur-md border border-border hover:border-primary text-foreground hover:text-primary rounded-full shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 group ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </>
  );
}
