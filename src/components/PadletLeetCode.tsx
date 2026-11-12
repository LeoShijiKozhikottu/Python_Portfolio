"use client";

import React, { useState } from "react";
import { Code2, ExternalLink, Copy, Check, ZoomIn, Terminal, CheckCircle2 } from "lucide-react";
import { PADLET_LEETCODE_DATA } from "@/data/projects";
import ImageLightbox from "./ImageLightbox";

export default function PadletLeetCode() {
  const [selectedProblemId, setSelectedProblemId] = useState<string>("easy-1");
  const [copiedCode, setCopiedCode] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const activeProblem =
    PADLET_LEETCODE_DATA.problems.find((p) => p.id === selectedProblemId) ||
    PADLET_LEETCODE_DATA.problems[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeProblem.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Easy":
        return "border-emerald-500/40 bg-emerald-500/10 text-emerald-400";
      case "Medium":
        return "border-amber-500/40 bg-amber-500/10 text-amber-400";
      case "Hard":
        return "border-red-500/40 bg-red-500/10 text-red-400";
      default:
        return "border-python-blue/40 bg-python-blue/10 text-python-blue";
    }
  };

  return (
    <div className="space-y-8">
      {/* Lightbox for Padlet Screenshot */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={PADLET_LEETCODE_DATA.screenshot}
        imageAlt={PADLET_LEETCODE_DATA.caption}
        caption="Padlet post with PDF and problem list — Padlet_Python_23MIC0082 (Leo Shiji)"
      />

      {/* Overview Card */}
      <div className="rounded-3xl border border-python-blue/20 bg-cyber-900/80 p-8 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-python-blue/40 bg-python-blue/10 px-3.5 py-1 font-mono text-xs font-bold text-python-blue">
          <Code2 className="h-3.5 w-3.5 text-python-gold" />
          <span>PART A • ITEM 09: PADLET &amp; ALGORITHMIC SUITE</span>
        </div>
        <h2 className="mt-3 font-serif text-[32px] font-bold text-ivory-50 sm:text-[38px]">
          {PADLET_LEETCODE_DATA.title}
        </h2>
        <p className="mt-2 max-w-3xl text-[16px] text-slate-300">
          {PADLET_LEETCODE_DATA.summary}
        </p>

        {/* Submission Details Bar */}
        <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5">
          <div className="rounded-xl border border-white/10 bg-cyber-850 px-4 py-2 font-mono text-xs">
            <span className="text-slate-400">Padlet Submission:</span>
            <span className="ml-2 font-bold text-python-gold">{PADLET_LEETCODE_DATA.submissionTag}</span>
          </div>
          <div className="rounded-xl border border-white/10 bg-cyber-850 px-4 py-2 font-mono text-xs">
            <span className="text-slate-400">Candidate:</span>
            <span className="ml-2 font-bold text-white">{PADLET_LEETCODE_DATA.student} ({PADLET_LEETCODE_DATA.regNo})</span>
          </div>
          <div className="rounded-xl border border-fitness-emerald/40 bg-fitness-emerald/10 px-4 py-2 font-mono text-xs">
            <span className="text-fitness-emerald font-bold">6 Problems Completed &amp; Verified</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left Screenshot + Right Interactive Problem Matrix */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Column: Padlet Post Screenshot */}
        <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-cyber-850/80 p-6 backdrop-blur-xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-python-gold">
                PADLET EVIDENCE
              </span>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-1 font-mono text-xs text-python-blue hover:underline"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                <span>Zoom</span>
              </button>
            </div>
            <h3 className="mt-2 font-serif text-xl font-bold text-ivory-50">
              Padlet Post Screenshot
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Submitted PDF attachment and catalog of 6 LeetCode problems attempted.
            </p>

            <div
              onClick={() => setLightboxOpen(true)}
              className="mt-4 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-cyber-950 p-2 transition hover:border-python-blue/60"
            >
              <img
                src={PADLET_LEETCODE_DATA.screenshot}
                alt={PADLET_LEETCODE_DATA.caption}
                className="w-full h-auto max-h-[460px] rounded-xl object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="mt-4 border-t border-white/10 pt-3 text-center font-mono text-xs text-slate-400">
            {PADLET_LEETCODE_DATA.caption}
          </div>
        </div>

        {/* Right Column: Interactive LeetCode Problem Selector & Code Viewer */}
        <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-cyber-900/80 p-6 sm:p-8 backdrop-blur-xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-python-blue">
                  ALGORITHM PROBLEM WORKSHOP
                </span>
                <h3 className="font-serif text-2xl font-bold text-ivory-50">
                  Select a Problem to Inspect Solution
                </h3>
              </div>
              <span className="font-mono text-xs text-slate-400">
                2 Easy • 2 Medium • 2 Hard
              </span>
            </div>

            {/* Problem Selector Pills */}
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {PADLET_LEETCODE_DATA.problems.map((p) => {
                const isSelected = selectedProblemId === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProblemId(p.id)}
                    className={`flex flex-col text-left rounded-xl p-3 border transition-all ${
                      isSelected
                        ? "border-python-blue bg-python-blue/15 shadow-md"
                        : "border-white/10 bg-cyber-850 hover:border-white/30"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex rounded px-1.5 py-0.5 text-[10px] font-mono font-bold ${getTierColor(p.tier)}`}>
                        {p.tier}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">
                        #{p.number}
                      </span>
                    </div>
                    <div className="mt-1 font-semibold text-xs text-ivory-50 truncate">
                      {p.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Problem Active Inspector */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-cyber-850/90 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-md border px-2 py-0.5 font-mono text-xs font-bold ${getTierColor(activeProblem.tier)}`}>
                      {activeProblem.tier}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-ivory-50">
                      LeetCode #{activeProblem.number}: {activeProblem.name}
                    </h4>
                  </div>
                  <div className="mt-1 text-xs text-python-gold font-mono">
                    Technique: {activeProblem.technique}
                  </div>
                </div>

                <a
                  href={activeProblem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-cyber-900 px-3 py-1.5 font-mono text-xs text-slate-300 hover:border-python-blue hover:text-white"
                >
                  <span>View on LeetCode</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Problem Description */}
              <p className="mt-4 text-xs text-slate-300 leading-relaxed">
                {activeProblem.description}
              </p>

              {/* Complexity Badges */}
              <div className="mt-4 flex flex-wrap gap-3">
                <div className="rounded-lg border border-white/10 bg-cyber-900 px-3 py-1 font-mono text-xs">
                  <span className="text-slate-400">Time:</span>
                  <span className="ml-1.5 font-bold text-python-blue">{activeProblem.timeComplexity}</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-cyber-900 px-3 py-1 font-mono text-xs">
                  <span className="text-slate-400">Space:</span>
                  <span className="ml-1.5 font-bold text-python-gold">{activeProblem.spaceComplexity}</span>
                </div>
              </div>

              {/* Code Box */}
              <div className="mt-4 rounded-xl border border-white/10 bg-cyber-950 p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <span className="font-mono text-[11px] text-slate-400">
                    python3 — solution.py
                  </span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-python-blue"
                  >
                    {copiedCode ? <Check className="h-3 w-3 text-fitness-emerald" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedCode ? "Copied" : "Copy"}</span>
                  </button>
                </div>
                <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-slate-200">
                  <code>{activeProblem.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
