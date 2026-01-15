import Link, { LinkProps } from "next/link";
import { HTMLAttributeAnchorTarget, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface LinkButtonProps extends LinkProps {
  target?: HTMLAttributeAnchorTarget | undefined;
  className?: string;
  children: ReactNode;
}

export const LinkButton = ({
  target,
  className = "",
  children,
  ...props
}: LinkButtonProps) => {
  return (
    <Link
      {...props}
      target={target}
      className={cn(
        "group flex items-center gap-2 rounded-full bg-white px-6 py-2 text-[11px] font-black text-black transition-all hover:bg-zinc-50 active:scale-95 duration-300",
        className
      )}
    >
      {children}
    </Link>
  );
};
