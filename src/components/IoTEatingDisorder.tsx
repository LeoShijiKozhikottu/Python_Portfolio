"use client";

import React, { useState } from "react";
import { Activity, Cpu, Cloud, Smartphone, ZoomIn, CheckCircle2, AlertTriangle, ShieldCheck } from "lucide-react";
import { IOT_IMPAIRMENT_DATA } from "@/data/projects";
import ImageLightbox from "./ImageLightbox";

export default function IoTEatingDisorder() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<{ src: string; alt: string; caption: string } | null>(null);

  return (
    <div className="space-y-8">
      {/* Lightbox Modal */}
      {activeLightboxImage && (
        <ImageLightbox
          isOpen={true}
          onClose={() => setActiveLightboxImage(null)}
          imageSrc={activeLightboxImage.src}
          imageAlt={activeLightboxImage.alt}
          caption={activeLightboxImage.caption}
        />
      )}

      {/* Header Dossier Card */}
      <div className="rounded-3xl border border-python-blue/20 bg-cyber-900/80 p-8 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-python-blue/40 bg-python-blue/10 px-3.5 py-1 font-mono text-xs font-bold text-python-blue">
          <Activity className="h-3.5 w-3.5 text-fitness-emerald" />
          <span>PART A • ITEM 03: IOT IMPAIRMENT ASSESSMENT</span>
        </div>

        <h2 className="mt-3 font-serif text-[32px] font-bold text-ivory-50 sm:text-[38px]">
          {IOT_IMPAIRMENT_DATA.title}
        </h2>

        {/* Impairment Dossier Metadata */}
        <div className="mt-6 flex flex-wrap gap-4 border-t border-white/10 pt-5">
          <div className="rounded-xl border border-white/10 bg-cyber-850 px-4 py-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Student Name:</span>
            <span className="ml-2 font-serif font-bold text-ivory-50">{IOT_IMPAIRMENT_DATA.studentName}</span>
          </div>
          <div className="rounded-xl border border-white/10 bg-cyber-850 px-4 py-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">Reg. No.:</span>
            <span className="ml-2 font-mono font-bold text-python-gold">{IOT_IMPAIRMENT_DATA.regNo}</span>
          </div>
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-red-300">Impairment Focus:</span>
            <span className="ml-2 font-bold text-red-200">{IOT_IMPAIRMENT_DATA.impairment}</span>
          </div>
        </div>

        <p className="mt-6 text-[17px] leading-relaxed text-slate-300">
          {IOT_IMPAIRMENT_DATA.summary}
        </p>
      </div>

      {/* Side-by-Side Dual Artifact Display: Figure 1 & Figure 2 */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Figure 1: System Flow (Redrawn) */}
        <div className="flex flex-col justify-between rounded-3xl border border-python-blue/30 bg-cyber-900/80 p-6 backdrop-blur-xl shadow-xl">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-python-blue">
                FIGURE 1 • SYSTEM FLOW
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveLightboxImage({
                    src: IOT_IMPAIRMENT_DATA.flowchartImage,
                    alt: "Figure 1: System flow (redrawn from the handwritten sketch)",
                    caption: "Figure 1: System flow (redrawn from the handwritten sketch)",
                  })
                }
                className="inline-flex items-center gap-1 font-mono text-xs text-python-blue hover:underline"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                <span>Zoom</span>
              </button>
            </div>
            <h3 className="mt-2 font-serif text-xl font-bold text-ivory-50">
              Redrawn Architecture Diagram
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Clean digital translation of the motion detection, classification, and cloud telemetry pipeline.
            </p>

            <div
              onClick={() =>
                setActiveLightboxImage({
                  src: IOT_IMPAIRMENT_DATA.flowchartImage,
                  alt: "Figure 1: System flow (redrawn from the handwritten sketch)",
                  caption: "Figure 1: System flow (redrawn from the handwritten sketch)",
                })
              }
              className="mt-4 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-cyber-950 p-3 transition hover:border-python-blue/60"
            >
              <img
                src={IOT_IMPAIRMENT_DATA.flowchartImage}
                alt="Figure 1: System flow (redrawn from the handwritten sketch)"
                className="w-full h-auto rounded-lg object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="mt-4 border-t border-white/10 pt-3 text-center font-mono text-xs text-slate-400">
            Figure 1: System flow (redrawn from the handwritten sketch)
          </div>
        </div>

        {/* Figure 2: Original Handwritten Sketch */}
        <div className="flex flex-col justify-between rounded-3xl border border-python-gold/30 bg-cyber-900/80 p-6 backdrop-blur-xl shadow-xl">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-python-gold">
                FIGURE 2 • ORIGINAL ARTIFACT
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveLightboxImage({
                    src: IOT_IMPAIRMENT_DATA.sketchImage,
                    alt: "Figure 2: Original handwritten sketch",
                    caption: "Figure 2: Original handwritten sketch from lab notebook",
                  })
                }
                className="inline-flex items-center gap-1 font-mono text-xs text-python-gold hover:underline"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                <span>Zoom</span>
              </button>
            </div>
            <h3 className="mt-2 font-serif text-xl font-bold text-ivory-50">
              Original Handwritten Lab Sketch
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Authored in laboratory notebook detailing sensor layout, logic branches, and feedback loops.
            </p>

            <div
              onClick={() =>
                setActiveLightboxImage({
                  src: IOT_IMPAIRMENT_DATA.sketchImage,
                  alt: "Figure 2: Original handwritten sketch",
                  caption: "Figure 2: Original handwritten sketch from lab notebook",
                })
              }
              className="mt-4 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-cyber-950 p-3 transition hover:border-python-gold/60"
            >
              <img
                src={IOT_IMPAIRMENT_DATA.sketchImage}
                alt="Figure 2: Original handwritten sketch"
                className="w-full h-auto rounded-lg object-contain transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="mt-4 border-t border-white/10 pt-3 text-center font-mono text-xs text-slate-400">
            Figure 2: Original handwritten sketch
          </div>
        </div>
      </div>

      {/* 5 Sequential Architectural Stages */}
      <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-8 backdrop-blur-xl">
        <h3 className="font-serif text-2xl font-bold text-ivory-50">
          Hardware &amp; Algorithmic Classification Stages
        </h3>
        <p className="mt-1 text-sm text-slate-400">
          Sequential data flow through edge sensors, pattern classifier, and cloud telemetry endpoints.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-5">
          {IOT_IMPAIRMENT_DATA.steps.map((st, idx) => (
            <div
              key={st.title}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-cyber-850 p-5"
            >
              <div>
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-python-blue/15 font-mono text-xs font-bold text-python-blue">
                  0{idx + 1}
                </span>
                <h4 className="mt-3 font-semibold text-sm text-ivory-50">
                  {st.title}
                </h4>
                <div className="mt-1 font-mono text-[11px] text-python-gold">
                  {st.sensor}
                </div>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
