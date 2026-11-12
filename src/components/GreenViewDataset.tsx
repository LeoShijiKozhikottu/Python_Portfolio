"use client";

import React, { useState } from "react";
import { Database, Search, ArrowUpDown, Copy, Check, BarChart3, Globe, Sparkles } from "lucide-react";
import { GREEN_VIEW_INDEX_DATA } from "@/data/projects";

export default function GreenViewDataset() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState<"rank" | "city" | "country" | "gvi">("rank");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [copiedCode, setCopiedCode] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(GREEN_VIEW_INDEX_DATA.codeSnippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const filteredCities = GREEN_VIEW_INDEX_DATA.cities
    .filter(
      (c) =>
        c.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.country.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let valA = a[sortField];
      let valB = b[sortField];
      if (typeof valA === "string") {
        return sortOrder === "asc"
          ? (valA as string).localeCompare(valB as string)
          : (valB as string).localeCompare(valA as string);
      }
      return sortOrder === "asc" ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
    });

  const maxGvi = Math.max(...GREEN_VIEW_INDEX_DATA.cities.map((c) => c.gvi));
  const avgGvi = (
    GREEN_VIEW_INDEX_DATA.cities.reduce((acc, c) => acc + c.gvi, 0) /
    GREEN_VIEW_INDEX_DATA.cities.length
  ).toFixed(1);

  const handleSort = (field: "rank" | "city" | "country" | "gvi") => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  return (
    <div className="space-y-8">
      {/* Overview Card */}
      <div className="rounded-3xl border border-python-blue/20 bg-cyber-900/80 p-8 backdrop-blur-xl shadow-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-python-blue/40 bg-python-blue/10 px-3.5 py-1 font-mono text-xs font-bold text-python-blue">
          <Database className="h-3.5 w-3.5 text-python-gold" />
          <span>PART A • ITEM 01: PANDAS EXERCISE</span>
        </div>
        <h2 className="mt-3 font-serif text-[32px] font-bold text-ivory-50 sm:text-[38px]">
          {GREEN_VIEW_INDEX_DATA.title}
        </h2>
        <p className="mt-2 max-w-3xl text-[16px] text-slate-300">
          {GREEN_VIEW_INDEX_DATA.description}
        </p>

        {/* Analytics Highlights */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 border-t border-white/10 pt-6">
          <div className="rounded-2xl border border-white/10 bg-cyber-850 p-4">
            <div className="font-mono text-xs text-slate-400">TOTAL CITIES</div>
            <div className="mt-1 font-serif text-3xl font-bold text-white">30</div>
            <div className="font-mono text-[11px] text-python-blue">Global Sample</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-cyber-850 p-4">
            <div className="font-mono text-xs text-slate-400">HIGHEST GVI</div>
            <div className="mt-1 font-serif text-3xl font-bold text-fitness-emerald">36.1%</div>
            <div className="font-mono text-[11px] text-slate-300">Tampa, USA (#1)</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-cyber-850 p-4">
            <div className="font-mono text-xs text-slate-400">AVERAGE GVI</div>
            <div className="mt-1 font-serif text-3xl font-bold text-python-gold">{avgGvi}%</div>
            <div className="font-mono text-[11px] text-slate-300">Mean Index Score</div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-cyber-850 p-4">
            <div className="font-mono text-xs text-slate-400">DATA STRUCTURE</div>
            <div className="mt-1 font-serif text-2xl font-bold text-sky-400">pd.DataFrame</div>
            <div className="font-mono text-[11px] text-slate-300">Tabular Ingestion</div>
          </div>
        </div>
      </div>

      {/* Code Snippet Box */}
      <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-6 backdrop-blur-xl sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <div className="flex space-x-1.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-slate-400 ml-2">
              green_view_index.py — pandas DataFrame construction
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopyCode}
            className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-cyber-850 px-3 py-1.5 font-mono text-xs text-slate-300 hover:border-python-blue hover:text-white transition"
          >
            {copiedCode ? <Check className="h-3.5 w-3.5 text-fitness-emerald" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copiedCode ? "Copied" : "Copy Code"}</span>
          </button>
        </div>

        <pre className="mt-4 overflow-x-auto rounded-2xl bg-cyber-950 p-5 font-mono text-xs leading-relaxed text-slate-200">
          <code>{GREEN_VIEW_INDEX_DATA.codeSnippet}</code>
        </pre>
      </div>

      {/* Interactive Filterable Table */}
      <div className="rounded-3xl border border-white/10 bg-cyber-900/80 p-6 backdrop-blur-xl sm:p-8 shadow-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-5">
          <div>
            <h3 className="font-serif text-2xl font-bold text-ivory-50">
              Interactive 30-City GVI Ranking Table
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              Sort by rank, city, country, or GVI score
            </p>
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Filter by city or country..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-cyber-850 py-2 pl-9 pr-4 text-xs font-mono text-white placeholder-slate-500 focus:border-python-blue focus:outline-none focus:ring-1 focus:ring-python-blue"
            />
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
          <div className="max-h-[550px] overflow-y-auto">
            <table className="w-full text-left text-sm">
              <thead className="sticky top-0 bg-cyber-850 font-mono text-xs uppercase text-slate-400 border-b border-white/10">
                <tr>
                  <th
                    onClick={() => handleSort("rank")}
                    className="cursor-pointer px-5 py-3.5 hover:text-python-blue"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Rank</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort("city")}
                    className="cursor-pointer px-5 py-3.5 hover:text-python-blue"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>City</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort("country")}
                    className="cursor-pointer px-5 py-3.5 hover:text-python-blue"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>Country</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th
                    onClick={() => handleSort("gvi")}
                    className="cursor-pointer px-5 py-3.5 hover:text-python-blue"
                  >
                    <div className="flex items-center gap-1.5">
                      <span>GVI Score (%)</span>
                      <ArrowUpDown className="h-3 w-3" />
                    </div>
                  </th>
                  <th className="px-5 py-3.5 hidden sm:table-cell">
                    Canopy Visualizer
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 bg-cyber-900">
                {filteredCities.map((item) => (
                  <tr key={item.rank} className="hover:bg-white/[0.03] transition-colors">
                    <td className="px-5 py-3 font-mono font-bold text-python-gold">
                      #{item.rank}
                    </td>
                    <td className="px-5 py-3 font-semibold text-ivory-50">
                      {item.city}
                    </td>
                    <td className="px-5 py-3">
                      <span className="rounded-md border border-white/10 bg-cyber-850 px-2 py-0.5 font-mono text-xs text-slate-300">
                        {item.country}
                      </span>
                    </td>
                    <td className="px-5 py-3 font-mono font-bold text-fitness-emerald">
                      {item.gvi.toFixed(1)}%
                    </td>
                    <td className="px-5 py-3 hidden sm:table-cell">
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-32 rounded-full bg-cyber-800 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-python-blue to-fitness-emerald rounded-full"
                            style={{ width: `${(item.gvi / maxGvi) * 100}%` }}
                          />
                        </div>
                        <span className="font-mono text-[10px] text-slate-400">
                          {Math.round((item.gvi / maxGvi) * 100)}% of max
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
