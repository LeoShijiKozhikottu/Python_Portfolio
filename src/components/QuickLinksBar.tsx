"use client";

import React from "react";
import { ExternalLink, Globe, Presentation, Video, Mic, BookOpen, Sparkles } from "lucide-react";
import { STUDENT_INFO } from "@/data/chapters";

export default function QuickLinksBar() {
  const links = [
    {
      title: "Live Web App (Vercel)",
      name: "CalTracker - Gym & Diet Tracker",
      url: STUDENT_INFO.quickLinks.website.url,
      icon: Globe,
      accent: "from-blue-500/20 to-cyan-500/10 border-cyan-400/30 text-cyan-400",
      pill: "Live App",
      badgeColor: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
      notes: "Live deployment on Vercel; multimodal calorie & macro tracker",
    },
    {
      title: "Project Presentation",
      name: "CalTracker_Workflow_with_Files.pptx",
      url: STUDENT_INFO.quickLinks.ppt.url,
      icon: Presentation,
      accent: "from-amber-500/20 to-orange-500/10 border-amber-400/30 text-amber-400",
      pill: "Google Slides",
      badgeColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
      notes: "Architecture, engineering workflow, and system deck",
    },
    {
      title: "Demo Video Walkthrough",
      name: "Screen Recording 2026-11-02 110715.mp4",
      url: STUDENT_INFO.quickLinks.video.url,
      icon: Video,
      accent: "from-emerald-500/20 to-teal-500/10 border-emerald-400/30 text-emerald-400",
      pill: "MP4 Video",
      badgeColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
      notes: "Full screen recording walkthrough of CalTracker (.mp4 video)",
    },
    {
      title: "Python Audio Recording",
      name: "New recording 12.mp3",
      url: STUDENT_INFO.quickLinks.audio.url,
      icon: Mic,
      accent: "from-purple-500/20 to-indigo-500/10 border-purple-400/30 text-purple-400",
      pill: "MP3 Audio",
      badgeColor: "bg-purple-500/10 text-purple-300 border-purple-500/30",
      notes: "Official audio recording submission on business thesis (New recording 12.mp3)",
    },
    {
      title: "Medium Publication",
      name: "My First Encounter with Python",
      url: STUDENT_INFO.quickLinks.medium.url,
      icon: BookOpen,
      accent: "from-sky-500/20 to-blue-500/10 border-sky-400/30 text-sky-400",
      pill: "Medium Blog",
      badgeColor: "bg-sky-500/10 text-sky-300 border-sky-500/30",
      notes: "4-year evolution from syntax to multimodal AI engineering",
    },
  ];

  return (
    <div className="rounded-3xl border border-python-blue/20 bg-cyber-900/80 p-6 backdrop-blur-xl sm:p-8 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-python-blue/10 text-python-blue">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-python-blue">
              VERIFIED PORTFOLIO DELIVERABLES
            </h3>
            <p className="text-base font-bold text-ivory-50">
              Quick Links &amp; Live Project Assets
            </p>
          </div>
        </div>
        <span className="font-mono text-xs text-slate-400">
          5 Authenticated Submissions
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-cyber-850/80 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-python-blue/50 hover:bg-cyber-800 shadow-md hover:shadow-cyan-500/10"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono font-semibold ${link.badgeColor}`}>
                    {link.pill}
                  </span>
                  <div className="text-slate-400 transition-colors group-hover:text-python-blue">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <div className={`flex h-7 w-7 items-center justify-center rounded-lg border bg-gradient-to-br ${link.accent}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="font-semibold text-sm text-ivory-50 group-hover:text-python-blue transition-colors leading-tight">
                    {link.title}
                  </div>
                </div>

                <div className="mt-2 text-xs font-medium text-slate-300 line-clamp-1">
                  {link.name}
                </div>
              </div>

              <div className="mt-3 border-t border-white/5 pt-2.5 text-[11px] text-slate-400">
                {link.notes}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
