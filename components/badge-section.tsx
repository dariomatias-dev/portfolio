import { ReactNode } from "react";
import { IconType } from "react-icons";

type BadgeTheme = "light" | "dark";

interface BadgeSectionProps {
  theme?: BadgeTheme;
  icon: IconType;
  children: ReactNode;
}

const themeStyles: Record<BadgeTheme, string> = {
  light: "bg-blue-50 border-blue-100 text-blue-600 tracking-wider",
  dark: "bg-blue-500/10 border-blue-500/20 text-blue-400 tracking-widest",
};

export const BadgeSection = ({
  theme = 'light',
  icon: Icon,
  children,
}: BadgeSectionProps) => {
  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-bold uppercase mb-6 ${themeStyles[theme]}`}
    >
      <Icon size={12} />

      {children}
    </span>
  );
};
