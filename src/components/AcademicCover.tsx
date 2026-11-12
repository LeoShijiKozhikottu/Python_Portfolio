"use client";

import React from "react";
import { BookOpen, Sparkles, GraduationCap, Calendar, UserCheck, Hash, Building2, ChevronRight, Terminal, Cpu, Flame, CheckCircle2 } from "lucide-react";
import { STUDENT_INFO, CHAPTERS } from "@/data/chapters";
import Profile3D from "./Profile3D";
import QuickLinksBar from "./QuickLinksBar";

interface AcademicCoverProps {
  onOpenJournal: () => void;
}

export default function AcademicCover({ onOpenJournal }: AcademicCoverProps) {
  return (
    <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Main 3D Hardcover Journal Binding Container */}
      <div className="journal-page relative overflow-hidden rounded-[2.5rem] p-6 sm:p-10 lg:p-14">
        {/* Subtle Ambient Decorative Glowing Orbs */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-python-blue/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-88 w-88 rounded-full bg-python-gold/15 blur-3xl" />
        <div className="pointer-events-none absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-fitness-emerald/10 blur-3xl" />

        {/* Book Spine Left Edge Highlight */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-2.5 bg-gradient-to-r from-python-blue/80 via-python-gold/30 to-transparent" />

        {/* Top Editorial Masthead */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-python-blue opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-python-blue shadow-[0_0_12px_#38bdf8]" />
            </span>
            <span className="font-mono text-[13px] font-semibold uppercase tracking-[0.25em] text-python-blue">
              ACADEMIC RESEARCH JOURNAL • ADVANCED PYTHON EDITION
            </span>
          </div>
          <div className="font-mono text-[13px] tracking-wider text-slate-300">
            VIT VELLORE • FACULTY: <strong className="text-python-gold">{STUDENT_INFO.faculty}</strong>
          </div>
        </div>

        {/* Cover Main Grid: Left Academic Hierarchy + Right 3D Portrait */}
        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Section — Visual Hierarchy */}
          <div className="space-y-6 lg:col-span-7">
            {/* 1. Website Title */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-python-blue/30 bg-python-blue/10 px-4 py-1.5 font-mono text-[12px] font-bold uppercase tracking-[0.22em] text-python-blue">
                <Terminal className="h-3.5 w-3.5 text-python-gold" />
                <span>CS13007 COURSE PORTFOLIO &amp; PROJECT WRITEUP</span>
              </div>
              <h1 className="mt-3 font-serif text-[46px] font-extrabold leading-[1.05] tracking-tight text-ivory-50 sm:text-[60px] lg:text-[70px]">
                {STUDENT_INFO.websiteTitle}
              </h1>
            </div>

            {/* 2 & 3. Course Name and Course Code */}
            <div className="relative overflow-hidden rounded-3xl border border-python-blue/30 bg-gradient-to-br from-cyber-850 via-cyber-900 to-cyber-950 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:p-7">
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-python-blue/10 blur-2xl" />

              <div className="font-mono text-[12px] font-bold uppercase tracking-[0.22em] text-python-gold">
                COURSE SPECIFICATION &amp; TECHNICAL ARCHIVE
              </div>
              <h2 className="mt-2 font-serif text-[28px] font-bold uppercase leading-[1.18] tracking-wide text-ivory-50 sm:text-[36px] lg:text-[38px]">
                {STUDENT_INFO.courseName}
              </h2>
              <div className="mt-4 flex flex-wrap items-baseline gap-4 border-t border-white/10 pt-4">
                <span className="font-mono text-[13px] uppercase tracking-[0.2em] text-slate-400">
                  COURSE CODE:
                </span>
                <span className="font-serif text-[40px] font-extrabold leading-none tracking-wider text-python-blue drop-shadow-[0_2px_15px_rgba(56,189,248,0.4)] sm:text-[46px]">
                  {STUDENT_INFO.courseCode}
                </span>
                <span className="rounded-full bg-python-gold/15 px-3 py-1 font-mono text-xs font-semibold text-python-gold border border-python-gold/30">
                  CS13007 Core
                </span>
              </div>
            </div>

            {/* Academic Dossier Cards */}
            <div className="rounded-2xl border border-white/10 bg-cyber-900/80 p-6">
              <div className="border-b border-white/10 pb-4">
                <div className="font-mono text-[12px] uppercase tracking-[0.2em] text-python-gold">
                  AUTHORED &amp; DEVELOPED BY
                </div>
                <div className="mt-1 font-serif text-[32px] font-bold leading-tight text-ivory-50 sm:text-[36px]">
                  {STUDENT_INFO.studentName}
                </div>
                <div className="mt-1 text-[15px] font-medium text-fitness-emerald flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{STUDENT_INFO.programme}</span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Building2 className="mt-1 h-5 w-5 shrink-0 text-python-blue" />
                  <div>
                    <div className="font-mono text-[12px] uppercase tracking-wider text-slate-400">
                      Institution
                    </div>
                    <div className="text-[15px] font-semibold text-ivory-50">
                      {STUDENT_INFO.institutionShort}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Hash className="mt-1 h-5 w-5 shrink-0 text-python-gold" />
                  <div>
                    <div className="font-mono text-[12px] uppercase tracking-wider text-slate-400">
                      Registration Number
                    </div>
                    <div className="font-mono text-[17px] font-bold text-python-gold">
                      {STUDENT_INFO.registrationNumber}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="mt-1 h-5 w-5 shrink-0 text-fitness-emerald" />
                  <div>
                    <div className="font-mono text-[12px] uppercase tracking-wider text-slate-400">
                      Academic Term
                    </div>
                    <div className="text-[15px] font-semibold text-ivory-50">
                      {STUDENT_INFO.semester}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Cpu className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
                  <div>
                    <div className="font-mono text-[12px] uppercase tracking-wider text-slate-400">
                      Flagship Project
                    </div>
                    <div className="text-[14px] font-semibold text-cyan-300">
                      CalTracker with Gemini Vision
                    </div>
                  </div>
                </div>

                {/* Faculty Mentor Card */}
                <div className="flex items-start gap-3 col-span-1 sm:col-span-2 rounded-xl border border-python-gold/35 bg-gradient-to-r from-python-gold/15 to-transparent p-4 shadow-sm">
                  <GraduationCap className="mt-0.5 h-6 w-6 shrink-0 text-python-gold" />
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-python-gold font-bold">
                      COURSE INSTRUCTOR &amp; FACULTY MENTOR
                    </div>
                    <div className="text-[18px] font-bold text-ivory-50">
                      {STUDENT_INFO.faculty}
                    </div>
                    <div className="text-[13px] text-slate-300">
                      Advanced Python Programming (CS13007) • VIT Vellore
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Open Journal Action Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenJournal}
                className="group relative inline-flex w-full items-center justify-between rounded-2xl border border-python-blue/60 bg-gradient-to-r from-python-blue via-sky-500 to-cyan-500 px-8 py-5 text-left text-cyber-950 shadow-[0_15px_40px_-10px_rgba(56,189,248,0.5)] transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_50px_-10px_rgba(56,189,248,0.7)] sm:w-auto sm:min-w-[340px]"
              >
                <div className="flex items-center gap-3">
                  <BookOpen className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
                  <div>
                    <div className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-cyber-950/80">
                      BEGIN EXPLORATION
                    </div>
                    <div className="font-serif text-[22px] font-black leading-tight text-cyber-950">
                      Open Portfolio &amp; Compendium
                    </div>
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyber-950/15 text-cyber-950 transition-transform duration-300 group-hover:translate-x-1.5">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Section — 3D Tilt Academic Portrait */}
          <div className="lg:col-span-5">
            <Profile3D />
          </div>
        </div>

        {/* Quick Links Showcase Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <QuickLinksBar />
        </div>
      </div>
    </div>
  );
}
