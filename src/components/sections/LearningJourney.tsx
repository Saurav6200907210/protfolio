import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  SiJavascript, SiTypescript, SiHtml5, SiReact, 
  SiNodedotjs, SiExpress, SiLinux, SiGit, SiDocker, 
  SiKubernetes, SiTerraform, SiGithubactions, SiJenkins, 
  SiPrometheus, SiGrafana
} from 'react-icons/si';
import { FaAws, FaCss3Alt } from 'react-icons/fa';
import { Shield, Lock, Search } from 'lucide-react';

const milestones = [
  {
    id: 1,
    title: 'Foundations',
    x: 50,
    y: 10,
    color: 'from-blue-400 to-blue-600',
    shadow: 'shadow-blue-500/20',
    description: 'Mastered core programming concepts, data structures, and the JavaScript/TypeScript ecosystem to write clean, efficient logic.',
    skills: [
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'TypeScript', Icon: SiTypescript },
    ],
  },
  {
    id: 2,
    title: 'Frontend Engineering',
    x: 20,
    y: 23,
    color: 'from-cyan-400 to-blue-500',
    shadow: 'shadow-cyan-500/20',
    description: 'Built complex, responsive, and accessible modern UI systems using React and modern CSS methodologies.',
    skills: [
      { name: 'HTML', Icon: SiHtml5 },
      { name: 'CSS', Icon: FaCss3Alt },
      { name: 'React', Icon: SiReact },
    ],
  },
  {
    id: 3,
    title: 'Backend Systems',
    x: 80,
    y: 37,
    color: 'from-indigo-400 to-purple-500',
    shadow: 'shadow-indigo-500/20',
    description: 'Engineered scalable RESTful APIs, managed databases, and handled authentication using Node.js and Express.',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'Express', Icon: SiExpress },
    ],
  },
  {
    id: 4,
    title: 'Tools & Linux',
    x: 20,
    y: 50,
    color: 'from-purple-400 to-fuchsia-500',
    shadow: 'shadow-purple-500/20',
    description: 'Navigated Linux server environments and utilized Git for advanced version control in team environments.',
    skills: [
      { name: 'Linux', Icon: SiLinux },
      { name: 'Git', Icon: SiGit },
    ],
  },
  {
    id: 5,
    title: 'DevOps & Cloud',
    x: 80,
    y: 63,
    color: 'from-fuchsia-400 to-pink-500',
    shadow: 'shadow-pink-500/30',
    isFinalGoal: true,
    description: 'Architected and provisioned highly available cloud infrastructure on AWS using Terraform, Docker, and Kubernetes.',
    skills: [
      { name: 'Docker', Icon: SiDocker },
      { name: 'Kubernetes', Icon: SiKubernetes },
      { name: 'Terraform', Icon: SiTerraform },
      { name: 'AWS', Icon: FaAws },
    ],
  },
  {
    id: 6,
    title: 'CI/CD & Monitoring',
    x: 20,
    y: 77,
    color: 'from-pink-400 to-rose-500',
    shadow: 'shadow-rose-500/30',
    isFinalGoal: true,
    description: 'Automated deployment pipelines and implemented robust observability to ensure 99.9% uptime.',
    skills: [
      { name: 'GitHub Actions', Icon: SiGithubactions },
      { name: 'Jenkins', Icon: SiJenkins },
      { name: 'Prometheus', Icon: SiPrometheus },
      { name: 'Grafana', Icon: SiGrafana },
    ],
  },
  {
    id: 7,
    title: 'DevSecOps',
    x: 50,
    y: 90,
    color: 'from-rose-400 to-orange-500',
    shadow: 'shadow-orange-500/30',
    isFinalGoal: true,
    description: 'Integrated security into the CI/CD pipeline, performing automated vulnerability scanning and secret management.',
    skills: [
      { name: 'SonarQube', Icon: Search },
      { name: 'Snyk', Icon: Shield },
      { name: 'Vault', Icon: Lock },
    ],
  },
];

const svgPath = "M 50,0 C 50,5 50,5 50,10 C 50,16 20,16 20,23 C 20,30 80,30 80,37 C 80,44 20,44 20,50 C 20,56 80,56 80,63 C 80,70 20,70 20,77 C 20,84 50,84 50,90 C 50,95 50,95 50,100";

export default function LearningJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 50, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <section className="relative min-h-[150vh] bg-white overflow-hidden py-32 z-20">
      
      {/* Background gradients (Light & Premium) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]" />
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[20%] w-[400px] h-[400px] bg-pink-400/10 rounded-full blur-[100px]" />
        
        {/* Subtle noise for texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            From Code to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Cloud</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            I don’t just write code — I build, scale, and deploy production-ready systems.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative w-full h-[1200px] max-w-5xl mx-auto">
          
          {/* SVG Path drawing */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Background track (subtle light gray) */}
            <path
              d={svgPath}
              fill="none"
              stroke="rgba(15, 23, 42, 0.04)"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
            
            {/* Glowing animated path */}
            <motion.path
              d={svgPath}
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ pathLength, opacity }}
            />
            
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Milestones / Nodes */}
          {milestones.map((milestone) => (
            <MilestoneNode 
              key={milestone.id} 
              milestone={milestone} 
              progress={scrollYProgress}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

function MilestoneNode({ milestone, progress }: { milestone: any, progress: any }) {
  // Activate when the scroll progress roughly reaches the Y percentage
  const activationPoint = milestone.y / 100;
  
  // Transform scale and opacity based on scroll reaching this node
  const scale = useTransform(
    progress,
    [activationPoint - 0.15, activationPoint - 0.05],
    [0.5, 1]
  );
  
  const opacity = useTransform(
    progress,
    [activationPoint - 0.15, activationPoint - 0.05],
    [0, 1]
  );

  return (
    <motion.div
      style={{
        left: `${milestone.x}%`,
        top: `${milestone.y}%`,
        scale,
        opacity,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-30"
    >
      {/* Node Dot (Premium Stripe-like) */}
      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-tr ${milestone.color} p-[3px] flex items-center justify-center relative cursor-pointer group-hover:scale-110 transition-transform duration-300 shadow-lg ${milestone.shadow} z-40`}>
        <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-inner">
          <div className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-gradient-to-tr ${milestone.color} ${milestone.isFinalGoal ? 'animate-bounce' : 'animate-pulse'}`} />
        </div>
        
        {/* Soft radar ping effect */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${milestone.color} animate-ping opacity-20 ${milestone.isFinalGoal ? 'scale-[2] opacity-30' : ''}`} />
      </div>

      {/* Glassmorphic Card (Light Theme) */}
      <div className={`
        absolute top-full mt-6 w-[280px] md:w-[320px] p-6 rounded-2xl 
        bg-white/90 backdrop-blur-2xl border border-slate-200/60 
        shadow-[0_8px_30px_rgb(0,0,0,0.08)] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
        transition-all duration-300 pointer-events-none group-hover:pointer-events-auto
        flex flex-col gap-4 z-50
        ${milestone.x < 50 ? 'left-0 md:left-full md:ml-8 md:-mt-12' : ''}
        ${milestone.x > 50 ? 'right-0 md:right-full md:mr-8 md:-mt-12' : ''}
        ${milestone.x === 50 ? 'left-1/2 -translate-x-1/2' : ''}
      `}>
        {/* Subtle color hint in background of tooltip */}
        <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-[0.03] rounded-2xl -z-10`} />
        
        <h3 className="text-slate-900 font-extrabold text-xl tracking-tight">{milestone.title}</h3>
        
        <p className="text-sm text-slate-600 leading-relaxed font-medium">
          {milestone.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-100">
          {milestone.skills.map((skill: any) => (
            <div key={skill.name} className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 shadow-sm transition-colors hover:bg-slate-100">
              <skill.Icon className="w-4 h-4 text-slate-500" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Persistent label (always visible, hidden on hover) */}
      <div className={`absolute top-full mt-4 text-center group-hover:opacity-0 transition-opacity duration-300 font-bold text-slate-600 whitespace-nowrap text-sm md:text-base`}>
        {milestone.title}
      </div>

    </motion.div>
  );
}
