import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Languages,
  User,
  Globe,
  BriefcaseBusiness,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Bot,
  Workflow,
} from "lucide-react";

import AboutParticles from "./AboutParticles";

/* ABOUT DATA */
const aboutData = {
  eyebrow: "GET TO KNOW ME",

  name: "I'm Love Kumar",

  role: (
    <>
      An{" "}
      <span className="bg-linear-to-r from-[#168cff] via-[#38bdf8] to-[#8b5cf6] bg-clip-text text-transparent">
        AI Automation Engineer
      </span>{" "}
      &{" "}
      <span className="bg-linear-to-r from-[#38bdf8] to-[#168cff] bg-clip-text text-transparent">
        Frontend Developer
      </span>{" "}
      based in <span className="text-white">Lahore, Pakistan</span>
    </>
  ),

  description:
    "I build AI-powered web applications and intelligent automation systems using React, n8n, Make, APIs, and AI agents — helping businesses automate repetitive workflows, improve efficiency, and scale smarter.",

  personalInfo: [
    {
      label: "Name",
      value: "Love Kumar",
      icon: User,
    },
    {
      label: "Age",
      value: "21 Years",
      icon: User,
    },
    {
      label: "Nationality",
      value: "Pakistani",
      icon: Globe,
    },
    {
      label: "Location",
      value: "Lahore, Pakistan",
      icon: MapPin,
    },
    {
      label: "Phone",
      value: "+92 331 3859556",
      icon: Phone,
    },
    {
      label: "Email",
      value: "lovepehlaj2005@gmail.com",
      icon: Mail,
    },
    {
      label: "Freelance",
      value: "Available",
      icon: BriefcaseBusiness,
    },
    {
      label: "Languages",
      value: "English, Urdu, Basic German",
      icon: Languages,
    },
  ],

  education: [
    {
      year: "2024 — Present",
      degree: "BSc | Business & Information Technology (BBIT)",
      institution: "University of Punjab, Lahore",
    },
    {
      year: "2022 — 2024",
      degree: "FSc | Pre Engineering",
      institution: "Degree College, Mithi, Tharparkar, Sindh",
    },
    {
      year: "2017 — 2022",
      degree: "Matriculation in Science",
      institution: "Raichand Rathore High School, Chelhar, Tharparkar, Sindh",
    },
  ],
};

/* CORE AREAS */
const focusAreas = [
  {
    icon: Bot,
    title: "AI Automation",
    description:
      "Building intelligent workflows and AI-powered business systems.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Creating modern, responsive and interactive React interfaces.",
  },
  {
    icon: Workflow,
    title: "API & Workflow Integration",
    description:
      "Connecting tools, services and APIs into seamless workflows.",
  },
];

/* ANIMATIONS */
const fadeUp = {
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

/* Introduction left animation */
const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -32,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* Introduction right animation */
const fadeRight = {
  hidden: {
    opacity: 0,
    x: 32,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* Accent line animation */
const accentLine = {
  hidden: {
    width: 0,
    opacity: 0,
  },

  visible: {
    width: 90,
    opacity: 1,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#02050b] py-24 text-white sm:py-28 lg:py-32"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(22,140,255,0.12),transparent_30%),radial-gradient(circle_at_92%_18%,rgba(139,92,246,0.09),transparent_28%),radial-gradient(circle_at_55%_90%,rgba(56,189,248,0.055),transparent_30%),linear-gradient(135deg,#02050b_0%,#030813_48%,#050914_100%)]" />

        {/* Blue ambient glow */}
        <motion.div
          animate={{
            x: [0, 70, -35, 0],
            y: [0, -40, 45, 0],
            scale: [1, 1.12, 0.95, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-20 h-105 w-105 rounded-full bg-[#168cff]/5.5 blur-[120px]"
        />

        {/* Violet ambient glow */}
        <motion.div
          animate={{
            x: [0, -60, 35, 0],
            y: [0, 50, -35, 0],
            scale: [1, 0.92, 1.08, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-48 bottom-0 h-107.5 w-107.5 rounded-full bg-violet-600/4.5 blur-[120px]"
        />

        {/* Particles */}
        <AboutParticles />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.016] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]" />

        {/* Top fade */}
        <div className="absolute left-0 right-0 top-0 h-40 bg-linear-to-b from-[#02050b] to-transparent" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-[#02050b] to-transparent" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">
        {/* SECTION HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={fadeUp}
          className="mb-16 text-center sm:mb-20"
        >
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#168cff]/20 bg-[#168cff]/4.5 px-4 py-2 shadow-[0_0_25px_rgba(22,140,255,0.04)] backdrop-blur-md">
            <Sparkles size={13} className="text-[#38bdf8]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7dc8ff] sm:text-xs">
              {aboutData.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[36px] font-bold leading-[1.05] tracking-[-0.045em] sm:text-[46px] md:text-[54px]">
            More Than Just{" "}
            <span className="bg-linear-to-r from-[#168cff] via-[#38bdf8] to-[#8b5cf6] bg-clip-text text-transparent">
              Code.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            A little about the person behind the automation,
            interfaces, and ideas.
          </p>

          {/* Accent line */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={accentLine}
            className="mx-auto mt-6 h-0.75 rounded-full bg-linear-to-r from-[#168cff] via-[#38bdf8] to-[#8b5cf6] shadow-[0_0_22px_rgba(22,140,255,0.55)]"
          />
        </motion.div>

        {/* INTRODUCTION */}
        <div className="mb-16 grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8">
          {/* Main introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            variants={fadeLeft}
            whileHover={{
              y: -4,
            }}
            className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#080d15]/80 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-all duration-500 hover:border-[#168cff]/15 sm:p-10"
          >
            {/* Top gradient */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#168cff]/50 to-transparent" />

            {/* Glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#168cff]/5.5 blur-[90px] transition-all duration-700 group-hover:bg-[#168cff]/0" />

            <div className="relative">
              {/* Label */}
              <div className="mb-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#168cff]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#168cff] shadow-[0_0_10px_rgba(22,140,255,0.8)]" />
                Introduction
              </div>

              {/* Name */}
              <h3 className="text-[32px] font-bold tracking-[-0.03em] text-white sm:text-[42px]">
                {aboutData.name}
              </h3>

              {/* Role */}
              <p className="mt-5 max-w-3xl text-base font-medium leading-7 text-gray-300 sm:text-lg sm:leading-8">
                {aboutData.role}
              </p>

              {/* Description */}
              <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-500 sm:text-[15px] sm:leading-8">
                {aboutData.description}
              </p>

              {/* Expertise pills */}
              <div className="mt-9 flex flex-wrap gap-2.5">
                {[
                  "AI Automation",
                  "React.js",
                  "n8n",
                  "AI Agents",
                  "REST APIs",
                  "Modern UI",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/[0.07] bg-white/2.5 px-3.5 py-2 text-[11px] font-medium text-gray-400 transition-all duration-300 hover:border-[#168cff]/25 hover:bg-[#168cff]/5 hover:text-[#8acbff]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Focus card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            variants={fadeRight}
            className="relative overflow-hidden rounded-[28px] border border-[#168cff]/10 bg-linear-to-br from-[#168cff]/6.5 via-[#080d15]/90 to-violet-500/4.5 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.15)] backdrop-blur-xl sm:p-9"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#168cff]/8 blur-[75px]" />

            <div className="relative">
              {/* Icon */}
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#168cff]/20 bg-[#168cff]/[0.07] text-[#38bdf8]">
                <Sparkles size={20} />
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-600">
                What I Do
              </p>

              <h4 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-white">
                Turning ideas into{" "}
                <span className="text-[#38bdf8]">
                  intelligent systems.
                </span>
              </h4>

              <p className="mt-4 text-sm leading-6 text-gray-500">
                I combine development, automation, APIs,
                and AI to create digital solutions that
                are useful, scalable, and built to solve
                real problems.
              </p>

              {/* Divider */}
              <div className="my-6 h-px w-full bg-linear-to-r from-[#168cff]/30 via-white/[0.07] to-transparent" />

              {/* Availability */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-300/80">
                  Available for opportunities
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOCUS AREAS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={fadeUp}
          className="mb-16"
        >
          <div className="mb-7 flex items-center gap-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#168cff]">
                Expertise
              </p>

              <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                What I focus on
              </h3>
            </div>

            <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {focusAreas.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  variants={fadeUp}
                  whileHover={{
                    y: -5,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/6 bg-[#080d15]/70 p-6 backdrop-blur-md transition-all duration-300 hover:border-[#168cff]/20 hover:bg-[#168cff]/2.5"
                >
                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#168cff]/0 blur-3xl transition-all duration-500 group-hover:bg-[#168cff]/10" />

                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#168cff]/15 bg-[#168cff]/5 text-[#168cff] transition-all duration-300 group-hover:border-[#168cff]/30 group-hover:bg-[#168cff]/9 group-hover:shadow-[0_0_20px_rgba(22,140,255,0.10)]">
                    <Icon size={19} strokeWidth={1.7} />
                  </div>

                  <h4 className="relative mt-5 text-base font-bold text-white">
                    {item.title}
                  </h4>

                  <p className="relative mt-2 text-xs leading-6 text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid items-stretch gap-12 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          {/* PERSONAL INFORMATION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            variants={fadeLeft}
            className="flex min-w-0 flex-col"
          >
            {/* Heading */}
            <div className="mb-7 flex items-center gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#168cff]">
                  Personal
                </p>

                <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                  A little more about me
                </h3>
              </div>

              <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
            </div>

            {/* Information grid */}
            <div className="grid flex-1 grid-cols-1 content-start gap-4 sm:grid-cols-2">
              {aboutData.personalInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={`${item.label}-${index}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.18,
                    }}
                    variants={fadeUp}
                    whileHover={{
                      y: -3,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group relative min-h-[82px] overflow-hidden rounded-2xl border border-white/6 bg-[#080d15]/70 p-4 backdrop-blur-md transition-all duration-300 hover:border-[#168cff]/20 hover:bg-[#168cff]/2.5"
                  >
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#168cff]/0 blur-2xl transition-all duration-500 group-hover:bg-[#168cff]/10" />

                    <div className="relative flex h-full items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#168cff]/10 bg-[#168cff]/4.5 text-[#168cff] transition-all duration-300 group-hover:border-[#168cff]/25 group-hover:bg-[#168cff]/8">
                        <Icon size={16} strokeWidth={1.8} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-gray-600">
                          {item.label}
                        </p>

                        <p className="mt-1 wrap-break-word text-sm font-medium leading-5 text-gray-300 transition-colors duration-300 group-hover:text-white">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            variants={fadeRight}
            className="min-w-0"
          >
            {/* Heading */}
            <div className="mb-7 flex items-center gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#168cff]">
                  My Journey
                </p>

                <h3 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
                  Education
                </h3>
              </div>

              <div className="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute bottom-2 left-2 top-2 w-px bg-linear-to-b from-[#168cff]/60 via-[#168cff]/20 to-transparent" />

              <div className="space-y-5">
                {aboutData.education.map((item, index) => (
                  <motion.div
                    key={`${item.year}-${index}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                      amount: 0.18,
                    }}
                    variants={fadeUp}
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="group relative pl-9 sm:pl-10"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full border-2 border-[#168cff]/60 bg-[#02050b] transition-all duration-300 group-hover:border-[#38bdf8] group-hover:shadow-[0_0_18px_rgba(22,140,255,0.45)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#168cff] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#38bdf8]" />
                    </div>

                    {/* Card */}
                    <div className="relative overflow-hidden rounded-2xl border border-white/6 bg-[#080d15]/70 p-5 backdrop-blur-md transition-all duration-300 group-hover:border-[#168cff]/20 group-hover:bg-[#168cff]/2.5">
                      {/* Glow */}
                      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#168cff]/0 blur-3xl transition-all duration-500 group-hover:bg-[#168cff]/10" />

                      {/* Header */}
                      <div className="relative flex items-center justify-between gap-3">
                        <span className="rounded-full border border-[#168cff]/15 bg-[#168cff]/6 px-3 py-1 text-[10px] font-semibold tracking-wide text-[#5fb8ff] sm:text-xs">
                          {item.year}
                        </span>

                        <GraduationCap
                          size={17}
                          className="text-gray-700 transition-colors duration-300 group-hover:text-[#168cff]"
                        />
                      </div>

                      {/* Degree */}
                      <h4 className="relative mt-4 text-[17px] font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#8acbff] sm:text-[19px]">
                        {item.degree}
                      </h4>

                      {/* Institution */}
                      <p className="relative mt-2 text-sm leading-6 text-gray-500">
                        {item.institution}
                      </p>

                      {/* Current indicator */}
                      {index === 0 && (
                        <div className="relative mt-4 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-400/70">
                          <CheckCircle2 size={12} />
                          Currently pursuing
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* FINAL CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={fadeUp}
          className="group relative mt-16 overflow-hidden rounded-[28px] border border-[#168cff]/10 bg-linear-to-r from-[#168cff]/5.5 via-[#080d15]/80 to-violet-500/4.5 p-7 text-center shadow-[0_20px_70px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:mt-20 sm:p-10"
        >
          {/* Top line */}
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#168cff]/50 to-transparent" />

          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#168cff]/[0.07] blur-[90px] transition-all duration-700 group-hover:bg-[#168cff]/11" />

          <div className="relative">
            {/* Small label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/6 bg-white/2 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_10px_rgba(56,189,248,0.8)]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                Let's build something meaningful
              </span>
            </div>

            <h3 className="mx-auto mt-5 max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
              Technology should solve problems,
              <span className="text-gray-500">
                {" "}
                not create more of them.
              </span>
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-600">
              I’m focused on building practical digital
              solutions where AI, automation, and modern
              web development come together.
            </p>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group/cta mt-6 inline-flex items-center gap-2 rounded-xl border border-[#168cff]/25 bg-[#168cff]/6 px-4 py-2.5 text-xs font-semibold text-[#7dc8ff] transition-all duration-300 hover:border-[#168cff]/45 hover:bg-[#168cff]/10 hover:text-white"
            >
              Let's work together

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

