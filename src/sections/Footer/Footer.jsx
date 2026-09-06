import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
  Zap,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // NAVIGATION
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // SERVICES
  const services = [
    "AI Automation",
    "AI Agents",
    "n8n Workflows",
    "API Integrations",
    "Frontend Development",
    "React Development",
  ];

  /* ANIMATIONS */

  const fadeUp = {
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

  const fadeLeft = {
    hidden: {
      opacity: 0,
      x: -28,
    },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.78,
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
        duration: 0.78,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerVariants = {
    hidden: {},

    visible: {
      transition: {
        delayChildren: 0.04,
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <footer
      id="footer"
      className="relative overflow-hidden border-t border-white/6 bg-[#030712] text-white"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue Glow */}
        <div className="absolute left-[10%] -top-37.5 h-105 w-105 rounded-full bg-[#168cff]/6 blur-[140px]" />

        {/* Purple Glow */}
        <div className="absolute right-[5%] top-[20%] h-90 w-90 rounded-full bg-purple-600/4.5 blur-[140px]" />

        {/* Bottom Glow */}
        <div className="absolute -bottom-55 left-1/2 h-105 w-175 -translate-x-1/2 rounded-full bg-[#168cff]/[0.035] blur-[150px]" />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-[#030712] to-transparent" />
      </div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* CTA SECTION */}
        <section className="relative border-b border-white/6 py-20 sm:py-24 lg:py-28">
          <div className="absolute inset-x-4 top-1/2 h-[85%] -translate-y-1/2 rounded-3xl border border-white/5 bg-linear-to-br from-[#168cff]/5.5 via-white/1.5 to-purple-500/4.5 backdrop-blur-sm sm:inset-x-8 lg:inset-x-16" />

          {/* CTA Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-60 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#168cff]/[0.035] blur-[110px]" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
            variants={fadeUp}
            className="relative mx-auto max-w-3xl text-center"
          >
            {/* Label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#168cff]/20 bg-[#168cff]/5 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#8acbff] sm:text-xs">
              <Sparkles
                size={13}
                className="text-[#168cff]"
              />
              Let's Build Something
            </div>

            {/* Heading */}
            <h2 className="text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-[52px]">
              Have an idea?
              <br />
              <span className="bg-linear-to-r from-white via-[#8acbff] to-[#168cff] bg-clip-text text-transparent">
                Let's turn it into reality.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Whether you need an AI automation workflow, intelligent
              agent, API integration, or a modern web experience, let's
              build something that creates real value.
            </p>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#168cff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_35px_rgba(22,140,255,0.18)] transition-all duration-300 hover:bg-[#2d9aff] hover:shadow-[0_0_45px_rgba(22,140,255,0.35)]"
            >
              Let's Work Together
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </motion.div>
        </section>

        {/* FOOTER CONTENT */}
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">
          {/* BRAND */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            variants={fadeLeft}
          >
            {/* Logo / Brand */}
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-[#168cff] to-purple-500 shadow-[0_0_25px_rgba(22,140,255,0.2)]">
                <span className="text-sm font-bold text-white">LK</span>
                <div className="absolute inset-0 rounded-xl border border-white/20" />
              </div>

              <div>
                <p className="text-base font-bold text-white">
                  Love Kumar
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-gray-600">
                  AI Automation Developer
                </p>
              </div>
            </a>

            {/* Description */}
            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              I build intelligent automation systems, AI agents, API
              integrations, and modern frontend experiences that help
              businesses work smarter.
            </p>

            {/* Availability */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/10 bg-emerald-400/4 px-3 py-2 text-xs text-gray-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
              </span>

              Available for freelance projects
            </div>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            variants={fadeUp}
          >
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Navigation
            </h3>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={staggerVariants}
              className="space-y-3"
            >
              {navigation.map((item) => (
                <motion.li
                  key={item.name}
                  variants={fadeUp}
                >
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1 text-sm text-gray-500 transition-colors duration-300 hover:text-white"
                  >
                    <span>{item.name}</span>

                    <ArrowUpRight
                      size={12}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* SERVICES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            variants={fadeUp}
          >
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              What I Do
            </h3>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.3,
              }}
              variants={staggerVariants}
              className="space-y-3"
            >
              {services.map((service) => (
                <motion.li
                  key={service}
                  variants={fadeUp}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <span className="h-1 w-1 rounded-full bg-[#168cff] shadow-[0_0_6px_#168cff]" />

                  {service}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* CONNECT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.08,
            }}
            variants={fadeRight}
          >
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">Connect</h3>

            {/* Email */}
            <a
              href="mailto:lovepehlaj2005@gmail.com"
              className="group mb-4 flex items-center gap-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/.5 text-gray-500 transition-all duration-300 group-hover:border-[#168cff]/20 group-hover:bg-[#168cff]/5 group-hover:text-[#168cff]">
                <Mail size={15} />
              </div>

              <div>
                <p className="text-[10px] text-gray-600">Email</p>
                <p className="text-xs text-gray-400 transition-colors group-hover:text-white">lovepehlaj2005@gmail.com</p>
              </div>
            </a>

            {/* Location */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2.5 text-gray-500">
                <MapPin size={15} />
              </div>

              <div>
                <p className="text-[10px] text-gray-600">Location</p>
                <p className="text-xs text-gray-400">Lahore, Pakistan</p>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.4,
              }}
              variants={staggerVariants}
              className="flex items-center gap-2"
            >
              {/* GitHub */}
              <motion.a
                variants={fadeUp}
                href="https://github.com/lovekumar2005"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2.5 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#168cff]/25 hover:bg-[#168cff]/5 hover:text-[#168cff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.523 2 12 2Z" />
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                variants={fadeUp}
                href="https://www.linkedin.com/in/love-kumar-23866a292/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2.5 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#168cff]/25 hover:bg-[#168cff]/5 hover:text-[#168cff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.559 20.452h3.558V8.999H3.559v11.453Z" />
                </svg>
              </motion.a>

              {/* Email */}
              <motion.a
                variants={fadeUp}
                href="mailto:lovepehlaj2005@gmail.com"
                aria-label="Email"
                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2.5 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#168cff]/25 hover:bg-[#168cff]/5 hover:text-[#168cff]"
              >
                <Mail size={16} />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                variants={fadeUp}
                href="https://wa.me/923313859556"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2.5 text-gray-500 transition-all duration-300 hover:-translate-y-1 hover:border-[#168cff]/25 hover:bg-[#168cff]/5 hover:text-[#168cff]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5.17.17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.95L.07 24l6.3-1.65a11.88 11.88 0 0 0 5.67 1.44h.01c6.55 0 11.88-5.33 11.88-11.89 0-3.18-1.24-6.17-3.41-8.42ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.23-.38a9.9 9.9 0 0 1-1.51-5.27c0-5.47 4.45-9.92 9.93-9.92a9.85 9.85 0 0 1 7.02 2.91 9.91 9.91 0 0 1 2.9 7.03c0 5.47-4.45 9.92-9.92 9.92Zm5.44-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.12-.27-.2-.57-.35-.69Z" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          variants={fadeUp}
          className="flex flex-col gap-5 border-t border-white/6 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Copyright */}
          <p className="text-xs text-gray-600">
            © {currentYear} Love Kumar. All rights reserved.
          </p>

          {/* Built With */}
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <span>Built with</span>
            <span className="text-gray-400">React</span>
            <span className="text-gray-700">•</span>
            <span className="text-gray-400">Tailwind</span>
            <span className="text-gray-700">•</span>

            <span className="flex items-center gap-1 text-gray-400">
              <Zap
                size={11}
                className="text-[#168cff]"
              />
              AI
            </span>
          </div>

          {/* Back To Top */}
          <motion.a
            href="#home"
            whileHover={{
              y: -3,
            }}
            className="group flex items-center gap-2 text-xs text-gray-600 transition-colors duration-300 hover:text-white"
          >
            <span>Back to top</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.07] bg-white/2.5 transition-all duration-300 group-hover:border-[#168cff]/25 group-hover:bg-[#168cff]/5">
              <ArrowUp
                size={14}
                className="text-[#168cff]"
              />
            </span>
          </motion.a>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;