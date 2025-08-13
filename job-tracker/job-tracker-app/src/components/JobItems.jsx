import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Pencil,
  MapPin,
  StickyNote,
  Building2,
  Home,
  Laptop,
  ListPlus,
  XCircle,
  MessageCircle,
  CheckCircle,
  Hourglass,
} from "lucide-react";
import { X as CloseIcon } from "lucide-react";
import { Badge } from "../components/ui/badge";
import JobDetailsDialog from "./JobDetailsDialog";
import EditDialog from "./EditDialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

const jobs = [
  {
    id: 1,
    company: "Google Inc.",
    title: "Frontend Engineer",
    address: "1600 Amphitheatre Pkwy, Mountain View, CA",
    locationType: "Hybrid",
    status: "Accepted",
    notes: "Waiting for recruiter's feedback from phone screen.",
    createdAt: "Aug 2, 2025",
  },
  {
    id: 2,
    company: "Spotify",
    title: "Full-Stack Developer",
    address: "4 World Trade Center, New York, NY",
    locationType: "On-site",
    status: "Applied",
    notes: "Submitted via referral; include portfolio link next follow-up.",
    createdAt: "Jul 29, 2025",
  },
  {
    id: 3,
    company: "Microsoft",
    title: "UI Engineer",
    address: "Redmond, WA",
    locationType: "Remote",
    status: "Interviewed",
    notes: "Panel next week. Prepare system design notes.",
    createdAt: "Aug 3, 2025",
  },
];

const LOCATION_META = {
  remote: { label: "Remote", icon: Laptop },
  hybrid: { label: "Hybrid", icon: Home },
  "on-site": { label: "On-site", icon: Building2 },
  onsite: { label: "On-site", icon: Building2 },
  office: { label: "On-site", icon: Building2 },
  default: { label: "On-site", icon: Building2 },
};

function initialsOf(name) {
  return name
    .split(" ")
    .map((s) => s[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function LocationPill({ type, showLabel = false }) {
  const key = String(type || "").toLowerCase();
  const meta = LOCATION_META[key] || LOCATION_META.default;
  const Icon = meta.icon;
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/90 border border-white/60 px-2 py-1">
      <Icon className="h-5 w-5 sm:h-4 sm:w-4 md:h-3.5 md:w-3.5 text-[#193948]" />
      <span
        className={`${
          showLabel ? "inline" : "hidden md:inline"
        } text-xs text-[#193948]`}
      >
        {meta.label}
      </span>
    </span>
  );
}

const STATUS_META = {
  applied: {
    label: "Applied",
    icon: ListPlus,
    classes: "bg-blue-100 text-blue-800",
  },
  rejected: {
    label: "Rejected",
    icon: XCircle,
    classes: "bg-red-100 text-red-800",
  },
  interviewed: {
    label: "Interviewed",
    icon: MessageCircle,
    classes: "bg-yellow-100 text-yellow-800",
  },
  accepted: {
    label: "Accepted",
    icon: CheckCircle,
    classes: "bg-green-100 text-green-800",
  },
  pending: {
    label: "Pending",
    icon: Hourglass,
    classes: "bg-gray-100 text-gray-800",
  },
  default: {
    label: "Status",
    icon: Hourglass,
    classes: "bg-gray-100 text-gray-800",
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 6 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 420, damping: 34 },
  },
};

function StatusBadge({ status, size = "sm" }) {
  const key = String(status || "").toLowerCase();
  const meta = STATUS_META[key] || STATUS_META.default;
  const Icon = meta.icon;

  const sz =
    size === "md"
      ? { badge: "px-3 py-1 text-xs sm:text-[13px]", icon: "h-4 w-4" }
      : { badge: "px-2.5 py-1 text-[11px] sm:text-xs", icon: "h-3.5 w-3.5" };

  return (
    <Badge
      className={`shrink-0 inline-flex items-center gap-1.5 rounded-full ${sz.badge} ${meta.classes}`}
    >
      <Icon className={sz.icon} />
      {meta.label}
    </Badge>
  );
}

const STATUS_SOFT = {
  applied: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  rejected: "bg-red-50 text-red-700 ring-1 ring-red-200",
  interviewed: "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-200",
  accepted: "bg-green-50 text-green-700 ring-1 ring-green-200",
  pending: "bg-gray-50 text-gray-700 ring-1 ring-gray-200",
  default: "bg-gray-50 text-gray-700 ring-1 ring-gray-200",
};

export default function JobItems() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [editOpen, setEditOpen] = useState(false);

  const openDialog = (job) => {
    setSelected(job);
    setOpen(true);
  };

  const onKeyOpen = (e, job) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openDialog(job);
    }
  };

  const handleEdit = () => {
    setOpen(false);
    setTimeout(() => setEditOpen(true), 160);
  };

  const handleSaveEdit = (updatedJob) => {
    console.log("Saved job:", updatedJob);
    setSelected(updatedJob);
    setEditOpen(false);
  };

  const handleDeleteJob = (jobToDelete) => {
    console.log("Delete job:", jobToDelete);
    setEditOpen(false);
    setOpen(false);
    setSelected(null);
  };

  return (
    <div className="w-full p-5">
      <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)] p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-[#193948]">
            All applications
          </h2>
          <span className="text-sm text-[#5b6d76]">{jobs.length} items</span>
        </div>

        <div className="divide-y divide-[#e9eef2]">
          {jobs.map((job, i) => (
            <motion.div
              key={job.id}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: i * 0.03 }}
            >
              <div className="py-3 sm:py-1">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openDialog(job)}
                  onKeyDown={(e) => onKeyOpen(e, job)}
                  className="rounded-2xl px-2 sm:px-2.5 -mx-2 sm:-mx-3 py-3 cursor-pointer
             transition-colors hover:bg-black/5
             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FCDC73]/50"
                >
                  <div className="flex flex-col gap-1 sm:gap-1">
                    <div className="flex items-start sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* Company avatar (initials) */}
                        <div className="h-10 w-10 rounded-2xl bg-white/90 border border-white/60 shadow-sm grid place-items-center shrink-0">
                          <span className="text-[.8rem] font-semibold text-[#193948]">
                            {initialsOf(job.company)}
                          </span>
                        </div>

                        <div className="min-w-0">
                          <p className="text-[15px] md:text-base font-semibold text-[#193948] leading-tight truncate">
                            {job.title}
                          </p>
                          <p className="text-[13px] md:text-sm text-[#5b6d76] leading-snug truncate">
                            {job.company}
                          </p>
                        </div>
                      </div>

                      {/* Status on the right on mobile; moves to middle on sm+ via separate row */}
                      <div className="sm:hidden">
                        <StatusBadge status={job.status} />
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2">
                      <p className="min-w-0 text-[13px] sm:text-sm text-[#5b6d76] truncate">
                        <MapPin className="inline-block h-3.5 w-3.5 mr-1.5 align-[-2px] text-[#193948]/60" />
                        {job.address}
                      </p>
                      <p className="shrink-0 text-[11px] sm:text-xs text-[#7b8a92]">
                        {job.createdAt}
                      </p>
                    </div>

                    <div className="flex items-start sm:items-center justify-between sm:justify-start gap-3 sm:gap-2">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <LocationPill type={job.locationType} />
                        <div className="hidden sm:block">
                          <StatusBadge status={job.status} />
                        </div>
                        <p className="hidden sm:block flex-1 min-w-0 text-sm text-[#5b6d76] leading-snug truncate">
                          <StickyNote className="inline-block h-4 w-4 mr-1 align-[-3px] text-[#193948]/70" />
                          {job.notes}
                        </p>
                      </div>

                      {/* Notes (mobile) */}
                      <p className="sm:hidden max-w-[60vw] text-[13px] text-[#5b6d76] leading-snug truncate mt-1.5 mr-3">
                        <StickyNote className="inline-block h-3.5 w-3.5 mr-1 align-[-2px] text-[#193948]/70" />
                        {job.notes}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <JobDetailsDialog
        open={open}
        onOpenChange={setOpen}
        job={selected}
        onEditClick={handleEdit}
      />

      <EditDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        job={selected}
        onSave={handleSaveEdit}
        onDelete={handleDeleteJob}
      />
    </div>
  );
}
