import Link, { LinkProps } from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface LinkButtonProps extends LinkProps {
  target?: HTMLAttributeAnchorTarget | undefined;
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}

export const LinkButton = ({
  target,
  className = "",
  children,
  disabled = false,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      {...props}
      target={disabled ? undefined : target}
      className={cn(
        "group flex items-center gap-2 rounded-full bg-white px-6 py-2 text-[11px] font-black text-black transition-all duration-300",
        "hover:bg-zinc-50 active:scale-95",
        disabled && "opacity-50 pointer-events-none cursor-not-allowed",
        className
      )}
    >
      {children}
    </Link>
  );
};
