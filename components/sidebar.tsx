"use client";

import type { ViewType } from "@/app/page";

interface SidebarProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

const navItems: { id: ViewType; label: string; icon: string }[] = [
  { id: "dashboard", label: "Dashboard", icon: "home" },
  { id: "athletes", label: "Athletes", icon: "users" },
  { id: "brands", label: "Brands", icon: "building" },
  { id: "campaigns", label: "Campaigns", icon: "briefcase" },
  { id: "messages", label: "Messages", icon: "message" },
  { id: "profile", label: "My Profile", icon: "user" },
];

function NavIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    home: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    users: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    building: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    briefcase: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    message: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    user: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  };
  return <>{icons[name]}</>;
}

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <div className="w-[200px] shrink-0 border-r border-border/50 bg-muted flex flex-col">
      <div className="flex items-center gap-2 p-4 border-b border-border/50">
        <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-base">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
          </svg>
        </div>
        <span className="font-semibold text-sm text-foreground">Ridgeline</span>
      </div>

      <nav className="flex-1 p-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id)}
            className={`flex items-center gap-2 w-full px-2.5 py-2 rounded-lg text-[13px] cursor-pointer transition-colors select-none ${
              activeView === item.id
                ? "bg-card text-primary font-medium"
                : "text-muted-foreground hover:bg-card"
            }`}
          >
            <NavIcon name={item.icon} />
            {item.label}
          </button>
        ))}
      </nav>

      <div className="p-3 border-t border-border/50">
        <div className="flex items-center gap-2">
          <div className="w-[30px] h-[30px] rounded-full bg-accent flex items-center justify-center text-[11px] font-semibold text-primary shrink-0">
            AP
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">Apex Gear Co.</p>
            <span className="text-[11px] text-muted-foreground">Brand</span>
          </div>
        </div>
      </div>
    </div>
  );
}
