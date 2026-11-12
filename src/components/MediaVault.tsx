"use client";

import React, { useState } from "react";
import { Globe, Presentation, Video, Mic, ExternalLink, Sparkles, ShieldCheck, CheckCircle2, Play, Pause, Volume2 } from "lucide-react";
import { CALTRACKER_PROJECT_DATA } from "@/data/projects";
import { STUDENT_INFO } from "@/data/chapters";

export default function MediaVault() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="rounded-3xl border border-python-blue/20 bg-cyber-900/80 p-8 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-python-blue/40 bg-python-blue/10 px-3.5 py-1 font-mono text-xs font-bold text-python-blue">
          <Globe className="h-3.5 w-3.5 text-python-gold" />
          <span>CHAPTER 08 • CENTRAL MEDIA VAULT</span>
        </div>
        <h2 className="mt-3 font-serif text-[32px] font-bold text-ivory-50 sm:text-[38px]">
          Deliverables, Demonstrations &amp; Cloud Assets
        </h2>
        <p className="mt-2 max-w-3xl text-[16px] text-slate-300">
          Aggregated archive of verified deployment links, architecture presentation decks, screen recording walkthroughs, and audio thesis submissions for CS13007 Advanced Python Programming.
        </p>
      </div>

      {/* Vault Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* 1. Live Web App Deployment */}
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-cyber-850/80 p-7 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-python-blue/50">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="rounded-md border px-2.5 py-0.5 font-mono text-xs font-semibold bg-cyan-500/10 text-cyan-300 border-cyan-500/30">
                Live Production App
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyber-900 border border-white/10 text-python-blue">
                <Globe className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-serif text-2xl font-bold text-ivory-50">
                Live Cloud Deployment (Vercel)
              </h3>
              <p className="mt-1 font-mono text-xs text-python-gold">
                CalTracker - Gym &amp; Diet Tracker
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Publicly accessible web application deployed on Vercel&apos;s global edge network. Features drag-and-drop food image capture, Gemini Vision multimodal inference, daily calorie goals, and interactive macro tracking.
              </p>
            </div>

            <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
              {[
                "Instant camera / file upload",
                "Multimodal nutrient estimation",
                "Reactive macro progress bars",
                "Zero-latency edge serverless execution",
              ].map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-fitness-emerald shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <a
              href={CALTRACKER_PROJECT_DATA.deploymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-python-blue/40 bg-cyber-900 py-3 font-mono text-xs font-bold text-python-blue transition hover:bg-python-blue hover:text-cyber-950"
            >
              <span>Launch CalTracker App (Vercel)</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* 2. Project Presentation */}
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-cyber-850/80 p-7 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-amber-400/50">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="rounded-md border px-2.5 py-0.5 font-mono text-xs font-semibold bg-amber-500/10 text-amber-300 border-amber-500/30">
                Google Slides PPT
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyber-900 border border-white/10 text-amber-400">
                <Presentation className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-serif text-2xl font-bold text-ivory-50">
                Project Architectural Slide Deck
              </h3>
              <p className="mt-1 font-mono text-xs text-python-gold truncate">
                CalTracker_Workflow_with_Files.pptx
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Official course presentation slides covering system design, engineering workflow, modular data structures, API contracts, and user testing outcomes.
              </p>
            </div>

            <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
              {[
                "System flowcharts & architectural schematics",
                "Prompt engineering breakdown",
                "Frontend & backend decoupling",
                "Comprehensive project review",
              ].map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-fitness-emerald shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <a
              href={CALTRACKER_PROJECT_DATA.presentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-amber-400/40 bg-cyber-900 py-3 font-mono text-xs font-bold text-amber-400 transition hover:bg-amber-400 hover:text-cyber-950"
            >
              <span>Open Google Slides Presentation</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* 3. Screen Recording Video Walkthrough (Accurate) */}
        <div className="flex flex-col justify-between rounded-3xl border border-emerald-400/30 bg-cyber-850/80 p-7 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-emerald-400/60">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="rounded-md border px-2.5 py-0.5 font-mono text-xs font-semibold bg-emerald-500/10 text-emerald-300 border-emerald-500/30">
                MP4 Video Walkthrough
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyber-900 border border-white/10 text-emerald-400">
                <Video className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-serif text-2xl font-bold text-ivory-50">
                Screen Recording Walkthrough Demo
              </h3>
              <p className="mt-1 font-mono text-xs text-emerald-400 truncate">
                Screen Recording 2026-11-02 110715.mp4
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Full-length screen recording walkthrough demonstration illustrating meal photography upload, Gemini Vision API dispatch, real-time JSON response parsing, and daily intake recalculation.
              </p>
            </div>

            {/* Video Player Preview Mockup */}
            <div className="mt-5 overflow-hidden rounded-2xl border border-emerald-500/20 bg-cyber-950 p-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  1080p Full HD • 60 FPS
                </span>
                <span>MP4 Video</span>
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
                <span>File: Screen Recording 2026-11-02 110715.mp4</span>
                <span className="font-mono text-emerald-400">Google Drive</span>
              </div>
            </div>

            <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
              {[
                "End-to-end meal logging workflow demo",
                "Multimodal AI vision inference verification",
                "Reactive UI behavior & calorie budget calculation",
                "Official demonstration file on Google Drive",
              ].map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-fitness-emerald shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <a
              href={CALTRACKER_PROJECT_DATA.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-emerald-400/40 bg-cyber-900 py-3 font-mono text-xs font-bold text-emerald-400 transition hover:bg-emerald-400 hover:text-cyber-950"
            >
              <span>Watch Video: Screen Recording 2026-11-02 110715.mp4</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* 4. Python Audio Recording Submission (Accurate) */}
        <div className="flex flex-col justify-between rounded-3xl border border-purple-400/30 bg-cyber-850/80 p-7 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-purple-400/60">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="rounded-md border px-2.5 py-0.5 font-mono text-xs font-semibold bg-purple-500/10 text-purple-300 border-purple-500/30">
                MP3 Audio Thesis
              </span>
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyber-900 border border-white/10 text-purple-400">
                <Mic className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-serif text-2xl font-bold text-ivory-50">
                Python Audio Recording Submission
              </h3>
              <p className="mt-1 font-mono text-xs text-purple-300 truncate">
                New recording 12.mp3 — Business Thesis &amp; Model
              </p>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Official audio recording session conducted in the computer lab for the CalTracker website and business thesis, detailing problem statement, market feasibility, user adoption strategy, and scalable technical foundation.
              </p>
            </div>

            {/* Interactive Audio Player Preview Mockup */}
            <div className="mt-5 rounded-2xl border border-purple-500/25 bg-cyber-950 p-4">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
                <span className="flex items-center gap-1.5 text-purple-400">
                  <Volume2 className="h-3.5 w-3.5" />
                  MPEG Audio (.mp3) • High Fidelity
                </span>
                <span>Track 12</span>
              </div>

              <div className="mt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-500 text-white hover:bg-purple-400 transition"
                >
                  {isPlayingAudio ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                </button>
                <div className="flex-1">
                  <div className="flex justify-between font-mono text-[11px] text-slate-300">
                    <span className="font-semibold text-white">New recording 12.mp3</span>
                    <span className="text-purple-300">{isPlayingAudio ? "Streaming..." : "Ready to Play"}</span>
                  </div>
                  {/* Animated Waveform Bars */}
                  <div className="mt-2 flex items-center gap-1 h-5">
                    {[40, 75, 55, 90, 65, 80, 45, 95, 70, 85, 50, 65, 85, 40, 70, 95, 60, 80, 50, 75].map((h, i) => (
                      <span
                        key={i}
                        className={`flex-1 rounded-full transition-all duration-300 ${
                          isPlayingAudio ? "bg-purple-400 animate-pulse" : "bg-purple-900/50"
                        }`}
                        style={{ height: isPlayingAudio ? `${h}%` : "30%" }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-2 border-t border-white/5 pt-4">
              {[
                "Target file: New recording 12.mp3",
                "Nutrition app consumer pain-point analysis",
                "AI vision commercial viability & product thesis",
                "Hosted on official Google Drive submission portal",
              ].map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                  <CheckCircle2 className="h-3.5 w-3.5 text-fitness-emerald shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 border-t border-white/10 pt-5">
            <a
              href={CALTRACKER_PROJECT_DATA.audioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full rounded-xl border border-purple-400/40 bg-cyber-900 py-3 font-mono text-xs font-bold text-purple-300 transition hover:bg-purple-500 hover:text-white"
            >
              <span>Listen to Audio: New recording 12.mp3</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
