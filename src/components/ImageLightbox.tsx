"use client";

import React, { useEffect } from "react";
import { X, ZoomIn, ExternalLink } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
}

export default function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  caption,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-cyber-950/90 p-4 backdrop-blur-md transition-opacity duration-300 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] max-w-5xl overflow-hidden rounded-2xl border border-python-blue/40 bg-cyber-900 shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 bg-cyber-850 px-5 py-3">
          <div className="flex items-center gap-2">
            <ZoomIn className="h-4 w-4 text-python-blue" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
              High-Resolution Visual Inspection
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-2.5 py-1 text-xs text-slate-300 hover:border-python-blue hover:text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Full Size</span>
            </a>
            <button
              onClick={onClose}
              className="rounded-lg border border-white/10 p-1 text-slate-400 hover:border-red-400/50 hover:bg-red-500/10 hover:text-red-300"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex max-h-[75vh] items-center justify-center overflow-auto p-4 bg-cyber-950/60">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>

        {/* Caption */}
        {caption && (
          <div className="border-t border-white/10 bg-cyber-850 px-5 py-3 text-center text-sm font-medium text-slate-300">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
