const campaigns = [
  {
    title: "Summer Trail Series 2025",
    brand: "Apex Gear Co.",
    description: "Looking for elite mountain bikers to showcase our new trail gear line through authentic content creation and race appearances.",
    budget: "$3,000–$5,000/mo",
    status: "open",
  },
  {
    title: "Backcountry Ambassador 2025",
    brand: "Ridgecrest Apparel",
    description: "Seeking snowboard athletes for long-term ambassador partnership including gear, content creation, and event representation.",
    budget: "$2,500–$4,000/mo",
    status: "open",
  },
  {
    title: "Winter Campaign 2026",
    brand: "Apex Gear Co.",
    description: "Pre-season ski campaign focusing on backcountry content and resort partnerships.",
    budget: "$4,500–$7,000/mo",
    status: "draft",
  },
  {
    title: "Product Launch Ambassadors",
    brand: "Summit Tech",
    description: "Help launch our next-gen fitness wearable with authentic athlete testimonials and social content.",
    budget: "$4,000–$6,000/mo",
    status: "open",
  },
];

export function CampaignsView() {
  return (
    <>
      <div className="px-5 py-3.5 border-b border-border/50 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-[15px] font-semibold text-foreground">Campaigns</h1>
          <p className="text-xs text-muted-foreground mt-0.5">Manage and track your campaign applications</p>
        </div>
        <button className="bg-primary text-primary-foreground rounded-lg px-3.5 py-1.5 text-xs font-medium flex items-center gap-1.5 hover:bg-primary/90 transition-colors">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Create Campaign
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide mb-2.5">
          Active campaigns
        </div>

        <div className="flex flex-col gap-2.5">
          {campaigns.map((campaign) => (
            <div key={campaign.title} className="bg-card border border-border/50 rounded-xl p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <div className="text-[13px] font-medium text-foreground">{campaign.title}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{campaign.brand}</div>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                    campaign.status === "open"
                      ? "bg-success-light text-success"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {campaign.status === "open" ? "Open" : "Draft"}
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">{campaign.description}</p>
              <div className="text-xs font-medium text-success">{campaign.budget}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
