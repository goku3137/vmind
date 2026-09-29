import Image from 'next/image';
import Link from 'next/link';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | VMind Counselling Center',
  description: 'Explore our comprehensive psychological and counselling services.',
};

export default function Services() {
  const servicesList = [
    {
      title: "Couple Counselling",
      description: "Strengthening communication and rebuilding connection in your relationship.",
      icon: "💑"
    },
    {
      title: "Relationship Counselling",
      description: "Helping to build stronger and more trusted relationships.",
      icon: "🤝"
    },
    {
      title: "Teenage Parenting",
      description: "Helping teens build confidence and emotional resilience.",
      icon: "🧑‍🎓"
    },
    {
      title: "Postpartum Support",
      description: "Helping new mothers feel supported and understood.",
      icon: "🌸"
    },
    {
      title: "Individual Therapy",
      description: "Guiding you towards clarity and inner strength.",
      icon: "👩"
    },
    {
      title: "NRI Consultation",
      description: "Confidential online counselling from anywhere in the world.",
      icon: "🌍"
    },
    {
      title: "Sexual Wellness",
      description: "Safe support for intimacy and relationship wellbeing.",
      icon: "❤️"
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
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-full flex flex-col items-start transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 group cursor-pointer">
                <div className="text-4xl mb-6 p-4 bg-[#e0efeb] rounded-2xl text-[#0B7A75] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-md">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3 text-gray-900 group-hover:text-[#19A67A] transition-colors">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#00d084] py-16 px-4 text-center text-white overflow-hidden">
        <AnimatedSection animation="zoomIn" className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold font-heading mb-6">Ready to start your journey?</h2>
          <Link 
            href="https://wa.me/918157039987"
            className="inline-block bg-white text-[#00d084] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 hover:scale-105 transition-all w-full sm:w-auto shadow-lg"
          >
            Book an Appointment
          </Link>
        </AnimatedSection>
      </section>
    </div>
  );
}
