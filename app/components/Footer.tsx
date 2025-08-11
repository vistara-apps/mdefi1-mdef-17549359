
'use client';

interface FooterProps {
  onOpenUrl: (url: string) => void;
}

export default function Footer({ onOpenUrl }: FooterProps) {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center">
          <button
            onClick={() => onOpenUrl('https://base.org')}
            className="text-sm text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 transition-colors font-medium"
          >
            Built on Base 🔵
          </button>
        </div>
      </div>
    </footer>
  );
}
