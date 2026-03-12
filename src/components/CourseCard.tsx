import { Course } from "@/data/mockData";
import { Clock, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

interface CourseCardProps {
  course: Course;
}

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <motion.article
      className="bg-surface-elevated rounded-2xl p-4 shadow-card"
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={spring}
      tabIndex={0}
    >
      <span className="inline-block bg-accent/10 text-accent text-[12px] font-bold px-2.5 py-1 rounded-lg mb-3">
        {course.category}
      </span>
      <h3 className="font-bold text-foreground text-body leading-tight">{course.title}</h3>
      <p className="text-meta text-muted-foreground mt-1 line-clamp-2">{course.description}</p>
      <div className="flex items-center gap-3 mt-3 text-meta text-muted-foreground">
        <span className="inline-flex items-center gap-1">
          <Clock size={14} aria-hidden />
          {course.duration}
        </span>
        <span className="inline-flex items-center gap-1">
          <BarChart3 size={14} aria-hidden />
          {course.level}
        </span>
      </div>
    </motion.article>
  );
};

export default CourseCard;
