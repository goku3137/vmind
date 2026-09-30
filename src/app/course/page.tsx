import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Transformational Programs | ORUMA',
  description: 'Explore psychology, coaching, mindset transformation, and wellness programs offered by ORUMA.',
};

export default function CoursesListPage() {
  const programs = [
    {
      category: "Relationship & Marriage",
      name: "MARRYWISE",
      desc: "Marriage & Relationship Transformation Program for couples who want to rebuild trust and connection.",
      link: "/course/marrywise", 
      status: "Limited Slots",
      isActive: true
    },
    {
      category: "Mind & Stress",
      name: "DREAM MIND",
      desc: "Mind Reprogramming & Stress Management Program for professionals and entrepreneurs.",
      link: "#",
      status: "Coming Soon",
      isActive: false
    },
    {
      category: "Mind & Stress",
      name: "STRESS HEALING JOURNEY",
      desc: "Emotional Stress, Overthinking & Inner Healing Program.",
      link: "#",
      status: "Coming Soon",
      isActive: false
    },
    {
      category: "Relationship & Marriage",
      name: "PRE-MARRYWISE",
      desc: "Premarital & Early Marriage Program for engaged and newly married couples.",
      link: "#",
      status: "Coming Soon",
      isActive: false
    },
    {
      category: "Business & Money",
      name: "RESET YOUR MONEY BLOCKS",
      desc: "Money Mindset & Business Confidence Program to shatter limiting beliefs.",
      link: "#",
      status: "Coming Soon",
      isActive: false
    },
    {
      category: "Business & Money",
      name: "RESET YOUR SALES MIND",
      desc: "Sales Confidence & Conversion Program for professionals seeking growth.",
      link: "#",
      status: "Coming Soon",
      isActive: false
    },
    {
      category: "Women's Empowerment",
      name: "SHEWISE",
      desc: "Women's Confidence, Independence & Entrepreneurship Program.",
      link: "#",
      status: "Coming Soon",
      isActive: false
    },
    {
      category: "Parenting & Children",
      name: "TEENWISE",
      desc: "Teen Emotional Wellness & Parent Connection Program.",
      link: "#",
      status: "Coming Soon",
      isActive: false
    },
    {
      category: "Parenting & Children",
      name: "STARWISE",
      desc: "Child Emotional Wellness & Personal Growth Program.",
      link: "#",
      status: "Coming Soon",
      isActive: false
    },
    {
      category: "Recovery",
      name: "ADDICTION RECOVERY",
      desc: "Recovery, Habit & Behaviour Change Program.",
      link: "#",
      status: "Coming Soon",
      isActive: false
    },
    {
      category: "Recovery",
      name: "RELATIONSHIP RECOVERY",
      desc: "Emotional Recovery After Difficult Relationships and Breakups.",
      link: "#",
      status: "Coming Soon",
      isActive: false
    },
    {
      category: "Students",
      name: "EXAM FEAR TO CONFIDENCE",
      desc: "Exam Stress & Performance Program for students.",
      link: "#",
      status: "Coming Soon",
      isActive: false
    }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FAF6F3] pt-32 pb-24 text-[#33252A] font-sans">
      <section className="w-full max-w-7xl mx-auto px-4 space-y-12">
        {/* Header Text */}
        <AnimatedSection animation="fadeInUp" className="text-center space-y-6">
          <div className="flex items-center justify-center text-[#C47C76] font-bold tracking-[0.2em] text-xs uppercase">
            <span className="w-8 h-[2px] bg-[#C47C76] mr-4"></span>
            ORUMA Pathways
            <span className="w-8 h-[2px] bg-[#C47C76] ml-4"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
            Transformational Programs
          </h1>
          <p className="text-[#5D4E54] text-[17px] md:text-[19px] max-w-3xl mx-auto leading-relaxed">
            Discover our specialized coaching, psychology, and mindset transformation programs designed to help you build a better life.
          </p>
        </AnimatedSection>
        
        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {programs.map((program, idx) => (
            <AnimatedSection 
              key={idx} 
              animation="fadeInUp" 
              delay={0.1 + (idx * 0.05)} 
              className={`bg-white p-8 rounded-[24px] border flex flex-col h-full relative overflow-hidden transition-all ${
                program.isActive 
                  ? 'shadow-sm border-[#EAD5D3]/40 group hover:shadow-xl hover:-translate-y-1' 
                  : 'shadow-none border-gray-100 opacity-[0.85] group hover:border-[#EAD5D3]/40'
              }`}
            >
              {/* Subtle accent line on top for active */}
              {program.isActive && (
                <div className="absolute top-0 left-0 w-full h-1 bg-[#EAD5D3] group-hover:bg-[#C47C76] transition-colors"></div>
              )}
              
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <span className={`font-bold tracking-widest text-xs uppercase ${program.isActive ? 'text-[#A8635D]' : 'text-[#A8635D]/70'}`}>
                    {program.category}
                  </span>
                  
                  {program.isActive ? (
                    <span className="bg-[#F9F0EE] text-[#A8635D] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#F2DFDD] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C47C76] animate-pulse"></span>
                      {program.status}
                    </span>
                  ) : (
                    <span className="bg-gray-50 text-gray-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-gray-100">
                      {program.status}
                    </span>
                  )}
                </div>
                
                <h3 className={`text-2xl font-bold font-serif transition-colors ${
                  program.isActive ? 'text-[#33252A] group-hover:text-[#C47C76]' : 'text-[#33252A]/80 group-hover:text-[#33252A]'
                }`}>
                  {program.name}
                </h3>
                
                <p className={`text-[15px] leading-relaxed ${program.isActive ? 'text-[#7C6971]' : 'text-[#7C6971]/80'}`}>
                  {program.desc}
                </p>
              </div>
              
              <div className="pt-8 mt-auto">
                <Link 
                  href={program.link}
                  className={`inline-flex items-center font-bold text-[13px] uppercase tracking-wider transition-colors ${
                    program.isActive 
                      ? 'text-[#33252A] group-hover:text-[#C47C76]' 
                      : 'text-[#33252A]/60 group-hover:text-[#A8635D]'
                  }`}
                >
                  Explore Program 
                  <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
