import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Languages,
  User,
  GraduationCap,
  Building2,
  Bot,
  Code2,
  Workflow,
  Sparkles,
} from "lucide-react";

import AboutParticles from "./AboutParticles";

/*ABOUT DATA*/
const personalInfo = [
  {
    label: "Name",
    value: "Love Kumar",
    icon: User,
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
    label: "Languages",
    value: "English, Urdu, Basic German",
    icon: Languages,
  },
];

/*EDUCATION*/
const education = [
  {
    icon: GraduationCap,
    degree: "BSc BBIT",
    institution: "University of the Punjab",
    duration: "2024 – Present",
  },
  {
    icon: GraduationCap,
    degree: "FSc Pre-Engineering",
    institution: "Degree College, Mithi",
    duration: "2022 – 2024",
  },
];

/*SERVICES*/
const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "AI-powered workflows and business automation using n8n, Make, and AI agents.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Modern, responsive and interactive web interfaces built with React.",
  },
  {
    icon: Workflow,
    title: "API Integration",
    description:"Connecting APIs, tools, and services to create efficient automated systems.",
  },
];

/*ANIMATION*/
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      delay: index * 0.1,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-y border-white/6 bg-[#030914] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(22,140,255,0.07),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(0,198,255,0.05),transparent_30%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#030914_0%,#050d19_50%,#030914_100%)]" />
      </div>

      <AboutParticles />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          {/* Section Label */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#168cff]/20 bg-[#168cff]/5 px-4 py-2 text-[11px] font-semibold tracking-[0.18em] text-[#168cff]">
            <Sparkles size={13} />
            GET TO KNOW ME
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            About{" "}
            <span className="bg-linear-to-r from-[#168cff] to-[#00c6ff] bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            I build AI-powered web applications and intelligent automation
            systems using React, n8n, Make, APIs, and AI agents.
          </p>

          {/* Accent Line */}
          <div className="mx-auto mt-7 flex items-center justify-center">
            <div className="h-px w-16 bg-linear-to-r from-transparent to-[#168cff]" />
            <div className="h-1 w-1 rounded-full bg-[#168cff]" />
            <div className="h-px w-16 bg-linear-to-l from-transparent to-[#168cff]" />
          </div>
        </motion.div>

        {/*CARDS */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/*PERSONAL INFORMATION*/}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group flex h-full flex-col rounded-2xl border border-white/8 bg-[#0b1625] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#168cff]/25"
          >
            {/* Card Header */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#168cff]/15 bg-[#168cff]/6 text-[#168cff]">
                <User size={20} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#168cff]">Personal Information</h3>
                <p className="mt-0.5 text-xs text-slate-500">A few details about me</p>
              </div>
            </div>

            {/* Information */}
            <div className="grid flex-1 gap-2.5">
              {personalInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-[#101c2d] px-4 py-3.5 transition-all duration-300 hover:border-[#168cff]/15 hover:bg-[#132238]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#168cff]/5 text-[#168cff]">
                      <Icon size={16} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500">{item.label}</p>
                      <p className="mt-1 truncate text-sm text-slate-200">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Status */}
            <div className="mt-4 flex items-center gap-2 border-t border-white/6 pt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-xs text-slate-400">Open to opportunities</span>
            </div>
          </motion.div>

          {/* EDUCATION */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group flex h-full flex-col rounded-2xl border border-white/8 bg-[#0b1625] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#168cff]/25"
          >
            {/* Card Header */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#168cff]/15 bg-[#168cff]/6 text-[#168cff]">
                <GraduationCap size={20} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#168cff]">Education</h3>
                <p className="mt-0.5 text-xs text-slate-500">My academic background</p>
              </div>
            </div>

            {/* Education */}
            <div className="flex flex-1 flex-col gap-3">
              {education.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.degree}
                    className="rounded-xl border border-white/5 bg-[#101c2d] p-5 transition-all duration-300 hover:border-[#168cff]/15 hover:bg-[#132238]"
                  >
                    <div className="mb-5 flex items-start justify-between gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#168cff]/5 text-[#168cff]">
                        <Icon size={19} />
                      </div>

                      <span className="rounded-full border border-[#168cff]/10 bg-[#168cff]/4 px-3 py-1 text-[9px] font-medium text-[#168cff]">
                        {item.duration}
                      </span>
                    </div>

                    <h4 className="text-base font-semibold text-white">
                      {item.degree}
                    </h4>

                    <div className="mt-2 flex items-start gap-2 text-xs leading-5 text-slate-400">
                      <Building2
                        size={14}
                        className="mt-0.5 shrink-0 text-slate-500"
                      />

                      <span>{item.institution}</span>
                    </div>
                  </div>
                );
              })}

              {/* Academic Focus */}
              <div className="mt-auto rounded-xl border border-white/5 bg-[#101c2d] p-4">
                <div className="mb-2 flex items-center gap-2">
                  <Sparkles size={13} className="text-[#168cff]" />

                  <span className="text-xs font-semibold text-[#168cff]">
                    Academic Focus
                  </span>
                </div>

                <p className="text-xs leading-5 text-slate-400">
                  Building strong foundations in programming, AI, web
                  development, automation, and cloud technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/*SERVICES*/}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group flex h-full flex-col rounded-2xl border border-white/8 bg-[#0b1625] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#168cff]/25"
          >
            {/* Card Header */}
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#168cff]/15 bg-[#168cff]/6 text-[#168cff]">
                <Sparkles size={20} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#168cff]">Services</h3>
                <p className="mt-0.5 text-xs text-slate-500">What I can help with</p>
              </div>
            </div>

            {/* Services */}
            <div className="flex flex-1 flex-col gap-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <div
                    key={service.title}
                    className="rounded-xl border border-white/5 bg-[#101c2d] p-4 transition-all duration-300 hover:border-[#168cff]/15 hover:bg-[#132238]"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#168cff]/5 text-[#168cff]">
                        <Icon size={18} />
                      </div>

                      <h4 className="text-sm font-semibold text-white">
                        {service.title}
                      </h4>
                    </div>

                    <p className="text-xs leading-6 text-slate-400">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Status */}
            <div className="mt-5 flex items-center gap-2 border-t border-white/6 pt-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

              <span className="text-xs text-slate-400">
                Available for opportunities
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

