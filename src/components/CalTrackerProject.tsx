"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  Sparkles,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  FileCode,
  Database,
  Terminal,
  Activity,
  Globe,
  Presentation,
  Video,
  Mic,
  BookOpen,
  ZoomIn,
  Copy,
  Check,
} from "lucide-react";
import { CALTRACKER_PROJECT_DATA } from "@/data/projects";
import ImageLightbox from "./ImageLightbox";

export default function CalTrackerProject() {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "techstack" | "prompts" | "api" | "references">("overview");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const { writeup } = CALTRACKER_PROJECT_DATA;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(writeup.prompts.runtimeGemini);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  return (
    <div className="space-y-10">
      {/* Lightbox for Architecture Diagram */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={writeup.architecture.diagramSrc}
        imageAlt="CalTracker System Architecture Diagram"
        caption="Figure 3: CalTracker end-to-end architecture: User upload -> Vercel UI/logic -> Gemini Vision API -> Structured JSON -> Daily dashboard"
      />

      {/* Featured Banner with Live Deployment Quick Actions */}
      <div className="relative overflow-hidden rounded-3xl border border-python-blue/30 bg-gradient-to-br from-cyber-850 via-cyber-900 to-cyber-950 p-8 sm:p-10 shadow-2xl">
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 bg-python-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute left-0 bottom-0 h-64 w-64 bg-python-gold/10 blur-3xl" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-python-blue/40 bg-python-blue/10 px-4 py-1.5 font-mono text-xs font-bold text-python-blue">
              <Sparkles className="h-3.5 w-3.5 text-python-gold" />
              <span>PART B: COMPREHENSIVE PROJECT WRITEUP</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fitness-emerald opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-fitness-emerald" />
              </span>
              <span className="font-mono text-xs font-semibold text-fitness-emerald">
                Deployed &amp; Live on Vercel
              </span>
            </div>
          </div>

          <h2 className="mt-4 font-serif text-[32px] font-bold text-ivory-50 sm:text-[44px]">
            {writeup.title}
          </h2>
          <p className="mt-3 max-w-4xl text-[18px] text-slate-300 leading-relaxed">
            {writeup.motivation}
          </p>

          {/* Primary Quick Access CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={CALTRACKER_PROJECT_DATA.deploymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-python-blue bg-python-blue px-6 py-3.5 font-mono text-sm font-bold text-cyber-950 shadow-[0_10px_25px_-5px_rgba(56,189,248,0.5)] transition hover:bg-sky-400"
            >
              <Globe className="h-4 w-4" />
              <span>Open Live App (Vercel)</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href={CALTRACKER_PROJECT_DATA.presentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-python-gold/60 bg-python-gold/15 px-6 py-3.5 font-mono text-sm font-bold text-python-gold transition hover:bg-python-gold/25"
            >
              <Presentation className="h-4 w-4" />
              <span>Project Presentation</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href={CALTRACKER_PROJECT_DATA.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-white/10 bg-cyber-850 px-6 py-3.5 font-mono text-sm font-semibold text-ivory-50 transition hover:border-fitness-emerald hover:text-fitness-emerald"
            >
              <Video className="h-4 w-4" />
              <span>Demo Video (Screen Recording .mp4)</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <a
              href={CALTRACKER_PROJECT_DATA.audioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-white/10 bg-cyber-850 px-6 py-3.5 font-mono text-sm font-semibold text-ivory-50 transition hover:border-purple-400 hover:text-purple-300"
            >
              <Mic className="h-4 w-4" />
              <span>Audio Recording (New recording 12.mp3)</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Writeup Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-white/10 pb-4">
        {[
          { id: "overview", label: "1-3. Motivation & USP", icon: Sparkles },
          { id: "architecture", label: "4. Architecture & Dataflow", icon: Layers },
          { id: "techstack", label: "5-6. Tech Stack & Datasets", icon: Cpu },
          { id: "prompts", label: "7. Prompt Engineering", icon: Terminal },
          { id: "api", label: "8-9. API & User I/O", icon: Activity },
          { id: "references", label: "10. References & Vault", icon: FileCode },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-mono font-semibold transition ${
                isActive
                  ? "border border-python-blue/60 bg-python-blue/15 text-python-blue shadow-md"
                  : "border border-transparent bg-cyber-900/60 text-slate-400 hover:bg-cyber-850 hover:text-white"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Overview, Motivation, Gap & USP */}
      {activeTab === "overview" && (
        <div className="space-y-8">
          {/* Motivation Deep Dive */}
          <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-8 backdrop-blur-xl">
            <div className="font-mono text-xs uppercase tracking-wider text-python-gold">
              SECTION 02 • PROJECT MOTIVATION
            </div>
            <h3 className="mt-2 font-serif text-[28px] font-bold text-ivory-50">
              The Friction in Modern Dietary Self-Tracking
            </h3>
            <p className="mt-4 text-[17px] leading-relaxed text-slate-300">
              {writeup.motivation}
            </p>
          </div>

          {/* Existing Gap / Motivating Event / USP Table */}
          <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-8 backdrop-blur-xl">
            <div className="font-mono text-xs uppercase tracking-wider text-python-blue">
              SECTION 03 • EXISTING GAP / MOTIVATING EVENT / USP
            </div>
            <h3 className="mt-2 font-serif text-[28px] font-bold text-ivory-50">
              Strategic Value Proposition &amp; Market Need
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {writeup.gapAnalysis.map((item) => (
                <div
                  key={item.aspect}
                  className="rounded-2xl border border-white/10 bg-cyber-850/80 p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-flex items-center rounded-lg border border-python-blue/40 bg-python-blue/10 px-3 py-1 font-mono text-xs font-bold uppercase text-python-blue">
                      {item.aspect}
                    </span>
                    <h4 className="mt-3 font-serif text-xl font-bold text-ivory-50">
                      {item.aspect === "Gap" && "Manual Entry Overload"}
                      {item.aspect === "Motivation" && "Academic & Personal Synergy"}
                      {item.aspect === "USP" && "Instant Multimodal Vision"}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Architecture & Flowchart */}
      {activeTab === "architecture" && (
        <div className="space-y-8">
          {/* Architecture Diagram Card */}
          <div className="rounded-3xl border border-python-blue/30 bg-cyber-900/80 p-8 backdrop-blur-xl shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-python-blue">
                  SECTION 04 • SYSTEM ARCHITECTURE
                </div>
                <h3 className="mt-1 font-serif text-[28px] font-bold text-ivory-50">
                  Figure 3: CalTracker Architecture
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-1.5 rounded-xl border border-python-blue/40 bg-python-blue/10 px-3.5 py-1.5 font-mono text-xs font-bold text-python-blue hover:bg-python-blue/20 transition"
              >
                <ZoomIn className="h-4 w-4" />
                <span>Inspect Full-Res Diagram</span>
              </button>
            </div>

            <div
              onClick={() => setLightboxOpen(true)}
              className="mt-6 group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-cyber-950 p-4 transition hover:border-python-blue/60"
            >
              <img
                src={writeup.architecture.diagramSrc}
                alt="Figure 3: CalTracker Architecture"
                className="w-full h-auto rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-cyber-950/40 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="rounded-xl border border-python-blue bg-cyber-900/90 px-4 py-2 font-mono text-xs font-bold text-python-blue shadow-2xl">
                  Click to Zoom Architecture Diagram
                </span>
              </div>
            </div>

            <p className="mt-4 text-center font-mono text-xs text-slate-400">
              Request: image + text prompt → Response: JSON parsed and stored in the user&apos;s daily log
            </p>
          </div>

          {/* 4 Layers Breakdown */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {writeup.architecture.layers.map((layer, idx) => (
              <div
                key={layer.name}
                className="rounded-2xl border border-white/10 bg-cyber-850/80 p-6"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs font-bold text-python-gold uppercase tracking-wider">
                    LAYER 0{idx + 1}
                  </span>
                  <span className="rounded-md border border-python-blue/30 bg-python-blue/10 px-2 py-0.5 font-mono text-[11px] text-python-blue">
                    {layer.tech}
                  </span>
                </div>
                <h4 className="mt-3 font-serif text-xl font-bold text-ivory-50">
                  {layer.name}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {layer.role}
                </p>
              </div>
            ))}
          </div>

          {/* Sequential Step Flow */}
          <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-8 backdrop-blur-xl">
            <h4 className="font-mono text-xs uppercase tracking-wider text-fitness-emerald">
              EXECUTION PIPELINE
            </h4>
            <h3 className="mt-1 font-serif text-[24px] font-bold text-ivory-50">
              Turn-by-Turn Inference Sequence
            </h3>

            <div className="mt-6 space-y-3">
              {writeup.architecture.flowSteps.map((step, idx) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-xl border border-white/5 bg-cyber-850 p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-python-blue/10 font-mono text-xs font-bold text-python-blue">
                    {idx + 1}
                  </span>
                  <p className="text-sm font-medium text-slate-200 pt-0.5">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Tech Stack & Datasets */}
      {activeTab === "techstack" && (
        <div className="space-y-8">
          {/* Complete Tech Stack Table */}
          <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-8 backdrop-blur-xl shadow-xl">
            <div className="font-mono text-xs uppercase tracking-wider text-python-blue">
              SECTION 05 • COMPLETE TECH STACK
            </div>
            <h3 className="mt-2 font-serif text-[28px] font-bold text-ivory-50">
              Technology Stack Architecture
            </h3>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-cyber-850 font-mono text-xs uppercase text-slate-400 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4">Layer</th>
                    <th className="px-6 py-4">Technology</th>
                    <th className="px-6 py-4 hidden sm:table-cell">Role &amp; Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-cyber-900">
                  {writeup.techStack.map((item) => (
                    <tr key={item.layer} className="hover:bg-white/[0.02]">
                      <td className="px-6 py-4 font-mono font-bold text-python-blue">
                        {item.layer}
                      </td>
                      <td className="px-6 py-4 font-semibold text-ivory-50">
                        {item.technology}
                      </td>
                      <td className="px-6 py-4 text-slate-300 hidden sm:table-cell">
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Datasets Used */}
          <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-8 backdrop-blur-xl">
            <div className="font-mono text-xs uppercase tracking-wider text-python-gold">
              SECTION 06 • DATASETS USED
            </div>
            <h3 className="mt-2 font-serif text-[28px] font-bold text-ivory-50">
              Corpora &amp; Ingestion Datasets
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {writeup.datasets.map((d, i) => (
                <div
                  key={d.title}
                  className="rounded-2xl border border-white/10 bg-cyber-850/80 p-6"
                >
                  <span className="font-mono text-xs font-bold text-python-gold uppercase tracking-wider">
                    SOURCE 0{i + 1}
                  </span>
                  <h4 className="mt-2 font-serif text-lg font-bold text-ivory-50">
                    {d.title}
                  </h4>
                  <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                    {d.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Prompts Used */}
      {activeTab === "prompts" && (
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-8 backdrop-blur-xl">
            <div className="font-mono text-xs uppercase tracking-wider text-python-blue">
              SECTION 07 • PROMPTS USED FOR CONSTRUCTING THE WEBSITE
            </div>
            <h3 className="mt-2 font-serif text-[28px] font-bold text-ivory-50">
              Website Synthesis &amp; Prompt Engineering
            </h3>
            <p className="mt-3 text-slate-300 text-sm">
              Iterative development prompts used during the construction, layout design, and Vercel edge deployment of CalTracker:
            </p>

            <div className="mt-6 space-y-3">
              {writeup.prompts.construction.map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-cyber-850/90 p-4 font-mono text-sm text-slate-200"
                >
                  <span className="text-python-blue font-bold mr-2">&gt;</span>
                  &ldquo;{p}&rdquo;
                </div>
              ))}
            </div>
          </div>

          {/* Gemini Vision Runtime Prompt & JSON Schema */}
          <div className="rounded-3xl border border-python-gold/30 bg-cyber-900/80 p-8 backdrop-blur-xl">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-python-gold">
                  RUNTIME GEMINI VISION PROMPT
                </span>
                <h4 className="mt-1 font-serif text-2xl font-bold text-ivory-50">
                  Multimodal JSON Nutrition Extraction Prompt
                </h4>
              </div>
              <button
                type="button"
                onClick={handleCopyPrompt}
                className="inline-flex items-center gap-1.5 rounded-xl border border-python-gold/40 bg-python-gold/10 px-3.5 py-1.5 font-mono text-xs font-bold text-python-gold hover:bg-python-gold/20"
              >
                {copiedPrompt ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span>{copiedPrompt ? "Copied" : "Copy Prompt"}</span>
              </button>
            </div>

            <div className="mt-5 rounded-2xl border border-python-gold/20 bg-cyber-950 p-5 font-mono text-base text-python-gold shadow-inner">
              &ldquo;{writeup.prompts.runtimeGemini}&rdquo;
            </div>

            <div className="mt-6">
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Sample Structured JSON Response from Gemini Vision:
              </div>
              <pre className="mt-2 overflow-x-auto rounded-2xl border border-white/10 bg-cyber-950 p-5 font-mono text-xs leading-relaxed text-cyan-300">
                {writeup.prompts.sampleJsonResponse}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: API Integration & User I/O */}
      {activeTab === "api" && (
        <div className="space-y-8">
          {/* API Integration Table */}
          <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-8 backdrop-blur-xl">
            <div className="font-mono text-xs uppercase tracking-wider text-python-blue">
              SECTION 08 • API INTEGRATION
            </div>
            <h3 className="mt-2 font-serif text-[28px] font-bold text-ivory-50">
              Google Gemini Vision API Contract
            </h3>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-white/5 bg-cyber-900">
                  {writeup.apiIntegration.map((row) => (
                    <tr key={row.parameter} className="hover:bg-white/[0.02]">
                      <td className="w-1/4 px-6 py-4 font-mono font-bold text-python-blue">
                        {row.parameter}
                      </td>
                      <td className="px-6 py-4 text-slate-200">
                        {row.detail}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Users, Inputs and Outputs */}
          <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-8 backdrop-blur-xl">
            <div className="font-mono text-xs uppercase tracking-wider text-fitness-emerald">
              SECTION 09 • USERS, INPUTS AND OUTPUTS
            </div>
            <h3 className="mt-2 font-serif text-[28px] font-bold text-ivory-50">
              User Personas &amp; Data Transformations
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              <strong className="text-white">Target Users:</strong> {writeup.usersInputsOutputs.targetUsers}
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead className="bg-cyber-850 font-mono text-xs uppercase text-slate-400 border-b border-white/10">
                  <tr>
                    <th className="px-6 py-4">Stage</th>
                    <th className="px-6 py-4">Details</th>
                    <th className="px-6 py-4">Format</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 bg-cyber-900">
                  {writeup.usersInputsOutputs.table.map((row) => (
                    <tr key={row.stage} className="hover:bg-white/[0.02]">
                      <td className="px-6 py-4 font-mono font-bold text-python-gold">
                        {row.stage}
                      </td>
                      <td className="px-6 py-4 text-slate-200">
                        {row.details}
                      </td>
                      <td className="px-6 py-4 font-mono text-xs text-python-blue">
                        {row.format}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: References & Vault */}
      {activeTab === "references" && (
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-8 backdrop-blur-xl">
            <div className="font-mono text-xs uppercase tracking-wider text-python-blue">
              SECTION 10 • REFERENCES
            </div>
            <h3 className="mt-2 font-serif text-[28px] font-bold text-ivory-50">
              Authenticated Citations &amp; Live Links
            </h3>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {writeup.references.map((ref) => (
                <a
                  key={ref.name}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-cyber-850 p-5 transition hover:border-python-blue/50 hover:bg-cyber-800"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-base text-ivory-50 group-hover:text-python-blue transition-colors">
                        {ref.name}
                      </h4>
                      <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-python-blue" />
                    </div>
                    <p className="mt-2 text-xs text-slate-400">
                      {ref.notes}
                    </p>
                  </div>
                  <div className="mt-4 font-mono text-[11px] text-python-blue truncate">
                    {ref.url}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
