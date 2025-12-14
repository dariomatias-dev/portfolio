import { Project } from "@/@types/project";

export const projects: Project[] = [
  {
    title: "Portfolio",
    description:
      "Personal portfolio with information about me, projects, experiences, and contact.",
    technologies: ["TailwindCSS", "TypeScript", "Next.js", "shadcn/ui"],
    category: "Frontend",
    links: [
      { type: "site", url: "https://dariomatias-portfolio.vercel.app/" },
      { type: "github", url: "https://github.com/dariomatias-dev/portfolio" },
    ],
  },
  {
    title: "Flutter Guide App",
    description:
      "Flutter Guide is an educational app that helps developers learn Flutter through practical examples.",
    technologies: ["Dart", "Flutter"],
    category: "Mobile",
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
    description:
      "Official Flutter Guide website with information, main features, screenshots, privacy policy, and a direct link to download on the Google Play Store.",
    technologies: ["TailwindCSS", "TypeScript", "Next.js", "shadcn/ui"],
    category: "Frontend",
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
    description:
      "Digital Signature Platform for managing contracts and documents, featuring a complete workflow that covers all stages of the process. Contributed since early versions, adding multiple features to the application.",
    technologies: ["Dart", "Flutter"],
    category: "Mobile",
    links: [
      {
        type: "playStore",
        url: "https://play.google.com/store/apps/details?id=media4all.com.br.portaldeassinaturasvivo_app",
      },
    ],
  },
  {
    title: "Scroll Infinity",
    description: "Flutter package for simplified infinite scrolling.",
    technologies: ["Dart", "Flutter"],
    category: "Package",
    links: [
      { type: "pubDev", url: "https://pub.dev/packages/scroll_infinity" },
      {
        type: "github",
        url: "https://github.com/dariomatias-dev/scroll_infinity",
      },
    ],
  },
  {
    title: "Flutter Syntax Highlighter",
    description:
      "Syntax highlighting widget for Dart and Flutter code, supporting light and dark themes, line numbers, and code selection.",
    technologies: ["Dart", "Flutter"],
    category: "Package",
    links: [
      {
        type: "pubDev",
        url: "https://pub.dev/packages/flutter_syntax_highlighter",
      },
      {
        type: "github",
        url: "https://github.com/dariomatias-dev/flutter_syntax_highlighter",
      },
    ],
  },
  {
    title: "Go Validators",
    description:
      "Validation utilities to ensure data integrity in Go applications using only native libraries.",
    technologies: ["Go"],
    category: "Backend",
    links: [
      {
        type: "goDev",
        url: "https://pkg.go.dev/github.com/dariomatias-dev/go-validators",
      },
      {
        type: "github",
        url: "https://github.com/dariomatias-dev/go-validators",
      },
    ],
  },
];