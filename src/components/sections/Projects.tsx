import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ExternalLink, CheckCircle, Search, X, Server, Activity, FileDown, Code, Lightbulb, Zap, Target, Flame, ChevronRight, Container, Layers } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import type { Swiper as SwiperType } from 'swiper';

export type ProjectType = {
  title: string;
  stack: string;
  description: string;
  github: string;
  demo: string;
  highlights: string[];
  images: string[];
  architectureOverview?: string;
  devOpsPipeline?: string;
  systemDesign?: string;
  problemAndSolution?: string;
  performanceOptimization?: string;
  realWorldImpact?: string;
  challengesAndLearnings?: string;
};

const projects: ProjectType[] = [
  {
    title: 'GitAnalyze-AI',
    stack: 'React • Vite • Node.js • PostgreSQL • Docker • Kubernetes',
    description: 'An AI-powered platform that analyzes GitHub profiles, evaluates repository quality, and generates an ATS-ready score with clear career insights for developers.',
    github: 'https://github.com/Saurav6200907210/GitAnalyze-AI',
    demo: 'https://gitanalyze-ai.pages.dev/',
    highlights: [
      'Analyze GitHub profiles',
      'Check repository quality',
      'Generate ATS score',
      'Provide career suggestions',
      'Export PDF reports',
      'Fast results with smart caching'
    ],
    images: [
      '/Githubanalyser/1.png',
      '/Githubanalyser/2.png',
      '/Githubanalyser/3.png',
      '/Githubanalyser/4.png',
      '/Githubanalyser/5.png',
      '/Githubanalyser/6.png',
      '/Githubanalyser/7.png'
    ],
    problemAndSolution: 'Most developers don’t know how strong their GitHub portfolio actually is. This tool solves that by providing a detailed analysis, scoring system, and a step-by-step roadmap to improve.',
    architectureOverview: 'Built using a scalable architecture with React (frontend), Node.js (backend), PostgreSQL (database), and Redis (caching layer).',
    devOpsPipeline: 'Fully containerized using Docker, deployed on Kubernetes, with automated CI/CD pipelines via GitHub Actions and real-time monitoring using Prometheus & Grafana.',
    performanceOptimization: 'Uses Redis caching to reduce API calls, improve speed, and ensure faster response times with optimized backend processing.',
    realWorldImpact: 'Helps students and developers understand their portfolio strength, improve their skills, and become job-ready for real industry roles.',
    challengesAndLearnings: 'Solved GitHub API rate limits using caching and handled real-world deployment challenges using Kubernetes and scalable infrastructure.'
  },
  {
    title: 'WebMetricsX',
    stack: 'React • Node.js • Docker • Kubernetes • Terraform • Ansible',
    description: 'WebMetricsX is a production-ready website monitoring platform that tracks real-time performance, uptime, and SEO metrics. It covers the entire DevOps lifecycle — from build to monitoring.',
    github: 'https://github.com/Saurav6200907210/WebMetricsX',
    demo: 'https://web-metrics-x.vercel.app/',
    highlights: [
      'Real-time website status & response tracking',
      'SEO & performance analysis (Core Web Vitals)',
      'Auto-refresh dashboard with charts',
      'PDF report generation',
      'Full DevOps automation (CI/CD + Monitoring)'
    ],
    images: [
      '/webmatrix/1.png',
      '/webmatrix/2.png',
      '/webmatrix/3.png',
      '/webmatrix/4.png'
    ],
    problemAndSolution: 'Traditional monitoring tools provide limited insights.\nThis project builds an all-in-one DevOps ecosystem that combines monitoring, automation, and visualization.',
    architectureOverview: 'The system follows a cloud-native architecture where the frontend, backend, and monitoring stack are containerized and deployed on Kubernetes for scalability & high availability.',
    devOpsPipeline: '• Jenkins CI/CD pipeline (build → test → deploy)\n• Docker containerization & DockerHub\n• Kubernetes orchestration\n• Terraform (IaC) + Ansible automation\n• Prometheus + Grafana monitoring',
    performanceOptimization: '• Real-time metrics collection (CPU, memory, response time)\n• Efficient monitoring with Prometheus\n• Scalable infrastructure using Kubernetes auto-scaling\n• Faster load time tracking with TTFB analysis',
    realWorldImpact: '• Helps businesses detect website downtime\n• Supports improving SEO and performance\n• Provides a complete monitoring solution for DevOps teams',
    challengesAndLearnings: '• CI/CD pipeline integration complexity\n• Kubernetes deployment & debugging\n• Monitoring tools setup (Prometheus + Grafana)\n• Cloud cost optimization (AWS → local Kubernetes)'
  },
  {
    title: 'Codexa',
    stack: 'React • Node.js • Express • PostgreSQL • Redis',
    description: 'AI-powered GitHub repository intelligence platform that helps users quickly understand any public repository through automated analysis, visual architecture, and smart summaries.',
    github: 'https://github.com/Saurav6200907210/Code-Sage',
    demo: 'https://code-sage.vercel.app/',
    highlights: [
      'Repository analysis',
      'AI-generated summaries',
      'Folder explanation engine',
      'Tech stack detection',
      'Architecture visualization',
      'Interactive dashboard',
      'Fast response caching'
    ],
    images: [
      '/codexaa/1.png',
      '/codexaa/2.png',
      '/codexaa/3.png',
      '/codexaa/4.png',
      '/codexaa/5.png',
      '/codexaa/6.png',
      '/codexaa/7.png'
    ],
    problemAndSolution: 'Understanding unknown repositories is time-consuming due to complex folder structures and lack of documentation.\nCodexa solves this by transforming raw codebases into simple, visual, and structured insights—reducing hours of effort into seconds.',
    architectureOverview: '• Frontend (React/Vite)\n• Backend (Node.js/Express)\n• PostgreSQL database\n• Redis caching layer\n• Modular analysis engine for scalable processing',
    devOpsPipeline: '• Dockerized services\n• CI/CD workflows\n• Scalable backend services\n• Optimized caching strategy\n• Production-ready architecture with separation of concerns',
    performanceOptimization: '• Smart caching using Redis\n• Reduced repeated API calls\n• Faster analysis response\n• Efficient backend processing pipeline',
    realWorldImpact: '• Helps developers, students, and recruiters quickly understand projects\n• Improve onboarding speed\n• Explore open-source efficiently',
    challengesAndLearnings: '• Handled complex repo structures\n• Built intelligent analysis pipeline\n• Managed performance using caching\n• Designed scalable and modular architecture'
  },
  {
    title: 'DevForge-AI',
    stack: 'React • TypeScript • Node.js • Gemini AI • Docker',
    description: 'AI-powered full-stack developer intelligence platform that analyzes GitHub profiles, generates ATS-ready resumes, builds portfolios, and provides career insights through a unified dashboard.',
    github: 'https://github.com/Saurav6200907210/DevForge-AI',
    demo: 'https://devforge-ai.pages.dev/',
    highlights: [
      'AI GitHub analysis',
      'Resume builder',
      'Portfolio generator',
      'ATS optimization',
      'Job match score',
      'Career roadmap',
      'Smart recommendations'
    ],
    images: [
      '/devforge/1.png',
      '/devforge/2.png',
      '/devforge/3.png',
      '/devforge/4.png',
      '/devforge/5.png',
      '/devforge/6.png',
      '/devforge/7.png',
      '/devforge/8.png'
    ],
    problemAndSolution: 'Developers often use multiple tools for resume building, portfolio creation, and GitHub analysis.\nThis platform simplifies everything by combining all features into one place—saving time and improving productivity.',
    architectureOverview: '• React + TypeScript frontend\n• Node.js + Express backend\n• REST APIs\n• Modular architecture\n• AI integration (Gemini)\n• Scalable full-stack design',
    systemDesign: '• Component-based frontend\n• API-driven backend\n• Modular code structure\n• Separation of concerns\n• Scalable and maintainable architecture',
    performanceOptimization: '• Optimized API calls\n• Fast rendering using Vite\n• Lazy loading components\n• Efficient state management\n• Responsive UI',
    realWorldImpact: '• Helps developers improve resumes, portfolios, and GitHub profiles\n• Making them more job-ready\n• Increasing hiring chances',
    challengesAndLearnings: '• Handled multi-feature integration\n• Built AI-driven workflows\n• Designed scalable system\n• Improved UI/UX for better user experience'
  },
  {
    title: 'KubeVision',
    stack: 'React • TypeScript • React Flow • Kubernetes • Docker',
    description: 'KubeVision is an enterprise-grade platform that converts Kubernetes YAML files into interactive visual graphs, making it possible to understand complex infrastructure in seconds.',
    github: 'https://github.com/Saurav6200907210/KubeVision',
    demo: 'https://kubevision.pages.dev/',
    highlights: [
      'YAML parser',
      'Resource relationship detection',
      'Interactive graph (zoom, pan, filter)',
      'Deployment visualization',
      'Export (SVG/PNG)',
      'Modern responsive UI'
    ],
    images: [
      '/kubevision/1.png',
      '/kubevision/2.png',
      '/kubevision/3.png',
      '/kubevision/4.png',
      '/kubevision/5.png'
    ],
    problemAndSolution: 'Manually understanding hundreds of YAML files in Kubernetes is difficult.\nKubeVision solves this problem by automatically parsing YAML, detecting relationships, and generating a visual graph that clearly displays the entire infrastructure.',
    architectureOverview: '• Frontend (React + TypeScript)\n• Backend (Node.js + Express)\n• Visualization Engine (React Flow)\n• Modular cloud-native design for scalability',
    devOpsPipeline: '• Docker containerization\n• CI/CD using GitHub Actions\n• NGINX reverse proxy\n• Cloud deployment support (Render, Cloudflare)',
    performanceOptimization: '• Fast YAML parsing (<100ms)\n• Optimized graph rendering\n• Async API processing\n• Redis caching\n• Efficient frontend rendering using virtualization',
    realWorldImpact: '• Helps DevOps engineers and cloud teams to quickly understand, debug, and optimize complex Kubernetes deployments\n• Saves both time and effort',
    challengesAndLearnings: '• Handled complex YAML parsing\n• Built dependency detection engine\n• Designed scalable architecture\n• Managed Kubernetes deployment & debugging\n• Optimized graph rendering'
  },
  {
    title: 'Startup-Chronicle',
    stack: 'React • Next.js • TypeScript • Gemini AI • PostgreSQL',
    description: 'AI-powered platform that analyzes startups to generate investor-grade reports, dashboards, and insights. It converts complex startup data into a simple and visual format.',
    github: 'https://github.com/Saurav6200907210/startup-chronicle',
    demo: 'https://dna-scribe-81.lovable.app/',
    highlights: [
      'AI Startup Analysis',
      'Founder Intelligence',
      'Competitor Research',
      'Product Evolution Tracking',
      'Startup Health Score',
      'PDF Report Generation',
      'Interactive Charts'
    ],
    images: [
      '/startup/1.png',
      '/startup/2.png',
      '/startup/3.png',
      '/startup/4.png',
      '/startup/5.png'
    ],
    problemAndSolution: 'Startup research = scattered data + time waste\nSolution = A single platform that automatically analyzes, structures, and visualizes all the data.',
    architectureOverview: '• Frontend → React + TypeScript + Tailwind\n• Backend → Supabase (DB + APIs)\n• Data Flow → API-driven + modular design\n• AI Layer → Smart analysis engine',
    systemDesign: '• Component-based UI\n• API-based communication\n• Modular structure\n• Scalable & maintainable design',
    performanceOptimization: '• Fast data fetching (TanStack Query)\n• Smooth UI rendering\n• Optimized charts & dashboards\n• Responsive performance',
    realWorldImpact: '• Developers → fast research\n• Investors → better decisions\n• Students → easy understanding\n• Entrepreneurs → quick insights',
    challengesAndLearnings: '• Complex data structuring\n• Dashboard design\n• AI integration\n• UI/UX improvements'
  },
  {
    title: 'HireLens',
    stack: 'React • TypeScript • PostgreSQL • Tailwind CSS',
    description: 'AI-powered interview preparation platform that enables users to practice interviews using voice-based responses with real-time evaluation and performance tracking.',
    github: 'https://github.com/Saurav6200907210/HireLens',
    demo: 'https://hire-lens-7ucn.vercel.app/',
    highlights: [
      'Voice-enabled interview system',
      'AI-powered live interviewer',
      'MCQ + spoken answer modes',
      'Real-time scoring (technical + communication)',
      'Progress tracking dashboard',
      'Detailed performance insights'
    ],
    images: [
      '/Hirelens/1.png',
      '/Hirelens/2.png',
      '/Hirelens/3.png',
      '/Hirelens/4.png',
      '/Hirelens/5.png',
      '/Hirelens/6.png'
    ],
    problemAndSolution: '❌ Lack of real interview practice and feedback\n❌ Poor communication and confidence during interviews\n✅ Provides a realistic interview environment with voice interaction and instant AI-based feedback',
    architectureOverview: '• Frontend → React + TypeScript + Tailwind CSS\n• UI → shadcn/ui + Radix UI + Framer Motion\n• Backend → Supabase (PostgreSQL, Auth, Edge Functions)\n• Charts → Recharts\n• PDF → jsPDF + html2canvas',
    systemDesign: '• Component-based architecture\n• API-driven communication\n• Modular and scalable structure\n• Fully responsive design',
    performanceOptimization: '• Optimized rendering for smooth UI\n• Efficient API handling\n• Reduced latency in voice processing\n• Cross-device performance optimization',
    realWorldImpact: '• Helps students prepare for real interviews\n• Improves communication and confidence\n• Enables performance tracking and growth\n• Increases job readiness',
    challengesAndLearnings: '• Handling browser-based voice recognition\n• Designing AI evaluation logic\n• Building accurate scoring system\n• Improving user experience and UI'
  }
];

function DeepDiveExperience({ project, onClose }: { project: ProjectType; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState('overview');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        root: scrollContainerRef.current,
        rootMargin: '-10% 0px -50% 0px',
        threshold: 0.1,
      }
    );

    const container = scrollContainerRef.current;
    if (container) {
      const sections = container.querySelectorAll('.scroll-section');
      sections.forEach((section) => observer.observe(section));
    }

    return () => observer.disconnect();
  }, [project]);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: <Activity className="w-4 h-4" /> },
    ...(project.problemAndSolution ? [{ id: 'problem', label: 'Problem & Solution', icon: <Lightbulb className="w-4 h-4" /> }] : []),
    { id: 'features', label: 'Key Features', icon: <Code className="w-4 h-4" /> },
    ...(project.architectureOverview ? [{ id: 'architecture', label: 'Architecture', icon: <Server className="w-4 h-4" /> }] : []),
    ...(project.systemDesign ? [{ id: 'systemdesign', label: 'System Design', icon: <Layers className="w-4 h-4" /> }] : []),
    ...(project.devOpsPipeline ? [{ id: 'devops', label: 'DevOps Pipeline', icon: <Layers className="w-4 h-4" /> }] : []),
    ...(project.performanceOptimization ? [{ id: 'performance', label: 'Performance', icon: <Zap className="w-4 h-4" /> }] : []),
    ...(project.realWorldImpact ? [{ id: 'impact', label: 'Impact', icon: <Target className="w-4 h-4" /> }] : []),
    ...(project.challengesAndLearnings ? [{ id: 'challenges', label: 'Challenges', icon: <Flame className="w-4 h-4" /> }] : []),
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex flex-col justify-end bg-black/60 backdrop-blur-sm sm:p-4"
      data-lenis-prevent="true"
    >
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full h-[90vh] sm:h-[85vh] sm:rounded-3xl rounded-t-3xl bg-background shadow-2xl border border-border/50 overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 sm:px-10 border-b border-border/50 bg-background/80 backdrop-blur-xl shrink-0">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">{project.title}</h2>
            <div className="flex items-center gap-2 mt-2">
              {project.stack.split('•').slice(0, 3).map((tech, i) => (
                <span key={i} className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium">
                  {tech.trim()}
                </span>
              ))}
              {project.stack.split('•').length > 3 && <span className="text-xs text-muted-foreground">+{project.stack.split('•').length - 3} more</span>}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-3 bg-muted hover:bg-red-500/10 text-muted-foreground hover:text-red-500 rounded-full transition-all group"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* 2-Column Layout */}
        <div className="flex flex-col md:flex-row flex-1 overflow-hidden min-h-0">
          {/* Sidebar / Timeline */}
          <div data-lenis-prevent="true" className="w-full md:w-64 border-b md:border-b-0 md:border-r border-border/50 p-4 md:p-6 overflow-x-auto md:overflow-y-auto shrink-0 bg-muted/10 custom-scrollbar h-full">
            <div className="flex md:flex-col gap-2 min-w-max md:min-w-0 pb-2 md:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    const el = document.getElementById(tab.id);
                    if (el && scrollContainerRef.current) {
                      scrollContainerRef.current.scrollTo({
                        top: el.offsetTop - 24, // offset for some breathing room
                        behavior: 'smooth'
                      });
                    }
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all text-left ${
                    activeTab === tab.id 
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]' 
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {tab.icon}
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Content */}
          <div data-lenis-prevent="true" ref={scrollContainerRef} className="flex-1 p-6 sm:p-10 overflow-y-auto custom-scrollbar relative h-full scroll-smooth">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-primary/5 blur-[100px] pointer-events-none rounded-full fixed" />
            
            <div className="relative z-10 max-w-3xl space-y-24 pb-24">
              
              <div id="overview" className="scroll-section space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{project.description}</p>
                {project.title === 'GitAnalyze-AI' && (
                  <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/20">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-foreground">ATS Optimization Score</span>
                      <span className="font-bold text-primary">85%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: '85%' }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} className="bg-primary h-full rounded-full" />
                    </div>
                  </div>
                )}
              </div>

              {project.problemAndSolution && (
                <div id="problem" className="scroll-section space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Problem & Solution</h3>
                  <div className="bg-muted/30 p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-muted-foreground leading-relaxed text-lg whitespace-pre-line">{project.problemAndSolution}</p>
                  </div>
                </div>
              )}

              <div id="features" className="scroll-section space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.highlights.map((highlight, i) => (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      key={i} className="flex items-center gap-3 bg-muted/20 p-5 rounded-2xl border border-border/50 hover:bg-muted/40 hover:scale-[1.02] transition-all cursor-default"
                    >
                      <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                      <span className="text-foreground/90 font-medium text-lg">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {project.architectureOverview && (
                <div id="architecture" className="scroll-section space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Architecture</h3>
                  <div className="bg-muted/20 p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">{project.architectureOverview}</p>
                  </div>
                </div>
              )}

              {project.systemDesign && (
                <div id="systemdesign" className="scroll-section space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">System Design Approach</h3>
                  <div className="bg-muted/20 p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">{project.systemDesign}</p>
                  </div>
                </div>
              )}

              {project.devOpsPipeline && (
                <div id="devops" className="scroll-section space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">DevOps Implementation</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 whitespace-pre-line">{project.devOpsPipeline}</p>
                  
                  {project.title === 'GitAnalyze-AI' && (
                    <div className="flex flex-wrap items-center justify-center gap-4 bg-background p-8 rounded-3xl border border-border shadow-inner">
                      <div className="flex flex-col items-center gap-2 group">
                        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                          <Github className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">GitHub</span>
                      </div>
                      <ChevronRight className="w-6 h-6 text-muted-foreground/50" />
                      <div className="flex flex-col items-center gap-2 group">
                        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                          <Code className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">CI/CD</span>
                      </div>
                      <ChevronRight className="w-6 h-6 text-muted-foreground/50" />
                      <div className="flex flex-col items-center gap-2 group">
                        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                          <Container className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">Docker</span>
                      </div>
                      <ChevronRight className="w-6 h-6 text-muted-foreground/50" />
                      <div className="flex flex-col items-center gap-2 group">
                        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                          <Layers className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">K8s</span>
                      </div>
                      <ChevronRight className="w-6 h-6 text-muted-foreground/50" />
                      <div className="flex flex-col items-center gap-2 group">
                        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shadow-sm">
                          <Activity className="w-8 h-8" />
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground group-hover:text-primary transition-colors">Monitor</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {project.performanceOptimization && (
                <div id="performance" className="scroll-section space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Performance Optimization</h3>
                  <div className="bg-muted/20 p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">{project.performanceOptimization}</p>
                  </div>
                </div>
              )}

              {project.realWorldImpact && (
                <div id="impact" className="scroll-section space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Real-world Impact</h3>
                  <div className="bg-muted/20 p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">{project.realWorldImpact}</p>
                  </div>
                </div>
              )}

              {project.challengesAndLearnings && (
                <div id="challenges" className="scroll-section space-y-6">
                  <h3 className="text-2xl font-bold text-foreground">Challenges & Learnings</h3>
                  <div className="bg-muted/20 p-8 rounded-3xl border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">{project.challengesAndLearnings}</p>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 sm:px-10 border-t border-border/50 bg-background/80 backdrop-blur-xl shrink-0 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4">
            <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <Github className="w-5 h-5" /> Code
            </a>
            <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-border text-foreground font-medium hover:bg-muted transition-all shadow-sm hover:-translate-y-0.5">
              <ExternalLink className="w-5 h-5" /> Demo
            </a>
          </div>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary/10 text-primary font-medium hover:bg-primary/20 border border-primary/20 transition-all shadow-sm hover:-translate-y-0.5">
            <FileDown className="w-5 h-5" /> Export Report
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, onDeepDive }: { project: ProjectType; onDeepDive: () => void }) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="bg-background rounded-3xl border border-border shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col lg:flex-row group relative"
      onMouseEnter={() => swiper?.autoplay.start()}
      onMouseLeave={() => {
        swiper?.autoplay.stop();
        swiper?.slideToLoop(0);
      }}
    >
      <button 
        onClick={onDeepDive}
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex items-center justify-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/80 backdrop-blur-md border border-border/50 text-foreground text-xs md:text-sm font-semibold hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm group/btn hover:scale-105"
        aria-label="Deep Dive"
      >
        <Search className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:animate-bounce" />
        <span className="hidden sm:inline">Deep Dive</span>
      </button>

      <div className="lg:w-1/2 p-1 bg-muted/30">
        <div className="rounded-2xl overflow-hidden h-64 md:h-80 lg:h-full relative">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            onSwiper={(s) => {
              setSwiper(s);
              s.autoplay.stop();
            }}
            loop={true}
            className="w-full h-full"
          >
            {project.images.map((img, i) => (
              <SwiperSlide key={i}>
                <img 
                  src={img} 
                  alt={`Screenshot ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      
      <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
        <p className="text-sm font-medium text-primary mb-6">{project.stack}</p>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          {project.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {project.highlights.map((highlight, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-foreground/80 font-medium">
              <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
              {highlight}
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-auto">
          <a 
            href={project.github} 
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors shadow-md"
          >
            <Github className="w-5 h-5" />
            Source Code
          </a>
          <a 
            href={project.demo} 
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-border text-foreground font-medium hover:bg-muted transition-colors shadow-sm"
          >
            <ExternalLink className="w-5 h-5" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-20">
          {projects.map((project, idx) => (
            <ProjectCard 
              key={idx} 
              project={project} 
              onDeepDive={() => setSelectedProject(project)} 
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <DeepDiveExperience project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
