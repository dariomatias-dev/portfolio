import { Layers } from "lucide-react";
import { SiDart, SiFlutter, SiGo } from "react-icons/si";

import { ContributionItem } from "@/@types/community";

export const contributions: ContributionItem[] = [
  {
    type: "Learning Repository",
    title: "Programming Materials",
    description:
      "Personal repository containing study materials, code examples, notes, and references about programming concepts, languages, tools, and best practices.",
    tags: ["Study", "Examples", "Programming"],
    stats: {
      stars: "8",
      forks: "0",
    },
    icon: Layers,
    color: "text-zinc-400",
    bg: "bg-zinc-900/40",
    gradient: "from-zinc-500/20 via-zinc-800/5 to-transparent",
    border: "group-hover:border-zinc-500/30",
    command: "git clone github.com/dariomatias-dev/materials",
    repoUrl: "https://github.com/dariomatias-dev/materials",
  },
  {
    type: "Flutter Package",
    title: "Scroll Infinity",
    description:
      "Flutter package that provides a simple and reusable solution for implementing infinite scrolling in lists, reducing boilerplate and improving code readability.",
    tags: ["Dart", "Flutter"],
    stats: {
      stars: "2",
      forks: "0",
    },
    icon: SiFlutter,
    color: "text-blue-400",
    bg: "bg-blue-950/30",
    gradient: "from-blue-500/20 via-blue-900/5 to-transparent",
    border: "group-hover:border-blue-500/30",
    command: "flutter pub add scroll_infinity",
    repoUrl: "https://github.com/dariomatias-dev/scroll_infinity",
  },
  {
    type: "Flutter Package",
    title: "Flutter Syntax Highlighter",
    description:
      "Customizable syntax highlighting widget for Dart and Flutter code, supporting light and dark themes, line numbers, selectable code blocks, and easy integration into existing projects.",
    tags: ["Dart", "Flutter"],
    stats: {
      stars: "2",
      forks: "0",
    },
    icon: SiFlutter,
    color: "text-purple-400",
    bg: "bg-purple-950/30",
    gradient: "from-purple-500/20 via-purple-900/5 to-transparent",
    border: "group-hover:border-purple-500/30",
    command: "flutter pub add flutter_syntax_highlighter",
    repoUrl: "https://github.com/dariomatias-dev/flutter_syntax_highlighter",
  },
  {
    type: "Go Package",
    title: "Go Validators",
    description:
      "Lightweight validation utilities for Go applications, focused on ensuring data integrity using only native libraries, without external dependencies or performance overhead.",
    tags: ["Go"],
    stats: {
      stars: "2",
      forks: "0",
    },
    icon: SiGo,
    color: "text-cyan-400",
    bg: "bg-cyan-950/30",
    gradient: "from-cyan-500/20 via-cyan-900/5 to-transparent",
    border: "group-hover:border-cyan-500/30",
    command: "go get github.com/dariomatias-dev/go-validators",
    repoUrl: "https://github.com/dariomatias-dev/go-validators",
  },
  {
    type: "Dart Solution",
    title: "Flutter Error Handling",
    description:
      "Repository that presents a well-structured approach to handling results and failures in Dart and Flutter applications, promoting consistent error management, improved code readability, and more predictable application flows.",
    tags: ["Dart", "Flutter", "Error Handling", "Architecture"],
    stats: {
      stars: "1",
      forks: "0",
    },
    icon: SiDart,
    color: "text-red-400",
    bg: "bg-red-950/30",
    gradient: "from-red-500/20 via-red-900/5 to-transparent",
    border: "group-hover:border-red-500/30",
    command:
      "git clone https://github.com/dariomatias-dev/flutter_error_handling",
    repoUrl: "https://github.com/dariomatias-dev/flutter_error_handling",
  },
];
