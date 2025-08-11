import React from "react";
import { Badge } from "../components/ui/badge";
import { ListPlus, XCircle, MessageCircle, CheckCircle } from "lucide-react";

const items = [
  {
    title: "Junior Web Developer",
    company: "Google Inc.",
    location: "San Francisco, CA",
    date: "Added on Aug 2, 2025",
    status: {
      label: "Applied",
      icon: ListPlus,
      classes: "bg-blue-100 text-blue-800",
    },
  },
  {
    title: "Full-Stack Developer",
    company: "Spotify Inc.",
    location: "New York, NY",
    date: "Added on Jul 29, 2025",
    status: {
      label: "Rejected",
      icon: XCircle,
      classes: "bg-red-100 text-red-800",
    },
  },
  {
    title: "Frontend Developer",
    company: "Microsoft",
    location: "Washington, DC",
    date: "Added on Aug 2, 2025",
    status: {
      label: "Interviewed",
      icon: MessageCircle,
      classes: "bg-yellow-100 text-yellow-800",
    },
  },
  {
    title: "Junior Software Engineer",
    company: "Apple Inc.",
    location: "Cupertino, CA",
    date: "Added on Aug 2, 2025",
    status: {
      label: "Accepted",
      icon: CheckCircle,
      classes: "bg-green-100 text-green-800",
    },
  },
];

function RecentItems() {
  return (
    <div className="divide-y divide-[#e9eef2]">
      {items.map((item, idx) => {
        const Icon = item.status.icon;
        return (
          <div key={idx} className="py-2">
            <div className="flex flex-col gap-0.5 sm:gap-1">
              <div className="flex items-start sm:items-center justify-between gap-2">
                <p className="min-w-0 text-[15px] sm:text-base font-semibold text-[#193948] leading-tight truncate">
                  {item.title}
                </p>
                <Badge
                  className={`shrink-0 inline-flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[11px] sm:text-xs ${item.status.classes}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {item.status.label}
                </Badge>
              </div>

              <div className="flex items-center justify-between gap-2">
                <p className="min-w-0 text-[13px] sm:text-sm text-[#5b6d76] leading-snug truncate">
                  {item.company}{" "}
                  <span className="text-gray-500">· {item.location}</span>
                </p>
                <p className="shrink-0 text-[11px] sm:text-xs text-[#7b8a92]">
                  {item.date}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RecentItems;
