"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: "your@email.com",
    href: "mailto:your@email.com",
    color: "#ec4899",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Gaibandha, Bangladesh",
    href: "#",
    color: "#db2777",
  },
  {
    icon: SiUpwork,
    label: "Upwork",
    value: "Top Rated Freelancer",
    href: "https://www.upwork.com/freelancers/~abdullah",
    color: "#6fda44",
  },
];

const socials = [
  {
    icon: FiGithub,
    label: "GitHub",
    href: "https://github.com/masumgaibandha",
    color: "#1a1a1a",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "#0077b5",
  },
  {
    icon: FiMail,
    label: "Email",
    href: "mailto:your@email.com",
    color: "#ec4899",
  },
  {
    icon: SiUpwork,
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~abdullah",
    color: "#6fda44",
  },
];

const Contact = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult("");
    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    setLoading(false);
    if (data.success) {
      setResult("success");
      e.target.reset();
    } else {
      setResult("error");
    }
  };

  return (
    <section
      id="contact"
      className="w-full py-24 px-6 relative overflow-hidden bg-white"
    >
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ec4899]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f9a8d4]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[#ec4899] font-body">
            Get in touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-center text-gray-900">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#f9a8d4]">
              Me
            </span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#ec4899] to-[#f9a8d4]" />
          <p className="text-gray-500 font-body text-center max-w-xl mt-2">
            Have a project in mind or want to discuss cold email outreach?
            I&apos;m available and ready — let&apos;s build something great
            together.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-2xl font-bold text-gray-900">
              Let&apos;s work{" "}
              <span className="text-[#ec4899]">together</span>
            </h3>
            <p className="text-gray-500 font-body text-sm leading-relaxed">
              Whether you need a full-stack web application, a frontend
              redesign, a backend API, or a targeted B2B cold email campaign — I
              am here to help. Reach out and I will get back to you within 0–4
              hours.
            </p>

            {/* Contact Cards */}
            <div className="flex flex-col gap-4">
              {contactInfo.map((info) => (
                <Link
                  key={info.label}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    info.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="flex items-center gap-4 bg-[#fdf2f8] border border-[#fce7f3] rounded-xl px-5 py-4 hover:border-[#ec4899]/40 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${info.color}15` }}
                  >
                    <info.icon
                      className="text-lg"
                      style={{ color: info.color }}
                    />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-body">
                      {info.label}
                    </p>
                    <p className="text-gray-800 text-sm font-medium font-body group-hover:text-[#ec4899] transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-xs font-body mb-4 uppercase tracking-widest">
                Find me on
              </p>
              <div className="flex items-center gap-4">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-[#fdf2f8] border border-[#fce7f3] flex items-center justify-center hover:border-[#ec4899]/40 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
                    style={{ color: social.color }}
                  >
                    <social.icon className="text-lg" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/30 bg-green-50 text-green-600 text-xs font-medium w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for new projects right now
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="bg-[#fdf2f8] border border-[#fce7f3] rounded-2xl p-8 card-shadow">
            <h3 className="font-display text-xl font-bold mb-6 text-gray-900">
              Send a message
            </h3>
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 text-xs font-body uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Abdullah"
                    className="bg-white border border-[#fce7f3] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 font-body outline-none focus:border-[#ec4899] transition-colors duration-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-gray-500 text-xs font-body uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@email.com"
                    className="bg-white border border-[#fce7f3] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 font-body outline-none focus:border-[#ec4899] transition-colors duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-xs font-body uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Project inquiry / Collaboration"
                  className="bg-white border border-[#fce7f3] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 font-body outline-none focus:border-[#ec4899] transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-500 text-xs font-body uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-white border border-[#fce7f3] rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-300 font-body outline-none focus:border-[#ec4899] transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white text-sm font-medium transition-all duration-300 pink-glow disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </button>

              {/* Result */}
              {result === "success" && (
                <p className="text-green-500 text-sm font-body text-center">
                  ✅ Message sent successfully! I&apos;ll get back to you soon.
                </p>
              )}
              {result === "error" && (
                <p className="text-red-400 text-sm font-body text-center">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;