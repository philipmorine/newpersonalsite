import React from 'react';
import { Mail, Twitter, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Let's Work Together</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:hello@phil.com" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
            <Mail className="w-5 h-5" />
            <span>Email Me</span>
          </a>
          <a href="#" className="p-3 bg-white dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-600 dark:text-gray-300">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="p-3 bg-white dark:bg-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-gray-600 dark:text-gray-300">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}