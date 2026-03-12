import AppShell from "@/components/AppShell";
import JobCard from "@/components/JobCard";
import { jobs } from "@/data/mockData";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, BookOpen, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const stats = [
  { icon: Briefcase, label: "Jobs", value: "47", color: "bg-primary/10 text-primary" },
  { icon: BookOpen, label: "Courses", value: "12", color: "bg-accent/10 text-accent" },
  { icon: Star, label: "Saved", value: "3", color: "bg-tag text-tag-foreground" },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <AppShell>
      <div className="px-4 pt-6 pb-4">
        {/* Hero */}
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6"
        >
          <p className="text-meta text-muted-foreground mb-1">Welcome back 👋</p>
          <h1 className="text-display text-foreground">
            Find work that works for you.
          </h1>
          <p className="text-body text-muted-foreground mt-2">
            Discover inclusive jobs matched to your skills and accessibility needs.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={spring}
            onClick={() => navigate("/search")}
            className="mt-4 min-h-touch w-full bg-primary text-primary-foreground font-bold rounded-xl px-6 py-3 flex items-center justify-center gap-2 focus-visible:focus-ring"
          >
            Search Jobs
            <ArrowRight size={18} aria-hidden />
          </motion.button>
        </motion.section>

        {/* Quick stats */}
        <section className="grid grid-cols-3 gap-3 mb-6" aria-label="Quick statistics">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="bg-surface-elevated rounded-2xl p-3 shadow-card text-center"
              >
                <div className={`w-10 h-10 mx-auto rounded-xl flex items-center justify-center mb-2 ${stat.color}`}>
                  <Icon size={20} aria-hidden />
                </div>
                <p className="font-bold text-foreground text-lg">{stat.value}</p>
                <p className="text-meta text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </section>

        {/* Recommended Jobs */}
        <section aria-label="Recommended jobs">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.1rem, 4vw, 1.25rem)" }}>
              Recommended for You
            </h2>
            <button
              onClick={() => navigate("/search")}
              className="text-meta text-primary font-bold min-h-touch flex items-center gap-1 focus-visible:focus-ring rounded-lg px-2"
            >
              See All
              <ArrowRight size={14} aria-hidden />
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {jobs.slice(0, 3).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </section>
      </div>
    </AppShell>
  );
};

export default Index;
