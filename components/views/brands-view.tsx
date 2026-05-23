"use client";

import { useState } from "react";

const brands = [
  {
    name: "Apex Gear Co.",
    verified: true,
    industry: "Outdoor Gear",
    location: "Portland, OR",
    description: "Performance trail and mountain gear designed by riders. We partner with elite athletes for authentic content and long-term ambassador roles.",
    campaigns: [
      { title: "Summer Trail Series 2025", budget: "$3,000–$5,000/mo", sport: "Mountain biking", deadline: "Jun 15", icon: "⛰" },
      { title: "Winter Campaign 2026", budget: "$4,500–$7,000/mo", sport: "Skiing", deadline: "Sep 1", icon: "⛷" },
    ],
    sports: ["MTB", "Skiing", "Snowboard"],
    logo: "🏔️",
    logoBg: "bg-accent",
  },
  {
    name: "Ridgecrest Apparel",
    verified: true,
    industry: "Apparel",
    location: "Boulder, CO",
    description: "Technical apparel built for extreme conditions. Looking for athletes who push limits in the backcountry and aren't afraid to show it.",
    campaigns: [
      { title: "Backcountry Ambassador 2025", budget: "$2,500–$4,000/mo", sport: "Snowboard", deadline: "Jul 30", icon: "🏂" },
      { title: "Climb Series — Gear Drop", budget: "$1,800–$3,200/mo", sport: "Rock climbing", deadline: "Aug 10", icon: "🧗" },
    ],
    sports: ["Snowboard", "Climbing"],
    logo: "🌲",
    logoBg: "bg-success-light",
  },
  {
    name: "Volt Nutrition",
    verified: false,
    industry: "Sports Nutrition",
    location: "Austin, TX",
    description: "Clean-formula energy and recovery supplements trusted by professional athletes worldwide.",
    campaigns: [
      { title: "Summer Energy Campaign", budget: "$2,000–$3,500/mo", sport: "All sports", deadline: "Jul 1", icon: "⚡" },
    ],
    sports: ["All Sports"],
    logo: "⚡",
    logoBg: "bg-info",
  },
  {
    name: "Summit Tech",
    verified: true,
    industry: "Tech / Wearables",
    location: "San Francisco, CA",
    description: "Next-gen fitness wearables and tracking technology for serious athletes.",
    campaigns: [
      { title: "Product Launch Ambassadors", budget: "$4,000–$6,000/mo", sport: "Multiple", deadline: "Aug 15", icon: "⌚" },
    ],
    sports: ["MTB", "Trail Running"],
    logo: "📱",
    logoBg: "bg-muted",
  },
];

const filterChips = ["Actively hiring", "Verified only", "Budget $2K+", "Long-term deals", "Gear included"];

export function BrandsView() {
  const [activeFilters, setActiveFilters] = useState<string[]>(["Actively hiring"]);

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  return (
    <>
      <div className="px-5 py-3.5 border-b border-border/50 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-[15px] font-semibold text-foreground">Browse brands</h1>
          <p className="text-xs text-muted-foreground mt-0.5">340+ companies actively seeking athletes</p>
        </div>
        <div className="flex gap-2">
          <select className="text-xs px-2.5 py-1.5 rounded-lg border border-border/50 bg-muted text-muted-foreground">
            <option>All industries</option>
            <option>Outdoor / Gear</option>
            <option>Apparel</option>
            <option>Nutrition</option>
            <option>Tech / Wearables</option>
          </select>
          <select className="text-xs px-2.5 py-1.5 rounded-lg border border-border/50 bg-muted text-muted-foreground">
            <option>All sports</option>
            <option>Mountain biking</option>
            <option>Skiing</option>
            <option>Snowboarding</option>
            <option>Rock climbing</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 items-center px-5 py-3 border-b border-border/50 shrink-0 bg-muted/50">
        <span className="text-[11px] text-muted-foreground mr-1">Filter:</span>
        {filterChips.map((chip) => (
          <button
            key={chip}
            onClick={() => toggleFilter(chip)}
            className={`text-[11px] px-3 py-1 rounded-full border cursor-pointer whitespace-nowrap transition-colors ${
              activeFilters.includes(chip)
                ? "bg-accent border-primary/50 text-accent-foreground font-medium"
                : "bg-card border-border/50 text-muted-foreground"
            }`}
          >
            {chip}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <div className="flex items-center justify-between mb-3.5">
          <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide">
            {brands.length} brands hiring now
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-card border border-border/50 rounded-xl p-4 cursor-pointer transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-10 h-10 rounded-[10px] flex items-center justify-center text-lg shrink-0 ${brand.logoBg}`}>
                  {brand.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-foreground flex items-center gap-1.5">
                    {brand.name}
                    {brand.verified && (
                      <span className="text-[10px] bg-info text-info-foreground px-1.5 py-0.5 rounded-[10px] font-medium">
                        ✓ Verified
                      </span>
                    )}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    {brand.industry} · {brand.location}
                  </div>
                </div>
                <span className="text-[10px] bg-success-light text-success px-2 py-0.5 rounded-full font-medium">
                  Hiring
                </span>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{brand.description}</p>

              <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-tight mb-1.5">
                Open campaigns
              </div>
              <div className="flex flex-col gap-1.5 mb-3">
                {brand.campaigns.map((campaign) => (
                  <div key={campaign.title} className="bg-muted/50 rounded-lg px-3 py-2 border border-border/50">
                    <div className="text-xs font-medium text-foreground">{campaign.title}</div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-[11px] text-success font-medium">{campaign.budget}</span>
                      <span className="text-[10px] text-muted-foreground">
                        {campaign.icon} {campaign.sport} · Deadline {campaign.deadline}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {brand.sports.map((sport) => (
                    <span key={sport} className="text-[10px] bg-muted text-muted-foreground rounded px-1.5 py-0.5">
                      {sport}
                    </span>
                  ))}
                </div>
                <button className="text-[11px] px-3 py-1.5 bg-primary text-primary-foreground rounded-lg font-medium cursor-pointer hover:bg-primary/90 transition-colors">
                  View & Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
