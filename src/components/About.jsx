import Image from "next/image";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

const highlights = [
  { value: "15+", label: "Projects Deployed" },
  { value: "240+", label: "Upwork Jobs" },
  { value: "92%", label: "Job Success" },
  { value: "10+", label: "Years Experience" },
];

const quickInfo = [
  { label: "Location", value: "Gaibandha, Bangladesh" },
  { label: "Availability", value: "Open to Work ✅" },
  { label: "Upwork", value: "Top Rated 🏆" },
  { label: "Languages", value: "English & Bengali" },
];

const About = () => {
  return (
    <section id="about" className="w-full py-24 px-6 relative overflow-hidden bg-white">
      {/* Background blob */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ec4899]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[#ec4899] font-body">
            Get to know me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-center text-gray-900">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#f9a8d4]">
              Me
            </span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#ec4899] to-[#f9a8d4]" />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image + Stats */}
          <div className="flex flex-col items-center gap-8">
            {/* Image */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ec4899] to-[#f9a8d4] p-[2px]">
                <div className="w-full h-full rounded-2xl bg-white" />
              </div>
              <Image
                src="/profile-img.png"
                alt="Abdullah Al Masum"
                fill
                className="object-cover rounded-2xl p-[2px]"
              />
              {/* Upwork badge */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-gray-100 rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
                <SiUpwork className="text-[#6fda44] text-lg" />
                <div>
                  <p className="text-xs font-bold text-gray-800">Top Rated</p>
                  <p className="text-[10px] text-gray-400">92% Job Success</p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="bg-[#fdf2f8] border border-[#fce7f3] rounded-xl p-4 text-center hover:border-[#ec4899]/40 hover:shadow-md transition-all duration-300"
                >
                  <p className="font-display text-2xl font-bold text-[#ec4899]">
                    {item.value}
                  </p>
                  <p className="text-gray-400 text-xs font-body mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Bio + Info */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-2xl font-bold text-gray-900">
              Full-Stack Developer &{" "}
              <span className="text-[#ec4899]">Cold Email Expert</span>
            </h3>

            <p className="text-gray-500 font-body text-base leading-relaxed">
              I&apos;m{" "}
              <span className="text-gray-900 font-medium">Abdullah Al Masum</span>,
              a Full-Stack Web Developer from Gaibandha, Bangladesh. I
              specialize in building fast, modern, and scalable web applications
              using React, Next.js, Node.js, Express, MongoDB, and Firebase.
            </p>

            <p className="text-gray-500 font-body text-base leading-relaxed">
              I have successfully built and deployed{" "}
              <span className="text-gray-900 font-medium">
                15+ real-world projects
              </span>{" "}
              on Vercel, Netlify, and GitHub. Alongside development, I am a{" "}
              <span className="text-gray-900 font-medium">
                Top Rated freelancer on Upwork
              </span>{" "}
              with 10+ years of experience in B2B cold email outreach and lead
              generation — helping businesses book qualified calls with 8–15%
              reply rates.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-3">
              {quickInfo.map((info) => (
                <div
                  key={info.label}
                  className="bg-[#fdf2f8] border border-[#fce7f3] rounded-xl px-4 py-3"
                >
                  <p className="text-gray-400 text-xs font-body mb-1">
                    {info.label}
                  </p>
                  <p className="text-gray-800 text-sm font-medium font-body">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-2">
              <Link
                href="/sample-resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ec4899] hover:bg-[#db2777] text-white text-sm font-medium transition-all duration-300 pink-glow"
              >
                <FiDownload />
                Download CV
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 hover:border-[#ec4899] text-gray-700 text-sm font-medium transition-all duration-300 hover:bg-[#fdf2f8]"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;