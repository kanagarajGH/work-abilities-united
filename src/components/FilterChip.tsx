import { motion } from "framer-motion";

interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const spring = { type: "spring" as const, duration: 0.4, bounce: 0 };

const FilterChip = ({ label, active, onClick }: FilterChipProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
      transition={spring}
      className={`min-h-[40px] px-4 rounded-xl text-meta font-bold whitespace-nowrap transition-colors focus-visible:focus-ring ${
        active
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-secondary-foreground"
      }`}
      role="radio"
      aria-checked={active}
    >
      {label}
    </motion.button>
  );
};

export default FilterChip;
