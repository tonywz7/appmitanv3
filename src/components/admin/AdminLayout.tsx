'use client';

import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

interface NavItem {
  label: string;
  href: string;
  icon: string;
  badge?: number;
}

export interface AdminLayoutProps {
  children: ReactNode;
  currentPage: string;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin', icon: 'dashboard', badge: 0 },
  { label: 'Users', href: '/admin/users', icon: 'people' },
  { label: 'KYC Review', href: '/admin/kyc', icon: 'verified', badge: 5 },
  { label: 'Moderation', href: '/admin/moderation', icon: 'security' },
  { label: 'System Logs', href: '/admin/logs', icon: 'history' },
];

export function AdminLayout({ children, currentPage }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 flex flex-col border-r border-outline-variant bg-surface-container-lowest transition-all ${
          sidebarOpen ? 'w-64' : 'w-20'
        } md:relative md:translate-x-0`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-outline-variant px-4">
          {sidebarOpen && (
            <h1 className="text-headline-md font-bold text-primary">MITAN</h1>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2 px-2 py-4">
          {navItems.map((item) => {
            const isActive = currentPage === item.label.toLowerCase();
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                  isActive
                    ? 'bg-primary-container text-primary'
                    : 'text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                <Icon name={item.icon} className="h-5 w-5" />
                {sidebarOpen && (
                  <>
                    <span className="flex-1 text-label-md font-semibold">
                      {item.label}
                    </span>
                    {item.badge && item.badge > 0 && (
                      <span className="rounded-full bg-error px-2 py-0.5 text-xs font-bold text-on-error">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Toggle sidebar */}
        <div className="border-t border-outline-variant p-2">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="flex w-full items-center justify-center rounded-lg px-4 py-3 text-on-surface-variant hover:bg-surface-container"
          >
            <Icon
              name={sidebarOpen ? 'chevron-left' : 'chevron-right'}
              className="h-5 w-5"
            />
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-outline-variant bg-surface-container-lowest px-6 py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-headline-lg font-semibold text-on-surface">
              {currentPage}
            </h1>
            <div className="flex items-center gap-4">
              <button className="relative text-on-surface-variant hover:text-on-surface">
                <Icon name="notifications" className="h-6 w-6" />
                <span className="absolute -right-1 -top-1 inline-block h-2 w-2 rounded-full bg-error" />
              </button>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary-container" />
                <div>
                  <p className="text-label-md font-semibold text-on-surface">
                    Admin User
                  </p>
                  <p className="text-xs text-on-surface-variant">Administrator</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
