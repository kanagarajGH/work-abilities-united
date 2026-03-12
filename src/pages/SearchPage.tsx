import { useState, useMemo } from "react";
import AppShell from "@/components/AppShell";
import JobCard from "@/components/JobCard";
import FilterChip from "@/components/FilterChip";
import { jobs, jobCategories } from "@/data/mockData";
import { Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return jobs.filter((job) => {
      const matchesQuery =
        !query ||
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase()) ||
        job.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()));

      const matchesCategory =
        activeCategory === "All" ||
        (activeCategory === "Remote" && job.type === "Remote") ||
        (activeCategory === "Tech" && job.skills.some((s) => ["JavaScript", "React", "Node.js", "SQL"].includes(s))) ||
        (activeCategory === "Design" && job.skills.some((s) => ["Figma", "Adobe Creative Suite", "Typography"].includes(s))) ||
        (activeCategory === "Admin" && job.skills.some((s) => ["Organization", "Microsoft Office", "Scheduling"].includes(s))) ||
        (activeCategory === "Writing" && job.skills.some((s) => ["Writing", "SEO", "Research"].includes(s))) ||
        (activeCategory === "Data" && job.skills.some((s) => ["Excel", "SQL", "Data visualization"].includes(s)));

      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  return (
    <AppShell title="Search Jobs">
      <div className="px-4 pt-4 pb-4">
        {/* Search input */}
        <div className="relative mb-4">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" aria-hidden />
          <input
            type="search"
            placeholder="Search jobs, skills, companies..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full min-h-touch bg-secondary text-foreground placeholder:text-muted-foreground rounded-xl pl-11 pr-4 py-3 text-body focus:outline-none focus-visible:ring-[3px] focus-visible:ring-ring transition-shadow"
            aria-label="Search jobs"
          />
        </div>

        {/* Filter chips */}
        <div className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-none" role="radiogroup" aria-label="Job categories">
          {jobCategories.map((cat) => (
            <FilterChip
              key={cat}
              label={cat}
              active={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>

        {/* Results */}
        <p className="text-meta text-muted-foreground mb-3">
          {filtered.length} job{filtered.length !== 1 ? "s" : ""} found
        </p>

        <div className="flex flex-col gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.15 }}
              >
                <JobCard job={job} />
              </motion.div>
            ))}
          </AnimatePresence>
          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-body text-muted-foreground">No jobs match your search.</p>
              <p className="text-meta text-muted-foreground mt-1">Try different keywords or filters.</p>
            </div>
          )}
        </div>
      </div>
    </AppShell>
  );
};

export default SearchPage;
