import React from 'react';

export function About() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">

Certainly! Here's the revised text in paragraph form:

Phil brings a wealth of expertise in navigating complex compliance frameworks and regulations, including SOC 2, PCI DSS, ISO 27001, HIPAA, FedRAMP, GDPR, and other international standards. With extensive experience supporting clients and prospects in addressing security and compliance challenges related to SaaS offerings, he is a trusted resource for ensuring organizations meet their regulatory obligations.

His specialties span a wide range of critical areas, such as information security, data privacy, AI compliance, cloud security, and risk management. Phil is well-versed in conducting compliance and security audits, implementing GDPR and CCPA measures, and managing business impact analysis, continuity planning, and disaster recovery strategies. Additionally, his expertise in security architecture and encryption strategies enables him to design robust solutions that protect sensitive data and mitigate risk. By combining technical acumen with strategic insight, Phil helps organizations enhance their security posture and achieve their compliance objectives in an increasingly complex digital landscape.            </p>
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
