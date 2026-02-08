import { Project } from "@/@types/project";

export const projects: Project[] = [
  {
    key: "minimalistPortfolio",
    title: "Minimalist Portfolio",
    technologies: ["tailwindcss", "typescript", "nextjs", "shadcnui"],
    category: "frontend",
    links: [
      { type: "site", url: "https://dariomatias-portfolio.vercel.app/" },
      { type: "github", url: "https://github.com/dariomatias-dev/portfolio" },
    ],
  },

  {
    key: "flutterGuideApp",
    title: "Flutter Guide App",
    technologies: ["dart", "flutter"],
    category: "mobile",
    links: [
      {
        type: "playStore",
        url: "https://play.google.com/store/apps/details?id=com.dariomatias.flutter_guide",
      },
      {
        type: "github",
        url: "https://github.com/dariomatias-dev/flutter_guide_app",
      },
    ],
  },

  {
    key: "flutterGuideWeb",
    title: "Flutter Guide Web",
    technologies: ["tailwindcss", "typescript", "nextjs", "shadcnui"],
    category: "frontend",
    links: [
      { type: "site", url: "https://flutter-guide-web.vercel.app/" },
      {
        type: "github",
        url: "https://github.com/dariomatias-dev/flutter_guide_web",
      },
    ],
  },

  {
    key: "elevaSign",
    title: "ElevaSign",
    technologies: ["dart", "flutter"],
    category: "mobile",
    links: [
      {
        type: "playStore",
        url: "https://play.google.com/store/apps/details?id=media4all.com.br.portaldeassinaturasvivo_app",
      },
    ],
  },

  {
    key: "myEcommerce",
    title: "My E-Commerce",
    technologies: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "flutter",
      "dart",
      "java",
      "springboot",
      "postgresql",
      "plpgsql",
      "docker",
      "minio",
      "liquibase",
    ],
    category: "fullstack",
    links: [
      {
        type: "github",
        url: "https://github.com/dariomatias-dev/my_commerce",
      },
    ],
  },
];
