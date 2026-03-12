import AppShell from "@/components/AppShell";
import CourseCard from "@/components/CourseCard";
import FilterChip from "@/components/FilterChip";
import { courses } from "@/data/mockData";
import { useState, useMemo } from "react";

const categories = ["All", "Coding", "Data Entry", "Graphic Design", "Customer Support", "Career"];

const LearningPage = () => {
  const [active, setActive] = useState("All");

  const filtered = useMemo(() => {
    if (active === "All") return courses;
    return courses.filter((c) => c.category === active);
  }, [active]);

  return (
    <AppShell title="Learning">
      <div className="px-4 pt-4 pb-4">
        <p className="text-body text-muted-foreground mb-4">
          Build skills that open doors. All courses are designed with accessibility in mind.
        </p>

        <div className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-none" role="radiogroup" aria-label="Course categories">
          {categories.map((cat) => (
            <FilterChip key={cat} label={cat} active={active === cat} onClick={() => setActive(cat)} />
          ))}
        </div>

        <div className="flex flex-col gap-3 mt-1">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </AppShell>
  );
};

export default LearningPage;
