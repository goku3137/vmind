import React from 'react';

export function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-[#19A67A] text-white py-16 px-4 relative overflow-hidden">
        {/* Subtle dot pattern background */}
        <div className="absolute right-0 bottom-0 w-64 h-64 bg-[url('/wp-content/uploads/2026/02/rectangle-dots.png')] bg-contain bg-no-repeat opacity-20 -z-0 transform rotate-180"></div>
        <div className="absolute left-0 top-0 w-64 h-64 bg-[url('/wp-content/uploads/2026/02/rectangle-dots.png')] bg-contain bg-no-repeat opacity-20 -z-0"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10 pl-4 md:pl-12">
          {/* Left Column */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white tracking-wide">RANJINI VIJITH -Psychologist</h2>
            <div className="space-y-3">
              <h3 className="text-xl font-bold font-heading text-white">Founder of ORUMA</h3>
              <p className="text-white text-lg">Clinical Hypnotherapist & Clinical Access Bars Therapist</p>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-6 md:pl-16">
            <div className="flex items-center text-white tracking-widest text-sm uppercase font-bold">
              <span className="w-8 h-[1px] bg-white mr-4"></span>
              Contact Us
            </div>
            <ul className="space-y-6 pt-2">
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                KERALA
              </li>
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                renjinivijith9987@gmail.com
              </li>
              <li className="flex items-center text-white">
                <svg className="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 8157039987
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#f4f7f6] py-6 text-center text-gray-800 font-medium text-sm border-t border-gray-200">
        <p>Copyright &copy; 2026 Ranjini Vijith. All rights reserved</p>
      </div>
    </footer>
  );
}
