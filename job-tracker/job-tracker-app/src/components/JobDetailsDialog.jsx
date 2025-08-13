import React from "react";
import { motion } from "framer-motion";
import {
  Pencil,
  MapPin,
  StickyNote,
  Laptop,
  Building2,
  Home,
  ListPlus,
  XCircle,
  MessageCircle,
  CheckCircle,
  Hourglass,
  X as CloseIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

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

const STATUS_SOFT = {
  applied: "bg-blue-50 text-blue-700 ring-1 ring-blue-200",
  rejected: "bg-red-50 text-red-700 ring-1 ring-red-200",
  interviewed: "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-200",
  accepted: "bg-green-50 text-green-700 ring-1 ring-green-200",
  pending: "bg-gray-50 text-gray-700 ring-1 ring-gray-200",
  default: "bg-gray-50 text-gray-700 ring-1 ring-gray-200",
};

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

function StatusField({ status, className = "" }) {
  const key = String(status || "").toLowerCase();
  const meta = STATUS_META[key] || STATUS_META.default;
  const Icon = meta.icon;
  const soft = STATUS_SOFT[key] || STATUS_SOFT.default;

  return (
    <section
      className={`rounded-2xl border border-[#eef3f6] px-3.5 py-3 sm:px-4 sm:py-3.5 ${className}`}
    >
      <p className="text-xs text-[#5b6d76] mb-1">Status</p>
      <div
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 ${soft}`}
      >
        <Icon className="h-4 w-4" />
        <span className="text-sm font-medium">{meta.label}</span>
      </div>
    </section>
  );
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
        } text-sm sm:text-xs text-[#193948]`}
      >
        {meta.label}
      </span>
    </span>
  );
}

export default function JobDetailsDialog({
  open,
  onOpenChange,
  job,
  onEditClick,
}) {
  if (!job) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   bg-white rounded-3xl p-0 shadow-[0_24px_48px_-20px_rgba(0,0,0,0.25)]
                   w-[calc(100vw-2rem)] sm:w-auto sm:max-w-2xl overflow-hidden"
        showCloseButton={false}
      >
        <DialogClose asChild>
          <button
            type="button"
            aria-label="Close dialog"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 h-10 w-10 grid place-items-center
                       rounded-full bg-white border border-[#eef3f6] text-[#193948]
                       shadow-sm hover:bg-[#fafafa] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FCDC73]/50 cursor-pointer"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </DialogClose>

        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 420, damping: 34 }}
          className="text-[#193948]"
        >
          <DialogHeader className="px-5 sm:px-6 pr-14 sm:pr-16 pt-5 sm:pt-6 pb-3 sm:pb-4 border-b border-[#e9eef2]">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-white border border-[#eef3f6] shadow-sm grid place-items-center shrink-0">
                <span className="text-[.8rem] font-semibold">
                  {initialsOf(job.company)}
                </span>
              </div>
              <div className="min-w-0">
                <DialogTitle className="text-left text-lg sm:text-xl leading-snug truncate">
                  {job.title}
                </DialogTitle>
                <DialogDescription className="text-left text-sm text-[#5b6d76] truncate">
                  {job.company}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {/* Address */}
            <section className="rounded-2xl border border-[#eef3f6] px-3.5 py-3 sm:px-4 sm:py-3.5 md:col-span-2 md:col-start-1 md:row-start-1">
              <p className="text-xs text-[#5b6d76] mb-1">Address</p>
              <p className="text-sm break-words">
                <MapPin className="inline-block h-4 w-4 mr-1 align-[-2px] text-[#193948]/70" />
                {job.address}
              </p>
            </section>

            {/* Location */}
            <section className="rounded-2xl border border-[#eef3f6] px-3.5 py-3 sm:px-4 sm:py-3.5 md:col-span-1 md:col-start-3 md:row-start-2">
              <p className="text-xs text-[#5b6d76] mb-1">Location</p>
              <div>
                <LocationPill type={job.locationType} showLabel />
              </div>
            </section>

            {/* Status */}
            <StatusField
              status={job.status}
              className="md:col-span-1 md:col-start-3 md:row-start-1"
            />

            {/* Notes */}
            <section className="rounded-2xl border border-[#eef3f6] px-3.5 py-3 sm:px-4 sm:py-3.5 md:col-span-2 md:col-start-1 md:row-start-2 md:row-span-2">
              <p className="text-xs text-[#5b6d76] mb-1">Notes</p>
              <p className="text-sm leading-relaxed">
                <StickyNote className="inline-block h-4 w-4 mr-1 align-[-2px] text-[#193948]/70" />
                {job.notes}
              </p>
            </section>

            {/* Created */}
            <section className="rounded-2xl border border-[#eef3f6] px-3.5 py-3 sm:px-4 sm:py-3.5 md:col-span-1 md:col-start-3 md:row-start-3">
              <p className="text-xs text-[#5b6d76] mb-1">Created</p>
              <p className="text-sm">{job.createdAt}</p>
            </section>
          </div>

          <DialogFooter className="px-5 sm:px-6 py-4 border-t border-[#e9eef2]">
            <div className="flex w-full items-center">
              <motion.button
                type="button"
                whileHover={{ y: -1, scale: 1.01 }}
                whileTap={{ y: 0, scale: 0.99 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 35,
                  mass: 0.7,
                }}
                className="group relative overflow-hidden inline-flex items-center gap-2 rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base text-[#193948]
                           bg-[linear-gradient(180deg,#FCDC73_0%,#f4d861_100%)]
                           shadow-[0_12px_28px_-16px_rgba(252,220,115,0.85)]
                           hover:brightness-[.98] active:brightness-95
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FCDC73]/60 transition-transform cursor-pointer
                           w-full md:w-auto md:ml-auto justify-center"
                onClick={onEditClick}
              >
                <span className="pointer-events-none absolute inset-0">
                  <span
                    className="absolute -inset-y-6 -left-1/3 w-1/3 rotate-12 bg-white/40 blur-md opacity-0 transition-all duration-700
                                   group-hover:opacity-60 group-hover:translate-x-[250%] group-active:opacity-40"
                  />
                </span>
                <Pencil className="h-4 w-4" />
                Edit
              </motion.button>
            </div>
          </DialogFooter>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
