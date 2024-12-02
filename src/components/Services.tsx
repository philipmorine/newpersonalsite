import React from 'react';
import { Palette, Code, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Product Design',
    description: 'Creating intuitive and beautiful interfaces that users love to interact with.'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Development',
    description: 'Building robust and scalable applications using modern web technologies.'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Strategy',
    description: 'Helping businesses align their digital products with user needs and business goals.'
  }
];

export function Services() {
  return (
    <section className="py-20 px-6 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">What I Do</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6 text-blue-600 dark:text-blue-400">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}