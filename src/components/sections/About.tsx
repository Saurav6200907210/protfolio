import { motion } from 'framer-motion';
import { CheckCircle2, Terminal, Container, Cloud, Settings, BarChart, Shield } from 'lucide-react';

const focusAreas = [
  "Docker", "Kubernetes", "Terraform", "AWS", 
  "GitHub Actions", "Linux", "CI/CD", "Monitoring"
];

const whyHireMe = [
  "Strong Linux Foundation",
  "Production Ready Mindset",
  "Infrastructure as Code",
  "Automation First Approach",
  "Continuous Learning",
  "Cloud Native Development",
  "Team Collaboration",
  "Problem Solving"
];

const features = [
  {
    icon: <Container className="w-6 h-6 text-primary" />,
    title: "Docker",
    subtitle: "Containerized Applications",
    description: "Production-ready environments using Docker."
  },
  {
    icon: <Settings className="w-6 h-6 text-primary" />,
    title: "Kubernetes",
    subtitle: "Container Orchestration",
    description: "Deploying and managing scalable workloads."
  },
  {
    icon: <Cloud className="w-6 h-6 text-primary" />,
    title: "AWS & Cloud",
    subtitle: "Cloud Infrastructure",
    description: "Building scalable cloud-native solutions."
  },
  {
    icon: <Terminal className="w-6 h-6 text-primary" />,
    title: "CI/CD",
    subtitle: "Automation",
    description: "GitHub Actions, Jenkins, Automated Deployment Pipelines."
  },
  {
    icon: <BarChart className="w-6 h-6 text-primary" />,
    title: "Monitoring",
    subtitle: "Observability",
    description: "Prometheus, Grafana, System Observability."
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Infrastructure as Code",
    subtitle: "Terraform",
    description: "Reusable Infrastructure Automation."
  }
];



export default function About() {
  return (
    <section id="about" className="py-32 bg-background relative overflow-hidden z-10">
      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          
          {/* Left Column: Intro & Profile */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15] mb-8">
              Building Reliable Infrastructure,<br className="hidden md:block" /> Automating Modern Software Delivery.
            </h2>
            
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-10">
              <p>
                Hi, I'm Saurav Kumar, a final-year Computer Science Engineering student transitioning into the world of DevOps, Site Reliability Engineering, and Cloud Architecture.
              </p>
              <p>
                My engineering philosophy centers around an "Automation First" approach. Rather than just writing code, I enjoy designing scalable microservices, containerizing environments, and architecting seamless deployment pipelines that ensure high availability in production systems.
              </p>
              <p>
                Currently, I am deepening my expertise in Kubernetes and Infrastructure as Code. I am actively seeking Internship and Full-Time opportunities where I can contribute to reliable platform engineering and cloud-native development.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Current Focus</h3>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-white border border-border/60 text-sm font-medium text-foreground rounded-full shadow-sm hover:shadow-md hover:border-primary/30 transition-all cursor-default"
                  >
                    {area}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Premium 'Why Hire Me' Card */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white/80 backdrop-blur-xl border border-border rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-shadow hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)]"
            >
              <h3 className="text-2xl font-bold mb-6 text-foreground">Why Work With Me?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {whyHireMe.map((reason, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span className="font-medium text-foreground/80">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-fit">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-white rounded-3xl p-6 border border-border/60 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all cursor-default flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary/10 transition-transform">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground mb-1">{feature.title}</h4>
                <p className="text-sm font-semibold text-primary mb-3">{feature.subtitle}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-auto">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
