'use client';

import React, { ReactNode, useState } from 'react';

export interface Tab {
  label: string;
  value: string;
  content: ReactNode;
  badge?: string | number;
}

export interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export function Tabs({
  tabs,
  defaultValue,
  onChange,
  className = '',
}: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    onChange?.(value);
  };

  const activeTabData = tabs.find((t) => t.value === activeTab);

  return (
    <div className={className}>
      {/* Tab buttons */}
      <div className="flex border-b border-outline-variant">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => handleTabChange(tab.value)}
            className={`relative px-4 py-3 text-label-md font-semibold transition-colors ${
              activeTab === tab.value
                ? 'text-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <div className="flex items-center gap-2">
              {tab.label}
              {tab.badge && (
                <span className="rounded-full bg-error px-2 py-0.5 text-xs text-on-error">
                  {tab.badge}
                </span>
              )}
            </div>
            {activeTab === tab.value && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTabData && <div className="pt-4">{activeTabData.content}</div>}
    </div>
  );
}
