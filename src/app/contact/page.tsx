import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { AnimatedSection } from '@/components/AnimatedSection';

export const metadata: Metadata = {
  title: 'Contact Us | VMind Counselling Center',
  description: 'Book an appointment with Ranjini Vijith at VMind Counselling Center.',
};

export default function Contact() {
  return (
    <div className="flex flex-col w-full min-h-[80vh] relative overflow-hidden bg-[#e0efeb]">
      {/* Slanted Background Accent */}
      <div className="absolute top-0 right-0 w-full h-[30vh] md:h-[50vh] bg-white opacity-40 transform origin-top-right -skew-y-3 z-0"></div>
      
      {/* Contact Content */}
      <section className="w-full py-16 md:py-24 px-4 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Image */}
          <AnimatedSection animation="fadeInLeft" className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
            <Image 
              src="/wp-content/uploads/2026/02/IMG_8055.JPG-scaled.jpeg" 
              alt="Therapist Ranjini Vijith" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </AnimatedSection>

          {/* Right Column: Contact Form */}
          <AnimatedSection animation="fadeInRight" className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center text-[#19A67A] font-bold tracking-widest text-sm uppercase">
                <span className="w-8 h-[2px] bg-[#19A67A] mr-4"></span>
                Fill the form to contact us now
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-heading text-gray-900">
                Book An Appointment Now
              </h1>
            </div>

            <form className="space-y-6 pt-4 max-w-lg">
              <div className="space-y-2">
                <label className="text-sm text-gray-800 font-medium">Your name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#f4f7f6] border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-[#19A67A] outline-none shadow-sm" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-800 font-medium">Your email</label>
                <input 
                  type="email" 
                  className="w-full bg-[#f4f7f6] border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-[#19A67A] outline-none shadow-sm" 
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-800 font-medium">Subject</label>
                <input 
                  type="text" 
                  className="w-full bg-[#f4f7f6] border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-[#19A67A] outline-none shadow-sm" 
                />
              </div>
              
              <div className="pt-6">
                <button 
                  type="button" 
                  className="bg-[#19A67A] text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-[#148C66] hover:scale-105 transition-all uppercase shadow-lg"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Jagged bottom border decoration */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[url('/wp-content/uploads/2026/02/jagged-border.png')] bg-repeat-x z-20"></div>
    </div>
  );
}

