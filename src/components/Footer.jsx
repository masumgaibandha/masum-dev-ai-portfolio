import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
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

const services = [
  { label: "Frontend Development", href: "#services" },
  { label: "Backend & API", href: "#services" },
  { label: "Full-Stack Web Apps", href: "#services" },
  { label: "Cold Email Outreach", href: "#services" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-[#fce7f3] bg-[#fdf2f8] pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link
              href="#home"
              className="font-display text-2xl font-bold tracking-tight w-fit text-gray-900"
            >
              Masum<span className="text-[#ec4899]">Dev</span>
              <span className="text-[#ec4899]">.</span>
            </Link>
            <p className="text-gray-500 font-body text-sm leading-relaxed max-w-sm">
              Full-Stack Web Developer & B2B Cold Email Expert from Gaibandha,
              Bangladesh. Building modern web apps and helping businesses grow
              through targeted outreach.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-[#fce7f3] flex items-center justify-center hover:border-[#ec4899]/40 hover:-translate-y-0.5 hover:shadow-sm transition-all duration-300"
                  style={{ color: social.color }}
                >
                  <social.icon className="text-base" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-sm font-semibold text-gray-900 uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-[#ec4899] text-sm font-body transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-display text-sm font-semibold text-gray-900 uppercase tracking-widest">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-gray-500 hover:text-[#ec4899] text-sm font-body transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#fce7f3] mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs font-body text-center sm:text-left">
            © {new Date().getFullYear()} Abdullah Al Masum. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs font-body flex items-center gap-1">
            Built with <FiHeart className="text-[#ec4899] text-xs" /> using
            Next.js & Tailwind CSS
          </p>
          <Link
            href="#home"
            className="text-xs font-body text-gray-500 hover:text-[#ec4899] transition-colors duration-300 border border-[#fce7f3] hover:border-[#ec4899]/40 px-4 py-1.5 rounded-full"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;