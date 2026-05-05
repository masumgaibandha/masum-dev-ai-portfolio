import Link from "next/link";
import { FiCode, FiServer, FiLayout, FiMail } from "react-icons/fi";

const services = [
  {
    icon: FiLayout,
    title: "Frontend Development",
    tag: "React & Next.js",
    color: "#ec4899",
    description:
      "Pixel-perfect, fully responsive UIs built with React, Next.js and Tailwind CSS. Fast load times, clean code, and smooth user experiences across all devices.",
    features: [
      "React & Next.js Apps",
      "Tailwind CSS Styling",
      "Responsive Design",
      "Dark / Light Mode",
      "Performance Optimized",
    ],
  },
  {
    icon: FiServer,
    title: "Backend & API Development",
    tag: "Node.js & MongoDB",
    color: "#db2777",
    description:
      "Robust REST APIs, authentication systems and database architecture using Node.js, Express, MongoDB and Firebase. Secure, scalable and production-ready.",
    features: [
      "REST API Design",
      "Node.js & Express",
      "MongoDB & Firebase",
      "Authentication (Better Auth)",
      "Secure & Scalable",
    ],
  },
  {
    icon: FiCode,
    title: "Full-Stack Web Apps",
    tag: "End-to-End Development",
    color: "#be185d",
    description:
      "Complete web applications from design to deployment — frontend, backend, database, authentication and hosting. I handle the full stack so you don't have to.",
    features: [
      "Full-Stack Next.js Apps",
      "Database Design",
      "Auth & User Management",
      "Vercel & Netlify Deploy",
      "GitHub Repository",
    ],
  },
  {
    icon: FiMail,
    title: "Cold Email Outreach",
    tag: "B2B Lead Generation",
    color: "#f472b6",
    description:
      "End-to-end B2B cold email systems — lead lists, inbox setup, deliverability, sequences and reply management. Helping businesses book qualified calls with 8–15% reply rates.",
    features: [
      "Verified Lead Lists",
      "Inbox & Domain Setup",
      "SPF / DKIM / DMARC",
      "Instantly & Smartlead",
      "8–15% Reply Rates",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-24 px-6 relative overflow-hidden bg-white"
    >
      {/* Background blobs */}
      <div className="absolute top-20 right-0 w-80 h-80 bg-[#ec4899]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f9a8d4]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[#ec4899] font-body">
            What I offer
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-center text-gray-900">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#f9a8d4]">
              Services
            </span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#ec4899] to-[#f9a8d4]" />
          <p className="text-gray-500 font-body text-center max-w-xl mt-2">
            From building full-stack web applications to running targeted B2B
            outreach campaigns — I deliver results end-to-end.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-white border border-[#fce7f3] rounded-2xl p-7 flex flex-col gap-5 hover:border-[#ec4899]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 card-shadow"
            >
              {/* Icon + Tag */}
              <div className="flex items-center justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <service.icon
                    className="text-2xl"
                    style={{ color: service.color }}
                  />
                </div>
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full border font-body"
                  style={{
                    color: service.color,
                    borderColor: `${service.color}40`,
                    backgroundColor: `${service.color}10`,
                  }}
                >
                  {service.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 font-body text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2 mt-auto">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600 font-body"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: service.color }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Bottom CTA */}
              <Link
                href="#contact"
                className="mt-2 inline-flex items-center gap-2 text-sm font-medium transition-all duration-300"
                style={{ color: service.color }}
              >
                Get started
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-10 bg-gradient-to-r from-[#fdf2f8] to-[#fce7f3] border border-[#fce7f3] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-display text-xl font-bold mb-2 text-gray-900">
              Have a project in mind?
            </h4>
            <p className="text-gray-500 font-body text-sm">
              Let&apos;s work together and build something great. I&apos;m
              available for freelance projects right now.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 px-8 py-3 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white text-sm font-medium transition-all duration-300 pink-glow"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;