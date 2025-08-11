import React from "react";
import QuickActions from "@/components/QuickActions";

function MyJobs() {
  return (
    <div className="h-full min-h-[calc(100vh-120px)] bg-[#f7f6fb] overflow-hidden px-2 sm:px-20">
      <div className="px-5 sm:px-20 py-5 text-[#193948]">
        <h1 className="text-2xl font-semibold mb-3">My Jobs</h1>
        <QuickActions />
      </div>
    </div>
  );
}

export default MyJobs;
