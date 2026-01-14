import { Project } from "@/@types/project";

export const projects: Project[] = [
  {
    title: "Portfolio",
    descriptionKey: "portfolio",
    technologies: ["TailwindCSS", "TypeScript", "Next.js", "shadcn/ui"],
    category: "frontend",
    links: [
      { type: "site", url: "https://dariomatias-portfolio.vercel.app/" },
      { type: "github", url: "https://github.com/dariomatias-dev/portfolio" },
    ],
  },
  {
    title: "Flutter Guide App",
    descriptionKey: "flutter_guide_app",
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
    title: "Flutter Guide Web",
    descriptionKey: "flutter_guide_web",
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
    title: "ElevaSign",
    descriptionKey: "elevasign",
    technologies: ["Dart", "Flutter"],
    category: "mobile",
    links: [
      {
        type: "playStore",
        url: "https://play.google.com/store/apps/details?id=media4all.com.br.portaldeassinaturasvivo_app",
      },
    ],
  },
];
