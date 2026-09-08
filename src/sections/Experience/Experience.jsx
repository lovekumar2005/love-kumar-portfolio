import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  Code2,
  Workflow,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";
import AboutParticles from "../About/AboutParticles";

const journeyData = [
  {
    number: "01",
    year: "2026 — Present",
    type: "CURRENT FOCUS",
    title: "AI Automation & Frontend Development",
    organization: "Independent Development",
    description:
      "Focused on building intelligent automation systems and modern web interfaces using AI tools, automation platforms, APIs, and React.",
    icon: Bot,
    tags: ["AI Automation", "React", "n8n", "Make", "APIs"],
  },

  {
    number: "02",
    year: "2025 — Present",
    type: "BUILDING",
    title: "Building Real-World Projects",
    organization: "Personal Projects",
    description:
      "Turning ideas into practical applications including AI automation workflows, WhatsApp assistants, recruitment systems, social media automation, and web applications.",
    icon: Code2,
    tags: ["AI Projects", "Automation", "React", "APIs", "Web Apps"],
  },

  {
    number: "03",
    year: "2026 — Present",
    type: "FREELANCING",
    title: "Automation & Client Solutions",
    organization: "Freelance Development",
    description:
      "Working toward solving real business problems through automation, API integrations, AI-powered workflows, and responsive frontend solutions.",
    icon: Workflow,
    tags: ["n8n", "Make", "AI", "API Integration", "Solutions"],
  },

  {
    number: "04",
    year: "2024 — Present",
    type: "LEARNING",
    title: "Programming & Problem Solving",
    organization: "Continuous Learning",
    description:
      "Strengthening programming fundamentals and problem-solving skills through JavaScript, React, C++, Python, DSA, and hands-on development practice.",
    icon: Code2,
    tags: ["JavaScript", "C++", "Python", "DSA", "Problem Solving"],
  },
];

/* ANIMATIONS */
const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#02050b] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Main background */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(22,140,255,0.12),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(99,102,241,0.08),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(0,191,255,0.055),transparent_30%),linear-gradient(135deg,#02050b_0%,#030813_45%,#050914_100%)]"
        />

        {/* Moving blue glow */}
        <motion.div
          animate={{
            x: [0, 80, -30, 0],
            y: [0, -40, 50, 0],
            scale: [1, 1.12, 0.96, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-20 h-105 w-105 rounded-full bg-[#168cff]/4.5 blur-[110px]"
        />

        {/* Purple glow */}
        <motion.div
          animate={{
            x: [0, -60, 30, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-112.5 w-112.5 rounded-full bg-violet-600/4 blur-[120px]"
        />

        {/* Particles */}
        <AboutParticles />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.015] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]"
        />

        {/* Top fade */}
        <div className="absolute left-0 right-0 top-0 h-32 bg-linear-to-b from-[#02050b] to-transparent" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#02050b] to-transparent" />
      </div>

      {/* CONTAINER */}
      <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-6xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={cardVariants}
          className="mb-12 text-center sm:mb-14"
        >
          {/* Eyebrow */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#168cff]/20 bg-[#168cff]/4.5 px-3.5 py-1.5 backdrop-blur-md">
            <Sparkles
              size={12}
              className="text-[#38bdf8]"
            />
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#7dc8ff] sm:text-[10px]">My Journey</span>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[42px] md:text-[48px]">
            My{" "}
            <span className="bg-linear-to-r from-[#168cff] via-[#38bdf8] to-[#8b5cf6] bg-clip-text text-transparent">Journey</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-xl text-xs leading-6 text-gray-500 sm:text-sm">
            A timeline of what I have been learning, building, and working
            toward as a developer.
          </p>

          {/* Underline */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 75,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-5 h-0.5 rounded-full bg-linear-to-r from-[#168cff] via-[#38bdf8] to-[#8b5cf6] shadow-[0_0_18px_rgba(22,140,255,0.5)]"
          />
        </motion.div>

        {/*CARDS GRID*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5"
        >
          {journeyData.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={`${item.number}-${item.title}`}
                variants={cardVariants}
                className="group"
              >
                <motion.div
                  whileHover={{
                    y: -5,
                    transition: {
                      duration: 0.25,
                      ease: "easeOut",
                    },
                  }}
                  className="relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0b1625] p-5 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-500 hover:border-[#168cff]/25 sm:p-6"
                >
                  {/* Card Glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#168cff]/0 blur-[75px] transition-all duration-700 group-hover:bg-[#168cff]/10" />

                  <div className="pointer-events-none absolute bottom-0 left-0 h-24 w-24 rounded-full bg-violet-500/0 blur-[60px] transition-all duration-700 group-hover:bg-violet-500/6" />

                  {/* TOP ROW */}
                  <div className="relative flex items-start justify-between">

                    {/* Sequence Number */}
                    <div className="flex items-center gap-2.5">
                      <span className="text-[34px] font-black leading-none tracking-[-0.06em] text-white/[0.07] transition-all duration-500 group-hover:text-[#168cff]/20 sm:text-[40px]">
                        {item.number}
                      </span>

                      <div className="h-7 w-px bg-linear-to-b from-[#168cff]/50 to-transparent" />
                      <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#168cff] sm:text-[9px]">
                        {item.type}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.07] bg-[#111f32] text-gray-500 transition-all duration-500 group-hover:border-[#168cff]/25 group-hover:bg-[#168cff]/[0.07] group-hover:text-[#38bdf8] group-hover:shadow-[0_0_20px_rgba(22,140,255,0.12)]">
                      <Icon
                        size={17}
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>

                  {/* YEAR */}
                  <div className="relative mt-5 flex items-center gap-2">
                    <CalendarDays
                      size={12}
                      className="text-[#168cff]"
                    />

                    <span className="text-[11px] font-semibold tracking-wide text-[#5fb8ff]">
                      {item.year}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="relative mt-2.5 max-w-lg text-[19px] font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#8acbff] sm:text-[22px]">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p className="relative mt-1.5 text-xs font-medium text-gray-500">{item.organization}</p>

                  {/* Divider */}
                  <div className="relative my-4 h-px w-full bg-linear-to-r from-white/8 via-white/4 to-transparent" />

                  {/* DESCRIPTION*/}
                  <p className="relative min-h-17 text-xs leading-6 text-gray-500 sm:text-[13px]">{item.description}</p>

                  {/* TAGS*/}
                  <div className="relative mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/6 bg-[#111f32] px-2 py-1 text-[9px] font-medium text-gray-500 transition-all duration-300 hover:border-[#168cff]/20 hover:bg-[#168cff]/5 hover:text-[#8acbff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BOTTOM ARROW */}
                  <div className="relative mt-5 flex items-center justify-between">
                    <div className="h-px flex-1 bg-linear-to-r from-[#168cff]/20 to-transparent" />

                    <div className="ml-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/6 text-gray-700 transition-all duration-300 group-hover:border-[#168cff]/25 group-hover:text-[#38bdf8]">
                      <ArrowUpRight
                        size={12}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/*BOTTOM STATEMENT*/}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={cardVariants}
          className="relative mt-7 overflow-hidden rounded-2xl border border-white/6 bg-[#0a1524] p-6 text-center shadow-[0_15px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl sm:mt-8 sm:p-7"
        >
          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#168cff]/6 blur-[80px]" />

          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#168cff]">The journey continues</p>
            <h3 className="mt-2 text-lg font-bold sm:text-xl">
              Learn. Build.{" "}
              <span className="bg-linear-to-r from-[#168cff] to-[#8b5cf6] bg-clip-text text-transparent">Automate.</span>
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

