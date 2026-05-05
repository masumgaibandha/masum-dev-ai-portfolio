import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";
import { TbShieldLock } from "react-icons/tb";

const skillCategories = [
  {
    category: "Frontend",
    color: "#ec4899",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS3", icon: SiCss, color: "#1572b6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "React", icon: SiReact, color: "#61dafb" },
      { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
    ],
  },
  {
    category: "Backend",
    color: "#db2777",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#111827" },
      { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
      { name: "Firebase", icon: SiFirebase, color: "#ffca28" },
      { name: "Better Auth", icon: TbShieldLock, color: "#ec4899" },
    ],
  },
  {
    category: "Tools & Deployment",
    color: "#f472b6",
    skills: [
      { name: "Git", icon: SiGit, color: "#f05032" },
      { name: "GitHub", icon: SiGithub, color: "#111827" },
      { name: "Vercel", icon: SiVercel, color: "#111827" },
      { name: "Netlify", icon: SiNetlify, color: "#00c7b7" },
    ],
  },
  {
    category: "Cold Email & Outreach",
    color: "#be185d",
    skills: [
      { name: "Instantly", icon: SiFirebase, color: "#ec4899" },
      { name: "Smartlead", icon: SiFirebase, color: "#db2777" },
      { name: "Apollo.io", icon: SiFirebase, color: "#be185d" },
      { name: "HubSpot", icon: SiFirebase, color: "#ff7a59" },
      { name: "LinkedIn Sales Nav", icon: SiFirebase, color: "#0077b5" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-24 px-6 relative overflow-hidden bg-[#fdf2f8]">
      {/* Background blob */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ec4899]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[#ec4899] font-body">
            What I work with
          </span>

          <h2 className="font-display text-4xl sm:text-5xl font-bold text-center text-gray-900">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#f9a8d4]">
              Skills
            </span>
          </h2>

          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#ec4899] to-[#f9a8d4]" />

          <p className="text-gray-500 font-body text-center max-w-xl mt-2">
            A full toolkit for building modern web apps — from pixel-perfect
            frontends to scalable backends and outreach systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white border border-[#fce7f3] rounded-2xl p-6 hover:border-[#ec4899]/40 hover:shadow-md transition-all duration-300 card-shadow"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h3
                  className="font-display text-lg font-semibold"
                  style={{ color: cat.color }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Skill Items */}
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 bg-[#fdf2f8] border border-[#fce7f3] rounded-xl px-3 py-2 hover:border-[#ec4899]/40 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <skill.icon
                      className="text-lg"
                      style={{ color: skill.color }}
                    />
                    <span className="text-gray-600 text-sm font-body">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-10 bg-white border border-[#fce7f3] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6 card-shadow">
          <div>
            <h4 className="font-display text-lg font-semibold mb-1 text-gray-900">
              Always learning & growing
            </h4>
            <p className="text-gray-500 font-body text-sm">
              Constantly exploring new tools and best practices.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {[
              { label: "Frontend", pct: "90%" },
              { label: "Backend", pct: "75%" },
              { label: "Outreach", pct: "95%" },
            ].map((bar) => (
              <div key={bar.label} className="flex flex-col items-center gap-1">
                <span className="text-xs text-gray-400">{bar.label}</span>
                <div className="w-24 h-2 bg-[#fce7f3] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#ec4899] to-[#f9a8d4]"
                    style={{ width: bar.pct }}
                  />
                </div>
                <span className="text-xs text-gray-500">{bar.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;