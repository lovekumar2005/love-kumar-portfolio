import { motion } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  Bot,
  ShoppingCart,
  BriefcaseBusiness,
  Share2,
  FileText,
  ArrowUpRight,
  Workflow,
  Zap,
} from "lucide-react";

import AboutParticles from "../About/AboutParticles";

/* GITHUB ICON */
const GitHubIcon = ({ size = 18, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.043-1.61-4.043-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.043.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.244 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.103.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
};

/* PROJECT DATA */
const projects = [
  {
    number: "01",
    category: "AI AUTOMATION",
    title: "AI-Powered Sales Lead Qualification & Follow-Up System",
    description:
      "An intelligent sales automation workflow that qualifies incoming leads, analyzes customer information, and triggers personalized follow-up communication automatically.",
    image: "/projects/sales-automation.png",
    technologies: ["n8n", "AI", "APIs", "Webhooks"],
    icon: Bot,
    github: "https://github.com/yourusername/sales-automation",
    live: "",
  },

  {
    number: "02",
    category: "AI AUTOMATION",
    title: "WhatsApp AI Medical Receptionist & Appointment Management",
    description:
      "An AI-powered WhatsApp receptionist that handles patient conversations, answers common questions, manages appointment requests, and connects multiple automation workflows.",
    image: "/projects/medical-receptionist.png",
    technologies: ["n8n", "WhatsApp", "AI", "APIs"],
    icon: Bot,
    github: "https://github.com/yourusername/medical-receptionist",
    live: "",
  },

  {
    number: "03",
    category: "SOCIAL AUTOMATION",
    title: "AI Social Media Content Publishing Automation",
    description:
      "An automated content workflow for generating, organizing, scheduling, and publishing social media content while reducing repetitive manual tasks.",
    image: "/projects/social-media.png",
    technologies: ["n8n", "AI", "APIs", "Automation"],
    icon: Share2,
    github:
      "https://github.com/lovekumar2005/AI-Social-Media-Content-Publishing-Automation",
    live: "",
  },

  {
    number: "04",
    category: "AI RECRUITMENT",
    title: "AI-Powered Recruitment & Hiring Automation Platform",
    description:
      "An AI-powered recruitment workflow designed to automate candidate screening, resume analysis, job matching, and repetitive hiring operations.",
    image: "/projects/recruitment.png",
    technologies: ["AI", "n8n", "Automation", "APIs"],
    icon: BriefcaseBusiness,
    github:
      "https://github.com/lovekumar2005/ai-recruitment-hiring-automation",
    live: "",
  },

  {
    number: "05",
    category: "WEB DEVELOPMENT",
    title: "ShopEase — React E-Commerce Platform",
    description:
      "A modern responsive e-commerce application built with React featuring product browsing, reusable components, shopping functionality, and a clean responsive interface.",
    image: "/projects/ecommerce.png",
    technologies: ["React", "JavaScript", "Tailwind", "Vite"],
    icon: ShoppingCart,
    github: "https://github.com/lovekumar2005/shopease-react-ecommerce",
    live: "",
  },

  {
    number: "06",
    category: "WEB DEVELOPMENT",
    title: "AI Job Finder & Resume Dashboard",
    description:
      "A responsive web platform built with HTML, CSS, and JavaScript for discovering job opportunities and managing resume-related information through a clean dashboard.",
    image: "/projects/job-resume.png",
    technologies: ["HTML", "CSS", "JavaScript", "AI"],
    icon: FileText,
    github: "https://github.com/lovekumar2005/jobpilot-job-dashboard",
    live: "",
  },
];

/* ANIMATIONS */

/* Individual element animation */
const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* Individual project card animation */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* Project icon animation */
const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* Accent line animation */
const accentLineVariants = {
  hidden: {
    width: 0,
    opacity: 0,
  },

  visible: {
    width: 85,
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#02050b] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(22,140,255,0.09),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(139,92,246,0.07),transparent_28%),linear-gradient(135deg,#02050b_0%,#030813_50%,#050914_100%)]" />

        {/* Blue glow */}
        <motion.div
          animate={{
            x: [0, 70, -30, 0],
            y: [0, -35, 45, 0],
            scale: [1, 1.12, 0.96, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-105 w-105 rounded-full bg-[#168cff]/4.5 blur-[120px]"
        />

        {/* Purple glow */}
        <motion.div
          animate={{
            x: [0, -60, 35, 0],
            y: [0, 45, -30, 0],
            scale: [1, 0.92, 1.08, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-112.5 w-112.5 rounded-full bg-violet-600/4 blur-[120px]"
        />

        {/* Center glow */}
        <div className="absolute left-1/2 top-[40%] h-125 w-125 -translate-x-1/2 rounded-full bg-[#168cff]/2.5 blur-[130px]" />

        {/* Particles */}
        <AboutParticles />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#02050b] to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-[#02050b] to-transparent" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUpVariants}
          className="mb-14 text-center sm:mb-18 lg:mb-20"
        >
          {/* Eyebrow */}
          <motion.div
            whileHover={{
              y: -2,
            }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#168cff]/20 bg-[#168cff]/4.5 px-4 py-2 backdrop-blur-xl"
          >
            <Sparkles
              size={13}
              className="text-[#38bdf8]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8acbff] sm:text-xs">
              My Work
            </span>
          </motion.div>

          {/* Heading */}
          <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-0.045em] sm:text-[48px] md:text-[54px]">
            Selected{" "}
            <span className="bg-linear-to-r from-[#168cff] via-[#38bdf8] to-[#8b5cf6] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A selection of AI automation systems, intelligent workflows,
            and modern web experiences built to solve real-world problems.
          </p>

          {/* Accent line */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={accentLineVariants}
            className="mx-auto mt-6 h-0.75 rounded-full bg-linear-to-r from-[#168cff] via-[#38bdf8] to-[#8b5cf6] shadow-[0_0_20px_rgba(22,140,255,0.45)]"
          />
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
                className="group relative h-full"
              >
                {/* Outer glow */}
                <div className="pointer-events-none absolute -inset-px rounded-3xl bg-linear-to-b from-[#168cff]/0 via-[#168cff]/0 to-purple-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-[#168cff]/20 group-hover:via-[#168cff]/5 group-hover:to-purple-500/15 group-hover:opacity-100" />

                {/* Card */}
                <div className="relative flex h-full flex-col overflow-hidden rounded-[22px] border border-white/[0.07] bg-[#080d15]/90 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 group-hover:border-[#168cff]/25 group-hover:shadow-[0_25px_80px_rgba(22,140,255,0.10)]">
                  {/* IMAGE */}
                  <div className="relative h-53.75 overflow-hidden border-b border-white/[0.07] bg-[#050910] sm:h-56.25 lg:h-57.5">
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.055]"
                    />

                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#080d15]/80 via-transparent to-[#030712]/10 opacity-70" />

                    {/* Hover blue overlay */}
                    <div className="absolute inset-0 bg-[#168cff]/0 transition-colors duration-500 group-hover:bg-[#168cff]/[0.035]" />

                    {/* Top category */}
                    <div className="absolute left-4 top-4">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 shadow-lg backdrop-blur-xl">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#168cff] shadow-[0_0_8px_#168cff]" />

                        <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-gray-300">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Project number */}
                    <div className="absolute bottom-4 right-4 flex h-9 min-w-9 items-center justify-center rounded-lg border border-white/12 bg-black/45 px-2 text-xs font-bold text-white shadow-lg backdrop-blur-xl">
                      {project.number}
                    </div>

                    {/* Floating icon */}
                    <motion.div
                      variants={iconVariants}
                      className="absolute bottom-4 left-4 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-black/45 text-[#8acbff] backdrop-blur-xl"
                    >
                      <Icon size={16} />
                    </motion.div>
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    {/* Title */}
                    <h3 className="text-[19px] font-bold leading-[1.35] tracking-tight text-white transition-colors duration-300 group-hover:text-[#9bd3ff] sm:text-[21px]">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 min-h-24 text-sm leading-6 text-gray-500">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/6 bg-white/2.5 px-2.5 py-1.5 text-[10px] font-medium text-gray-500 transition-all duration-300 group-hover:border-[#168cff]/15 group-hover:text-gray-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    {/* Divider */}
                    <div className="my-5 h-px bg-linear-to-r from-white/8 via-white/4 to-transparent" />

                    {/* Footer */}
                    <div className="mt-auto flex items-center justify-between gap-3">
                      {/* GitHub */}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          y: -2,
                        }}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/8 bg-white/2.5 px-3.5 py-2.5 text-xs font-semibold text-gray-400 transition-all duration-300 hover:border-[#168cff]/35 hover:bg-[#168cff]/[0.06 hover:text-white"
                      >
                        <GitHubIcon size={15} />
                        View Code

                        <ArrowUpRight
                          size={13}
                          className="text-[#168cff]"
                        />
                      </motion.a>

                      {/* Live Demo */}
                      {project.live ? (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            y: -2,
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 transition-colors duration-300 hover:text-[#38bdf8]"
                        >
                          Live Demo
                          <ExternalLink size={13} />
                        </motion.a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.13em] text-gray-700">
                          <span className="h-1.5 w-1.5 rounded-full bg-gray-700" />
                          Source Available
                        </span>
                      )}
                    </div>
                  </div>

                  {/* HOVER ACCENT */}
                  <div className="absolute bottom-0 left-8 right-8 h-px origin-center scale-x-0 bg-linear-to-r from-transparent via-[#168cff] to-transparent opacity-80 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* BOTTOM GITHUB CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={fadeUpVariants}
          className="relative mt-10 overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.018] p-7 text-center backdrop-blur-xl sm:p-9"
        >
          {/* Background glow */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#168cff]/4 blur-[90px]"
          />

          {/* Decorative dots */}
          <div className="absolute left-8 top-8 h-1.5 w-1.5 rounded-full bg-[#168cff]/50 shadow-[0_0_10px_#168cff]" />

          <div className="absolute right-10 top-12 h-1.5 w-1.5 rounded-full bg-purple-400/50 shadow-[0_0_10px_#a855f7]" />

          <div className="relative">
            {/* GitHub icon */}
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/2.5">
              <GitHubIcon
                size={25}
                className="text-gray-400"
              />
            </div>

            {/* Title */}
            <h3 className="mt-5 text-lg font-semibold text-white sm:text-xl">
              More projects on GitHub
            </h3>

            {/* Description */}
            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-500">
              Explore more automation workflows, experiments,
              frontend projects, and source code.
            </p>

            {/* Button */}
            <a
              href="https://github.com/lovekumar2005"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl border border-[#168cff]/30 bg-[#168cff]/5 px-5 py-2.5 text-sm font-semibold text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:border-[#168cff]/60 hover:bg-[#168cff]/9 hover:text-white hover:shadow-[0_0_30px_rgba(22,140,255,0.15)]"
            >
              <GitHubIcon size={16} />

              View GitHub

              <ArrowUpRight
                size={15}
                className="text-[#168cff] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        {/* BOTTOM MICRO LABEL */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          variants={fadeUpVariants}
          className="mt-8 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.25em] text-gray-700"
        >
          <Workflow size={12} />
          AI Automation

          <span className="text-gray-800">•</span>

          <Zap size={11} />
          Intelligent Workflows

          <span className="text-gray-800">•</span>

          <Sparkles size={11} />
          Modern Development
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;