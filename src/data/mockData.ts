export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Remote" | "Onsite" | "Hybrid";
  accessibility: string[];
  skills: string[];
  postedDays: number;
  description: string;
}

export interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  description: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Customer Support Specialist",
    company: "TechForAll Inc.",
    location: "New York, NY",
    salary: "$45,000 – $55,000",
    type: "Remote",
    accessibility: ["Screen reader compatible", "Flexible hours", "Assistive tech provided"],
    skills: ["Communication", "Problem solving", "CRM tools"],
    postedDays: 2,
    description: "Join our inclusive team helping customers resolve issues via chat and email.",
  },
  {
    id: "2",
    title: "Junior Data Analyst",
    company: "Inclusive Analytics",
    location: "Austin, TX",
    salary: "$52,000 – $65,000",
    type: "Hybrid",
    accessibility: ["Wheelchair accessible", "Flexible hours", "Quiet workspace"],
    skills: ["Excel", "SQL", "Data visualization"],
    postedDays: 5,
    description: "Analyze datasets and create reports in an accessible, supportive environment.",
  },
  {
    id: "3",
    title: "Graphic Designer",
    company: "DesignBridge",
    location: "San Francisco, CA",
    salary: "$58,000 – $72,000",
    type: "Remote",
    accessibility: ["Screen reader compatible", "Flexible deadlines", "Assistive tech provided"],
    skills: ["Figma", "Adobe Creative Suite", "Typography"],
    postedDays: 1,
    description: "Create compelling visuals for brands committed to accessibility.",
  },
  {
    id: "4",
    title: "Administrative Assistant",
    company: "AccessFirst Corp",
    location: "Chicago, IL",
    salary: "$38,000 – $45,000",
    type: "Onsite",
    accessibility: ["Wheelchair accessible", "Elevator access", "Accessible transport nearby"],
    skills: ["Organization", "Microsoft Office", "Scheduling"],
    postedDays: 3,
    description: "Support office operations in a fully accessible workplace.",
  },
  {
    id: "5",
    title: "Software Developer",
    company: "CodeAbility",
    location: "Remote",
    salary: "$72,500 – $95,000",
    type: "Remote",
    accessibility: ["Screen reader compatible", "Flexible hours", "Voice navigation tools"],
    skills: ["JavaScript", "React", "Node.js"],
    postedDays: 1,
    description: "Build accessible web applications with a distributed, inclusive team.",
  },
  {
    id: "6",
    title: "Content Writer",
    company: "WordsForAll",
    location: "Portland, OR",
    salary: "$40,000 – $50,000",
    type: "Remote",
    accessibility: ["Flexible hours", "Text-to-speech tools", "Async communication"],
    skills: ["Writing", "SEO", "Research"],
    postedDays: 4,
    description: "Write accessible, inclusive content for digital platforms.",
  },
];

export const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    category: "Coding",
    duration: "6 weeks",
    level: "Beginner",
    description: "Learn HTML, CSS, and JavaScript fundamentals with accessible tooling.",
  },
  {
    id: "2",
    title: "Data Entry Mastery",
    category: "Data Entry",
    duration: "2 weeks",
    level: "Beginner",
    description: "Master spreadsheet and database entry techniques efficiently.",
  },
  {
    id: "3",
    title: "Graphic Design Basics",
    category: "Graphic Design",
    duration: "4 weeks",
    level: "Beginner",
    description: "Start creating digital graphics with Canva and Figma.",
  },
  {
    id: "4",
    title: "Customer Service Excellence",
    category: "Customer Support",
    duration: "3 weeks",
    level: "Beginner",
    description: "Build communication skills for customer-facing roles.",
  },
  {
    id: "5",
    title: "Resume Writing Workshop",
    category: "Career",
    duration: "1 week",
    level: "Beginner",
    description: "Craft a compelling resume that highlights your strengths.",
  },
  {
    id: "6",
    title: "Interview Preparation",
    category: "Career",
    duration: "2 weeks",
    level: "Intermediate",
    description: "Practice common interview questions and build confidence.",
  },
];

export const jobCategories = [
  "All",
  "Remote",
  "Tech",
  "Design",
  "Admin",
  "Writing",
  "Data",
];

export const accessibilityFilters = [
  "Wheelchair accessible",
  "Screen reader compatible",
  "Flexible hours",
  "Assistive tech provided",
  "Quiet workspace",
];
