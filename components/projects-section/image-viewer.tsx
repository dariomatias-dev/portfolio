"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { CloseButton } from "@/components/close-button";
import { cn } from "@/lib/utils";

interface ImageViewerProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export const ImageViewer = ({ src, alt, onClose }: ImageViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />

      <div
        className="relative h-auto max-h-[96vh] w-full max-w-[90vw] p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 shadow-xl">
          <Image
            src={src}
            alt={alt}
            width={2560}
            height={1440}
            className={cn(
              "h-auto w-full object-contain transition-opacity duration-300",
              isLoading || hasError ? "opacity-0" : "opacity-100",
            )}
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
            style={{ maxHeight: "96vh" }}
          />

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/20 border-t-white" />
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <Image
                src="/image_placeholder.png"
                width={256}
                height={256}
                alt="Erro ao carregar imagem"
                className="w-2/5 opacity-60 sm:w-1/3"
              />
            </div>
          )}
        </div>

        <div className="absolute right-3 top-3 sm:right-4 sm:top-4 flex gap-3">
          <Link
            href={src}
            target="_blank"
            className="group p-2 sm:p-2.5 rounded-full bg-zinc-900/50 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all border border-white/10 backdrop-blur-md active:scale-90"
          >
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>

          <CloseButton onClick={onClose} />
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};
