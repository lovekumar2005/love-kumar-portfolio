import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowUpRight,
  MessageCircle,
  Sparkles,
  CheckCircle2,
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

/* LINKEDIN ICON */
const LinkedInIcon = ({ size = 18, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29zM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.54 8.99H7.1v11.46H3.54V8.99zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
};

/* FIVERR ICONS */
const FiverrIcon = ({ size = 17, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M5.5 7.2h3.1V5.7c0-.8.5-1.3 1.3-1.3
        h1.7V2.2H9.5C7.1 2.2 5.5 3.7 5.5 6v1.2H3.2v2.6
        h2.3v8.7H3.2v2.7h7.1v-2.7H8.4v-8.7h3.8v8.7h-1.8v2.7
        h7.1v-2.7h-2.3V7.2H8.4V6c0-.8.5-1.3 1.3-1.3h1.6V2.2H9.7
        C7.1 2.2 5.5 3.7 5.5 6v1.2Zm10.7 0h2.7v2.7h-2.7V7.2Z"
      />
    </svg>
  );
};

/* UPWORK ICONS */
const UpworkIcon = ({ size = 17, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18.5 7.2c-2.05 0-3.65 1.15-4.5 2.95
        -.7-1.05-1.25-2.25-1.65-3.5H9.9v6.1
        c0 .95-.55 1.6-1.4 1.6-.9 0-1.45-.65-1.45-1.6
        V6.65H4.8v6.1c0 2.4 1.45 4.1 3.65 4.1
        1.65 0 2.8-.95 3.35-2.35
        .55.8 1.2 1.55 1.95 2.15v4.7h2.25v-4.85
        c.75.25 1.55.4 2.4.4 3.2 0 5.6-2.15 5.6-5
        0-2.75-2.25-4.7-5.5-4.7Zm-.05 7.2
        c-.75 0-1.45-.2-2.1-.5v-1.2c0-1.9.85-3.25 2.2-3.25
        1.25 0 2.1.9 2.1 2.35 0 1.5-.9 2.6-2.2 2.6Z"
        fill="currentColor"
      />
    </svg>
  );
};

/* CONTACT DATA */
const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "lovepehlaj2005@gmail.com",
    href: "mailto:lovepehlaj2005@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 331 3859556",
    href: "tel:+923313859556",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Lahore, Pakistan",
    href: "#contact",
  },
];

/* SOCIAL LINKS */

const socialLinks = [
  {
    name: "GitHub",
    description: "View my projects & code",
    href: "https://github.com/lovekumar2005",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    description: "Let's connect professionally",
    href: "https://www.linkedin.com/in/love-kumar-23866a292/",
    icon: LinkedInIcon,
  },
  {
    name: "Fiverr",
    description: "Hire me for automation & web",
    href: "https://www.fiverr.com/love_aswani/",
    icon: FiverrIcon,
  },
  {
    name: "Upwork",
    description: "Work with me on your project",
    href: "https://www.upwork.com/freelancers/~0107954c18ad421b7e",
    icon: UpworkIcon,
  },
];

/* ANIMATIONS */
const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.08,
    },
  },
};

const fadeUp = {
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

const underlineVariants = {
  hidden: {
    width: 0,
    opacity: 0,
  },

  visible: {
    width: 90,
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#02050b] py-24 text-white sm:py-28 lg:py-32"
    >
      {/*  BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Main background */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(22,140,255,0.13),transparent_32%),radial-gradient(circle_at_92%_82%,rgba(124,58,237,0.10),transparent_32%),linear-gradient(135deg,#02050b_0%,#030813_48%,#050914_100%)]"
        />

        {/* Blue animated glow */}
        <motion.div
          animate={{
            x: [0, 70, -40, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-48 top-10 h-112.5 w-112.5 rounded-full bg-[#168cff]/5.5 blur-[120px]"
        />

        {/* Purple animated glow */}
        <motion.div
          animate={{
            x: [0, -60, 40, 0],
            y: [0, 40, -30, 0],
            scale: [1, 0.92, 1.08, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className=" absolute -right-48 bottom-0 h-112.5 w-112.5 rounded-full bg-violet-600/5 blur-[120px]"
        />

        {/* Center glow */}
        <div
          className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#168cff]/2.5 blur-[130px]"
        />

        {/* Particles */}
        <AboutParticles />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.018] bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)]"
        />
      </div>

      {/* MAIN CONTAINER */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.06,
        }}
        className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]
"
      >
        {/* HEADER */}
        <motion.div
          variants={fadeUp}
          className="mb-14 text-center sm:mb-16"
        >
          {/* Eyebrow */}
          <div
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#168cff]/20 bg-[#168cff]/4.5 px-4 py-2 shadow-[0_0_30px_rgba(22,140,255,0.04)] backdrop-blur-md"
          >
            <MessageCircle
              size={13}
              className="text-[#38bdf8]"
            />
            <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#7dc8ff] sm:text-xs">
              Get In Touch
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[36px] font-bold leading-[1.05] tracking-[-0.04em] sm:text-[46px] md:text-[52px]">
            Let's Build{" "}
            <span
              className="bg-linear-to-r from-[#168cff] via-[#38bdf8] to-[#8b5cf6] bg-clip-text text-transparent"
            >
              Something
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Have an idea, project, or automation challenge?
            Let's turn it into something useful, intelligent,
            and scalable.
          </p>

          {/* Underline */}
          <motion.div
            variants={underlineVariants}
            className="mx-auto mt-6 h-0.75 rounded-full bg-linear-to-r from-[#168cff] via-[#38bdf8] to-[#8b5cf6] shadow-[0_0_22px_rgba(22,140,255,0.5)]"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">

          {/* LEFT SIDE */}
          <motion.div
            variants={fadeLeft}
            className="group/card relative overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#080d15]/80 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-9"
          >
            {/* Card border glow */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[26px] bg-linear-to-br from-[#168cff]/4.5 via-transparent to-violet-500/[0.035] opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
            />

            {/* Card glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#168cff]/[0.07] blur-[80px]"/>

            <div className="relative">
              {/* Icon */}
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#168cff]/25 bg-[#168cff]/6 text-[#168cff] shadow-[0_0_25px_rgba(22,140,255,0.08)]"
              >
                <Sparkles
                  size={23}
                  strokeWidth={1.7}
                />
              </div>

              <h3 className="mt-7 text-2xl font-bold tracking-tight text-white sm:text-[28px]">
                Let's talk.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
                I'm always interested in discussing AI
                automation, web development, and ideas
                that can solve real-world problems.
              </p>

              {/* Availability */}
              <div
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/4 px-3 py-1.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"/>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"/>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-emerald-300/80">
                  Available for opportunities
                </span>
              </div>

              {/* Contact items */}
              <div className="mt-8 space-y-3">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.018] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#168cff]/20 hover:bg-[#168cff]/[0.035] hover:shadow-[0_8px_30px_rgba(22,140,255,0.05)]"
                    >
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/6 bg-white/2.5 text-[#168cff] transition-all duration-300 group-hover:border-[#168cff]/25 group-hover:bg-[#168cff]/[0.07] group-hover:shadow-[0_0_18px_rgba(22,140,255,0.10)]"
                      >
                        <Icon
                          size={17}
                          strokeWidth={1.7}
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-600">
                          {item.label}
                        </p>
                        <p className="mt-1 truncate text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white">
                          {item.value}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={15}
                        className="shrink-0 text-gray-700 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#168cff] group-hover:opacity-100"
                      />
                    </a>
                  );
                })}
              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{
                        y: -3,
                      }}
                      className="group flex items-center justify-between rounded-xl border border-white/6 bg-white/[0.018] p-4 transition-all duration-300 hover:border-[#168cff]/25 hover:bg-[#168cff]/[0.035] hover:shadow-[0_10px_30px_rgba(22,140,255,0.06)]"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/6 bg-white/2.5 text-gray-400 transition-all duration-300 group-hover:border-[#168cff]/25 group-hover:bg-[#168cff]/[0.07] group-hover:text-[#168cff]"
                        >
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-gray-300 transition-colors duration-300 group-hover:text-white">
                            {social.name}
                          </p>
                          <p className="mt-0.5 truncate text-[10px] text-gray-600">
                            {social.description}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={15}
                        className="ml-2 shrink-0 text-gray-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#168cff]"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — CONTACT FORM */}
          <motion.div
            variants={fadeRight}
            className="group/form relative overflow-hidden rounded-[26px] border border-white/[0.07] bg-[#080d15]/80 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-9"
          >
            {/* Top gradient */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#168cff]/50 to-transparent"/>

            {/* Top glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-600/6 blur-[90px]"/>

            {/* Form */}
            <div className="relative">
              {/* Form header */}
              <div className="mb-7 flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#168cff] shadow-[0_0_10px_rgba(22,140,255,0.8)]"/>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#168cff]">
                      Send a message
                    </p>
                  </div>

                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                    Start a conversation
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-6 text-gray-600">
                    Tell me what you're building and I'll
                    get back to you.
                  </p>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-white/6 bg-white/.5 sm:flex">
                  <Mail
                    size={18}
                    className="text-[#168cff]"
                  />
                </div>
              </div>

              {/* FORM */}
              <form
                action="https://formsubmit.co/lovepehlaj2005@gmail.com"
                method="POST"
                className="space-y-5"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Portfolio Contact Message"
                />
                <input
                  type="hidden"
                  name="_template"
                  value="table"
                />
                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />
                <input
                  type="text"
                  name="_honey"
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-medium text-gray-500"
                    >
                      Your Name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-white/[0.07] bg-white/2.5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition-all duration-300 focus:border-[#168cff]/45 focus:bg-[#168cff]/2.5 focus:ring-1 focus:ring-[#168cff]/20"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-medium text-gray-500"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-white/[0.07] bg-white/2.5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition-all duration-300 focus:border-[#168cff]/45 focus:bg-[#168cff]/2.5 focus:ring-1 focus:ring-[#168cff]/20"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-medium text-gray-500"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Let's work together"
                    className="w-full rounded-xl border border-white/[0.07] bg-white/2.5 px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-700 transition-all duration-300 focus:border-[#168cff]/45 focus:bg-[#168cff]/2.5 focus:ring-1 focus:ring-[#168cff]/20"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-medium text-gray-500"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="10"
                    placeholder="Tell me a little about your project..."
                    className="w-full resize-none rounded-xl border border-white/[0.07] bg-white/2.5 px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-gray-700 transition-all duration-300 focus:border-[#168cff]/45 focus:bg-[#168cff]/2.5 focus:ring-1 focus:ring-[#168cff]/20"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{
                    y: -2,
                    boxShadow:
                      "0 0 35px rgba(22,140,255,0.22)",
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="group flex w-full items-center justify-center gap-2 rounded-xl border border-[#168cff]/40 bg-linear-to-r from-[#168cff] via-[#2563eb] to-[#6366f1] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(22,140,255,0.10)] transition-all duration-300 hover:from-[#0d9aff] hover:via-[#2563eb] hover:to-[#7c3aed]"
                >
                  Send Message
                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                  />
                </motion.button>

                {/* Email note */}
                <div className="flex items-center justify-center gap-2 text-center">
                  <CheckCircle2
                    size={12}
                    className="text-gray-700"
                  />
                  <p className="text-[10px] leading-5 text-gray-700">
                    Your message will be delivered directly to my inbox
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-2 text-center"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-700">
            AI Automation • React • Modern Web
          </p>
          <p className="text-xs text-gray-800">
            Turning ideas into intelligent digital solutions.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

