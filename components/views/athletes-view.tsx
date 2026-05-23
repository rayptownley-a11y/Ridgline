const athletes = [
  {
    name: "Jake Morrison",
    location: "Bend, OR",
    level: "Elite",
    sports: ["Mountain biking", "Enduro"],
    followers: "248K",
    openToDeals: true,
  },
  {
    name: "Sofia Chen",
    location: "Park City, UT",
    level: "Pro",
    sports: ["Skiing", "Freeride"],
    followers: "192K",
    openToDeals: true,
  },
  {
    name: "Marcus Webb",
    location: "Mammoth, CA",
    level: "Elite",
    sports: ["Snowboarding", "Halfpipe"],
    followers: "415K",
    openToDeals: true,
  },
  {
    name: "Leila Oduya",
    location: "Boulder, CO",
    level: "Pro",
    sports: ["Rock climbing"],
    followers: "87K",
    openToDeals: true,
  },
  {
    name: "Ryo Tanaka",
    location: "Whistler, BC",
    level: "Elite",
    sports: ["Mountain biking", "DH"],
    followers: "331K",
    openToDeals: true,
  },
  {
    name: "Ingrid Lund",
    location: "Are, Sweden",
    level: "Semi-Pro",
    sports: ["Skiing", "Big mountain"],
    followers: "54K",
    openToDeals: true,
  },
];

function Badge({ level }: { level: string }) {
  const styles: Record<string, string> = {
    Elite: "bg-warning text-warning-foreground",
    Pro: "bg-accent text-accent-foreground",
    "Semi-Pro": "bg-info text-info-foreground",
  };
  return (
    <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${styles[level] || styles.Pro}`}>
      {level}
    </span>
  );
}

export function AthletesView() {
  return (
    <>
      <div className="px-5 py-3.5 border-b border-border/50 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-[15px] font-semibold text-foreground">Browse athletes</h1>
          <p className="text-xs text-muted-foreground mt-0.5">2,400+ verified athletes across 10 sports</p>
        </div>
        <div className="flex gap-2">
          <select className="text-xs px-2.5 py-1.5 rounded-lg border border-border/50 bg-muted text-muted-foreground">
            <option>All sports</option>
            <option>Mountain biking</option>
            <option>Skiing</option>
          </select>
          <select className="text-xs px-2.5 py-1.5 rounded-lg border border-border/50 bg-muted text-muted-foreground">
            <option>All levels</option>
            <option>Elite</option>
            <option>Pro</option>
          </select>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        <div className="grid grid-cols-4 gap-2.5 mb-5">
          <div className="bg-accent border border-primary/30 rounded-lg px-3.5 py-3">
            <div className="text-[11px] text-muted-foreground mb-1">Open to deals</div>
            <div className="text-xl font-semibold text-primary">1,840</div>
          </div>
          <div className="bg-muted rounded-lg px-3.5 py-3">
            <div className="text-[11px] text-muted-foreground mb-1">Elite athletes</div>
            <div className="text-xl font-semibold text-foreground">312</div>
          </div>
          <div className="bg-muted rounded-lg px-3.5 py-3">
            <div className="text-[11px] text-muted-foreground mb-1">Avg. followers</div>
            <div className="text-xl font-semibold text-foreground">84K</div>
          </div>
          <div className="bg-muted rounded-lg px-3.5 py-3">
            <div className="text-[11px] text-muted-foreground mb-1">Sports covered</div>
            <div className="text-xl font-semibold text-foreground">10</div>
          </div>
        </div>

        <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wide mb-2.5">
          Featured athletes
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {athletes.map((athlete) => (
            <div
              key={athlete.name}
              className="bg-card border border-border/50 rounded-xl p-3.5 cursor-pointer transition-colors hover:border-primary/50"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <div className="text-[13px] font-medium text-foreground">{athlete.name}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">
                    <span className="mr-1">📍</span>
                    {athlete.location}
                  </div>
                </div>
                <Badge level={athlete.level} />
              </div>
              <div className="flex flex-wrap gap-1 my-2">
                {athlete.sports.map((sport) => (
                  <span key={sport} className="text-[10px] bg-muted text-muted-foreground rounded px-1.5 py-0.5">
                    {sport}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground">
                  <span className="mr-1">👥</span>
                  {athlete.followers}
                </span>
                {athlete.openToDeals && (
                  <span className="text-[10px] text-success">✓ Open to deals</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
