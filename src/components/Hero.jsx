import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden bg-white"
    >
      {/* Background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#ec4899]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#f9a8d4]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-32 flex flex-col items-center text-center gap-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ec4899]/30 bg-[#fdf2f8] text-[#ec4899] text-xs font-medium tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-[#ec4899] animate-pulse" />
          Available for freelance work
        </div>

        {/* Profile Image */}
        <div className="relative mt-2">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-[#ec4899]/50 pink-glow">
            <Image
              src="/profile-img.png"
              alt="Abdullah Al Masum"
              width={112}
              height={112}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Online dot */}
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white" />
        </div>

        {/* Heading */}
        <div className="flex flex-col gap-2">
          <p className="text-gray-500 text-lg font-body">
            Hi, I&apos;m Abdullah Al Masum 👋
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900">
            Full-Stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#f9a8d4]">
              Web
            </span>{" "}
            Developer
          </h1>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#ec4899]">
            & B2B Cold Email Expert
          </h2>
        </div>

        {/* Description */}
        <p className="max-w-xl text-gray-500 font-body text-base leading-relaxed">
          I build fast, scalable web apps with{" "}
          <span className="text-gray-900 font-medium">
            React, Next.js, Node.js & MongoDB
          </span>{" "}
          — and help B2B companies book qualified calls through
          deliverability-safe{" "}
          <span className="text-gray-900 font-medium">cold email outreach</span>.
          15+ projects deployed. Top Rated on Upwork.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            href="#work"
            className="px-8 py-3 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white font-medium text-sm transition-all duration-300 pink-glow"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 rounded-full border border-gray-200 hover:border-[#ec4899] text-gray-700 font-medium text-sm transition-all duration-300 hover:bg-[#fdf2f8]"
          >
            Contact Me
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="px-8 py-3 rounded-full border border-[#ec4899]/40 hover:border-[#ec4899] text-[#ec4899] font-medium text-sm transition-all duration-300 hover:bg-[#fdf2f8]"
          >
            Download CV
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-5 mt-4">
          <Link
            href="https://github.com/masumgaibandha"
            target="_blank"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-300 text-xl"
          >
            <FiGithub />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-300 text-xl"
          >
            <FiLinkedin />
          </Link>
          <Link
            href="mailto:your@email.com"
            className="text-gray-400 hover:text-gray-900 transition-colors duration-300 text-xl"
          >
            <FiMail />
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~abdullah"
            target="_blank"
            className="text-gray-400 hover:text-[#6fda44] transition-colors duration-300 text-xl"
          >
            <SiUpwork />
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-8 pt-8 border-t border-gray-100 w-full max-w-xl">
          {[
            { value: "15+", label: "Projects Deployed" },
            { value: "10+", label: "Years Experience" },
            { value: "240+", label: "Upwork Jobs" },
            { value: "92%", label: "Job Success" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-display text-2xl font-bold text-[#ec4899]">
                {stat.value}
              </span>
              <span className="text-gray-400 text-xs font-body">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;