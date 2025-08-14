import React from "react";
import { Link } from "react-router-dom";

// Service data
const servicesData = [
  {
    title: "Career Coaching",
    description:
      "Personalized guidance to help you define goals, navigate challenges, and build a fulfilling career path.",
    href: "/career-coaching",
  },
  {
    title: "Resume Writing",
    description:
      "Professionally crafted resumes that highlight your strengths and get you noticed by hiring managers.",
    href: "/resume-writing",
  },
  {
    title: "LinkedIn Optimization",
    description:
      "Transform your LinkedIn profile to boost visibility, credibility, and attract career opportunities.",
    href: "/linkedin-optimization",
  },
  {
    title: "Executive Coaching",
    description:
      "Strategic coaching for senior leaders to sharpen leadership skills, decision-making, and career growth.",
    href: "/",
  },
  {
    title: "Recent Grad Coaching",
    description:
      "Tailored support to help new graduates land their first job and start strong in their careers.",
    href: "/",
  },
  {
    title: "Job Interview Coaching",
    description:
      "One-on-one coaching to master interview techniques, boost confidence, and secure job offers.",
    href: "/job-interview-preparation",
  },
];

const ServicesGrid = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We provide tailored coaching and career development services to
            help you achieve your professional goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group rounded-3xl overflow-hidden shadow-md bg-[#060C1D] transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="h-full flex flex-col p-8">
                <h3 className="text-yellow-400 font-bold text-2xl group-hover:text-yellow-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mt-4 text-base leading-relaxed flex-grow">
                  {service.description}
                </p>
                <span className="mt-6 inline-block text-yellow-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
