"use client";

import React from "react";
import { BookOpen, Sparkles, Clock, ArrowRight, CheckCircle2, Terminal, Code2, Database, Activity, FileText, Layers } from "lucide-react";
import { CHAPTERS, STUDENT_INFO } from "@/data/chapters";

interface TableOfContentsProps {
  onSelectChapter: (chapterId: number) => void;
}

export default function TableOfContents({ onSelectChapter }: TableOfContentsProps) {
  const getIconForChapter = (id: number) => {
    switch (id) {
      case 1:
        return Terminal;
      case 2:
        return Sparkles;
      case 3:
        return Database;
      case 4:
        return Activity;
      case 5:
        return Layers;
      case 6:
        return Code2;
      case 7:
        return FileText;
      case 8:
        return BookOpen;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Editorial Header */}
      <div className="rounded-3xl border border-python-blue/20 bg-cyber-900/80 p-8 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-python-blue/30 bg-python-blue/10 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-python-blue">
          <Terminal className="h-3 w-3 text-python-gold" />
          <span>PORTFOLIO DIRECTORY • {STUDENT_INFO.courseCode}</span>
        </div>

        <h1 className="mt-3 font-serif text-[38px] font-bold text-ivory-50 sm:text-[46px]">
          Compendium Table of Contents
        </h1>
        <p className="mt-2 max-w-3xl text-[17px] text-slate-300">
          This digital research journal catalogues all curriculum requirements, laboratory implementations, technical project writeups, and engineering artifacts completed by{" "}
          <strong className="text-white">{STUDENT_INFO.studentName} ({STUDENT_INFO.registrationNumber})</strong> for{" "}
          <strong className="text-python-blue">{STUDENT_INFO.courseNameTitleCase} ({STUDENT_INFO.courseCode})</strong>.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-6 border-t border-white/10 pt-5 text-sm text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-python-blue" />
            <span className="text-ivory-50 font-bold">{CHAPTERS.length} Chapters</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-python-gold" />
            <span>Complete 10-Point Writeup</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-fitness-emerald" />
            <span>5 Verified Submissions</span>
          </div>
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {CHAPTERS.map((ch) => {
          const Icon = getIconForChapter(ch.id);
          return (
            <div
              key={ch.id}
              onClick={() => onSelectChapter(ch.id)}
              className="group relative flex cursor-pointer flex-col justify-between rounded-3xl border border-white/10 bg-cyber-850/80 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-python-blue/50 hover:bg-cyber-800 shadow-xl"
            >
              {/* Corner Ambient Glow */}
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-python-blue/5 transition-colors group-hover:bg-python-blue/10" />

              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-python-blue/30 bg-python-blue/10 font-mono text-sm font-bold text-python-blue">
                      {ch.number}
                    </span>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-python-gold">
                      {ch.code}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                    <Clock className="h-3.5 w-3.5 text-slate-500" />
                    <span>{ch.readingTime}</span>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyber-900 border border-white/10 text-python-blue group-hover:border-python-blue/40 group-hover:bg-python-blue/10 transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="font-serif text-[24px] font-bold text-ivory-50 group-hover:text-python-blue transition-colors leading-snug">
                      {ch.title}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-slate-300 leading-snug">
                      {ch.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-slate-400">
                  {ch.summary}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {ch.keywords.slice(0, 3).map((kw) => (
                      <span
                        key={kw}
                        className="rounded-md border border-white/5 bg-cyber-900 px-2 py-0.5 font-mono text-[11px] text-slate-400"
                      >
                        {kw}
                      </span>
                    ))}
                    {ch.keywords.length > 3 && (
                      <span className="rounded-md border border-white/5 bg-cyber-900 px-1.5 py-0.5 font-mono text-[11px] text-slate-500">
                        +{ch.keywords.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-python-blue group-hover:translate-x-1 transition-transform">
                    <span>Read Chapter</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
