import { Box, LayoutTemplate, Smartphone, Terminal } from "lucide-react";

export const getProjectCategoryTheme = (category: string) => {
  switch (category) {
    case "Mobile":
      return {
        icon: Smartphone,
        textAccent: "group-hover:text-cyan-400",
        shadow: "group-hover:shadow-[0_0_50px_-15px_rgba(34,211,238,0.25)]",
        border: "group-hover:border-cyan-500/30",
        badge: "bg-cyan-950/40 text-cyan-300 border-cyan-500/20",
        glow: "from-cyan-500/10 via-cyan-900/5 to-transparent",
      };
    case "Frontend":
      return {
        icon: LayoutTemplate,
        textAccent: "group-hover:text-blue-400",
        shadow: "group-hover:shadow-[0_0_50px_-15px_rgba(96,165,250,0.25)]",
        border: "group-hover:border-blue-500/30",
        badge: "bg-blue-950/40 text-blue-300 border-blue-500/20",
        glow: "from-blue-500/10 via-blue-900/5 to-transparent",
      };
    case "Backend":
      return {
        icon: Terminal,
        textAccent: "group-hover:text-emerald-400",
        shadow: "group-hover:shadow-[0_0_50px_-15px_rgba(52,211,153,0.25)]",
        border: "group-hover:border-emerald-500/30",
        badge: "bg-emerald-950/40 text-emerald-300 border-emerald-500/20",
        glow: "from-emerald-500/10 via-emerald-900/5 to-transparent",
      };
    case "Package":
      return {
        icon: Box,
        textAccent: "group-hover:text-purple-400",
        shadow: "group-hover:shadow-[0_0_50px_-15px_rgba(192,132,252,0.25)]",
        border: "group-hover:border-purple-500/30",
        badge: "bg-purple-950/40 text-purple-300 border-purple-500/20",
        glow: "from-purple-500/10 via-purple-900/5 to-transparent",
      };
    default:
      return {
        icon: Box,
        textAccent: "group-hover:text-zinc-300",
        shadow: "group-hover:shadow-[0_0_50px_-15px_rgba(161,161,170,0.15)]",
        border: "group-hover:border-zinc-500/30",
        badge: "bg-zinc-800 text-zinc-300 border-zinc-700",
        glow: "from-zinc-500/10 via-zinc-900/5 to-transparent",
      };
  }
};
