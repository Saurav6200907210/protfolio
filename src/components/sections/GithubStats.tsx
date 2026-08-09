import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Users, UserPlus, BookOpen, Star } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';


function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 100, damping: 30, duration: 2000 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('en-US').format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export default function GithubStats() {
  const [stats, setStats] = useState([
    { label: 'Public Repos', value: 0, icon: BookOpen, color: 'text-primary' },
    { label: 'Followers', value: 0, icon: Users, color: 'text-secondary' },
    { label: 'Following', value: 0, icon: UserPlus, color: 'text-accent' },
    { label: 'Stars Earned', value: 0, icon: Star, color: 'text-orange-500' },
  ]);

  useEffect(() => {
    fetch('https://api.github.com/users/Saurav6200907210')
      .then(res => res.json())
      .then(userData => {
        fetch('https://api.github.com/users/Saurav6200907210/repos?per_page=100')
          .then(res => res.json())
          .then(reposData => {
            let totalStars = 0;
            if (Array.isArray(reposData)) {
              totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
            }
            if (userData.public_repos !== undefined) {
              setStats([
                { label: 'Public Repos', value: userData.public_repos, icon: BookOpen, color: 'text-primary' },
                { label: 'Followers', value: userData.followers, icon: Users, color: 'text-secondary' },
                { label: 'Following', value: userData.following, icon: UserPlus, color: 'text-accent' },
                { label: 'Stars Earned', value: totalStars, icon: Star, color: 'text-orange-500' },
              ]);
            }
          })
          .catch(console.error);
      })
      .catch(console.error);
  }, []);

  return (
    <section id="github" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Github className="w-8 h-8" /> GitHub Activity
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow"
              >
                <div className={`p-3 rounded-xl bg-muted mb-4 ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-1">
                  <AnimatedCounter value={stat.value} />
                </h3>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-border p-6 md:p-10 shadow-sm overflow-hidden"
          >
            <h3 className="text-xl font-bold mb-6 text-foreground">Contribution Graph Overview</h3>
            <div className="w-full overflow-x-auto pb-4 flex justify-center mt-4">
              <img 
                src="https://ghchart.rshah.org/3b82f6/Saurav6200907210" 
                alt="Saurav6200907210's GitHub Activity Graph" 
                className="min-w-[700px] w-full max-w-4xl"
              />
            </div>
            

            <div className="mt-6 flex justify-center">
              <div className="w-full bg-background rounded-xl p-6 border border-border flex flex-col items-center justify-center">
                <h4 className="font-bold text-foreground mb-4">Total Contributions & Streak</h4>
                <img 
                  src="https://github-readme-streak-stats.herokuapp.com/?user=Saurav6200907210&theme=transparent&hide_border=true&title_color=000&text_color=333&icon_color=3b82f6" 
                  alt="GitHub Streak" 
                  className="w-full max-w-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
