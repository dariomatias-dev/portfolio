import { Project } from "@/@types/project";

export const projects: Project[] = [
  {
    key: "portfolio",
    title: "Portfolio",
    technologies: ["TailwindCSS", "TypeScript", "Next.js", "shadcn/ui"],
    category: "frontend",
    links: [
      { type: "site", url: "https://dariomatias-portfolio.vercel.app/" },
      { type: "github", url: "https://github.com/dariomatias-dev/portfolio" },
    ],
  },
  {
    key: "flutterGuideApp",
    title: "Flutter Guide App",
    technologies: ["Dart", "Flutter"],
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
    technologies: ["TailwindCSS", "TypeScript", "Next.js", "shadcn/ui"],
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
    key: "eleva_sign",
    title: "ElevaSign",
    technologies: ["Dart", "Flutter"],
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
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Flutter",
      "Dart",
    ],
    category: "fullstack",
    links: [
      {
        type: "site",
        url: "https://my-commerce-dariomatias-dev.vercel.app",
      },
      {
        type: "github",
        url: "https://github.com/dariomatias-dev/my_commerce",
      },
    ],
  },
];
