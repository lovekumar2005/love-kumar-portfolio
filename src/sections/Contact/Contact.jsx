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

/*GITHUB ICON*/
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

/*LINKEDIN ICON*/
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

/*FIVERR ICON*/
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

/*UPWORK ICON*/
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

/*CONTACT DATA*/
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

/*SOCIAL LINKS */
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

/* ANIMATIONS*/
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
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -28,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 28,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.75,
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
    width: 72,
    opacity: 1,

    transition: {
      delay: 0.2,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/6 bg-[#030914] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* BACKGROUND*/}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Subtle blue background */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(22,140,255,0.07),transparent_30%),radial-gradient(circle_at_90%_85%,rgba(22,140,255,0.045),transparent_30%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,#030914_0%,#050d19_50%,#030914_100%)]" />

        {/* Soft animated glow */}

        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -20, 25, 0],
            scale: [1, 1.05, 0.98, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#168cff]/[0.035] blur-[110px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 25, -15, 0],
            scale: [1, 0.98, 1.04, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#168cff]/2.5 blur-[110px]"
        />

        <AboutParticles />

        {/* Very subtle grid */}

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-size-[70px_70px] opacity-[0.012]" />
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
        className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]"
      >
        {/*HEADER*/}
        <motion.div
          variants={fadeUp}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          {/* Label */}

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#168cff]/20 bg-[#168cff]/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#168cff] sm:text-xs">
            <MessageCircle size={13} />
            Get In Touch
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Let's Build{" "}
            <span className="bg-linear-to-r from-[#168cff] to-[#00c6ff] bg-clip-text text-transparent">
              Something
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Have an idea, project, or automation challenge?
            Let's turn it into something useful, intelligent,
            and scalable.
          </p>

          {/* Accent */}
          <motion.div
            variants={underlineVariants}
            className="mx-auto mt-6 h-px rounded-full bg-linear-to-r from-transparent via-[#168cff] to-transparent"
          />
        </motion.div>

        {/*CONTENT */}
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-7">

          {/*LEFT CARD */}
          <motion.div
            variants={fadeLeft}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#0b1625] p-6 transition-all duration-300 hover:border-[#168cff]/25 sm:p-7"
          >
            {/* Top accent */}

            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-[#168cff]/50 to-transparent" />

            {/* Header */}
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#168cff]/15 bg-[#168cff]/6 text-[#168cff]">
                <Sparkles size={21} />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-tight text-white">Let's talk.</h3>

              <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                I'm always interested in discussing AI automation,
                web development, and ideas that solve real-world
                problems.
              </p>

              {/* Availability */}

              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/4 px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-emerald-300/80">
                  Available for opportunities
                </span>
              </div>
            </div>

            {/* Contact Information */}
            <div className="relative mt-7 space-y-2.5">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-3 rounded-xl border border-white/6 bg-[#101c2d] p-3.5 transition-all duration-300 hover:border-[#168cff]/20 hover:bg-[#132238]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#168cff]/5 text-[#168cff]">
                      <Icon size={17} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] font-medium uppercase tracking-[0.15em] text-slate-500">
                        {item.label}
                      </p>

                      <p className="mt-1 truncate text-sm text-slate-300">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="shrink-0 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#168cff]"
                    />
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-white/6" />

            {/* Social */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#168cff]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Connect with me
                </span>
              </div>

              <div className="grid gap-2.5 sm:grid-cols-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -2 }}
                      className="group flex items-center gap-3 rounded-xl border border-white/6 bg-[#101c2d] p-3 transition-all duration-300 hover:border-[#168cff]/20 hover:bg-[#132238]"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#168cff]/5 text-slate-400 transition-colors duration-300 group-hover:text-[#168cff]">
                        <Icon size={17} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-slate-300 group-hover:text-white">
                          {social.name}
                        </p>

                        <p className="mt-0.5 truncate text-[9px] text-slate-500">
                          {social.description}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={14}
                        className="shrink-0 text-slate-600 transition-colors group-hover:text-[#168cff]"
                      />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT FORM CARD */}
          <motion.div
            variants={fadeRight}
            className="group relative overflow-hidden rounded-2xl border border-white/8 bg-[#0b1625] p-6 transition-all duration-300 hover:border-[#168cff]/25 sm:p-7"
          >
            {/* Top accent */}
            <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-[#168cff]/60 to-transparent" />

            {/* Header */}
            <div className="relative mb-7">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#168cff]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#168cff]">Send a message</span>
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">Start a conversation</h3>
              <p className="mt-2 text-xs leading-6 text-slate-500">Tell me about your project and I'll get back to you.</p>
            </div>

            {/*FORM*/}
            <form
              action="https://formsubmit.co/lovepehlaj2005@gmail.com"
              method="POST"
              className="relative space-y-5"
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
                    className="mb-2 block text-xs font-medium text-slate-400"
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
                    className="w-full rounded-xl border border-white/[0.07] bg-[#101c2d] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-[#168cff]/40 focus:bg-[#132238] focus:ring-1 focus:ring-[#168cff]/15"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-medium text-slate-400"
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
                    className="w-full rounded-xl border border-white/[0.07] bg-[#101c2d] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-[#168cff]/40 focus:bg-[#132238] focus:ring-1 focus:ring-[#168cff]/15"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-medium text-slate-400"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Let's work together"
                  className="w-full rounded-xl border border-white/[0.07] bg-[#101c2d] px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-[#168cff]/40 focus:bg-[#132238] focus:ring-1 focus:ring-[#168cff]/15"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-medium text-slate-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows="8"
                  placeholder="Tell me a little about your project..."
                  className="w-full resize-none rounded-xl border border-white/[0.07] bg-[#101c2d] px-4 py-3.5 text-sm leading-6 text-white outline-none placeholder:text-slate-600 transition-all duration-300 focus:border-[#168cff]/40 focus:bg-[#132238] focus:ring-1 focus:ring-[#168cff]/15"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-[#168cff] to-[#2563eb] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:from-[#0d9aff] hover:to-[#168cff] hover:shadow-[0_8px_30px_rgba(22,140,255,0.18)]"
              >
                Send Message

                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
                />
              </motion.button>

              {/* Note */}
              <div className="flex items-center justify-center gap-2 text-center">
                <CheckCircle2
                  size={12}
                  className="text-slate-600"
                />

                <p className="text-[10px] text-slate-600">
                  Your message will be delivered directly to my inbox
                </p>
              </div>
            </form>
          </motion.div>
        </div>

        {/*FOOTER LINE*/}
        <motion.div
          variants={fadeUp}
          className="mt-10 text-center"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600">AI Automation • React • Modern Web</p>
          <p className="mt-2 text-xs text-slate-700">Turning ideas into intelligent digital solutions.</p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

