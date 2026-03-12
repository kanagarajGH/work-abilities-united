import { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Search, BookOpen, User } from "lucide-react";
import { motion } from "framer-motion";

interface Tab {
  path: string;
  label: string;
  icon: typeof Home;
}

const tabs: Tab[] = [
  { path: "/", label: "Home", icon: Home },
  { path: "/search", label: "Search", icon: Search },
  { path: "/learning", label: "Learning", icon: BookOpen },
  { path: "/profile", label: "Profile", icon: User },
];

interface AppShellProps {
  children: ReactNode;
  title?: string;
}

const AppShell = ({ children, title }: AppShellProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen max-w-[480px] mx-auto bg-background">
      {/* Sticky header */}
      {title && (
        <header className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3">
          <h1 className="text-display text-foreground" style={{ fontSize: "clamp(1.25rem, 5vw, 1.5rem)" }}>
            {title}
          </h1>
        </header>
      )}

      {/* Content */}
      <main className="flex-1 pb-[72px] overflow-y-auto">
        {children}
      </main>

      {/* Bottom tab bar */}
      <nav
        className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] z-40 bg-surface-elevated border-t border-border"
        role="tablist"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-around h-[68px] px-2">
          {tabs.map((tab) => {
            const isActive = location.pathname === tab.path;
            const Icon = tab.icon;
            return (
              <button
                key={tab.path}
                role="tab"
                aria-selected={isActive}
                aria-label={tab.label}
                onClick={() => navigate(tab.path)}
                className="flex flex-col items-center justify-center gap-1 min-w-[64px] min-h-touch rounded-xl transition-colors focus-visible:focus-ring relative"
              >
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute -top-[1px] left-3 right-3 h-[3px] rounded-full bg-primary"
                    transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                  />
                )}
                <Icon
                  size={22}
                  className={isActive ? "text-primary" : "text-muted-foreground"}
                  aria-hidden
                />
                <span
                  className={`text-[11px] font-bold ${isActive ? "text-primary" : "text-muted-foreground"}`}
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default AppShell;
