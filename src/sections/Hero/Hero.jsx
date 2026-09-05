import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Bot,
  Code2,
  Download,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

import HeroParticles from "./HeroParticles";

const Hero = () => {
  const technologies = ["n8n", "Make", "React", "OpenAI", "REST APIs"];

  // Scroll indicator visibility
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#030712] text-white"
    >
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Main Blue Glow */}
        <div className="absolute left-[10%] top-[5%] h-80 w-[320px] rounded-full bg-[#168cff]/[0.07] blur-[110px] sm:h-105 sm:w-105 lg:left-[38%] lg:top-[8%] lg:h-145 lg:w-145 lg:blur-[150px]" />

        {/* Purple Glow */}
        <div className="absolute right-[-15%] top-[20%] h-75 w-75 rounded-full bg-purple-600/5 blur-[110px] sm:h-105 sm:w-105 lg:right-[2%] lg:top-[16%] lg:h-125 lg:w-125 lg:blur-[150px]" />

        {/* Bottom Glow */}
        <div className="absolute -bottom-45 left-[15%] h-87.5 w-150 rounded-full bg-[#168cff]/4.5 blur-[120px] lg:left-[30%]" />

        {/* Particle Network */}
        <HeroParticles />

        {/* Subtle Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Top Fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#030712] to-transparent" />

        {/* Bottom Fade */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#030712] to-transparent" />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mt-3 mx-auto flex min-h-screen w-[calc(100%-40px)] max-w-7xl items-center pb-16 pt-28 sm:w-[calc(100%-64px)] sm:pt-32 lg:pb-12 lg:pt-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:gap-4">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-20 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
          >
            {/* BADGE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.12,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#168cff]/20 bg-[#168cff]/5.5 px-4 py-2 text-[10px] font-medium tracking-wide text-[#8acbff] backdrop-blur-md sm:text-xs"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#168cff] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#168cff] shadow-[0_0_10px_#168cff]" />
              </span>

              AI AUTOMATION DEVELOPER
            </motion.div>

            {/* HEADING */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-[42px] font-bold leading-[1.06] tracking-[-0.04em] sm:text-[52px] md:text-[58px] lg:text-[62px] xl:text-[66px]"
            >
              I Build
              <br />

              <span className="bg-linear-to-r from-white via-[#8acbff] to-[#168cff] bg-clip-text text-transparent">
                Intelligent Systems
              </span>

              <br />

              <span className="text-white">
                That Work For You.
              </span>
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.32,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-6 max-w-140 text-sm leading-7 text-gray-400 sm:text-base sm:leading-7 lg:mx-0 lg:text-[17px]"
            >
              I build AI-powered automation systems, intelligent workflows,
              and modern web experiences that help businesses reduce
              repetitive work, save time, and scale smarter.
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.42,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start"
            >
              {/* Explore My Work */}
              <a
                href="#projects"
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#168cff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(22,140,255,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2d9aff] hover:shadow-[0_0_45px_rgba(22,140,255,0.35)]"
              >
                Explore My Work

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* Download CV */}
              <a 
                href="/Love-Kumar-CV.pdf"
                download
                className="group cursor-pointer flex items-center justify-center gap-2 rounded-xl border border-white/9 bg-white/2.5 px-6 py-3.5 text-sm font-semibold text-gray-200 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#168cff]/30 hover:bg-[#168cff]/5 hover:text-white"
              >
                Download CV

                <Download
                  size={16}
                  className="text-[#168cff] transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* AVAILABILITY */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.58,
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 flex items-center justify-center gap-2.5 text-xs text-gray-500 sm:text-sm lg:justify-start"
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
              </span>

              <span>
                Available for Freelance & Automation Projects
              </span>
            </motion.div>

            {/* TECHNOLOGY STACK */}
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-9 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
            >
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/[0.07] bg-white/2.5 px-3 py-1.5 text-[10px] font-medium text-gray-500 backdrop-blur-sm transition-all duration-300 hover:border-[#168cff]/20 hover:bg-[#168cff]/4 hover:text-gray-300 sm:text-[11px]"
                >
                  {technology}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT PROFILE AREA */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto flex h-97.5 w-full max-w-120 items-center justify-center sm:h-125 lg:h-140 lg:max-w-none"
          >
            {/* PROFILE GLOW */}
            <div className="absolute left-1/2 top-1/2 h-67.5 w-67.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#168cff]/10 blur-[80px] sm:h-87.5 sm:w-87.5 lg:h-105 lg:w-105 lg:blur-[110px]" />

            {/* OUTER ORBIT */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-73.75 w-73.75 rounded-full border border-dashed border-[#168cff]/13 sm:h-96.25 sm:w-96.25 lg:h-116.25 lg:w-116.25"
            >
              {/* Blue Orbit Dot */}
              <span className="absolute -right-1 top-1/2 h-2.5 w-2.5 rounded-full bg-[#168cff] shadow-[0_0_18px_#168cff]" />

              {/* Purple Orbit Dot */}
              <span className="absolute left-[19%] top-[3%] h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_14px_#a855f7]" />
            </motion.div>

            {/* INNER ORBIT */}
            <motion.div
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-63.75 w-63.75 rounded-full border border-[#168cff]/[0.14] sm:h-83.75 sm:w-83.75 lg:h-101.25 lg:w-101.25"
            >
              <span className="absolute bottom-[13%] left-[4%] h-1.5 w-1.5 rounded-full bg-[#168cff] shadow-[0_0_12px_#168cff]" />
            </motion.div>

            {/* PROFILE IMAGE */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-65 w-65 rounded-full bg-linear-to-br from-[#168cff] via-purple-500 to-[#168cff] p-0.5 shadow-[0_0_70px_rgba(22,140,255,0.22)] sm:h-76.25 sm:w-76.25 lg:h-88.75 lg:w-88.75 lg:shadow-[0_0_90px_rgba(22,140,255,0.24)]"
            >
              <div className="h-full w-full rounded-full bg-[#030712] p-2.5 sm:p-3">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <img
                    src="/images/profile.png"
                    alt="Love Kumar - AI Automation Developer"
                    className="h-full w-full object-cover object-center"
                  />

                  {/* Bottom Image Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#030712]/25 via-transparent to-transparent" />

                  {/* Moving Shine */}
                  <motion.div
                    animate={{
                      x: ["-130%", "130%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatDelay: 6,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-y-0 w-1/3 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/8 to-transparent"
                  />
                </div>
              </div>
            </motion.div>

            {/* AI AGENT CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[0%] top-[14%] z-20 hidden rounded-2xl border border-white/8 bg-[#08111f]/80 p-3 shadow-2xl backdrop-blur-xl sm:block lg:left-[-2%]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#168cff]/10 text-[#168cff]">
                  <Bot size={19} />
                </div>

                <div>
                  <p className="text-[10px] text-gray-500">
                    Building
                  </p>

                  <p className="text-xs font-semibold text-white sm:text-sm">
                    AI Agents
                  </p>
                </div>
              </div>
            </motion.div>

            {/* API CARD */}
            <motion.div
              animate={{
                x: [0, 5, 0],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[5%] top-[7%] z-20 hidden items-center gap-2 rounded-full border border-white/8 bg-[#08111f]/80 px-3.5 py-2 shadow-xl backdrop-blur-xl md:flex lg:right-[3%]"
            >
              <Code2
                size={14}
                className="text-[#168cff]"
              />

              <span className="text-[10px] font-medium text-gray-400">
                APIs & Integrations
              </span>
            </motion.div>

            {/* WORKFLOW CARD */}
            <motion.div
              animate={{
                y: [0, 9, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[12%] right-[0%] z-20 hidden rounded-2xl border border-white/8 bg-[#08111f]/80 p-3 shadow-2xl backdrop-blur-xl sm:block lg:right-[-2%]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
                  <Workflow size={18} />
                </div>

                <div>
                  <p className="text-[10px] text-gray-500">
                    Automating
                  </p>

                  <p className="text-xs font-semibold text-white sm:text-sm">
                    Workflows
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SPARK */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[22%] left-[9%] text-[#168cff]"
            >
              <Sparkles size={19} />
            </motion.div>

            {/* ZAP */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[12%] top-[31%] text-purple-400"
            >
              <Zap size={16} />
            </motion.div>

            {/* BOTTOM LABEL */}
            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.85,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-[1%] left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/8 bg-white/2.5 px-4 py-2 text-[10px] text-gray-500 backdrop-blur-md md:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

              AI • Automation • Development
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? 10 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute bottom-5 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-600 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.28em]">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={15} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default Hero;

