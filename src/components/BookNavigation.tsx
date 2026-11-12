"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, List, BookMarked, Library, Globe, ExternalLink, Presentation, Video, Mic, BookOpen } from "lucide-react";
import { CHAPTERS, STUDENT_INFO } from "@/data/chapters";

interface BookNavigationProps {
  currentChapter: number | null; // null = Table of Contents
  onSelectChapter: (chapterId: number | null) => void;
  onReturnToCover: () => void;
}

export default function BookNavigation({
  currentChapter,
  onSelectChapter,
  onReturnToCover,
}: BookNavigationProps) {
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const totalChapters = CHAPTERS.length;
  const progressPercent =
    currentChapter === null ? 10 : Math.round((currentChapter / totalChapters) * 100);

  const activeMeta =
    currentChapter !== null
      ? CHAPTERS.find((c) => c.id === currentChapter)
      : null;

  return (
    <header className="sticky top-0 z-40 border-b border-python-blue/20 bg-cyber-950/85 backdrop-blur-xl">
      {/* Reading Progress Bar */}
      <div className="h-1 w-full bg-cyber-900">
        <div
          className="h-full bg-gradient-to-r from-python-blue via-cyan-400 to-python-gold transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Left: Cover + Contents Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onReturnToCover}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-cyber-900/80 px-3.5 py-1.5 text-[13px] font-semibold text-python-gold transition hover:border-python-gold/40 hover:bg-cyber-850"
          >
            <Library className="h-4 w-4" />
            <span>Journal Cover</span>
          </button>

          <button
            type="button"
            onClick={() => onSelectChapter(null)}
            className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 py-1.5 text-[13px] font-semibold transition ${
              currentChapter === null
                ? "border-python-blue bg-python-blue text-cyber-950 font-bold"
                : "border-white/10 bg-cyber-900/80 text-ivory-50 hover:border-python-blue/40"
            }`}
          >
            <List className="h-4 w-4" />
            <span>Contents</span>
          </button>

          {/* Quick Links Dropdown Toggle */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowQuickLinks(!showQuickLinks)}
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xl border border-python-blue/30 bg-python-blue/10 px-3 py-1.5 text-[12px] font-mono font-bold text-python-blue hover:bg-python-blue/20 transition"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>Project Links</span>
            </button>

            {showQuickLinks && (
              <div className="absolute left-0 mt-2 w-72 rounded-2xl border border-python-blue/30 bg-cyber-900 p-3 shadow-2xl backdrop-blur-2xl z-50">
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 px-2 py-1">
                  Deliverables &amp; Demos
                </div>
                <div className="space-y-1 mt-1">
                  <a
                    href={STUDENT_INFO.quickLinks.website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-ivory-50 hover:bg-python-blue/10 hover:text-python-blue"
                  >
                    <span className="flex items-center gap-2">
                      <Globe className="h-3.5 w-3.5 text-cyan-400" />
                      CalTracker Live Web App
                    </span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>
                  <a
                    href={STUDENT_INFO.quickLinks.ppt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-ivory-50 hover:bg-amber-500/10 hover:text-amber-300"
                  >
                    <span className="flex items-center gap-2">
                      <Presentation className="h-3.5 w-3.5 text-amber-400" />
                      Project Presentation (PPT)
                    </span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>
                  <a
                    href={STUDENT_INFO.quickLinks.video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-ivory-50 hover:bg-emerald-500/10 hover:text-emerald-300"
                  >
                    <span className="flex items-center gap-2">
                      <Video className="h-3.5 w-3.5 text-emerald-400" />
                      Demo Video (Screen Recording .mp4)
                    </span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>
                  <a
                    href={STUDENT_INFO.quickLinks.audio.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-ivory-50 hover:bg-purple-500/10 hover:text-purple-300"
                  >
                    <span className="flex items-center gap-2">
                      <Mic className="h-3.5 w-3.5 text-purple-400" />
                      Python Audio (New recording 12.mp3)
                    </span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>
                  <a
                    href={STUDENT_INFO.quickLinks.medium.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs text-ivory-50 hover:bg-sky-500/10 hover:text-sky-300"
                  >
                    <span className="flex items-center gap-2">
                      <BookOpen className="h-3.5 w-3.5 text-sky-400" />
                      Medium Publication
                    </span>
                    <ExternalLink className="h-3 w-3 text-slate-400" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center: Current Chapter Indicator */}
        <div className="hidden items-center gap-2 md:flex">
          <BookMarked className="h-4 w-4 text-python-blue" />
          <span className="font-mono text-[13px] uppercase tracking-wider text-slate-300">
            {activeMeta
              ? `${activeMeta.code} — ${activeMeta.title} (${currentChapter} / ${totalChapters})`
              : "INTERACTIVE TABLE OF CONTENTS"}
          </span>
        </div>

        {/* Right: Previous & Next Chapter Controls */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            disabled={currentChapter === null || currentChapter <= 1}
            onClick={() =>
              currentChapter !== null && currentChapter > 1
                ? onSelectChapter(currentChapter - 1)
                : onSelectChapter(null)
            }
            className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-cyber-900/80 px-3 py-1.5 text-[13px] font-semibold text-ivory-50 transition hover:border-python-blue/40 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Prev</span>
          </button>

          <button
            type="button"
            disabled={currentChapter !== null && currentChapter >= totalChapters}
            onClick={() => {
              if (currentChapter === null) {
                onSelectChapter(1);
              } else if (currentChapter < totalChapters) {
                onSelectChapter(currentChapter + 1);
              }
            }}
            className="inline-flex items-center gap-1 rounded-xl border border-python-blue/60 bg-python-blue/20 px-3.5 py-1.5 text-[13px] font-semibold text-python-blue transition hover:bg-python-blue hover:text-cyber-950 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
