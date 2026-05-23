"use client";

import { useState } from "react";

const sports = ["Mountain biking", "Skiing", "Snowboarding", "Rock climbing", "Trail running", "Surfing"];

export function ProfileView() {
  const [selectedSports, setSelectedSports] = useState(["Mountain biking", "Skiing", "Snowboarding"]);

  const toggleSport = (sport: string) => {
    setSelectedSports((prev) =>
      prev.includes(sport) ? prev.filter((s) => s !== sport) : [...prev, sport]
    );
  };

  return (
    <>
      <div className="px-5 py-3.5 border-b border-border/50 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-[15px] font-semibold text-foreground">My Profile</h1>
          <p className="text-xs text-muted-foreground mt-0.5">Manage your brand profile and preferences</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <div className="bg-card border border-border/50 rounded-xl p-5 mb-3.5">
          <h2 className="text-sm font-semibold text-foreground mb-3.5 pb-2.5 border-b border-border/50">
            Brand Information
          </h2>
          <div className="grid grid-cols-2 gap-2.5 mb-2.5">
            <div>
              <label className="text-[11px] text-muted-foreground block mb-1">Brand Name</label>
              <input
                type="text"
                defaultValue="Apex Gear Co."
                className="w-full bg-muted border border-border/50 rounded-lg px-2.5 py-2 text-xs text-foreground outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] text-muted-foreground block mb-1">Industry</label>
              <select className="w-full bg-muted border border-border/50 rounded-lg px-2.5 py-2 text-xs text-foreground outline-none">
                <option>Outdoor Gear</option>
                <option>Apparel</option>
                <option>Nutrition</option>
                <option>Tech / Wearables</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2.5 mb-2.5">
            <div>
              <label className="text-[11px] text-muted-foreground block mb-1">Location</label>
              <input
                type="text"
                defaultValue="Portland, OR"
                className="w-full bg-muted border border-border/50 rounded-lg px-2.5 py-2 text-xs text-foreground outline-none"
              />
            </div>
            <div>
              <label className="text-[11px] text-muted-foreground block mb-1">Website</label>
              <input
                type="text"
                defaultValue="https://apexgear.co"
                className="w-full bg-muted border border-border/50 rounded-lg px-2.5 py-2 text-xs text-foreground outline-none"
              />
            </div>
          </div>
          <div>
            <label className="text-[11px] text-muted-foreground block mb-1">Description</label>
            <textarea
              rows={3}
              defaultValue="Performance trail and mountain gear designed by riders. We partner with elite athletes for authentic content and long-term ambassador roles."
              className="w-full bg-muted border border-border/50 rounded-lg px-2.5 py-2 text-xs text-foreground outline-none resize-none"
            />
          </div>
        </div>

        <div className="bg-card border border-border/50 rounded-xl p-5 mb-3.5">
          <h2 className="text-sm font-semibold text-foreground mb-3.5 pb-2.5 border-b border-border/50">
            Sports of Interest
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {sports.map((sport) => (
              <button
                key={sport}
                onClick={() => toggleSport(sport)}
                className={`text-[11px] px-2.5 py-1 rounded-full border cursor-pointer transition-colors ${
                  selectedSports.includes(sport)
                    ? "bg-accent border-primary/50 text-accent-foreground font-medium"
                    : "bg-card border-border/50 text-muted-foreground"
                }`}
              >
                {sport}
              </button>
            ))}
          </div>
        </div>

        <button className="bg-primary text-primary-foreground rounded-lg px-4 py-2.5 text-[13px] font-medium flex items-center gap-1.5 hover:bg-primary/90 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Save Changes
        </button>
      </div>
    </>
  );
}
