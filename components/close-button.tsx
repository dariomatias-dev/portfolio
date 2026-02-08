"use client";

import { X } from "lucide-react";

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton = ({ onClick }: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="group p-2.5 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all border border-white/10 backdrop-blur-md active:scale-90"
    >
      <X
        size={22}
        className="transition-transform duration-500 group-hover:rotate-90"
      />
    </button>
  );
};
