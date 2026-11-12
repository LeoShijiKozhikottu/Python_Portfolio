"use client";

import React, { useState } from "react";
import { GraduationCap, Sparkles, Compass, Terminal, Code2, Database, Activity, FileText, Globe, Layers, CheckCircle2 } from "lucide-react";
import { CHAPTERS, STUDENT_INFO } from "@/data/chapters";
import AcademicCover from "@/components/AcademicCover";
import BookNavigation from "@/components/BookNavigation";
import TableOfContents from "@/components/TableOfContents";
import ChapterLayout from "@/components/ChapterLayout";
import CalTrackerProject from "@/components/CalTrackerProject";
import GreenViewDataset from "@/components/GreenViewDataset";
import IoTEatingDisorder from "@/components/IoTEatingDisorder";
import AcademicActivities from "@/components/AcademicActivities";
import PadletLeetCode from "@/components/PadletLeetCode";
import MediumArticle from "@/components/MediumArticle";
import MediaVault from "@/components/MediaVault";
import QuickLinksBar from "@/components/QuickLinksBar";

export default function HomePage() {
  const [isJournalOpen, setIsJournalOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState<number | null>(null);

  const handleOpenJournal = () => {
    setIsJournalOpen(true);
    setCurrentChapter(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectChapter = (chapterId: number | null) => {
    setIsJournalOpen(true);
    setCurrentChapter(chapterId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeChapterMeta =
    currentChapter !== null
      ? CHAPTERS.find((c) => c.id === currentChapter) || CHAPTERS[0]
      : null;

  return (
    <div className="relative min-h-screen pb-16 selection:bg-python-blue/30 selection:text-ivory-50">
      {!isJournalOpen ? (
        <AcademicCover onOpenJournal={handleOpenJournal} />
      ) : (
        <>
          <BookNavigation
            currentChapter={currentChapter}
            onSelectChapter={handleSelectChapter}
            onReturnToCover={() => {
              setIsJournalOpen(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />

          {currentChapter === null ? (
            <TableOfContents onSelectChapter={(id) => handleSelectChapter(id)} />
          ) : (
            activeChapterMeta && (
              <ChapterLayout
                chapter={activeChapterMeta}
                onSelectChapter={handleSelectChapter}
              >
                {/* Chapter 01: About Me & Python Dossier */}
                {currentChapter === 1 && (
                  <div className="space-y-8">
                    {/* Academic Profile Hero */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                      <div className="space-y-5 lg:col-span-8">
                        <div className="inline-flex items-center gap-2 rounded-lg border border-python-blue/40 bg-python-blue/10 px-3.5 py-1 font-mono text-[12px] font-bold uppercase tracking-widest text-python-blue">
                          <GraduationCap className="h-4 w-4" />
                          ACADEMIC PYTHON RESEARCHER DOSSIER
                        </div>

                        <h2 className="font-serif text-[38px] font-bold text-ivory-50 sm:text-[44px]">
                          {STUDENT_INFO.studentName}
                        </h2>

                        <p className="text-[19px] font-medium text-python-gold">
                          Integrated M.Tech student in Computer Science and Engineering at Vellore Institute of Technology (VIT), Vellore.
                        </p>

                        <p className="text-[17px] leading-relaxed text-slate-300">
                          This digital portfolio compendium documents my academic implementations, full-stack software development, multimodal vision engineering, data science pipelines, edge IoT hardware classification, and algorithmic problem solving completed for{" "}
                          <strong className="text-white">
                            {STUDENT_INFO.courseNameTitleCase} ({STUDENT_INFO.courseCode})
                          </strong>{" "}
                          during{" "}
                          <strong className="text-white">
                            {STUDENT_INFO.semester}
                          </strong>{" "}
                          under the guidance of{" "}
                          <strong className="text-python-gold">
                            {STUDENT_INFO.faculty}
                          </strong>
                          .
                        </p>

                        <p className="text-[16px] leading-relaxed text-slate-300">
                          My work centers on developing intelligent software systems that minimize human friction. In CalTracker, I paired Google Gemini Vision&apos;s multimodal intelligence with a lightweight, serverless edge architecture to automate dietary tracking through meal photography. Additionally, this compendium chronicles urban canopy analysis with pandas, motion disorder detection with wearable ESP32 microcontrollers, and dynamic programming solutions on LeetCode.
                        </p>
                      </div>

                      {/* Academic Dossier Card */}
                      <div className="rounded-3xl border border-white/10 bg-cyber-900/90 p-7 lg:col-span-4 shadow-xl">
                        <div className="font-mono text-[12px] uppercase tracking-wider text-python-gold font-bold">
                          ACADEMIC DOSSIER
                        </div>
                        <dl className="mt-5 space-y-3.5 text-[15px]">
                          <div className="flex justify-between border-b border-white/10 pb-2">
                            <dt className="text-slate-400">Name</dt>
                            <dd className="font-semibold text-ivory-50">{STUDENT_INFO.studentName}</dd>
                          </div>
                          <div className="flex justify-between border-b border-white/10 pb-2">
                            <dt className="text-slate-400">Reg. No.</dt>
                            <dd className="font-mono font-bold text-python-gold">{STUDENT_INFO.registrationNumber}</dd>
                          </div>
                          <div className="flex justify-between border-b border-white/10 pb-2">
                            <dt className="text-slate-400">Programme</dt>
                            <dd className="text-right font-medium text-ivory-50">Integrated M.Tech CSE</dd>
                          </div>
                          <div className="flex justify-between border-b border-white/10 pb-2">
                            <dt className="text-slate-400">Course Code</dt>
                            <dd className="font-mono font-bold text-python-blue">{STUDENT_INFO.courseCode}</dd>
                          </div>
                          <div className="flex justify-between border-b border-white/10 pb-2">
                            <dt className="text-slate-400">Course Name</dt>
                            <dd className="text-right font-medium text-ivory-50">Adv. Python Programming</dd>
                          </div>
                          <div className="flex justify-between border-b border-white/10 pb-2">
                            <dt className="text-slate-400">Faculty</dt>
                            <dd className="font-semibold text-python-gold">{STUDENT_INFO.faculty}</dd>
                          </div>
                          <div className="flex justify-between border-b border-white/10 pb-2">
                            <dt className="text-slate-400">Institution</dt>
                            <dd className="font-semibold text-ivory-50">VIT Vellore</dd>
                          </div>
                          <div className="flex justify-between">
                            <dt className="text-slate-400">Term</dt>
                            <dd className="font-semibold text-ivory-50">{STUDENT_INFO.semester}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    {/* Core Python Competencies */}
                    <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-8 shadow-xl">
                      <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.2em] text-python-blue font-bold">
                        <Compass className="h-4 w-4" />
                        CORE RESEARCH &amp; PYTHON COMPUTING PILLARS
                      </div>
                      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                          {
                            title: "Multimodal AI & Gemini Vision",
                            desc: "Integrating zero-shot vision foundation models for real-time meal classification, ingredient parsing, and automated nutrient telemetry.",
                          },
                          {
                            title: "Full-Stack Web Engineering",
                            desc: "Designing responsive, reactive browser user interfaces connected to edge serverless functions and structured REST API endpoints.",
                          },
                          {
                            title: "Data Science & Pandas Analytics",
                            desc: "Wrangling complex tabular data, ranking multi-attribute datasets (GVI), and computing urban distribution statistics in pandas.",
                          },
                          {
                            title: "Edge IoT & Sensor Telemetry",
                            desc: "Interfacing MPU-6050 accelerometers and ESP32 microcontrollers to detect kinetic eating patterns and dispatch healthcare telemetry to the cloud.",
                          },
                          {
                            title: "Algorithmic Problem Solving",
                            desc: "Mastering dynamic programming, bit manipulation, linked list rings, and matrix search across LeetCode Easy, Medium, and Hard tiers.",
                          },
                          {
                            title: "Technical Writing & Editorial",
                            desc: "Publishing pedagogical reflections and architectural theses documenting 4-year development trajectories on Medium.",
                          },
                        ].map((interest, idx) => (
                          <div
                            key={interest.title}
                            className="rounded-2xl border border-white/5 bg-cyber-850/80 p-5 transition hover:border-python-blue/40"
                          >
                            <div className="font-mono text-[11px] text-python-gold">
                              PILLAR 0{idx + 1}
                            </div>
                            <div className="mt-1 font-serif text-[20px] font-bold text-ivory-50">
                              {interest.title}
                            </div>
                            <p className="mt-2 text-xs leading-relaxed text-slate-300">
                              {interest.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Deliverables Bar */}
                    <div className="mt-8">
                      <QuickLinksBar />
                    </div>
                  </div>
                )}

                {/* Chapter 02: Featured Project — CalTracker */}
                {currentChapter === 2 && <CalTrackerProject />}

                {/* Chapter 03: Green View Index Pandas Exercise */}
                {currentChapter === 3 && <GreenViewDataset />}

                {/* Chapter 04: IoT Impairment Assessment */}
                {currentChapter === 4 && <IoTEatingDisorder />}

                {/* Chapter 05: Academic Activities & Lab Sessions */}
                {currentChapter === 5 && <AcademicActivities />}

                {/* Chapter 06: LeetCode Matrix & Padlet Submission */}
                {currentChapter === 6 && <PadletLeetCode />}

                {/* Chapter 07: Medium Publication */}
                {currentChapter === 7 && <MediumArticle />}

                {/* Chapter 08: Media Vault & Demonstrations */}
                {currentChapter === 8 && <MediaVault />}
              </ChapterLayout>
            )
          )}
        </>
      )}

      {/* Academic Colophon Footer */}
      <footer className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-cyber-900/90 px-8 py-5 text-[14px] text-slate-400 shadow-2xl backdrop-blur-xl">
          <div>
            <strong className="text-ivory-50">{STUDENT_INFO.websiteTitle}</strong> • {STUDENT_INFO.courseNameTitleCase} ({STUDENT_INFO.courseCode}) • {STUDENT_INFO.studentName} ({STUDENT_INFO.registrationNumber}) • Faculty: <span className="text-python-gold font-semibold">{STUDENT_INFO.faculty}</span> • {STUDENT_INFO.institutionShort}
          </div>
          <div className="flex items-center gap-4 font-mono text-xs">
            <span className="text-python-gold">CalTracker with Gemini Vision</span>
            <span className="text-python-blue">8 Modules Academic Journal</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
