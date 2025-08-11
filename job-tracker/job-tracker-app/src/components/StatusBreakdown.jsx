import React, { useMemo } from "react";
import { PieChart } from "lucide-react";

export default function StatusBreakdown() {
  // Example: last 30 days. Adjust or wire to real data.
  const data = useMemo(
    () => [
      { label: "Applied", value: 24, color: "#1f6feb" },
      { label: "Pending", value: 12, color: "#0ea5e9" },
      { label: "Interviews", value: 8, color: "#f59e0b" },
      { label: "Rejections", value: 5, color: "#ef4444" },
    ],
    []
  );

  const { total, gradient } = useMemo(() => {
    const total = data.reduce((a, b) => a + b.value, 0);
    let acc = 0;
    const slices = data.map((d) => {
      const start = (acc / total) * 360;
      acc += d.value;
      const end = (acc / total) * 360;
      return `${d.color} ${start}deg ${end}deg`;
    });
    return { total, gradient: `conic-gradient(${slices.join(", ")})` };
  }, [data]);

  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] p-5">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div className="grid grid-cols-[2.25rem_1fr] items-center gap-x-2 sm:flex sm:items-center sm:gap-2 text-[#193948]">
          <div className="h-9 w-9 rounded-2xl bg-white/90 border border-white/60 shadow-sm grid place-items-center col-start-1 row-span-2 sm:row-span-1">
            <PieChart className="h-5 w-5 text-[#1f6feb]" />
          </div>
          <h3 className="col-start-2 font-medium text-lg sm:text-xl leading-none sm:leading-tight">
            Status breakdown
          </h3>
          <span className="col-start-2 mt-0.5 text-xs text-[#5b6d76] sm:hidden">
            Last 30 days
          </span>
        </div>

        <span className="hidden sm:inline text-sm text-[#5b6d76]">
          Last 30 days
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
        <div
          className="relative h-44 w-44 mx-auto rounded-full"
          style={{ background: gradient }}
        >
          <div className="absolute inset-4 rounded-full bg-white/90 backdrop-blur-xl border border-white/60" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <p className="text-xs text-[#5b6d76]">Total</p>
              <p className="text-3xl font-bold text-[#193948]">{total}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {data.map((d) => (
            <div key={d.label} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: d.color }}
                />
                <span className="text-[#193948]">{d.label}</span>
              </div>
              <div className="text-[#193948] font-medium">{d.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
