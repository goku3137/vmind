import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Transformational Programs | ORUMA',
  description: 'Explore psychology, coaching, mindset transformation, and wellness programs offered by ORUMA.',
};

export default function ProgramsListPage() {
  const programs = [
    {
      category: "Relationship & Marriage",
      name: "MARRYWISE",
      desc: "Marriage & Relationship Transformation Program for couples who want to rebuild trust and connection.",
      link: "/program/marrywise", 
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
    <div className="flex flex-col w-full min-h-screen bg-[#F2F9FD] pt-32 pb-24 text-[#1C3F5E] font-sans relative overflow-hidden">
      {/* Custom Keyframes for Ambient Background */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drift1 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(5vw, -5vh) scale(1.1); }
          66% { transform: translate(-3vw, 3vh) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift2 {
          0% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-5vw, 4vh) scale(1.1); }
          66% { transform: translate(4vw, -3vh) scale(0.9); }
          100% { transform: translate(0, 0) scale(1); }
        }
      `}} />

      {/* Ambient 2D/3D Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-70">
        <div 
          className="absolute -top-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-[#5BA4DA]/10 blur-[120px] mix-blend-multiply"
          style={{ animation: 'drift1 25s infinite ease-in-out' }}
        ></div>
        <div 
          className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-[#3A82B8]/5 blur-[100px] mix-blend-multiply"
          style={{ animation: 'drift2 30s infinite ease-in-out reverse' }}
        ></div>
        <div 
          className="absolute -bottom-[20%] left-[20%] w-[70vw] h-[70vw] rounded-full bg-[#C5E0F2]/20 blur-[150px] mix-blend-multiply"
          style={{ animation: 'drift1 35s infinite ease-in-out' }}
        ></div>
      </div>

      <section className="w-full max-w-7xl mx-auto px-4 space-y-12 relative z-10">
        {/* Header Text */}
        <AnimatedSection animation="fadeInUp" className="text-center space-y-6">
          <div className="flex items-center justify-center text-[#5BA4DA] font-bold tracking-[0.2em] text-xs uppercase">
            <span className="w-8 h-[2px] bg-[#5BA4DA] mr-4"></span>
            ORUMA Pathways
            <span className="w-8 h-[2px] bg-[#5BA4DA] ml-4"></span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif leading-tight">
            Transformational Programs
          </h1>
          <p className="text-[#1C3F5E]/80 text-[17px] md:text-[19px] max-w-3xl mx-auto leading-relaxed">
            Discover our specialized coaching, psychology, and mindset transformation programs designed to help you build a better life.
          </p>
        </AnimatedSection>
        
        {/* Program Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {programs.map((program, idx) => (
            <AnimatedSection 
              key={idx} 
              animation="fadeInUp" 
              delay={0.1 + (idx * 0.05)} 
              className={`bg-white p-8 rounded-[24px] border flex flex-col h-full relative overflow-hidden transition-all duration-500 ease-out transform-gpu ${
                program.isActive 
                  ? 'shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-[#C5E0F2]/60 group hover:shadow-[0_30px_60px_rgba(48,42,53,0.15)] hover:-translate-y-4 hover:scale-[1.02] hover:-rotate-1 z-10' 
                  : 'shadow-none border-[#C5E0F2]/30 opacity-[0.85] group hover:border-[#C5E0F2]/60 hover:-translate-y-1 hover:shadow-lg hover:opacity-100 z-0'
              }`}
            >
              {/* Subtle accent line and 3D glowing gradient on hover */}
              {program.isActive && (
                <>
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#C5E0F2] group-hover:bg-[#3A82B8] transition-colors duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#3A82B8]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                </>
              )}
              
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <span className={`font-bold tracking-widest text-xs uppercase ${program.isActive ? 'text-[#3A82B8]' : 'text-[#3A82B8]/60'}`}>
                    {program.category}
                  </span>
                  
                  {program.isActive ? (
                    <span className="bg-[#3A82B8]/10 text-[#3A82B8] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#3A82B8]/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3A82B8] animate-pulse"></span>
                      {program.status}
                    </span>
                  ) : (
                    <span className="bg-[#F2F9FD] text-[#1C3F5E]/40 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-[#C5E0F2]/40">
                      {program.status}
                    </span>
                  )}
                </div>
                
                <h3 className={`text-2xl font-bold font-serif transition-colors ${
                  program.isActive ? 'text-[#1C3F5E] group-hover:text-[#3A82B8]' : 'text-[#1C3F5E]/80 group-hover:text-[#1C3F5E]'
                }`}>
                  {program.name}
                </h3>
                
                <p className={`text-[15px] leading-relaxed ${program.isActive ? 'text-[#1C3F5E]/70' : 'text-[#1C3F5E]/50'}`}>
                  {program.desc}
                </p>
              </div>
              
              <div className="pt-8 mt-auto relative z-10">
                <Link 
                  href={program.link}
                  className={`inline-flex items-center font-bold text-[13px] uppercase tracking-wider transition-all duration-300 ${
                    program.isActive 
                      ? 'text-[#1C3F5E] group-hover:text-[#3A82B8] group-hover:scale-105 origin-left' 
                      : 'text-[#1C3F5E]/50 group-hover:text-[#3A82B8]/70 group-hover:translate-x-1'
                  }`}
                >
                  Explore Program 
                  <span className={`ml-2 transition-transform duration-300 ${program.isActive ? 'group-hover:translate-x-3' : 'group-hover:translate-x-1'}`}>→</span>
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
