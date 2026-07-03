'use client';

import React, { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card } from '@/components/ui/Card';
import { Table, TableColumn } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { TextField } from '@/components/ui/TextField';
import { Modal } from '@/components/ui/Modal';
import { Icon } from '@/components/ui/Icon';
import { Avatar } from '@/components/ui/Avatar';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  joinDate: string;
  status: 'active' | 'suspended';
  kycStatus: 'pending' | 'approved' | 'rejected';
  matches: number;
}

const users: User[] = [
  {
    id: '1',
    name: 'Fatima Ahmed',
    email: 'fatima@example.com',
    phone: '+1234567890',
    joinDate: '2024-01-15',
    status: 'active',
    kycStatus: 'approved',
    matches: 12,
  },
  {
    id: '2',
    name: 'Hassan Khan',
    email: 'hassan@example.com',
    phone: '+1234567891',
    joinDate: '2024-01-20',
    status: 'active',
    kycStatus: 'pending',
    matches: 8,
  },
  {
    id: '3',
    name: 'Aisha Mohamed',
    email: 'aisha@example.com',
    phone: '+1234567892',
    joinDate: '2024-02-10',
    status: 'suspended',
    kycStatus: 'approved',
    matches: 5,
  },
];

const userColumns: TableColumn<User>[] = [
  {
    header: 'User',
    accessor: (row) => (
      <div className="flex items-center gap-3">
        <Avatar alt={row.name} size="sm" initials={row.name[0]} />
        <div>
          <p className="font-semibold text-on-surface">{row.name}</p>
          <p className="text-xs text-on-surface-variant">{row.email}</p>
        </div>
      </div>
    ),
  },
  { header: 'Phone', accessor: 'phone' },
  { header: 'Joined', accessor: 'joinDate' },
  { header: 'Matches', accessor: (row) => row.matches.toString() },
  {
    header: 'Status',
    accessor: (row) => (
      <Badge
        label={row.status === 'active' ? 'Active' : 'Suspended'}
        variant={row.status === 'active' ? 'approved' : 'rejected'}
        size="sm"
      />
    ),
  },
  {
    header: 'Actions',
    accessor: (row) => (
      <div className="flex gap-2">
        <button className="text-primary hover:text-primary/80">
          <Icon name="visibility" className="h-5 w-5" />
        </button>
        <button className="text-error hover:text-error/80">
          <Icon name="delete" className="h-5 w-5" />
        </button>
      </div>
    ),
  },
];

export default function UsersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AdminLayout currentPage="Users">
      <div className="space-y-6">
        {/* Search */}
        <Card>
          <div className="flex gap-4">
            <div className="flex-1">
              <TextField
                label="Search"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="primary" className="self-end">
              Search
            </Button>
          </div>
        </Card>

        {/* Users table */}
        <Card>
          <h2 className="mb-4 text-headline-md font-semibold text-on-surface">
            All Users ({filteredUsers.length})
          </h2>
          <Table<User>
            columns={userColumns}
            data={filteredUsers}
            keyExtractor={(row) => row.id}
            onRowClick={(user) => {
              setSelectedUser(user);
              setShowModal(true);
            }}
          />
        </Card>
      </div>

      {/* User detail modal */}
      {selectedUser && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title={selectedUser.name}
          size="lg"
          footer={
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Close
              </Button>
              <Button
                variant={
                  selectedUser.status === 'active' ? 'outline' : 'primary'
                }
              >
                {selectedUser.status === 'active' ? 'Suspend' : 'Reactivate'}
              </Button>
            </div>
          }
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Avatar alt={selectedUser.name} size="lg" initials={selectedUser.name[0]} />
              <div>
                <p className="text-headline-md font-semibold text-on-surface">
                  {selectedUser.name}
                </p>
                <Badge label={selectedUser.status} variant="primary" size="sm" />
              </div>
            </div>

            <div className="grid gap-4">
              <div>
                <p className="text-label-sm text-on-surface-variant">Email</p>
                <p className="text-body-md text-on-surface">{selectedUser.email}</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">Phone</p>
                <p className="text-body-md text-on-surface">{selectedUser.phone}</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">Joined</p>
                <p className="text-body-md text-on-surface">{selectedUser.joinDate}</p>
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">KYC Status</p>
                <Badge
                  label={selectedUser.kycStatus}
                  variant={selectedUser.kycStatus as any}
                  size="sm"
                />
              </div>
              <div>
                <p className="text-label-sm text-on-surface-variant">Active Matches</p>
                <p className="text-body-md text-on-surface">{selectedUser.matches}</p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </AdminLayout>
  );
}
