import Link from "next/link";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "Keen Keeper",
    description:
      "A full-stack task and productivity management app with authentication, real-time updates and a clean dashboard UI.",
    tags: ["Next.js", "MongoDB", "Authentication"],
    category: "Full-Stack",
    color: "#ec4899",
    liveLink: "https://keen-keeper-f3ks.vercel.app/",
    gitLink: "https://github.com/masumgaibandha/keen-keeper",
  },
  {
    title: "Asset Verse",
    description:
      "A comprehensive asset management platform built with React, Firebase and Node.js — supports user roles and real-time data.",
    tags: ["React", "Firebase", "Node.js"],
    category: "Full-Stack",
    color: "#db2777",
    liveLink: "https://asset-verse-b5fc2.web.app/",
    gitLink: "https://github.com/masumgaibandha/asset-verse-server",
  },
  {
    title: "Tile Vista",
    description:
      "An elegant e-commerce platform for tiles and home décor. Features product listings, filtering and a smooth checkout flow.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS"],
    category: "Full-Stack",
    color: "#be185d",
    liveLink: "https://tile-vista.vercel.app/",
    gitLink: "https://github.com/masumgaibandha/tile-vista",
  },
  {
    title: "English Janala",
    description:
      "An interactive English learning platform for Bangladeshi users with lessons, vocabulary and progress tracking.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    category: "Frontend",
    color: "#f472b6",
    liveLink: "https://english-janala-masum.netlify.app/",
    gitLink: "https://github.com/masumgaibandha/english-janala",
  },
  {
    title: "Hero Apps",
    description:
      "A multi-feature web application showcasing various React components, hooks and modern UI patterns.",
    tags: ["React", "Tailwind CSS"],
    category: "Frontend",
    color: "#ec4899",
    liveLink: "https://hero-apps-masum.netlify.app/",
    gitLink: "https://github.com/masumgaibandha/hero-apps",
  },
  {
    title: "Toy Topia",
    description:
      "A full-stack toy marketplace where users can browse, list and purchase toys with authentication and MongoDB backend.",
    tags: ["React", "Node.js", "MongoDB"],
    category: "Full-Stack",
    color: "#db2777",
    liveLink: "https://toytopia-masum.netlify.app/",
    gitLink: "https://github.com/masumgaibandha/toy-topia",
  },
  {
    title: "Habit Tracker BD",
    description:
      "A daily habit tracking app with streak counters, progress visualization and local persistence.",
    tags: ["React", "Tailwind CSS"],
    category: "Frontend",
    color: "#be185d",
    liveLink: "https://habittrackerbd.netlify.app/",
    gitLink: "https://github.com/masumgaibandha/habit-tracker-clients",
  },
  {
    title: "Dragon News",
    description:
      "A modern news portal with category filtering, Firebase authentication and a fully responsive layout.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    category: "Frontend",
    color: "#f472b6",
    liveLink: "https://dragon-news-a5117.web.app/category/1",
    gitLink: "https://github.com/masumgaibandha/dragon-news",
  },
  {
    title: "Book Vibe",
    description:
      "A book discovery and review platform where users can explore books, read reviews and manage their reading list.",
    tags: ["React", "Tailwind CSS"],
    category: "Frontend",
    color: "#ec4899",
    liveLink: "https://book-vibebd.netlify.app/",
    gitLink: "https://github.com/masumgaibandha/book-vibe",
  },
  {
    title: "DigiTools Platform",
    description:
      "A collection of useful digital tools including converters, generators and productivity utilities in one platform.",
    tags: ["React", "Tailwind CSS"],
    category: "Frontend",
    color: "#db2777",
    liveLink: "https://digitools-platforms-projects.netlify.app/",
    gitLink: "https://github.com/masumgaibandha/digitools-platform-project",
  },
  {
    title: "GitHub Issues Tracker",
    description:
      "A GitHub issues tracker app that fetches and displays issues from any public repository using the GitHub API.",
    tags: ["React", "GitHub API"],
    category: "Frontend",
    color: "#be185d",
    liveLink: "https://github-issuestrackers.netlify.app/home.html",
    gitLink: "https://github.com/masumgaibandha/github-issues-tracker",
  },
  {
    title: "BPL Dream 11",
    description:
      "A fantasy cricket team builder for BPL with player selection, budget management and team validation.",
    tags: ["React", "Tailwind CSS"],
    category: "Frontend",
    color: "#f472b6",
    liveLink: "https://bpl-dream-project-bd.netlify.app/",
    gitLink: "https://github.com/masumgaibandha/bpl-dream-11",
  },
];

const Work = () => {
  return (
    <section id="work" className="w-full py-24 px-6 relative overflow-hidden bg-[#fdf2f8]">
      {/* Background blob */}
      <div className="absolute top-10 left-0 w-96 h-96 bg-[#ec4899]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className="flex flex-col items-center gap-3 mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[#ec4899] font-body">
            My portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-center text-gray-900">
            Latest{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#f9a8d4]">
              Work
            </span>
          </h2>
          <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#ec4899] to-[#f9a8d4]" />
          <p className="text-gray-500 font-body text-center max-w-xl mt-2">
            Real-world projects built with React, Next.js, Node.js, MongoDB and
            Firebase — all deployed and live.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white border border-[#fce7f3] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#ec4899]/40 hover:-translate-y-1 hover:shadow-md transition-all duration-300 card-shadow"
            >
              {/* Top — Category + Links */}
              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full border font-body"
                  style={{
                    color: project.color,
                    borderColor: `${project.color}40`,
                    backgroundColor: `${project.color}10`,
                  }}
                >
                  {project.category}
                </span>
                {/* Links */}
                <div className="flex items-center gap-3">
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#ec4899] transition-colors duration-300"
                  >
                    <FiExternalLink className="text-lg" />
                  </Link>
                  <Link
                    href={project.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#ec4899] transition-colors duration-300"
                  >
                    <FiGithub className="text-lg" />
                  </Link>
                </div>
              </div>

              {/* Color accent bar */}
              <div
                className="w-10 h-1 rounded-full"
                style={{ backgroundColor: project.color }}
              />

              {/* Title */}
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-[#ec4899] transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 font-body text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-[#fdf2f8] text-gray-500 font-body border border-[#fce7f3]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="https://github.com/masumgaibandha"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#fce7f3] hover:border-[#ec4899] text-gray-600 hover:text-[#ec4899] text-sm font-medium transition-all duration-300 hover:bg-[#fdf2f8]"
          >
            <FiGithub />
            View All on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;