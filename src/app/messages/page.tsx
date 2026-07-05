"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

interface Conversation {
  id: string;
  name: string;
  initials: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online: boolean;
  image: string;
}

interface Message {
  id: string;
  sender: "user" | "other";
  text: string;
  timestamp: string;
  read: boolean;
}

const CONVERSATIONS: Conversation[] = [
  {
    id: "1",
    name: "Zainab Ahmed",
    initials: "ZA",
    lastMessage: "That sounds great! When are you free?",
    timestamp: "2 min",
    unread: 0,
    online: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9SdpT7mouYVFYkzTEZfGlabWHjy4ARKUvWT8gshHn5ExJ9vtIBqqXUx6kuZRO4W4PnLkzpf-Pe3ac6aH8hSLA5R2uiI-Uf3XJOUg7Urm2IAVBKLQ8TzC3DAGbTni1tkCaHv8i9KBbKFXnDudbNbjXt1iHB1951zUEgt2jItULkdKu933MGOfv1vF5Ahszmzi0kDKmLYaCmEIgekqAKe6JsG6DhfZAk4fDEEjcyQjD8vIQ7dcwjFt_TlM7CLdSfqrhqWB20xloZw",
  },
  {
    id: "2",
    name: "Mariam Khan",
    initials: "MK",
    lastMessage: "You: Thanks for sharing that article!",
    timestamp: "1 hr",
    unread: 3,
    online: false,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCehtHF30m1p3lB7-3h74gTdwMRrmrb198gFckrmXmoqrl_eDuDmJTlOFU7xq_sHAdYlWFNRyaoOBvwuXH3QqCUSQQA0cTCDW00tmyKbbNC05jgelGqh_adKVc3rUEvm0qmxWeqX9enAUGaYsHEd2vX_SgurkRH5Dbul9DjlsZ4LyRQUpx0Bl7pNbwrlbj1nguMfiPwiyMwyEji27wGdig7uOPkcslUuZl6SIcQoxxSOuDt_gNUJZfWSJ-fH-f_uduZQ0LzlJyZEA",
  },
  {
    id: "3",
    name: "Fatima Hassan",
    initials: "FH",
    lastMessage: "Nice to meet you too!",
    timestamp: "5 hr",
    unread: 0,
    online: true,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAALmyZU_JLN1bvkBVS3u5B2iPGWzoZpLnoI00_bzNVwLW-HVMRTn0k6kJuRKR7Fg6dXaHBTide3EohS4b5Svtx_lncBvT9uRiTS8zT5Qpt4fo2q_vOFPpIcqxTU3Xei4MAvmMoerYSzYdEu6TeeQhWGXDzDcdKIlIMepjAowRtK7_rSORRsmJdEEgbHwxuPhc2E2shSDZu0VMfdEL8n65OOsMu4buqAi5dkZGzojEdW1KkneYDHaqb6n1SxE1w72fblP2Zn6ID6A",
  },
];

const INITIAL_MESSAGES: Message[] = [
  { id: "1", sender: "other", text: "Hi! How are you doing?", timestamp: "10:30 AM", read: true },
  { id: "2", sender: "user", text: "Hello! I'm doing great, thank you. How about you?", timestamp: "10:35 AM", read: true },
  { id: "3", sender: "other", text: "I'm good! I really liked your profile. What are your interests?", timestamp: "10:40 AM", read: true },
  { id: "4", sender: "user", text: "I love reading, travelling, and cooking. What about you?", timestamp: "10:45 AM", read: true },
  { id: "5", sender: "other", text: "That sounds great! When are you free?", timestamp: "10:50 AM", read: true },
];

export default function MessagesPage() {
  const [selectedId, setSelectedId] = useState("1");
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const conversation = CONVERSATIONS.find((c) => c.id === selectedId)!;

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function sendMessage() {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      { id: String(Date.now()), sender: "user", text, timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), read: false },
    ]);
    setInput("");
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.nativeEvent.isComposing && e.keyCode !== 229) {
      sendMessage();
    }
  }

  return (
    <div className="flex h-screen flex-col bg-surface-container-lowest">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="flex w-80 shrink-0 flex-col border-r border-outline-variant bg-surface-container-lowest">
          <div className="border-b border-outline-variant px-5 py-4">
            <h2 className="font-headline-sm text-headline-sm text-on-surface">Messages</h2>
          </div>

          {/* Search */}
          <div className="border-b border-outline-variant px-4 py-3">
            <div className="flex items-center gap-2 rounded-lg border border-outline-variant bg-surface-container px-3 py-2">
              <Icon name="search" className="shrink-0 text-on-surface-variant text-[18px]" />
              <input
                type="text"
                placeholder="Search conversations..."
                className="min-w-0 flex-1 bg-transparent font-body-sm text-body-sm text-on-surface outline-none placeholder:text-on-surface-variant"
              />
            </div>
          </div>

          {/* Conversation list */}
          <div className="flex-1 overflow-y-auto">
            {CONVERSATIONS.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedId(conv.id)}
                className={`flex w-full items-center gap-3 border-b border-outline-variant px-5 py-4 text-left transition-colors ${
                  selectedId === conv.id
                    ? "bg-primary-container"
                    : "hover:bg-surface-container"
                }`}
              >
                {/* Avatar with online dot */}
                <div className="relative shrink-0">
                  <div className="h-11 w-11 overflow-hidden rounded-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={conv.image} alt={conv.name} className="h-full w-full object-cover" />
                  </div>
                  {conv.online && (
                    <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-surface-container-lowest bg-success-green" />
                  )}
                </div>

                {/* Name + message */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className={`truncate font-body-md text-body-md text-on-surface ${conv.unread > 0 ? "font-bold" : ""}`}>
                      {conv.name}
                    </p>
                    <span className="shrink-0 font-label-sm text-label-sm text-on-surface-variant">{conv.timestamp}</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate font-body-sm text-body-sm text-on-surface-variant">{conv.lastMessage}</p>
                    {conv.unread > 0 && (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-error text-[11px] font-bold text-on-error">
                        {conv.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Chat area */}
        <div className="flex flex-1 flex-col">
          {/* Chat header */}
          <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-lowest px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-10 w-10 overflow-hidden rounded-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={conversation.image} alt={conversation.name} className="h-full w-full object-cover" />
                </div>
                {conversation.online && (
                  <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-surface-container-lowest bg-success-green" />
                )}
              </div>
              <div>
                <p className="font-body-md text-body-md font-semibold text-on-surface">{conversation.name}</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">
                  {conversation.online ? "Active now" : "Away"}
                </p>
              </div>
            </div>
            <button className="rounded-lg p-2 text-on-surface-variant hover:bg-surface-container hover:text-on-surface">
              <Icon name="more_vert" className="text-[20px]" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 space-y-3 overflow-y-auto p-6">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    msg.sender === "user"
                      ? "rounded-tr-sm bg-primary text-on-primary"
                      : "rounded-tl-sm bg-surface-container text-on-surface"
                  }`}
                >
                  <p className="font-body-md text-body-md leading-relaxed">{msg.text}</p>
                  <div
                    className={`mt-1 flex items-center justify-end gap-1 font-label-sm text-label-sm ${
                      msg.sender === "user" ? "text-on-primary/70" : "text-on-surface-variant"
                    }`}
                  >
                    <span>{msg.timestamp}</span>
                    {msg.sender === "user" && (
                      <Icon name="done_all" className="text-[14px]" />
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input bar */}
          <div className="border-t border-outline-variant bg-surface-container-lowest px-4 py-3">
            <div className="flex items-center gap-3">
              <button className="shrink-0 rounded-lg p-2 text-on-surface-variant hover:bg-surface-container hover:text-on-surface">
                <Icon name="attach_file" className="text-[20px]" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
                className="flex-1 rounded-lg border border-outline-variant bg-surface-container px-4 py-2.5 font-body-md text-body-md text-on-surface outline-none placeholder:text-on-surface-variant focus:border-primary"
              />
              <Button variant="primary" onClick={sendMessage} aria-label="Send">
                <Icon name="send" className="text-[18px]" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
