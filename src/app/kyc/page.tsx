'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Icon } from '@/components/ui/Icon';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

type KYCStatus = 'not_started' | 'pending' | 'under_review' | 'approved' | 'rejected';

interface Document {
  name: string;
  uploaded: boolean;
  file?: File;
}

export default function KYCPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [kycStatus, setKycStatus] = useState<KYCStatus>('not_started');
  const [documents, setDocuments] = useState<Record<string, Document>>({
    ktp: { name: 'KTP / ID Card', uploaded: false },
    passport: { name: 'Passport (Optional)', uploaded: false },
    selfie: { name: 'Selfie with ID', uploaded: false },
  });

  const steps = [
    { label: 'Upload ID', completed: currentStep > 0 },
    { label: 'Upload Selfie', completed: currentStep > 1 },
    { label: 'Review', completed: currentStep > 2 },
  ];

  const statusBadgeVariant = {
    not_started: 'default',
    pending: 'pending',
    under_review: 'warning',
    approved: 'approved',
    rejected: 'rejected',
  } as const;

  const statusMessage = {
    not_started: 'Not Started',
    pending: 'Pending Review',
    under_review: 'Under Review',
    approved: 'Approved',
    rejected: 'Rejected',
  };

  const handleFileUpload = (documentKey: string, file: File) => {
    setDocuments({
      ...documents,
      [documentKey]: { ...documents[documentKey], uploaded: true, file },
    });
  };

  const handleSubmit = () => {
    setKycStatus('pending');
  };

  const isAllDocumentsUploaded = documents.ktp.uploaded && documents.selfie.uploaded;

  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main className="mx-auto max-w-2xl px-4 py-12 md:px-6">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-headline-lg font-semibold text-on-surface md:text-headline-xl">
            Know Your Customer (KYC) Verification
          </h1>
          <p className="mt-2 text-body-md text-on-surface-variant">
            Help us verify your identity to ensure a safe community
          </p>
        </div>

        {/* Status badge */}
        {kycStatus !== 'not_started' && (
          <div className="mb-6 flex justify-center">
            <Badge
              label={statusMessage[kycStatus]}
              variant={statusBadgeVariant[kycStatus]}
            />
          </div>
        )}

        {/* Progress bar */}
        {kycStatus === 'not_started' && (
          <div className="mb-8">
            <ProgressBar steps={steps} currentStep={currentStep} />
          </div>
        )}

        {/* Rejection message */}
        {kycStatus === 'rejected' && (
          <Card className="mb-6 border-error-red bg-red-50">
            <div className="flex gap-4">
              <Icon name="error" className="h-6 w-6 text-error-red flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-error-red">KYC Verification Rejected</h3>
                <p className="mt-1 text-body-md text-error-red/80">
                  Your documents were rejected. Please ensure all documents are clear and valid. You can resubmit after 24 hours.
                </p>
                <Button variant="primary" className="mt-4">
                  Resubmit Documents
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Upload forms */}
        {(kycStatus === 'not_started' || kycStatus === 'rejected') && (
          <div className="space-y-6">
            {/* Step 1: ID Upload */}
            <Card>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-headline-md font-semibold text-on-surface">
                  Step 1: Upload ID Document
                </h2>
                {documents.ktp.uploaded && (
                  <Icon name="check" className="h-6 w-6 text-success-green" />
                )}
              </div>
              <p className="mb-4 text-body-md text-on-surface-variant">
                Upload either a KTP/ID card or Passport
              </p>
              <div className="space-y-3">
                {['ktp', 'passport'].map((docType) => (
                  <label
                    key={docType}
                    className="flex items-center gap-3 rounded-lg border-2 border-dashed border-outline-variant p-4 cursor-pointer hover:border-primary hover:bg-primary-container"
                  >
                    <Icon name="cloud-upload" className="h-6 w-6 text-on-surface-variant" />
                    <div className="flex-1">
                      <p className="font-semibold text-on-surface">
                        {documents[docType].name}
                      </p>
                      <p className="text-sm text-on-surface-variant">
                        Click to upload or drag and drop
                      </p>
                    </div>
                    {documents[docType].uploaded && (
                      <Badge label="Uploaded" variant="success" size="sm" />
                    )}
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleFileUpload(docType, file);
                      }}
                    />
                  </label>
                ))}
              </div>
            </Card>

            {/* Step 2: Selfie Upload */}
            <Card>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-headline-md font-semibold text-on-surface">
                  Step 2: Upload Selfie with ID
                </h2>
                {documents.selfie.uploaded && (
                  <Icon name="check" className="h-6 w-6 text-success-green" />
                )}
              </div>
              <p className="mb-4 text-body-md text-on-surface-variant">
                Take a selfie while holding your ID document
              </p>
              <label className="flex items-center gap-3 rounded-lg border-2 border-dashed border-outline-variant p-4 cursor-pointer hover:border-primary hover:bg-primary-container">
                <Icon name="cloud-upload" className="h-6 w-6 text-on-surface-variant" />
                <div className="flex-1">
                  <p className="font-semibold text-on-surface">
                    Upload Selfie
                  </p>
                  <p className="text-sm text-on-surface-variant">
                    Click to upload or drag and drop
                  </p>
                </div>
                {documents.selfie.uploaded && (
                  <Badge label="Uploaded" variant="success" size="sm" />
                )}
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleFileUpload('selfie', file);
                  }}
                />
              </label>
            </Card>

            {/* Submit */}
            <div className="flex gap-4">
              <Button variant="secondary" className="flex-1">
                Save Draft
              </Button>
              <Button
                variant="primary"
                className="flex-1"
                disabled={!isAllDocumentsUploaded}
                onClick={handleSubmit}
              >
                Submit for Verification
              </Button>
            </div>
          </div>
        )}

        {/* Approved state */}
        {kycStatus === 'approved' && (
          <Card className="border-success-green bg-green-50">
            <div className="flex gap-4">
              <Icon name="check-circle" className="h-8 w-8 text-success-green flex-shrink-0" />
              <div>
                <h3 className="text-headline-md font-semibold text-success-green">
                  KYC Verification Approved
                </h3>
                <p className="mt-1 text-body-md text-success-green/80">
                  Your identity has been verified. You can now access all features of MITAN.
                </p>
                <Button variant="primary" className="mt-4">
                  Continue to Profile
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Pending/Under Review state */}
        {(kycStatus === 'pending' || kycStatus === 'under_review') && (
          <Card className="border-warning-amber bg-amber-50">
            <div className="flex gap-4">
              <Icon name="schedule" className="h-8 w-8 text-warning-amber flex-shrink-0" />
              <div>
                <h3 className="text-headline-md font-semibold text-warning-amber">
                  {kycStatus === 'pending'
                    ? 'Verification Pending'
                    : 'Under Review'}
                </h3>
                <p className="mt-1 text-body-md text-warning-amber/80">
                  Your documents are being reviewed. This usually takes 24-48 hours. We&apos;ll notify you once the review is complete.
                </p>
              </div>
            </div>
          </Card>
        )}
      </main>

      <Footer />
    </div>
  );
}
