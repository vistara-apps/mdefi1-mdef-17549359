
'use client';

import type { ReactNode } from 'react';

interface HeaderProps {
  saveFrameButton: ReactNode;
  onClose: () => void;
  onViewProfile: () => void;
}

export default function Header({ saveFrameButton, onClose, onViewProfile }: HeaderProps) {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">💱</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">DeFi Swap</span>
          </div>
          
          <div className="flex items-center space-x-2">
            {saveFrameButton}
            <button
              onClick={onViewProfile}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-semibold text-sm transition-colors"
            >
              Profile
            </button>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-semibold text-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
