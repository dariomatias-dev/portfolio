import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <div
        className="relative h-auto max-h-[90vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 shadow-xl dark:border-zinc-800">
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className={`h-auto w-full object-contain transition-opacity duration-300 ${
              isLoading || hasError ? "opacity-0" : "opacity-100"
            }`}
            onLoad={handleLoad}
            onError={handleError}
            style={{ maxHeight: "90vh" }}
          />

          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="h-10 w-10 animate-spin rounded-full border-4 border-solid border-white/20 border-t-white"
                role="status"
              >
                <span className="sr-only">Carregando...</span>
              </div>
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
      </div>

      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/75"
        aria-label="Fechar visualizador de imagem"
      >
        <X size={20} />
      </button>
    </div>
  );

  return createPortal(modalContent, document.body);
};
