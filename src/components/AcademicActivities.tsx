"use client";

import React, { useState } from "react";
import { Users, FileQuestion, Mic, ZoomIn, ExternalLink, Play, Sparkles, CheckCircle2 } from "lucide-react";
import { ACADEMIC_ACTIVITIES_DATA } from "@/data/projects";
import ImageLightbox from "./ImageLightbox";

export default function AcademicActivities() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<{ src: string; alt: string; caption: string } | null>(null);

  const { tutorial, quiz, audioRecording } = ACADEMIC_ACTIVITIES_DATA;

  return (
    <div className="space-y-10">
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

      {/* Intro Banner */}
      <div className="rounded-3xl border border-python-blue/20 bg-cyber-900/80 p-8 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-python-blue/40 bg-python-blue/10 px-3.5 py-1 font-mono text-xs font-bold text-python-blue">
          <Users className="h-3.5 w-3.5 text-python-gold" />
          <span>PART A • ITEMS 02, 04, 06: LAB ARTIFACTS</span>
        </div>
        <h2 className="mt-3 font-serif text-[32px] font-bold text-ivory-50 sm:text-[38px]">
          Classroom Activities &amp; Laboratory Sessions
        </h2>
        <p className="mt-2 max-w-3xl text-[16px] text-slate-300">
          Documented photographic records and audio deliverables from hands-on Python programming laboratory sessions, collaborative group tutorials, and in-class theoretical evaluations.
        </p>
      </div>

      {/* Grid of the 3 Activities */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Item 2: Tutorial Discussion */}
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-cyber-850/80 p-6 backdrop-blur-xl shadow-xl transition hover:border-python-blue/40">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-python-blue">
                ITEM 02 • TUTORIAL
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveLightboxImage({
                    src: tutorial.image,
                    alt: tutorial.caption,
                    caption: tutorial.caption,
                  })
                }
                className="inline-flex items-center gap-1 font-mono text-xs text-python-blue hover:underline"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                <span>Zoom</span>
              </button>
            </div>

            <h3 className="mt-3 font-serif text-2xl font-bold text-ivory-50">
              {tutorial.title}
            </h3>

            <div
              onClick={() =>
                setActiveLightboxImage({
                  src: tutorial.image,
                  alt: tutorial.caption,
                  caption: tutorial.caption,
                })
              }
              className="mt-4 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-cyber-950 p-2 transition hover:border-python-blue/60"
            >
              <img
                src={tutorial.image}
                alt={tutorial.caption}
                className="w-full h-52 rounded-xl object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {tutorial.description}
            </p>
          </div>

          <div className="mt-4 border-t border-white/10 pt-3 text-center font-mono text-xs text-slate-400">
            {tutorial.caption}
          </div>
        </div>

        {/* Item 4: Class Quiz */}
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-cyber-850/80 p-6 backdrop-blur-xl shadow-xl transition hover:border-python-gold/40">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-python-gold">
                ITEM 04 • EVALUATION
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveLightboxImage({
                    src: quiz.image,
                    alt: quiz.caption,
                    caption: quiz.caption,
                  })
                }
                className="inline-flex items-center gap-1 font-mono text-xs text-python-gold hover:underline"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                <span>Zoom</span>
              </button>
            </div>

            <h3 className="mt-3 font-serif text-2xl font-bold text-ivory-50">
              {quiz.title}
            </h3>

            <div
              onClick={() =>
                setActiveLightboxImage({
                  src: quiz.image,
                  alt: quiz.caption,
                  caption: quiz.caption,
                })
              }
              className="mt-4 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-cyber-950 p-2 transition hover:border-python-gold/60"
            >
              <img
                src={quiz.image}
                alt={quiz.caption}
                className="w-full h-52 rounded-xl object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {quiz.description}
            </p>
          </div>

          <div className="mt-4 border-t border-white/10 pt-3 text-center font-mono text-xs text-slate-400">
            {quiz.caption}
          </div>
        </div>

        {/* Item 6: Audio Recording Website [Business Thesis] */}
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-cyber-850/80 p-6 backdrop-blur-xl shadow-xl transition hover:border-purple-400/40">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-purple-400">
                ITEM 06 • AUDIO THESIS
              </span>
              <button
                type="button"
                onClick={() =>
                  setActiveLightboxImage({
                    src: audioRecording.image,
                    alt: audioRecording.caption,
                    caption: audioRecording.caption,
                  })
                }
                className="inline-flex items-center gap-1 font-mono text-xs text-purple-400 hover:underline"
              >
                <ZoomIn className="h-3.5 w-3.5" />
                <span>Zoom</span>
              </button>
            </div>

            <h3 className="mt-3 font-serif text-2xl font-bold text-ivory-50">
              {audioRecording.title}
            </h3>

            <div
              onClick={() =>
                setActiveLightboxImage({
                  src: audioRecording.image,
                  alt: audioRecording.caption,
                  caption: audioRecording.caption,
                })
              }
              className="mt-4 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-cyber-950 p-2 transition hover:border-purple-400/60"
            >
              <img
                src={audioRecording.image}
                alt={audioRecording.caption}
                className="w-full h-52 rounded-xl object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              {audioRecording.description}
            </p>

            {/* Audio Recording Player Card */}
            <div className="mt-4 rounded-xl border border-purple-500/30 bg-purple-500/10 p-3.5 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-purple-300">
                <span className="font-semibold text-white">Target File: New recording 12.mp3</span>
                <span>MP3 Audio</span>
              </div>
              <a
                href={audioRecording.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg bg-purple-500/20 px-3 py-2 font-mono text-xs font-bold text-purple-200 hover:bg-purple-500 hover:text-white transition"
              >
                <span className="flex items-center gap-2">
                  <Play className="h-3.5 w-3.5 text-purple-300" />
                  <span>Play New recording 12.mp3</span>
                </span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="mt-4 border-t border-white/10 pt-3 text-center font-mono text-xs text-slate-400">
            {audioRecording.caption}
          </div>
        </div>
      </div>
    </div>
  );
}
