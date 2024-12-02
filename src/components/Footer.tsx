import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Phil. All rights reserved.</p>
      </div>
    </footer>
  );
}