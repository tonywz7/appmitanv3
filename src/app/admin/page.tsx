'use client';

import React from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card } from '@/components/ui/Card';
import { Table, TableColumn } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';

interface StatCard {
  label: string;
  value: number;
  icon: string;
  trend?: string;
  color: 'primary' | 'success' | 'warning' | 'error';
}

interface User {
  id: string;
  name: string;
  email: string;
  joinDate: string;
  status: 'active' | 'suspended' | 'pending_kyc';
  kycStatus: 'pending' | 'approved' | 'rejected';
}

const stats: StatCard[] = [
  {
    label: 'Total Users',
    value: 2847,
    icon: 'people',
    trend: '+12%',
    color: 'primary',
  },
  {
    label: 'Active Users',
    value: 1923,
    icon: 'person-check',
    trend: '+8%',
    color: 'success',
  },
  {
    label: 'Pending KYC',
    value: 156,
    icon: 'clock',
    trend: '+5',
    color: 'warning',
  },
  {
    label: 'Total Matches',
    value: 5234,
    icon: 'favorite',
    trend: '+23%',
    color: 'primary',
  },
];

const users: User[] = [
  {
    id: '1',
    name: 'Fatima Ahmed',
    email: 'fatima@example.com',
    joinDate: '2024-01-15',
    status: 'active',
    kycStatus: 'approved',
  },
  {
    id: '2',
    name: 'Hassan Khan',
    email: 'hassan@example.com',
    joinDate: '2024-01-20',
    status: 'active',
    kycStatus: 'pending',
  },
  {
    id: '3',
    name: 'Aisha Mohamed',
    email: 'aisha@example.com',
    joinDate: '2024-02-10',
    status: 'pending_kyc',
    kycStatus: 'pending',
  },
];

const userColumns: TableColumn<User>[] = [
  { header: 'Name', accessor: 'name' },
  { header: 'Email', accessor: 'email' },
  { header: 'Joined', accessor: 'joinDate' },
  {
    header: 'Status',
    accessor: (row) => (
      <Badge
        label={row.status === 'active' ? 'Active' : 'Pending KYC'}
        variant={row.status === 'active' ? 'approved' : 'pending'}
        size="sm"
      />
    ),
  },
  {
    header: 'KYC',
    accessor: (row) => (
      <Badge
        label={row.kycStatus.charAt(0).toUpperCase() + row.kycStatus.slice(1)}
        variant={row.kycStatus}
        size="sm"
      />
    ),
  },
];

const colorMap = {
  primary: 'bg-primary text-on-primary',
  success: 'bg-green-100 text-success-green',
  warning: 'bg-amber-100 text-warning-amber',
  error: 'bg-red-100 text-error-red',
};

export default function AdminDashboard() {
  return (
    <AdminLayout currentPage="Dashboard">
      {/* Stats grid */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} variant="elevated">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-label-md text-on-surface-variant">
                  {stat.label}
                </p>
                <p className="mt-2 text-headline-lg font-bold text-on-surface">
                  {stat.value.toLocaleString()}
                </p>
                {stat.trend && (
                  <p className="mt-1 text-label-sm text-success-green">
                    {stat.trend} this month
                  </p>
                )}
              </div>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorMap[stat.color]}`}
              >
                <Icon name={stat.icon} className="h-6 w-6" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Users table */}
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-headline-md font-semibold text-on-surface">
            Recent Users
          </h2>
          <button className="text-primary hover:text-primary/80">
            View all →
          </button>
        </div>
        <Table<User>
          columns={userColumns}
          data={users}
          keyExtractor={(row) => row.id}
        />
      </Card>
    </AdminLayout>
  );
}
