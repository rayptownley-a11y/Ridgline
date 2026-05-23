export function DashboardView() {
  return (
    <>
      <div className="px-5 py-3.5 border-b border-border/50 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-[15px] font-semibold text-foreground">Dashboard</h1>
          <p className="text-xs text-muted-foreground mt-0.5">Welcome back, Apex Gear Co.</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <div className="grid grid-cols-4 gap-2.5 mb-5">
          <div className="bg-accent border border-primary/30 rounded-lg px-3.5 py-3">
            <div className="text-[11px] text-muted-foreground mb-1">Active Campaigns</div>
            <div className="text-xl font-semibold text-primary">4</div>
          </div>
          <div className="bg-muted rounded-lg px-3.5 py-3">
            <div className="text-[11px] text-muted-foreground mb-1">Total Applications</div>
            <div className="text-xl font-semibold text-foreground">127</div>
          </div>
          <div className="bg-muted rounded-lg px-3.5 py-3">
            <div className="text-[11px] text-muted-foreground mb-1">Partnerships</div>
            <div className="text-xl font-semibold text-foreground">12</div>
          </div>
          <div className="bg-muted rounded-lg px-3.5 py-3">
            <div className="text-[11px] text-muted-foreground mb-1">Messages</div>
            <div className="text-xl font-semibold text-foreground">8</div>
          </div>
        </div>

        <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide mb-2.5">
          Recent Activity
        </div>

        <div className="flex flex-col gap-2">
          {[
            { action: "New application", detail: "Jake Morrison applied to Summer Trail Series 2025", time: "2 hours ago" },
            { action: "Message received", detail: "Sofia Chen sent you a message", time: "4 hours ago" },
            { action: "Campaign updated", detail: "Winter Campaign 2026 was saved as draft", time: "Yesterday" },
            { action: "Partnership confirmed", detail: "Marcus Webb accepted your offer", time: "2 days ago" },
          ].map((activity, index) => (
            <div key={index} className="bg-card border border-border/50 rounded-lg px-4 py-3 flex items-center justify-between">
              <div>
                <div className="text-[13px] font-medium text-foreground">{activity.action}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{activity.detail}</div>
              </div>
              <span className="text-[10px] text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
