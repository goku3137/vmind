import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Our Courses | VMind Counselling Center',
  description: 'Explore the psychology and mental health courses offered by VMind.',
};

export default function CoursesListPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-[#f8f9fa] pt-32 pb-16">
      <section className="w-full max-w-7xl mx-auto px-4 space-y-12">
        {/* Header Text */}
        <AnimatedSection animation="fadeInUp" className="text-center space-y-6">
          <div className="flex items-center justify-center text-[#19A67A] font-bold tracking-widest text-sm uppercase">
            <span className="w-8 h-[2px] bg-[#19A67A] mr-4"></span>
            Learn & Grow
            <span className="w-8 h-[2px] bg-[#19A67A] ml-4"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 leading-tight">
            Our Courses
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
            Discover our specialized programs designed to foster emotional resilience, improve relationships, and support personal growth.
          </p>
        </AnimatedSection>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          <AnimatedSection animation="fadeInUp" delay={0.2} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full group hover:shadow-xl transition-shadow">
            <div className="flex-1 space-y-4">
              <span className="inline-block bg-[#E8F2EF] text-[#19A67A] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Upcoming</span>
              <h3 className="text-2xl font-bold font-heading text-gray-900 group-hover:text-[#19A67A] transition-colors">Master Emotional Resilience</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Join our exclusive new course designed to help you navigate life's toughest challenges and build unshakeable confidence.
              </p>
            </div>
            <div className="pt-8 mt-auto">
              <Link 
                href="/course/marriagecouncil"
                className="inline-block text-[#19A67A] font-bold text-sm uppercase tracking-wide hover:text-[#148C66] group-hover:translate-x-2 transition-transform"
              >
                View Course Details →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
