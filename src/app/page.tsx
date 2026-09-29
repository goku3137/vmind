import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Counter } from '@/components/Counter';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full relative min-h-[90vh] flex flex-col items-center justify-center py-20 px-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/wp-content/uploads/2026/02/Untitled-design-85.png" 
            alt="Hero Background" 
            fill 
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
          {/* Subtle gradient overlay to make text readable */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <AnimatedSection animation="fadeInUp" className="relative z-10 w-full max-w-5xl mx-auto text-center space-y-8 mt-16">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl" style={{ fontFamily: "'Clicker Script', cursive" }}>
            I&apos;m here to support you - Your Therapist Ranjini vijith
          </h1>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight max-w-4xl mx-auto">
            Helping teenagers, parents, couples, and individuals find clarity, confidence, and emotional balance
          </h2>
          <p className="text-white text-lg md:text-xl font-sans max-w-3xl mx-auto font-medium">
            Life can feel overwhelming at times, especially during teenage years, parenting phases, relationship challenges, or stressful life transitions. You don&apos;t have to navigate it alone.
          </p>
          <div className="pt-8">
            <Link 
              href="https://wa.me/918157039987"
              className="inline-block bg-[#19A67A] text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-[#148C66] hover:scale-105 transition-all uppercase shadow-lg"
            >
              BOOK YOUR APPOINTMENT TODAY
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* WHO WE ARE Section */}
      <section className="w-full bg-[#f8f9fa] py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text & List */}
          <AnimatedSection animation="fadeInLeft" className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center text-[#19A67A] font-bold tracking-widest text-sm uppercase">
                <span className="w-8 h-[2px] bg-[#19A67A] mr-4"></span>
                WHO WE ARE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 leading-tight">
                Learn About Our Professional Psychology Therapy
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 pt-4">
              <div className="space-y-2">
                <h6 className="text-lg font-bold font-heading text-gray-900 flex items-center">
                  <span className="mr-2">💑</span> Couple Counselling
                </h6>
                <p className="text-gray-500 text-sm leading-relaxed">Strengthening communication and rebuilding connection.</p>
              </div>
              <div className="space-y-2">
                <h6 className="text-lg font-bold font-heading text-gray-900 flex items-center">
                  <span className="mr-2">👩</span> Individual Therapy
                </h6>
                <p className="text-gray-500 text-sm leading-relaxed">Guiding you towards clarity and inner strength.</p>
              </div>
              <div className="space-y-2">
                <h6 className="text-lg font-bold font-heading text-gray-900 flex items-center">
                  <span className="mr-2">💑</span> Relationship counselling
                </h6>
                <p className="text-gray-500 text-sm leading-relaxed">Helping to build a stronger and tusted relationships.</p>
              </div>
              <div className="space-y-2">
                <h6 className="text-lg font-bold font-heading text-gray-900 flex items-center">
                  <span className="mr-2">🌍</span> NRI Consultation
                </h6>
                <p className="text-gray-500 text-sm leading-relaxed">Confidential online counselling from anywhere.</p>
              </div>
              <div className="space-y-2">
                <h6 className="text-lg font-bold font-heading text-gray-900 flex items-center">
                  <span className="mr-2">🧑‍🎓</span> Teenage Parenting
                </h6>
                <p className="text-gray-500 text-sm leading-relaxed">Helping teens build confidence and emotional resilience.</p>
              </div>
              <div className="space-y-2">
                <h6 className="text-lg font-bold font-heading text-gray-900 flex items-center">
                  <span className="mr-2">❤️</span> Sexual Wellness Counselling
                </h6>
                <p className="text-gray-500 text-sm leading-relaxed">Safe support for intimacy and relationship wellbeing.</p>
              </div>
              <div className="space-y-2">
                <h6 className="text-lg font-bold font-heading text-gray-900 flex items-center">
                  <span className="mr-2">🌸</span> Postpartum Support
                </h6>
                <p className="text-gray-500 text-sm leading-relaxed">Helping new mothers feel supported and understood.</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Image */}
          <AnimatedSection animation="fadeInRight" className="flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] max-w-lg mx-auto group">
              <Image 
                src="/wp-content/uploads/2026/02/IMG_8055.JPG-scaled.jpeg" 
                alt="Therapist Ranjini Vijith"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-tl-[80px] rounded-br-[80px] rounded-tr-lg rounded-bl-lg shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="mt-8 text-center space-y-1">
              <h3 className="text-3xl font-bold font-heading text-black">Ranjini Vijith -Psychologist</h3>
              <h4 className="text-xl font-bold font-heading text-black">Founder of ORUMA</h4>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Available 24/7 Section */}
      <section className="w-full relative py-24 bg-[#19A67A] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/wp-content/uploads/2026/02/IMG_8055.JPG-scaled.jpeg" alt="Background" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <AnimatedSection animation="fadeInLeft" className="space-y-6">
            <div className="flex items-center text-white tracking-widest text-sm uppercase">
              <span className="w-8 h-[1px] bg-white mr-4"></span>
              AVAILABLE 24/7
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight max-w-md">
              We are Always Ready For A Challenge
            </h2>
            <div className="pt-4">
              <Link 
                href="https://wa.me/918157039987"
                className="inline-block bg-[#FDB813] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#e0a310] hover:scale-105 transition-all uppercase tracking-wider shadow-lg"
              >
                BOOK AN APPOINTMENT
              </Link>
            </div>
          </AnimatedSection>
          <AnimatedSection animation="fadeInRight" className="grid grid-cols-2 gap-x-4 gap-y-12">
            <div className="text-center relative">
              <div className="text-5xl font-bold text-white mb-2 font-heading"><Counter end={406} suffix="+" /></div>
              <h3 className="text-[#FDB813] font-bold text-lg">Satisfied Customers</h3>
            </div>
            <div className="text-center relative">
              <div className="text-5xl font-bold text-white mb-2 font-heading"><Counter end={7} /></div>
              <h3 className="text-[#FDB813] font-bold text-lg">Winning Awards</h3>
            </div>
            <div className="text-center relative">
              <div className="text-5xl font-bold text-white mb-2 font-heading"><Counter end={1000} suffix="+" /></div>
              <h3 className="text-[#FDB813] font-bold text-lg">Sessions Completed</h3>
            </div>
            <div className="text-center relative">
              <div className="text-5xl font-bold text-white mb-2 font-heading"><Counter end={10} suffix="+" /></div>
              <h3 className="text-[#FDB813] font-bold text-lg">Years Of Experience</h3>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY CHOOSE US Section */}
      <section className="w-full py-24 px-4 bg-[#f4f7f6] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fadeInLeft" className="relative w-full aspect-[4/3] max-w-lg mx-auto group">
            <div className="absolute -left-12 bottom-12 w-32 h-48 bg-[url('/wp-content/uploads/2026/02/rectangle-dots.png')] bg-contain bg-no-repeat opacity-50 -z-10 transition-transform duration-500 group-hover:-translate-x-4"></div>
            <Image 
              src="/wp-content/uploads/2026/02/IMG_7961.JPG-scaled.jpeg" 
              alt="Ranjini Vijith - Psychologist" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-tr-[80px] rounded-bl-[80px] rounded-tl-lg rounded-br-lg shadow-xl group-hover:scale-105 transition-transform duration-500" 
            />
          </AnimatedSection>
          <AnimatedSection animation="fadeInRight" className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center text-[#19A67A] font-bold tracking-widest text-sm uppercase">
                <span className="w-8 h-[2px] bg-[#19A67A] mr-4"></span>
                WHY CHOOSE US
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 leading-tight">Learn about us</h2>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">Powerful Hypnotherapy & Access Bars methods for lasting transformation</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <ul className="space-y-4">
                <li className="flex items-center text-sm font-bold text-gray-800">
                  <span className="text-[#19A67A] mr-3 text-xl">💚</span>
                  Couple and Relationship Specialist
                </li>
                <li className="flex items-center text-sm font-bold text-gray-800">
                  <span className="text-[#19A67A] mr-3 text-xl">💚</span>
                  Confidential & Non-Judgmental
                </li>
                <li className="flex items-center text-sm font-bold text-gray-800">
                  <span className="text-[#19A67A] mr-3 text-xl">💚</span>
                  Teen & Parent Specialist
                </li>
              </ul>
              <ul className="space-y-4">
                <li className="flex items-center text-sm font-bold text-gray-800">
                  <span className="text-[#19A67A] mr-3 text-xl">💚</span>
                  Trust Healing & Therapist
                </li>
                <li className="flex items-center text-sm font-bold text-gray-800">
                  <span className="text-[#19A67A] mr-3 text-xl">💚</span>
                  Online & Offline Sessions
                </li>
                <li className="flex items-center text-sm font-bold text-gray-800">
                  <span className="text-[#19A67A] mr-3 text-xl">💚</span>
                  Personalized Therapy Plans
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <Link 
                href="https://wa.me/918157039987"
                className="inline-block bg-[#19A67A] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#148C66] hover:scale-105 transition-all uppercase tracking-wide shadow-lg"
              >
                BOOK YOUR CONSULTATION NOW
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full bg-[#f4f7f6] py-20 px-4">
        <AnimatedSection animation="fadeInUp" className="max-w-7xl mx-auto space-y-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900">Hear from our clients</h2>
          <h6 className="text-xl text-[#19A67A] font-bold">- Happy clients, Happy Us</h6>
        </AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <AnimatedSection animation="fadeInUp" delay={0.1} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 relative space-y-6 hover:shadow-lg transition-shadow">
            <div className="flex text-[#FDB813] text-xl gap-1">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-gray-500 leading-relaxed min-h-[120px]">
              Couple counselling helped us improve our communication and reconnect emotionally. The sessions were comfortable, structured, and very insightful.
            </p>
            <div className="flex items-center pt-4">
              <div className="w-12 h-12 bg-[#48C79C] rounded-full flex items-center justify-center text-white text-2xl mr-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Aarav & Saloni</h4>
                <p className="text-xs text-gray-400">Married client</p>
              </div>
            </div>
          </AnimatedSection>
          {/* Testimonial 2 */}
          <AnimatedSection animation="fadeInUp" delay={0.2} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 relative space-y-6 hover:shadow-lg transition-shadow">
            <div className="flex text-[#FDB813] text-xl gap-1">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-gray-500 leading-relaxed min-h-[120px]">
              Postpartum support sessions helped me manage my emotions and regain confidence as a new mother. I felt truly understood and supported.
            </p>
            <div className="flex items-center pt-4">
              <div className="w-12 h-12 bg-[#48C79C] rounded-full flex items-center justify-center text-white text-2xl mr-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Ashwini</h4>
                <p className="text-xs text-gray-400">New Mother</p>
              </div>
            </div>
          </AnimatedSection>
          {/* Testimonial 3 */}
          <AnimatedSection animation="fadeInUp" delay={0.3} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 relative space-y-6 hover:shadow-lg transition-shadow">
            <div className="flex text-[#FDB813] text-xl gap-1">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-gray-500 leading-relaxed min-h-[120px]">
              The teenage counselling sessions made a big difference in my son&apos;s behavior and stress levels. We now communicate much better as a family.
            </p>
            <div className="flex items-center pt-4">
              <div className="w-12 h-12 bg-[#48C79C] rounded-full flex items-center justify-center text-white text-2xl mr-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Anonymous</h4>
                <p className="text-xs text-gray-400">Parent</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Explore Services CTA */}
      <section className="w-full bg-[#E8F2EF] py-16 px-4 relative overflow-hidden">
        <AnimatedSection animation="fadeInUp" className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center text-[#19A67A] font-bold tracking-widest text-sm uppercase">
              <span className="w-8 h-[2px] bg-[#19A67A] mr-4"></span>
              We will help you with our
            </div>
            <h2 className="text-4xl font-bold font-heading text-gray-900 leading-tight">
              Popular Psychological Services
            </h2>
          </div>
          <div className="mt-8 md:mt-0">
            <Link 
              href="/service/"
              className="inline-block bg-[#19A67A] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#148C66] hover:scale-105 transition-all uppercase tracking-wide shadow-lg"
            >
              EXPLORE MORE SERVICES
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Final Appointment Form Section */}
      <section className="w-full bg-white py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection animation="fadeInLeft" className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-100 group">
            <Image 
              src="/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-9.35.10-PM.jpeg" 
              alt="Booking Background" 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </AnimatedSection>
          <AnimatedSection animation="fadeInRight" className="space-y-8 bg-white p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.05)] rounded-2xl -ml-0 lg:-ml-24 relative z-10">
            <div className="space-y-4">
              <div className="flex items-center text-[#19A67A] font-bold tracking-widest text-sm uppercase">
                <span className="w-8 h-[2px] bg-[#19A67A] mr-4"></span>
                WHO WE ARE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900">Book An Appointment Now</h2>
            </div>
            <form className="space-y-6 pt-4">
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Your name</label>
                <input type="text" className="w-full bg-[#f8f9fa] border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#19A67A] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Your email</label>
                <input type="email" className="w-full bg-[#f8f9fa] border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#19A67A] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Phone</label>
                <input type="tel" className="w-full bg-[#f8f9fa] border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#19A67A] outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-600">Subject</label>
                <input type="text" className="w-full bg-[#f8f9fa] border-none rounded-md px-4 py-3 focus:ring-2 focus:ring-[#19A67A] outline-none" />
              </div>
              <div className="pt-4">
                <button type="button" className="bg-[#19A67A] text-white px-10 py-4 rounded-full font-bold tracking-wide hover:bg-[#148C66] hover:scale-105 transition-all uppercase shadow-lg">
                  SUBMIT
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
