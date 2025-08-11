import React from "react";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/src/data.json";
import ApplicationCard from "../components/ApplicationCard";
import PendingCard from "../components/PendingCard";
import RejectionsCard from "../components/RejectionsCard";
import RecentItems from "../components/RecentItems";
import QuickActions from "../components/QuickActions";
import UpcomingTasks from "../components/UpcomingTasks";
import InterviewsCard from "@/components/InterviewsCard";
import GoalsCard from "../components/GoalsCard";
import StatusBreakdown from "../components/StatusBreakdown";

function Dashboard() {
  return (
    <div className="h-full min-h-[calc(100vh-120px)] bg-[#f7f6fb] overflow-hidden px-2 sm:px-20">
      <div className="flex flex-col items-start px-5 pt-5 text-[#193948]">
        <p className="text-xl">Hello, John Doe!</p>
        <p className="font-black text-3xl">
          Welcome back{" "}
          <EmojiProvider data={emojiData}>
            <Emoji
              name="waving hand light skin tone"
              className="inline-block w-7 ml-1 mb-2"
            />
          </EmojiProvider>
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 p-5">
        <ApplicationCard />
        <PendingCard />
        <InterviewsCard />
        <RejectionsCard />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 p-5">
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between px-5 pt-5 sm:pb-5">
            <h2 className="font-medium text-xl text-[#193948]">
              Recent applications
            </h2>
            <p className="text-md font-medium text-[#193948] hover:underline cursor-pointer">
              See all
            </p>
          </div>
          <div className="px-5 pb-2">
            <RecentItems />
          </div>
        </div>
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between p-5">
            <h2 className="font-medium text-xl text-[#193948]">
              Upcoming tasks
            </h2>
            <p className="text-md font-medium text-[#193948] hover:underline cursor-pointer">
              View calendar
            </p>
          </div>
          <div className="px-5 pb-5">
            <UpcomingTasks />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-5 pt-0 pb-5 sm:p-5">
        <GoalsCard />
        <StatusBreakdown />
      </div>
    </div>
  );
}

export default Dashboard;
