'use client';

import React, { ReactNode } from 'react';

export interface TableColumn<T> {
  header: string;
  accessor: keyof T | ((row: T) => ReactNode);
  className?: string;
}

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  keyExtractor: (row: T, index: number) => string | number;
  onRowClick?: (row: T) => void;
  loading?: boolean;
  emptyMessage?: string;
}

export function Table<T>({
  columns,
  data,
  keyExtractor,
  onRowClick,
  loading = false,
  emptyMessage = 'No data available',
}: TableProps<T>) {
  if (loading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-outline-variant border-t-primary" />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center text-on-surface-variant">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-outline-variant bg-surface-container-lowest">
      <table className="w-full">
        <thead>
          <tr className="border-b border-outline-variant bg-surface-container">
            {columns.map((col, i) => (
              <th
                key={i}
                className="px-6 py-4 text-left text-label-md font-semibold text-on-surface"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={keyExtractor(row, idx)}
              onClick={() => onRowClick?.(row)}
              className={`border-b border-outline-variant transition-colors ${
                onRowClick ? 'cursor-pointer hover:bg-surface-container-low' : ''
              }`}
            >
              {columns.map((col, i) => (
                <td
                  key={i}
                  className={`px-6 py-4 text-body-md text-on-surface ${col.className || ''}`}
                >
                  {typeof col.accessor === 'function'
                    ? col.accessor(row)
                    : (row[col.accessor] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
