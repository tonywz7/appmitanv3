'use client';

import React, { useState } from 'react';
import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card } from '@/components/ui/Card';
import { Table, TableColumn } from '@/components/ui/Table';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Modal } from '@/components/ui/Modal';
import { Tabs } from '@/components/ui/Tabs';
import { Avatar } from '@/components/ui/Avatar';
import { Icon } from '@/components/ui/Icon';

interface KYCSubmission {
  id: string;
  userName: string;
  email: string;
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected';
  documentType: 'ktp' | 'passport' | 'selfie';
  documents: {
    ktp?: string;
    passport?: string;
    selfie?: string;
  };
}

const submissions: KYCSubmission[] = [
  {
    id: '1',
    userName: 'Hassan Khan',
    email: 'hassan@example.com',
    submittedDate: '2024-02-20',
    status: 'pending',
    documentType: 'passport',
    documents: { passport: '/doc-placeholder.jpg', selfie: '/selfie-placeholder.jpg' },
  },
  {
    id: '2',
    userName: 'Aisha Mohamed',
    email: 'aisha@example.com',
    submittedDate: '2024-02-19',
    status: 'pending',
    documentType: 'ktp',
    documents: { ktp: '/ktp-placeholder.jpg', selfie: '/selfie-placeholder.jpg' },
  },
  {
    id: '3',
    userName: 'Ibrahim Ali',
    email: 'ibrahim@example.com',
    submittedDate: '2024-02-18',
    status: 'pending',
    documentType: 'passport',
    documents: { passport: '/doc-placeholder.jpg', selfie: '/selfie-placeholder.jpg' },
  },
];

const columns: TableColumn<KYCSubmission>[] = [
  {
    header: 'User',
    accessor: (row) => (
      <div className="flex items-center gap-3">
        <Avatar alt={row.userName} size="sm" initials={row.userName[0]} />
        <div>
          <p className="font-semibold text-on-surface">{row.userName}</p>
          <p className="text-xs text-on-surface-variant">{row.email}</p>
        </div>
      </div>
    ),
  },
  { header: 'Document Type', accessor: 'documentType' },
  { header: 'Submitted', accessor: 'submittedDate' },
  {
    header: 'Status',
    accessor: (row) => (
      <Badge
        label={row.status.charAt(0).toUpperCase() + row.status.slice(1)}
        variant={row.status}
        size="sm"
      />
    ),
  },
];

export default function KYCPage() {
  const [selectedSubmission, setSelectedSubmission] = useState<KYCSubmission | null>(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewNotes, setReviewNotes] = useState('');
  const [rejectionReason, setRejectionReason] = useState('');
  const [showRejectionModal, setShowRejectionModal] = useState(false);

  const pendingSubmissions = submissions.filter((s) => s.status === 'pending');

  return (
    <AdminLayout currentPage="KYC Review">
      <div className="space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Card variant="elevated">
            <p className="text-label-md text-on-surface-variant">Pending Reviews</p>
            <p className="mt-2 text-headline-lg font-bold text-warning-amber">
              {pendingSubmissions.length}
            </p>
          </Card>
          <Card variant="elevated">
            <p className="text-label-md text-on-surface-variant">Approved This Week</p>
            <p className="mt-2 text-headline-lg font-bold text-success-green">24</p>
          </Card>
          <Card variant="elevated">
            <p className="text-label-md text-on-surface-variant">Rejected This Week</p>
            <p className="mt-2 text-headline-lg font-bold text-error-red">3</p>
          </Card>
        </div>

        {/* KYC submissions table */}
        <Card>
          <h2 className="mb-4 text-headline-md font-semibold text-on-surface">
            Pending KYC Submissions
          </h2>
          <Table<KYCSubmission>
            columns={columns}
            data={pendingSubmissions}
            keyExtractor={(row) => row.id}
            onRowClick={(submission) => {
              setSelectedSubmission(submission);
              setShowReviewModal(true);
            }}
          />
        </Card>
      </div>

      {/* KYC Review Modal */}
      {selectedSubmission && (
        <Modal
          isOpen={showReviewModal}
          onClose={() => setShowReviewModal(false)}
          title={`Review KYC - ${selectedSubmission.userName}`}
          size="xl"
          footer={
            <div className="flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setShowReviewModal(false)}>
                Close
              </Button>
              <Button
                variant="danger"
                onClick={() => {
                  setShowReviewModal(false);
                  setShowRejectionModal(true);
                }}
              >
                Reject
              </Button>
              <Button variant="primary">Approve</Button>
            </div>
          }
        >
          <div className="space-y-6">
            {/* User info */}
            <div className="flex items-center gap-4">
              <Avatar alt={selectedSubmission.userName} size="lg" initials={selectedSubmission.userName[0]} />
              <div>
                <p className="text-headline-md font-semibold text-on-surface">
                  {selectedSubmission.userName}
                </p>
                <p className="text-body-md text-on-surface-variant">
                  {selectedSubmission.email}
                </p>
              </div>
            </div>

            {/* Documents */}
            <div>
              <h3 className="mb-4 text-label-md font-semibold text-on-surface">
                Submitted Documents
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {selectedSubmission.documents.ktp && (
                  <div className="rounded-lg bg-surface-container p-4">
                    <Icon name="image" className="mx-auto mb-2 h-8 w-8 text-on-surface-variant" />
                    <p className="text-center text-label-sm text-on-surface">KTP</p>
                  </div>
                )}
                {selectedSubmission.documents.passport && (
                  <div className="rounded-lg bg-surface-container p-4">
                    <Icon name="image" className="mx-auto mb-2 h-8 w-8 text-on-surface-variant" />
                    <p className="text-center text-label-sm text-on-surface">Passport</p>
                  </div>
                )}
                {selectedSubmission.documents.selfie && (
                  <div className="rounded-lg bg-surface-container p-4">
                    <Icon name="image" className="mx-auto mb-2 h-8 w-8 text-on-surface-variant" />
                    <p className="text-center text-label-sm text-on-surface">Selfie</p>
                  </div>
                )}
              </div>
            </div>

            {/* Review notes */}
            <div>
              <label className="block text-label-md font-semibold text-on-surface mb-2">
                Review Notes
              </label>
              <textarea
                value={reviewNotes}
                onChange={(e) => setReviewNotes(e.target.value)}
                className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest p-3 text-body-md text-on-surface placeholder-on-surface-variant focus:border-primary focus:outline-none"
                rows={4}
                placeholder="Add notes for this submission..."
              />
            </div>
          </div>
        </Modal>
      )}

      {/* Rejection Modal */}
      <Modal
        isOpen={showRejectionModal}
        onClose={() => setShowRejectionModal(false)}
        title="Reject KYC Submission"
        size="md"
        footer={
          <div className="flex justify-end gap-3">
            <Button variant="secondary" onClick={() => setShowRejectionModal(false)}>
              Cancel
            </Button>
            <Button variant="danger">Confirm Rejection</Button>
          </div>
        }
      >
        <div className="space-y-4">
          <p className="text-body-md text-on-surface">
            Please provide a reason for rejecting this KYC submission. The user will see this message.
          </p>
          <textarea
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
            className="w-full rounded-lg border border-outline-variant bg-surface-container-lowest p-3 text-body-md text-on-surface placeholder-on-surface-variant focus:border-primary focus:outline-none"
            rows={4}
            placeholder="Reason for rejection..."
          />
        </div>
      </Modal>
    </AdminLayout>
  );
}
