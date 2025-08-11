import React, { useState } from "react";
import { Search, Plus, SlidersHorizontal } from "lucide-react";

function QuickActions() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const statuses = [
    { key: "all", label: "All" },
    { key: "applied", label: "Applied" },
    { key: "pending", label: "Pending" },
    { key: "interview", label: "Interview" },
    { key: "rejected", label: "Rejected" },
  ];

  return (
    <div className="w-full bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] p-4 flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#7b8a92]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search applications, companies, roles"
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/80 border border-white/60 outline-none focus:ring-2 focus:ring-[#1f6feb]/30 text-[#193948] placeholder:text-[#8aa0aa]"
          />
        </div>
        <button
          type="button"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 bg-[#1f6feb] text-white hover:bg-[#1b60d6] active:bg-[#174fb3] transition-colors shadow-[0_10px_24px_-12px_rgba(31,111,235,0.65)]"
          onClick={() => {}}
          aria-label="Add application"
        >
          <Plus className="h-5 w-5" />
          Add application
        </button>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
        <div className="items-center gap-2 hidden sm:flex">
          <SlidersHorizontal className="h-4 w-4 text-[#7b8a92]" />
          <span className="text-sm text-[#5b6d76]">Filter by status:</span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto sm:overflow-visible whitespace-nowrap sm:flex-wrap sm:whitespace-normal -mx-1 px-1 py-1">
          {statuses.map((s) => (
            <button
              key={s.key}
              onClick={() => setStatus(s.key)}
              className={`shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full text-sm transition-colors ${
                status === s.key
                  ? "bg-[#0ea5e9] text-white"
                  : "bg-white/80 text-[#193948] border border-white/60 hover:bg-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuickActions;
