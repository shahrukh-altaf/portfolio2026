import vocabup from "../public/images/projectsImages/vocabup.png";
import timeslink from "../public/images/projectsImages/timeslink.png";
import crud from "../public/images/projectsImages/crud.png";
import quickmart from "../public/images/projectsImages/quick-mart.png";

export const projects = [
  {
    id: 1,
    title: "Timeslink Logistics Platform",
    description:
      "Built a full-stack logistics tracking platform with a real-time dashboard for monitoring shipments and operations. Built using Next.js, React Query, Prisma ORM, and PostgreSQL, ensuring scalable and efficient data handling. Implemented secure Google Authentication, restricting dashboard access to authorized admin users only. Designed and developed admin dashboard features, including blog management and full CRUD operations. Created responsive landing pages and marketing website, supporting global logistics business operations.",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "VPS Hosting",
    ],
    category: "nextjs",
    github: "https://github.com/shahrukh-altaf/timeslink",
    live: "https://timeslinklogistics.com",
    featured: true,
    image: timeslink,
  },

  {
    id: 2,
    title: "VocabUp Vocabulary Builder",
    description:
      "Built a responsive vocabulary learning web application designed for non-native English speakers. Implemented flashcard-based learning system with progress tracking and mistake analysis features. Used Redux Toolkit for state management, enabling efficient handling of vocabulary data and user progress. Designed an engaging game-like learning experience, improving user interaction and retention.",
    technologies: ["React", "Next.js", "Redux Toolkit", "PostgreSQL", "Prisma"],
    category: "nextjs",
    github: "https://github.com/shahrukh-altaf/vocabup",
    live: "https://vocabup.codesbyshahrukh.online/",
    featured: true,
    image: vocabup,
  },
  {
    id: 3,
    title: "QuickMart Instant Order Store",
    description:
      "Built a frictionless e-commerce platform allowing users to place orders without account registration. Built using Next.js and React Query, optimizing server-state management and performance. Designed and implemented admin dashboard with Google Authentication, enabling secure product and order management. Created advanced product management system, supporting variations (size, color, attributes) and bulk operations. Focused on user-centric design, simplifying the ordering process for faster customer conversion.",
    technologies: ["React", "Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "nextjs",
    github: "https://github.com/shahrukh-altaf/quick-mart",
    live: "https://quick-mart.codesbyshahrukh.online/",
    featured: true,
    image: quickmart,
  },

  {
    id: 100,
    title: "CRUD Next.js Application",
    description:
      "CRUD app using Nextjs, Prisma & Postgres. Features secure data management with create, read, update, & delete operations in a clean responsive interface.",
    technologies: ["Next.js", "React", "Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "nextjs",
    github: "https://github.com/shahrukh-altaf/nextjs-crud",
    live: "https://crud.codesbyshahrukh.online/",
    featured: true,
    image: crud,
  },
];
