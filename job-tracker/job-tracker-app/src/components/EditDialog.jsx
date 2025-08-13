import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Pencil,
  Briefcase,
  Building2,
  MapPin,
  FileText,
  X as CloseIcon,
  Trash2,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EditDialog({
  open,
  onOpenChange,
  job,
  onSave,
  onDelete,
}) {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    address: "",
    locationType: "",
    status: "",
    notes: "",
  });

  useEffect(() => {
    if (open && job) {
      setFormData({
        title: job.title || "",
        company: job.company || "",
        address: job.address || "",
        locationType: job.locationType || "",
        status: job.status || "",
        notes: job.notes || "",
      });
    }
  }, [open, job]);

  const locationOptions = useMemo(
    () => [
      { value: "remote", label: "Remote" },
      { value: "hybrid", label: "Hybrid" },
      { value: "on-site", label: "On-site" },
    ],
    []
  );

  const statusOptions = useMemo(
    () => [
      { value: "applied", label: "Applied" },
      { value: "pending", label: "Pending" },
      { value: "interviewed", label: "Interviewed" },
      { value: "accepted", label: "Accepted" },
      { value: "rejected", label: "Rejected" },
    ],
    []
  );

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const isValid =
    formData.title.trim() &&
    formData.company.trim() &&
    formData.locationType &&
    formData.status;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    if (onSave) onSave({ ...job, ...formData });
    onOpenChange(false);
  };

  const handleClose = () => {
    onOpenChange(false);
  };

  const handleDelete = () => {
    if (!job) return;
    const ok = window.confirm(
      "Delete this application? This action cannot be undone."
    );
    if (ok && onDelete) onDelete(job);
    if (ok) onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                   bg-gradient-to-br from-white via-white to-[#fefcf0]
                   rounded-3xl p-0 shadow-[0_32px_64px_-24px_rgba(0,0,0,0.35)]
                   border border-[#f0f4f8]
                   w-[min(960px,calc(100vw-4rem))]  /* wide with side gutters */
                   max-h-[calc(100vh-4rem)]         /* top/bottom gutters */
                   overflow-hidden"
        showCloseButton={false}
      >
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <DialogHeader className="px-6 pt-6 pb-4 relative">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FCDC73] via-[#f4d861] to-[#FCDC73] rounded-t-3xl" />
            <div className="flex items-center gap-3">
              <div
                className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#FCDC73] to-[#f4d861]
                              shadow-[0_8px_24px_-12px_rgba(252,220,115,0.6)] grid place-items-center"
              >
                <Pencil className="h-6 w-6 text-[#193948]" />
              </div>
              <div>
                <DialogTitle className="text-left text-xl font-bold text-[#193948] leading-tight">
                  Edit Application
                </DialogTitle>
                <DialogDescription className="text-left text-sm text-[#5b6d76] mt-1">
                  Update details here
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="px-6 sm:px-8 pb-6 sm:pb-8">
            <div className="space-y-4 sm:space-y-5">
              {/* Job Title */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-[#193948]">
                  <Briefcase className="h-4 w-4 text-[#7b8a92]" />
                  Job Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="e.g. Frontend Developer"
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-[#e9eef2] bg-white/60
                             focus:border-[#FCDC73] focus:ring-2 focus:ring-[#FCDC73]/20 focus:bg-white
                             text-[#193948] placeholder:text-[#8aa0aa] outline-none transition-all"
                />
              </div>

              {/* Company */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-[#193948]">
                  <Building2 className="h-4 w-4 text-[#7b8a92]" />
                  Company *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange("company", e.target.value)}
                  placeholder="e.g. Google Inc."
                  required
                  className="w-full px-4 py-3 rounded-2xl border border-[#e9eef2] bg-white/60
                             focus:border-[#FCDC73] focus:ring-2 focus:ring-[#FCDC73]/20 focus:bg-white
                             text-[#193948] placeholder:text-[#8aa0aa] outline-none transition-all"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-[#193948]">
                  <MapPin className="h-4 w-4 text-[#7b8a92]" />
                  Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  placeholder="e.g. 1600 Amphitheatre Pkwy, Mountain View, CA"
                  className="w-full px-4 py-3 rounded-2xl border border-[#e9eef2] bg-white/60
                             focus:border-[#FCDC73] focus:ring-2 focus:ring-[#FCDC73]/20 focus:bg-white
                             text-[#193948] placeholder:text-[#8aa0aa] outline-none transition-all"
                />
              </div>

              {/* Location Type & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#193948]">
                    Location Type *
                  </label>
                  <Select
                    value={formData.locationType}
                    onValueChange={(value) =>
                      handleInputChange("locationType", value)
                    }
                    required
                  >
                    <SelectTrigger
                      className="w-full px-4 py-3 rounded-2xl border border-[#e9eef2] bg-white/60
                                             focus:border-[#FCDC73] focus:ring-2 focus:ring-[#FCDC73]/20 focus:bg-white
                                             text-[#193948] outline-none transition-all"
                    >
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border border-[#e9eef2] bg-white shadow-lg">
                      {locationOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="rounded-lg"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#193948]">
                    Status *
                  </label>
                  <Select
                    value={formData.status}
                    onValueChange={(value) =>
                      handleInputChange("status", value)
                    }
                    required
                  >
                    <SelectTrigger
                      className="w-full px-4 py-3 rounded-2xl border border-[#e9eef2] bg-white/60
                                             focus:border-[#FCDC73] focus:ring-2 focus:ring-[#FCDC73]/20 focus:bg-white
                                             text-[#193948] outline-none transition-all"
                    >
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border border-[#e9eef2] bg-white shadow-lg">
                      {statusOptions.map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="rounded-lg"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Notes */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-[#193948]">
                  <FileText className="h-4 w-4 text-[#7b8a92]" />
                  Notes
                </label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="Add any additional notes..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-2xl border border-[#e9eef2] bg-white/60
                             focus:border-[#FCDC73] focus:ring-2 focus:ring-[#FCDC73]/20 focus:bg-white
                             text-[#193948] placeholder:text-[#8aa0aa] outline-none transition-all
                             resize-none"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-3 sm:mt-8 pt-4 sm:pt-6 border-t border-[#f0f4f8]">
              <button
                type="button"
                onClick={handleDelete}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl
                           border border-red-200 text-red-700 bg-red-50/70 hover:bg-red-50
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-red-300
                           transition-all cursor-pointer"
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </button>

              <div className="ml-auto flex gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 rounded-2xl border border-[#e9eef2] bg-white/80
                             text-[#5b6d76] hover:bg-white hover:border-[#d1d9e0]
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FCDC73]/30
                             transition-all cursor-pointer"
                >
                  Cancel
                </button>

                <motion.button
                  type="submit"
                  disabled={!isValid}
                  whileHover={{ y: -1, scale: 1.02 }}
                  whileTap={{ y: 0, scale: 0.98 }}
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                    mass: 0.7,
                  }}
                  className={`group relative overflow-hidden inline-flex items-center justify-center gap-2 
                             rounded-2xl px-4 sm:px-6 py-3 font-medium
                             ${isValid ? "text-[#193948]" : "text-[#193948]/50"}
                             bg-[linear-gradient(180deg,#FCDC73_0%,#f4d861_100%)]
                             shadow-[0_16px_32px_-16px_rgba(252,220,115,0.6)]
                             hover:brightness-[.98] active:brightness-95
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FCDC73]/60 
                             transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-60`}
                >
                  <span className="pointer-events-none absolute inset-0">
                    <span
                      className="absolute -inset-y-6 -left-1/3 w-1/3 rotate-12 bg-white/40 blur-md opacity-0 transition-all duration-700
                                     group-hover:opacity-60 group-hover:translate-x-[250%] group-active:opacity-40"
                    />
                  </span>
                  <Pencil className="h-4 w-4" />
                  Save changes
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
