import { Job } from "@/data/mockData";
import { MapPin, Clock, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface JobCardProps {
  job: Job;
}

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const JobCard = ({ job }: JobCardProps) => {
  const [saved, setSaved] = useState(false);

  return (
    <motion.article
      className="bg-surface-elevated rounded-2xl p-4 shadow-card cursor-pointer relative"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={spring}
      tabIndex={0}
      role="link"
      aria-label={`${job.title} at ${job.company}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-foreground text-body truncate">{job.title}</h3>
          <p className="text-meta text-muted-foreground mt-0.5">{job.company}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setSaved(!saved);
          }}
          className="min-h-touch min-w-[44px] flex items-center justify-center rounded-xl focus-visible:focus-ring"
          aria-label={saved ? "Unsave job" : "Save job"}
        >
          <Bookmark
            size={20}
            className={saved ? "fill-primary text-primary" : "text-muted-foreground"}
          />
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-3">
        <span className="inline-flex items-center gap-1 text-meta text-muted-foreground">
          <MapPin size={14} aria-hidden />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1 text-meta text-muted-foreground">
          <Clock size={14} aria-hidden />
          {job.postedDays}d ago
        </span>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-3">
        <span className="bg-primary/10 text-primary text-[12px] font-bold px-2.5 py-1 rounded-lg">
          {job.type}
        </span>
        {job.accessibility.slice(0, 2).map((a) => (
          <span key={a} className="bg-tag text-tag-foreground text-[12px] font-bold px-2.5 py-1 rounded-lg">
            {a}
          </span>
        ))}
      </div>

      <p className="text-meta font-bold text-foreground mt-3">{job.salary}</p>
    </motion.article>
  );
};

export default JobCard;
