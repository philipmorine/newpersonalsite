import React from 'react';

export function About() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              With over a decade of experience in digital product design and development, I've helped companies of all sizes build better products that users love.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I believe in clean, purposeful design that puts user needs first. My approach combines strategic thinking with hands-on execution to create solutions that look great and work even better.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=800" 
              alt="Phil's portrait" 
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}