import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  SiLinux, SiDocker, SiKubernetes, SiTerraform, SiJenkins, 
  SiGithubactions, SiGit, SiAnsible, SiPrometheus, SiGrafana, SiNginx, 
  SiRedis, SiPostgresql, SiReact, SiNodedotjs, SiExpress, SiJavascript, 
  SiTypescript, SiHtml5
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'Linux', Icon: SiLinux, color: '#FCC624', category: 'OS', description: 'Powering robust server infrastructure.', experience: '1', projectsCount: 10 },
  { name: 'Docker', Icon: SiDocker, color: '#2496ED', category: 'Containers', description: 'Containerizing modern cloud applications.', experience: '1', projectsCount: 9 },
  { name: 'Kubernetes', Icon: SiKubernetes, color: '#326CE5', category: 'Orchestration', description: 'Scaling microservices with high availability.', experience: '1', projectsCount: 8 },
  { name: 'Terraform', Icon: SiTerraform, color: '#844FBA', category: 'IaC', description: 'Provisioning infrastructure as code.', experience: '1', projectsCount: 8 },
  { name: 'AWS', Icon: FaAws, color: '#232F3E', category: 'Cloud', description: 'Architecting secure cloud environments.', experience: '1', projectsCount: 10 },
  { name: 'Jenkins', Icon: SiJenkins, color: '#D24939', category: 'CI/CD', description: 'Automating software delivery pipelines.', experience: '1', projectsCount: 9 },
  { name: 'Git', Icon: SiGit, color: '#F05032', category: 'VCS', description: 'Managing complex version control workflows.', experience: '1', projectsCount: 10 },
  { name: 'GitHub Actions', Icon: SiGithubactions, color: '#2088FF', category: 'CI/CD', description: 'Streamlining CI/CD directly within GitHub.', experience: '1', projectsCount: 8 },
  { name: 'Ansible', Icon: SiAnsible, color: '#EE0000', category: 'Config', description: 'Automating configuration management.', experience: '1', projectsCount: 8 },
  { name: 'Prometheus', Icon: SiPrometheus, color: '#E6522C', category: 'Monitoring', description: 'Collecting and querying application metrics.', experience: '1', projectsCount: 8 },
  { name: 'Grafana', Icon: SiGrafana, color: '#F46800', category: 'Observability', description: 'Visualizing data and monitoring alerts.', experience: '1', projectsCount: 8 },
  { name: 'NGINX', Icon: SiNginx, color: '#009639', category: 'Web Server', description: 'High-performance load balancing and proxying.', experience: '1', projectsCount: 9 },
  { name: 'Redis', Icon: SiRedis, color: '#DC382D', category: 'Database', description: 'In-memory caching for low-latency apps.', experience: '1', projectsCount: 8 },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', category: 'Database', description: 'Relational database for enterprise systems.', experience: '1', projectsCount: 9 },
  { name: 'HTML', Icon: SiHtml5, color: '#E34F26', category: 'Frontend', description: 'Structuring the web.', experience: '2', projectsCount: 18 },
  { name: 'React', Icon: SiReact, color: '#61DAFB', category: 'Frontend', description: 'Building interactive user interfaces.', experience: '2', projectsCount: 17 },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#339933', category: 'Backend', description: 'Developing scalable backend APIs.', experience: '2', projectsCount: 16 },
  { name: 'Express', Icon: SiExpress, color: '#000000', category: 'Backend', description: 'Fast, unopinionated web framework for Node.js.', experience: '2', projectsCount: 15 },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', category: 'Language', description: 'Type-safe JavaScript development.', experience: '1', projectsCount: 14 }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Parallax setup
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 40; 
    const y = (clientY / innerHeight - 0.5) * 40;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    const total = skills.length;
    const radius = window.innerWidth < 768 ? 140 : 240; 

    // Initial positioning math
    const setInitialPositions = () => {
      iconsRef.current.forEach((icon, i) => {
        if (!icon) return;
        if (i === 0) {
          // Center the first icon
          gsap.set(icon, { x: 0, y: 0, scale: 1, opacity: 1 });
        } else {
          // Position others in an orbit
          const angle = (i * (360 / total)) * (Math.PI / 180);
          gsap.set(icon, { 
            x: Math.cos(angle) * radius, 
            y: Math.sin(angle) * radius, 
            scale: 0.5, 
            opacity: 0.15 
          });
        }
      });
    };

    setInitialPositions();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${(total + 1) * 500}`, // Long scroll to step through all items
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            // GSAP timeline duration is roughly 'total' seconds (total-1 steps + 1 final step)
            // So we have 'total + 1' segments
            const segmentSize = 1 / (total + 1);
            let currentIdx = Math.floor(self.progress / segmentSize);
            if (currentIdx > total) currentIdx = total;
            setActiveIndex(currentIdx);
          }
        }
      });

      // Sequence animations
      for (let i = 0; i < total - 1; i++) {
        const currentIcon = iconsRef.current[i];
        const nextIcon = iconsRef.current[i + 1];
        
        // Target angle for the current icon when it goes back to orbit
        const angle = (i * (360 / total)) * (Math.PI / 180);
        
        tl.addLabel(`step-${i}`);

        // Move current icon back to orbit
        tl.to(currentIcon, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          scale: 0.5,
          opacity: 0.15,
          duration: 1,
          ease: 'power2.inOut'
        }, `step-${i}`);

        // Move next icon to center
        tl.to(nextIcon, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut'
        }, `step-${i}`);

        // Rotate the entire orbit container slightly
        tl.to(orbitRef.current, {
          rotation: `-=${360 / total}`,
          duration: 1,
          ease: 'power2.inOut'
        }, `step-${i}`);
      }

      // Final step: Fade in title, arrange all beautifully, and release
      tl.addLabel('final');
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, 'final');
      
      iconsRef.current.forEach((icon, i) => {
        const finalAngle = (i * (360 / total)) * (Math.PI / 180);
        tl.to(icon, {
          x: Math.cos(finalAngle) * radius,
          y: Math.sin(finalAngle) * radius,
          scale: 0.8,
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut'
        }, 'final');
      });

      // Keep it pinned a little longer at the end
      tl.to({}, { duration: 0.5 });

    }, containerRef);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isFinalState = activeIndex >= skills.length;
  const activeSkill = skills[Math.min(activeIndex, skills.length - 1)];

  return (
    <section 
      ref={containerRef} 
      className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden z-20"
      onMouseMove={handleMouseMove}
    >
      {/* Background abstract circles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ x: useTransform(springX, x => x * -2), y: useTransform(springY, y => y * -2) }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full border border-primary/5 bg-gradient-to-tr from-primary/5 to-transparent blur-3xl"
        />
        <motion.div 
          style={{ x: useTransform(springX, x => x * 1.5), y: useTransform(springY, y => y * 1.5) }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full border border-secondary/5 bg-gradient-to-tr from-secondary/5 to-transparent blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 z-10 h-full flex flex-col items-center justify-center relative">
        
        {/* Title for the final state */}
        <h2 
          ref={titleRef}
          className="absolute top-6 md:top-10 left-1/2 -translate-x-1/2 text-3xl md:text-5xl font-bold tracking-tight text-foreground opacity-0 -translate-y-10 whitespace-nowrap z-50 bg-white/70 backdrop-blur-lg px-8 py-4 rounded-full shadow-lg border border-border/50"
        >
          Technologies I Work With
        </h2>

        {/* Orbit Container */}
        <motion.div 
          ref={orbitRef}
          style={{ x: springX, y: springY }}
          className="relative w-full h-[600px] flex items-center justify-center mt-12 md:mt-24"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={el => iconsRef.current[index] = el}
              className="absolute group w-20 h-20 md:w-28 md:h-28 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg border border-border/50 flex items-center justify-center transition-shadow hover:shadow-2xl hover:border-primary/20 cursor-pointer"
            >
              <skill.Icon 
                className="w-10 h-10 md:w-14 md:h-14 transition-all duration-300 group-hover:scale-125" 
                style={{ color: skill.color }}
              />
              
              {/* Tooltip for orbit icons */}
              <div className="absolute -top-14 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white/90 backdrop-blur-md text-foreground px-4 py-2 rounded-xl shadow-xl border border-border/50 flex flex-col items-center pointer-events-none z-50 transform scale-90 group-hover:scale-100">
                <span className="font-bold text-sm">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Center Glass Card */}
        <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 w-full max-w-lg px-4 transition-opacity duration-300">
          <motion.div 
            key={activeSkill.name} // Force re-render on index change for a small pop animation
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: isFinalState ? 0 : 1, y: 0, scale: 1 }} // Fade out on last item
            transition={{ duration: 0.4 }}
            className="bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl p-6 md:p-8 text-center pointer-events-none"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
              {activeSkill.name}
            </h3>
            <p className="text-muted-foreground font-medium mb-6">
              {activeSkill.description}
            </p>
            
            <div className="flex justify-center gap-6 border-t border-border/50 pt-5">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Experience</p>
                <p className="font-bold text-lg text-foreground">{activeSkill.experience} Yrs</p>
              </div>
              <div className="w-px bg-border/50"></div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Projects</p>
                <p className="font-bold text-lg text-foreground">{activeSkill.projectsCount}+</p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
