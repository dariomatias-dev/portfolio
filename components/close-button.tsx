"use client";

import { X } from "lucide-react";

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group p-2 sm:p-2.5 rounded-full bg-zinc-900/60 hover:bg-zinc-900 text-zinc-100 hover:text-white transition-all border border-white/10 backdrop-blur-md active:scale-90 cursor-pointer"
    >
      <X className="w-4 h-4 sm:w-5.5 sm:h-5.5 transition-transform duration-500 group-hover:rotate-90" />
    </button>
  );
};
