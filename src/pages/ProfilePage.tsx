import AppShell from "@/components/AppShell";
import { motion } from "framer-motion";
import { User, MapPin, Briefcase, FileText, Settings, ChevronRight, Eye } from "lucide-react";

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const menuItems = [
  { icon: FileText, label: "My Resume", desc: "View and edit your resume" },
  { icon: Briefcase, label: "Applied Jobs", desc: "3 applications in progress" },
  { icon: Eye, label: "Accessibility Settings", desc: "High contrast, text size" },
  { icon: Settings, label: "App Settings", desc: "Notifications, privacy" },
];

const ProfilePage = () => {
  return (
    <AppShell title="Profile">
      <div className="px-4 pt-4 pb-4">
        {/* Profile card */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-surface-elevated rounded-2xl p-4 shadow-card mb-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <User size={28} className="text-primary" aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-foreground text-body">Alex Johnson</h2>
              <p className="text-meta text-muted-foreground flex items-center gap-1 mt-0.5">
                <MapPin size={14} aria-hidden />
                New York, NY
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-4">
            {["React", "JavaScript", "Customer Support", "Data Entry"].map((skill) => (
              <span key={skill} className="bg-tag text-tag-foreground text-[12px] font-bold px-2.5 py-1 rounded-lg">
                {skill}
              </span>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            transition={spring}
            className="mt-4 w-full min-h-touch bg-secondary text-secondary-foreground font-bold rounded-xl px-4 py-3 focus-visible:focus-ring"
          >
            Edit Profile
          </motion.button>
        </motion.div>

        {/* Menu items */}
        <div className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.label}
                whileTap={{ scale: 0.98 }}
                transition={spring}
                className="flex items-center gap-3 bg-surface-elevated rounded-2xl p-4 shadow-card text-left w-full min-h-touch focus-visible:focus-ring"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-primary" aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-meta">{item.label}</p>
                  <p className="text-meta text-muted-foreground text-[12px]">{item.desc}</p>
                </div>
                <ChevronRight size={18} className="text-muted-foreground flex-shrink-0" aria-hidden />
              </motion.button>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
};

export default ProfilePage;
