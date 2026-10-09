import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Metadata } from 'next';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services | VMind Counselling Center',
  description: 'Explore our comprehensive psychological and counselling services.',
};

export default function Services() {
  const servicesList = [
    {
      id: "couple-counselling",
      title: "Couple Counselling",
      description: "Strengthening communication and rebuilding connection in your relationship.",
      icon: "💑",
      price: "₹1,999"
    },
    {
      id: "relationship-counselling",
      title: "Relationship Counselling",
      description: "Helping to build stronger and more trusted relationships.",
      icon: "🤝",
      price: "₹1,499"
    },
    {
      id: "teenage-parenting",
      title: "Teenage Parenting",
      description: "Helping teens build confidence and emotional resilience.",
      icon: "🧑‍🎓",
      price: "₹1,499"
    },
    {
      id: "postpartum-support",
      title: "Postpartum Support",
      description: "Helping new mothers feel supported and understood.",
      icon: "🌸",
      price: "₹1,499"
    },
    {
      id: "individual-therapy",
      title: "Individual Therapy",
      description: "Guiding you towards clarity and inner strength.",
      icon: "👩",
      price: "₹1,499"
    },
    {
      id: "nri-consultation",
      title: "NRI Consultation",
      description: "Confidential online counselling from anywhere in the world.",
      icon: "🌍",
      price: "₹2,499"
    },
    {
      id: "sexual-wellness",
      title: "Sexual Wellness",
      description: "Safe support for intimacy and relationship wellbeing.",
      icon: "❤️",
      price: "₹1,999"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="w-full bg-[#f8f9fa] pt-32 pb-16 px-4 text-center overflow-hidden">
        <AnimatedSection animation="fadeInUp" className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold font-heading text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            We offer a range of professional psychological therapies tailored to meet your unique needs and challenges.
          </p>
        </AnimatedSection>
      </section>

      {/* Services Grid */}
      <section className="w-full py-20 px-4 overflow-hidden" style={{ perspective: 1200 }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col items-start transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 group">
                <div className="w-full flex items-center justify-between mb-6">
                  <div className="text-4xl p-4 bg-[#e0efeb] rounded-2xl text-[#0B7A75] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md">
                    {service.icon}
                  </div>
                  <span className="font-serif font-bold text-lg text-[#0B7A75] bg-[#e0efeb]/60 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold font-heading mb-3 text-gray-900 group-hover:text-[#19A67A] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <div className="w-full pt-4 border-t border-gray-100 flex items-center justify-between">
                  <Link 
                    href={`/razorpay?item=${service.id}`}
                    className="inline-flex items-center gap-1.5 font-bold text-sm text-[#0B7A75] hover:text-[#19A67A] transition-colors group-hover:translate-x-1 duration-200"
                  >
                    Book Online <ArrowRight size={16} />
                  </Link>

                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <ShieldCheck size={14} className="text-[#19A67A]" /> Razorpay
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#00d084] py-16 px-4 text-center text-white overflow-hidden">
        <AnimatedSection animation="zoomIn" className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold font-heading mb-6">Ready to start your journey?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/razorpay?item=individual-therapy"
              className="inline-block bg-white text-[#00d084] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all w-full sm:w-auto shadow-lg"
            >
              Book Consultation via Razorpay
            </Link>
            <Link 
              href="https://wa.me/918157039987"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#008f5d] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#007b50] hover:scale-105 transition-all w-full sm:w-auto shadow-lg"
            >
              WhatsApp Us
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
