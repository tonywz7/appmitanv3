'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { Icon } from '@/components/ui/Icon';
import { Badge } from '@/components/ui/Badge';
import { Navbar } from '@/components/layout/Navbar';

interface Conversation {
  id: string;
  name: string;
  initials: string;
  lastMessage: string;
  timestamp: string;
  unread: number;
  online?: boolean;
}

interface Message {
  id: string;
  sender: 'user' | 'other';
  text: string;
  timestamp: string;
  status: 'sent' | 'delivered' | 'read';
}

const conversations: Conversation[] = [
  {
    id: '1',
    name: 'Zainab Ahmed',
    initials: 'ZA',
    lastMessage: 'That sounds great! When are you free?',
    timestamp: '2 min',
    unread: 0,
    online: true,
  },
  {
    id: '2',
    name: 'Mariam Khan',
    initials: 'MK',
    lastMessage: 'You: Thanks for sharing that article!',
    timestamp: '1 hour',
    unread: 3,
    online: false,
  },
  {
    id: '3',
    name: 'Fatima Hassan',
    initials: 'FH',
    lastMessage: 'Nice to meet you too!',
    timestamp: '5 hours',
    unread: 0,
    online: true,
  },
];

const messages: Message[] = [
  {
    id: '1',
    sender: 'other',
    text: 'Hi! How are you doing?',
    timestamp: '10:30 AM',
    status: 'read',
  },
  {
    id: '2',
    sender: 'user',
    text: 'Hello! I&apos;m doing great, thank you for asking. How about you?',
    timestamp: '10:35 AM',
    status: 'read',
  },
  {
    id: '3',
    sender: 'other',
    text: 'I&apos;m good! I really liked your profile. What are your interests?',
    timestamp: '10:40 AM',
    status: 'read',
  },
  {
    id: '4',
    sender: 'user',
    text: 'I love reading, traveling, and cooking. What about you?',
    timestamp: '10:45 AM',
    status: 'read',
  },
  {
    id: '5',
    sender: 'other',
    text: 'That sounds great! When are you free?',
    timestamp: '10:50 AM',
    status: 'read',
  },
  {
    id: '6',
    sender: 'user',
    text: 'I am typing...',
    timestamp: '10:55 AM',
    status: 'sent',
  },
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string>('1');
  const [messageText, setMessageText] = useState('');
  const [typingIndicator, setTypingIndicator] = useState(false);

  const handleSendMessage = () => {
    if (messageText.trim()) {
      setMessageText('');
    }
  };

  const currentConversation = conversations.find(
    (c) => c.id === selectedConversation
  );

  return (
    <div className="flex h-screen flex-col bg-surface">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Conversations */}
        <aside className="w-full border-r border-outline-variant bg-surface-container-lowest md:w-80">
          {/* Header */}
          <div className="border-b border-outline-variant p-4">
            <h2 className="text-headline-md font-semibold text-on-surface">Messages</h2>
          </div>

          {/* Search */}
          <div className="border-b border-outline-variant p-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search conversations..."
                className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2 text-body-md text-on-surface placeholder-on-surface-variant focus:border-primary focus:outline-none"
              />
              <Icon name="search" className="absolute right-3 top-2.5 h-5 w-5 text-on-surface-variant" />
            </div>
          </div>

          {/* Conversation list */}
          <div className="overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setSelectedConversation(conv.id)}
                className={`w-full border-b border-outline-variant px-4 py-3 text-left transition-colors ${
                  selectedConversation === conv.id
                    ? 'bg-primary-container'
                    : 'hover:bg-surface-container'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar alt={conv.name} size="md" initials={conv.initials} />
                    {conv.online && (
                      <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border border-surface-container-lowest bg-success-green" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-label-md font-semibold text-on-surface ${
                        conv.unread > 0 ? 'font-bold' : ''
                      }`}
                    >
                      {conv.name}
                    </p>
                    <p className="truncate text-body-sm text-on-surface-variant">
                      {conv.lastMessage}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <p className="text-label-sm text-on-surface-variant">
                      {conv.timestamp}
                    </p>
                    {conv.unread > 0 && (
                      <Badge
                        label={conv.unread.toString()}
                        variant="error"
                        size="sm"
                        className="h-5 w-5 flex items-center justify-center p-0"
                      />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Main chat area */}
        <div className="hidden flex-1 flex-col md:flex">
          {currentConversation ? (
            <>
              {/* Chat header */}
              <div className="flex items-center justify-between border-b border-outline-variant bg-surface-container-lowest px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Avatar
                      alt={currentConversation.name}
                      size="md"
                      initials={currentConversation.initials}
                    />
                    {currentConversation.online && (
                      <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border border-surface-container-lowest bg-success-green" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold text-on-surface">
                      {currentConversation.name}
                    </p>
                    <p className="text-label-sm text-on-surface-variant">
                      {currentConversation.online ? 'Active now' : 'Away'}
                    </p>
                  </div>
                </div>
                <button className="text-on-surface-variant hover:text-on-surface">
                  <Icon name="more-vert" className="h-6 w-6" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto space-y-4 p-6">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-xs rounded-2xl px-4 py-2 ${
                        msg.sender === 'user'
                          ? 'bg-primary text-on-primary'
                          : 'bg-surface-container text-on-surface'
                      }`}
                    >
                      <p className="text-body-md">{msg.text}</p>
                      <div
                        className={`mt-1 flex items-center gap-1 text-label-sm ${
                          msg.sender === 'user'
                            ? 'text-on-primary/70'
                            : 'text-on-surface-variant'
                        }`}
                      >
                        <span>{msg.timestamp}</span>
                        {msg.status === 'read' && (
                          <Icon name="done-all" className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {typingIndicator && (
                  <div className="flex justify-start">
                    <div className="bg-surface-container rounded-2xl px-4 py-3">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-on-surface-variant animate-bounce" />
                        <div className="h-2 w-2 rounded-full bg-on-surface-variant animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="h-2 w-2 rounded-full bg-on-surface-variant animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Message input */}
              <div className="border-t border-outline-variant bg-surface-container-lowest p-4">
                <div className="flex gap-3">
                  <button className="text-on-surface-variant hover:text-on-surface">
                    <Icon name="attachment" className="h-6 w-6" />
                  </button>
                  <input
                    type="text"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 rounded-lg border border-outline-variant bg-surface-container-lowest px-4 py-2 text-body-md text-on-surface placeholder-on-surface-variant focus:border-primary focus:outline-none"
                  />
                  <Button variant="primary" size="sm" onClick={handleSendMessage}>
                    <Icon name="send" className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center">
              <p className="text-on-surface-variant">Select a conversation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
