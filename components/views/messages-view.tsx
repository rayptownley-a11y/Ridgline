"use client";

import { useState } from "react";

const conversations = [
  { name: "Jake Morrison", preview: "Sounds great! Let me review the...", time: "2m" },
  { name: "Sofia Chen", preview: "I'd love to discuss the winter...", time: "15m" },
  { name: "Marcus Webb", preview: "Thanks for reaching out! The...", time: "1h" },
  { name: "Leila Oduya", preview: "Looking forward to the call...", time: "3h" },
];

const messages = [
  { sender: "them", text: "Hi! I saw your campaign for Summer Trail Series and I'm really interested.", time: "10:32 AM" },
  { sender: "me", text: "Hey Jake! Thanks for reaching out. Your profile looks great—love your enduro content.", time: "10:35 AM" },
  { sender: "them", text: "Thanks! I've been riding Apex gear informally for a while now. Would love to make it official.", time: "10:36 AM" },
  { sender: "me", text: "That's exactly what we're looking for—authentic partnerships. Can we set up a call this week to discuss terms?", time: "10:38 AM" },
  { sender: "them", text: "Sounds great! Let me review the campaign brief and I'll send over my availability.", time: "10:40 AM" },
];

export function MessagesView() {
  const [activeConvo, setActiveConvo] = useState(0);
  const [newMessage, setNewMessage] = useState("");

  return (
    <div className="flex flex-1 overflow-hidden">
      <div className="w-[220px] shrink-0 border-r border-border/50">
        <div className="px-4 py-3.5 border-b border-border/50 text-sm font-semibold text-foreground">
          Messages
        </div>
        {conversations.map((convo, index) => (
          <div
            key={convo.name}
            onClick={() => setActiveConvo(index)}
            className={`flex items-center gap-2.5 px-3.5 py-2.5 border-b border-border/50 cursor-pointer transition-colors ${
              activeConvo === index ? "bg-muted" : "hover:bg-muted/50"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[10px] font-semibold text-primary shrink-0">
              {convo.name.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium text-foreground">{convo.name}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                {convo.preview}
              </div>
            </div>
            <span className="text-[10px] text-muted-foreground shrink-0">{convo.time}</span>
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-col">
        <div className="px-4 py-3 border-b border-border/50 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[10px] font-semibold text-primary">
            {conversations[activeConvo].name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <div className="text-[13px] font-medium text-foreground">{conversations[activeConvo].name}</div>
            <div className="text-[11px] text-muted-foreground">Active now</div>
          </div>
        </div>

        <div className="flex-1 px-4 py-4 flex flex-col gap-2.5 overflow-y-auto">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-end gap-2 max-w-[75%] ${msg.sender === "me" ? "self-end flex-row-reverse" : ""}`}>
              {msg.sender === "them" && (
                <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center text-[8px] font-semibold text-primary shrink-0">
                  {conversations[activeConvo].name.split(" ").map((n) => n[0]).join("")}
                </div>
              )}
              <div>
                <div
                  className={`px-3 py-2 text-xs leading-relaxed ${
                    msg.sender === "me"
                      ? "bg-primary text-primary-foreground rounded-[14px] rounded-br-[2px]"
                      : "bg-muted text-foreground rounded-[2px] rounded-tr-[14px] rounded-br-[14px] rounded-bl-[14px]"
                  }`}
                >
                  {msg.text}
                </div>
                <div className={`text-[10px] text-muted-foreground mt-1 ${msg.sender === "me" ? "text-right" : ""}`}>
                  {msg.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-4 py-3 border-t border-border/50 flex gap-2 items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-muted border border-border/50 rounded-full px-3.5 py-2 text-xs text-foreground outline-none placeholder:text-muted-foreground"
          />
          <button className="w-[30px] h-[30px] bg-primary rounded-full flex items-center justify-center cursor-pointer shrink-0 hover:bg-primary/90 transition-colors">
            <svg className="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
