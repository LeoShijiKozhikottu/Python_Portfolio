"use client";

import React, { useState, useRef } from "react";
import { Sparkles, ShieldCheck, GraduationCap, Award, Terminal, Code2 } from "lucide-react";
import { STUDENT_INFO } from "@/data/chapters";

export default function Profile3D() {
  const frameRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 12;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ rotateX, rotateY, glareX, glareY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      className="relative flex items-center justify-center py-4"
      style={{ perspective: "1400px" }}
    >
      {/* Ambient Python Blue & Gold Glow Behind Frame */}
      <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-python-blue/25 via-python-gold/20 to-fitness-emerald/20 blur-2xl" />

      <div
        ref={frameRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)",
          transformStyle: "preserve-3d",
        }}
        className="group relative w-full max-w-[390px] cursor-pointer rounded-[2rem] border border-python-blue/40 bg-gradient-to-b from-cyber-850/95 via-cyber-900 to-cyber-950 p-3.5 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.85)]"
      >
        {/* Precision High-Tech Corner Accents */}
        <div className="pointer-events-none absolute -left-1.5 -top-1.5 h-7 w-7 rounded-tl-xl border-l-2 border-t-2 border-python-blue" />
        <div className="pointer-events-none absolute -right-1.5 -top-1.5 h-7 w-7 rounded-tr-xl border-r-2 border-t-2 border-python-gold" />
        <div className="pointer-events-none absolute -bottom-1.5 -left-1.5 h-7 w-7 rounded-bl-xl border-b-2 border-l-2 border-python-gold" />
        <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-7 w-7 rounded-br-xl border-b-2 border-r-2 border-python-blue" />

        {/* Inner Layered Bevel Frame */}
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-cyber-950 shadow-inner">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <img
              src="/images/profile.jpg"
              alt={`${STUDENT_INFO.studentName} (${STUDENT_INFO.registrationNumber}) — Integrated M.Tech Student at VIT Vellore`}
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Subtle Glare Lighting Overlay */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(56, 189, 248, 0.22) 0%, rgba(251, 191, 36, 0.12) 35%, rgba(2, 6, 23, 0.5) 100%)`,
              }}
            />

            {/* Floating Top Badge */}
            <div className="absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full border border-python-blue/50 bg-cyber-950/85 px-3 py-1 font-mono text-[11px] font-bold text-python-blue backdrop-blur-md shadow-lg">
              <Terminal className="h-3 w-3 text-python-gold" />
              <span>CS13007 SCHOLAR</span>
            </div>
          </div>

          {/* Floating Academic Nameplate */}
          <div
            style={{ transform: "translateZ(35px)" }}
            className="border-t border-python-blue/30 bg-cyber-950/95 px-5 py-4 backdrop-blur-md"
          >
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-python-gold">
                  PYTHON RESEARCHER • {STUDENT_INFO.registrationNumber}
                </p>
                <h2 className="font-serif text-[26px] font-bold leading-tight text-ivory-50">
                  {STUDENT_INFO.studentName}
                </h2>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-python-gold/40 bg-python-gold/10 text-python-gold shadow-sm">
                <GraduationCap className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-2 flex items-center justify-between text-[13px] text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-fitness-emerald" />
                <span>Integrated M.Tech CSE</span>
              </span>
              <span className="font-mono text-[12px] text-python-blue">VIT Vellore</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
