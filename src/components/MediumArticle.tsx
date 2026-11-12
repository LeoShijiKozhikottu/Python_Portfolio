"use client";

import React from "react";
import { BookOpen, ExternalLink, Sparkles, Quote, Calendar, UserCheck, Clock } from "lucide-react";
import { MEDIUM_ARTICLE_DATA } from "@/data/projects";

export default function MediumArticle() {
  return (
    <div className="space-y-8">
      {/* Editorial Feature Header */}
      <div className="relative overflow-hidden rounded-3xl border border-sky-400/30 bg-gradient-to-br from-cyber-850 via-cyber-900 to-cyber-950 p-8 sm:p-12 shadow-2xl">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-sky-500/15 blur-3xl" />

        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-400/10 px-3.5 py-1 font-mono text-xs font-bold text-sky-400">
            <BookOpen className="h-3.5 w-3.5 text-sky-300" />
            <span>PART A • ITEM 05: EDITORIAL PUBLICATION</span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {MEDIUM_ARTICLE_DATA.date}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {MEDIUM_ARTICLE_DATA.readTime}
            </span>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-serif text-[34px] font-bold text-ivory-50 sm:text-[46px] leading-tight">
            {MEDIUM_ARTICLE_DATA.title}
          </h2>
          <p className="mt-2 text-xl font-medium text-sky-400 font-serif italic">
            &ldquo;{MEDIUM_ARTICLE_DATA.subtitle}&rdquo;
          </p>
          <div className="mt-3 flex items-center gap-2 font-mono text-xs text-slate-400">
            <span>By</span>
            <span className="font-bold text-white">{MEDIUM_ARTICLE_DATA.author}</span>
            <span>•</span>
            <span>Published on {MEDIUM_ARTICLE_DATA.platform}</span>
          </div>
        </div>

        {/* Featured Pull Quote */}
        <div className="mt-8 rounded-2xl border border-sky-400/20 bg-sky-950/30 p-6 backdrop-blur-md">
          <div className="flex items-start gap-4">
            <Quote className="h-8 w-8 shrink-0 text-sky-400/60" />
            <p className="font-serif text-[19px] italic leading-relaxed text-slate-200">
              {MEDIUM_ARTICLE_DATA.quote}
            </p>
          </div>
        </div>

        {/* Direct Link CTA */}
        <div className="mt-8">
          <a
            href={MEDIUM_ARTICLE_DATA.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl border border-sky-400/80 bg-sky-400 px-7 py-4 font-mono text-sm font-bold text-cyber-950 shadow-[0_10px_25px_-5px_rgba(56,189,248,0.5)] transition hover:bg-sky-300"
          >
            <span>Read Complete Article on Medium</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Thematic Takeaways */}
      <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-8 backdrop-blur-xl">
        <h3 className="font-serif text-2xl font-bold text-ivory-50">
          Key Thematic Reflections &amp; Pedagogical Journey
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          Core concepts explored in the 4-year retrospection on Python engineering.
        </p>

        <div className="mt-6 space-y-4">
          {MEDIUM_ARTICLE_DATA.takeaways.map((takeaway, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 rounded-2xl border border-white/5 bg-cyber-850 p-5"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 font-mono text-xs font-bold text-sky-400">
                0{idx + 1}
              </span>
              <p className="text-sm leading-relaxed text-slate-300 pt-1">
                {takeaway}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
