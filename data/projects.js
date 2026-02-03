import vocabup from "../public/images/projectsImages/vocabup.png";
import timeslink from "../public/images/projectsImages/timeslink.png";
import crud from "../public/images/projectsImages/crud.png";
import quickmart from "../public/images/projectsImages/quick-mart.png";

export const projects = [
  {
    id: 1,
    title: "Timeslink Logistics Platform",
    description:
      "Full-stack logistics web app with real-time shipment tracking, Google OAuth, and an admin dashboard for project and content management.",
    technologies: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "VPS Hosting",
    ],
    category: "nextjs",
    github: "https://github.com/Tilwa/timeslink",
    live: "https://timeslinklogistics.com",
    featured: true,
    image: timeslink,
  },

  {
    id: 2,
    title: "Vocabup Nextjs App",
    description:
      "Vocabulary builder app using Next.js, Redux Toolkit, Prisma, and PostgreSQL. Features interactive cards with multiple-choice answers and animations.",
    technologies: ["React", "Next.js", "Redux Toolkit", "PostgreSQL", "Prisma"],
    category: "nextjs",
    github: "https://github.com/Tilwa/vocabup",
    live: "http://vocabup.codesbyshahrukh.online/",
    featured: true,
    image: vocabup,
  },
  {
    id: 3,
    title: "QuickMart Ecommerce Store",
    description:
      "E-commerce store built with Prisma and PostgreSQL. Supports product variations, filters, and bulk order submission via a simple form, without a cart system.",
    technologies: ["React", "Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "nextjs",
    github: "https://github.com/Tilwa/quick-mart",
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
    github: "https://github.com/Tilwa/nextjs-crud",
    live: "https://crud.codesbyshahrukh.online/",
    featured: true,
    image: crud,
  },
];
