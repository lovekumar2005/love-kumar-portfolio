import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  Code2,
  Workflow,
  GraduationCap,
  ArrowUpRight,
  CalendarDays,
} from "lucide-react";
import AboutParticles from "../About/AboutParticles";

/* JOURNEY DATA */
const journeyData = [
  {
    number: "01",
    year: "2026 — Present",
    type: "CURRENT FOCUS",
    title: "AI Automation & Frontend Development",
    organization: "Independent Projects",
    description:
      "Building AI-powered applications, intelligent automation workflows, and modern web experiences while continuously improving my technical skills.",
    icon: Bot,
    tags: [
      "AI Automation",
      "React",
      "n8n",
      "Make",
      "APIs",
    ],
  },

  {
    number: "02",
    year: "2024 — Present",
    type: "EDUCATION",
    title: "BSc | Business & Information Technology",
    organization: "University of Punjab, Lahore",
    description:
      "Studying business and information technology while developing practical knowledge in programming, software development, automation, and emerging technologies.",
    icon: GraduationCap,
    tags: [
      "IT",
      "Business",
      "Programming",
      "Technology",
    ],
  },

  {
    number: "03",
    year: "2024 — Present",
    type: "BUILDING",
    title: "Learning Through Projects",
    organization: "Personal Development",
    description:
      "Turning ideas into practical projects by experimenting with frontend development, APIs, automation platforms, and AI-powered solutions.",
    icon: Code2,
    tags: [
      "JavaScript",
      "React",
      "Tailwind",
      "APIs",
      "Projects",
    ],
  },

  {
    number: "04",
    year: "2022 — 2024",
    type: "FOUNDATION",
    title: "Pre-Engineering",
    organization: "Degree College, Mithi",
    description:
      "Developed a strong foundation in mathematics, science, analytical thinking, and problem solving before moving deeper into information technology.",
    icon: Workflow,
    tags: [
      "Mathematics",
      "Science",
      "Problem Solving",
    ],
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
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#02050b] py-24 text-white sm:py-28 lg:py-32"
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
        <div className="absolute left-0 right-0 top-0 h-40 bg-linear-to-b from-[#02050b] to-transparent" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#02050b] to-transparent" />
      </div>

      {/* CONTAINER */}
      <div
        className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]"
      >

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={cardVariants}
          className="mb-16 text-center sm:mb-20"
        >

          {/* Eyebrow */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#168cff]/20 bg-[#168cff]/4.5 px-4 py-2 backdrop-blur-md"
          >
            <Sparkles
              size={13}
              className="text-[#38bdf8]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7dc8ff] sm:text-xs">
              My Journey
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[36px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[46px] md:text-[52px]">
            Experience{" "}
            <span className="bg-linear-to-r from-[#168cff] via-[#38bdf8] to-[#8b5cf6] bg-clip-text text-transparent">
              & Journey
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A collection of the experiences, projects, and
            learning milestones that are shaping my journey
            as a developer.
          </p>

          {/* Underline */}
          <motion.div
            initial={{
              width: 0,
              opacity: 0,
            }}
            whileInView={{
              width: 90,
              opacity: 1,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              delay: 0.15,
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-6 h-0.75 rounded-full bg-linear-to-r from-[#168cff] via-[#38bdf8] to-[#8b5cf6] shadow-[0_0_22px_rgba(22,140,255,0.5)]"
          />
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={containerVariants}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
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
                    y: -7,
                    transition: {
                      duration: 0.3,
                      ease: "easeOut",
                    },
                  }}
                  className="relative h-full overflow-hidden rounded-3xl border border-white/6.5 bg-white/2.5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-[#168cff]/25 hover:bg-white/[0.035] sm:p-7"
                >

                  {/* CARD GLOW */}
                  <div
                    className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#168cff]/0 blur-[90px] transition-all duration-700 group-hover:bg-[#168cff]/10"
                  />

                  <div
                    className="pointer-events-none absolute bottom-0 left-0 h-32 w-32 rounded-full bg-violet-500/0 blur-[70px] transition-all duration-700 group-hover:bg-violet-500/6"
                  />

                  {/* TOP ROW */}
                  <div className="relative flex items-start justify-between">

                    {/* Sequence number */}
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[42px] font-black leading-none tracking-[-0.06em] text-white/[0.07] transition-all duration-500 group-hover:text-[#168cff]/20 sm:text-[48px]"
                      >
                        {item.number}
                      </span>

                      <div className="h-8 w-px bg-linear-to-b from-[#168cff]/50 to-transparent" />

                      <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#168cff] sm:text-[10px]">
                        {item.type}
                      </span>
                    </div>

                    {/* Icon */}
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.07] bg-white/2.5 text-gray-500 transition-all duration-500 group-hover:border-[#168cff]/25 group-hover:bg-[#168cff]/[0.07] group-hover:text-[#38bdf8] group-hover:shadow-[0_0_25px_rgba(22,140,255,0.12)]"
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.7}
                      />
                    </div>
                  </div>

                  {/* YEAR */}
                  <div className="relative mt-7 flex items-center gap-2">
                    <CalendarDays
                      size={13}
                      className="text-[#168cff]"
                    />

                    <span className="text-xs font-semibold tracking-wide text-[#5fb8ff]">
                      {item.year}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3
                    className="relative mt-3 max-w-lg text-[22px] font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#8acbff] sm:text-[26px]"
                  >
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p className="relative mt-2 text-sm font-medium text-gray-500">
                    {item.organization}
                  </p>

                  {/* DIVIDER */}
                  <div className="relative my-6 h-px w-full bg-linear-to-r from-white/8 via-white/4 to-transparent" />

                  {/* DESCRIPTION */}
                  <p className="relative min-h-21 text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>

                  {/* TAGS */}
                  <div className="relative mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-white/6 bg-white/2.5 px-2.5 py-1.5 text-[10px] font-medium text-gray-500 transition-all duration-300 hover:border-[#168cff]/20 hover:bg-[#168cff]/5 hover:text-[#8acbff]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* BOTTOM ARROW */}
                  <div className="relative mt-7 flex items-center justify-between">
                    <div className="h-px flex-1 bg-linear-to-r from-[#168cff]/20 to-transparent" />

                    <div
                      className="ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/6 text-gray-700 transition-all duration-300 group-hover:border-[#168cff]/25 group-hover:text-[#38bdf8]"
                    >
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={cardVariants}
          className="relative mt-8 overflow-hidden rounded-3xl border border-white/6 bg-white/[0.018] p-7 text-center backdrop-blur-xl sm:mt-10 sm:p-9"
        >

          {/* Glow */}
          <div className="absolute left-1/2 top-1/2 h-40 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#168cff]/6 blur-[90px]" />

          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#168cff]">
              The journey continues
            </p>

            <h3 className="mt-3 text-xl font-bold sm:text-2xl">
              Learn. Build.{" "}
              <span className="bg-linear-to-r from-[#168cff] to-[#8b5cf6] bg-clip-text text-transparent">
                Automate.
              </span>
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;