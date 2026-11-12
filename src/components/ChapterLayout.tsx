"use client";

import React from "react";
import { ArrowLeft, ArrowRight, BookOpen, Clock, List, Share2, Compass, Terminal } from "lucide-react";
import { ChapterMeta, CHAPTERS, STUDENT_INFO } from "@/data/chapters";

interface ChapterLayoutProps {
  chapter: ChapterMeta;
  onSelectChapter: (chapterId: number | null) => void;
  children: React.ReactNode;
}

export default function ChapterLayout({
  chapter,
  onSelectChapter,
  children,
}: ChapterLayoutProps) {
  const currentIndex = CHAPTERS.findIndex((c) => c.id === chapter.id);
  const prevChapter = currentIndex > 0 ? CHAPTERS[currentIndex - 1] : null;
  const nextChapter = currentIndex < CHAPTERS.length - 1 ? CHAPTERS[currentIndex + 1] : null;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Chapter Editorial Hero Header */}
      <div className="relative overflow-hidden rounded-3xl border border-python-blue/25 bg-cyber-900/85 p-8 backdrop-blur-xl sm:p-10 shadow-2xl">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-bl-full bg-python-blue/10 blur-3xl" />

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-python-blue/40 bg-python-blue/10 font-mono text-xs font-bold text-python-blue">
              {chapter.number}
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-python-gold">
              {chapter.code} • ACADEMIC COMPENDIUM
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-500" />
              {chapter.readingTime}
            </span>
            <span>•</span>
            <span className="text-python-blue">{STUDENT_INFO.courseCode}</span>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="font-serif text-[36px] font-bold tracking-tight text-ivory-50 sm:text-[46px] lg:text-[52px]">
            {chapter.title}
          </h1>
          <p className="mt-2 text-[19px] font-medium text-python-blue">
            {chapter.subtitle}
          </p>
          <p className="mt-4 max-w-4xl text-[16px] leading-relaxed text-slate-300">
            {chapter.summary}
          </p>
        </div>

        {/* Keywords */}
        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
          <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
            Focus Areas:
          </span>
          {chapter.keywords.map((kw) => (
            <span
              key={kw}
              className="rounded-lg border border-white/10 bg-cyber-850 px-2.5 py-1 font-mono text-xs text-slate-300"
            >
              #{kw}
            </span>
          ))}
        </div>
      </div>

      {/* Main Chapter Content Slot */}
      <div className="mt-8">{children}</div>

      {/* Chapter Footer Navigation */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-cyber-900/80 p-6 backdrop-blur-xl sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
              Navigation
            </div>
            <div className="font-serif text-xl font-bold text-ivory-50">
              Continue Reading Portfolio
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onSelectChapter(null)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-cyber-850 px-4 py-2.5 text-sm font-semibold text-ivory-50 hover:border-python-blue/40"
            >
              <List className="h-4 w-4 text-python-blue" />
              <span>Table of Contents</span>
            </button>

            {prevChapter && (
              <button
                type="button"
                onClick={() => onSelectChapter(prevChapter.id)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-cyber-850 px-4 py-2.5 text-sm font-semibold text-slate-300 hover:border-white/30"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Prev: {prevChapter.code}</span>
              </button>
            )}

            {nextChapter ? (
              <button
                type="button"
                onClick={() => onSelectChapter(nextChapter.id)}
                className="inline-flex items-center gap-2 rounded-xl border border-python-blue/60 bg-python-blue px-4 py-2.5 text-sm font-bold text-cyber-950 hover:bg-sky-400 transition"
              >
                <span>Next: {nextChapter.code}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onSelectChapter(1)}
                className="inline-flex items-center gap-2 rounded-xl border border-python-gold/60 bg-python-gold px-4 py-2.5 text-sm font-bold text-cyber-950 hover:bg-amber-400 transition"
              >
                <span>Return to Chapter 01</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
