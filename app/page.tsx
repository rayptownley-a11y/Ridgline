"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { AthletesView } from "@/components/views/athletes-view";
import { BrandsView } from "@/components/views/brands-view";
import { CampaignsView } from "@/components/views/campaigns-view";
import { MessagesView } from "@/components/views/messages-view";
import { ProfileView } from "@/components/views/profile-view";
import { DashboardView } from "@/components/views/dashboard-view";

export type ViewType = "dashboard" | "athletes" | "brands" | "campaigns" | "messages" | "profile";

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>("athletes");

  return (
    <main className="flex items-center justify-center min-h-screen p-5">
      <div className="flex h-[720px] w-full max-w-[1000px] border border-border/50 rounded-xl overflow-hidden bg-card shadow-lg">
        <Sidebar activeView={activeView} onViewChange={setActiveView} />
        <div className="flex-1 overflow-hidden flex flex-col">
          {activeView === "dashboard" && <DashboardView />}
          {activeView === "athletes" && <AthletesView />}
          {activeView === "brands" && <BrandsView />}
          {activeView === "campaigns" && <CampaignsView />}
          {activeView === "messages" && <MessagesView />}
          {activeView === "profile" && <ProfileView />}
        </div>
      </div>
    </main>
  );
}
