import { motion } from "framer-motion";
import {
  Code2,
  Layers3,
  Bot,
  Sparkles,
} from "lucide-react";

/* SKILLS DATA */
const skillsData = [
  /* Languages */
  {
    title: "Languages",
    description: "Core languages I use to build software and intelligent systems.",
    icon: Code2,
    skills: [
      {
        name: "JavaScript",
        level: 90,
      },
      {
        name: "Python",
        level: 85,
      },
      {
        name: "C++",
        level: 90,
      },
      {
        name: "C",
        level: 90,
      },
      {
        name: "SQL",
        level: 80,
      },
    ],
  },

  /* Development */
  {
    title: "Development",
    description: "Modern technologies I use to create scalable web applications.",
    icon: Layers3,
    skills: [
      {
        name: "React.js",
        level: 90,
      },
      {
        name: "Redux Toolkit",
        level: 80,
      },
      {
        name: "JavaScript",
        level: 85,
      },
      {
        name: "CSS3",
        level: 85,
      },
      {
        name: "Tailwind CSS",
        level: 90,
      },
    ],
  },

  /* Automation */
  {
    title: "Automation",
    description: "Tools and systems I use to automate workflows and processes.",
    icon: Bot,
    skills: [
      {
        name: "AI Agents",
        level: 85,
      },
      {
        name: "n8n",
        level: 85,
      },
      {
        name: "REST APIs",
        level: 90,
      },
      {
        name: "Webhooks",
        level: 85,
      },
      {
        name: "Workflow Automation",
        level: 90,
      },
    ],
  },
];

/* BACKGROUND PARTICLES */
const particles = [
  { x: "4%", y: "15%", size: 3, duration: 9, delay: 0 },
  { x: "11%", y: "72%", size: 4, duration: 11, delay: 1 },
  { x: "19%", y: "34%", size: 2, duration: 8, delay: 2 },
  { x: "28%", y: "82%", size: 3, duration: 10, delay: 0.5 },
  { x: "36%", y: "18%", size: 4, duration: 12, delay: 1.5 },
  { x: "44%", y: "61%", size: 2, duration: 9, delay: 2.5 },
  { x: "53%", y: "27%", size: 3, duration: 11, delay: 0.8 },
  { x: "61%", y: "86%", size: 4, duration: 10, delay: 1.2 },
  { x: "69%", y: "42%", size: 2, duration: 8, delay: 2 },
  { x: "77%", y: "15%", size: 3, duration: 12, delay: 0.4 },
  { x: "84%", y: "70%", size: 4, duration: 9, delay: 1.8 },
  { x: "92%", y: "31%", size: 3, duration: 10, delay: 2.8 },
  { x: "97%", y: "88%", size: 2, duration: 11, delay: 1 },
  { x: "15%", y: "92%", size: 2, duration: 8, delay: 2.2 },
  { x: "48%", y: "92%", size: 3, duration: 10, delay: 1.4 },
  { x: "88%", y: "52%", size: 2, duration: 9, delay: 0.7 },
];

const SkillsParticles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-1 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0.2,
            x: 0,
            y: 0,
            scale: 1,
          }}
          animate={{
            opacity: [0.2, 0.75, 0.3, 0.2],
            x: [0, 15, -10, 0],
            y: [0, -20, 12, 0],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-[#168cff] shadow-[0_0_9px_rgba(22,140,255,0.75)]"
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

/* CARD VARIANTS */
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* SKILL ITEM VARIANTS */
const skillVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* SKILLS CONTAINER VARIANTS */
const skillsContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.12,
    },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#030712] py-24 text-white sm:py-28 lg:py-32"
    >

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Very subtle gradient */}
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(22,140,255,0.055),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(124,58,237,0.04),transparent_34%)]"
        />

        {/* Moving dots */}
        <SkillsParticles />

        {/* Subtle center glow */}
        <div
          className="absolute left-1/2 top-1/2 h-87.5 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#168cff]/[0.018] blur-[120px]"
        />

        {/* Top divider */}
        <div
          className="absolute left-1/2 top-0 h-px w-[85%] -translate-x-1/2 bg-linear-to-r from-transparent via-[#168cff]/20 to-transparent"
        />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-7xl sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]">

        {/* SECTION HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-2">
            <Sparkles
              size={13}
              className="text-[#168cff]"
            />

            <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#168cff] sm:text-xs">
              MY TOOLKIT
            </span>

            <Sparkles
              size={13}
              className="text-[#168cff]"
            />
          </div>

          {/* Main title */}
          <h2 className="text-[36px] font-bold leading-tight tracking-tight sm:text-[46px] md:text-[52px]">
            The Stack{" "}
            <span className="bg-linear-to-r from-white via-[#8acbff] to-[#168cff] bg-clip-text text-transparent">
              Behind My Work
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            Technologies, languages, and automation tools I use to turn
            ideas into scalable digital products and intelligent systems.
          </p>

          {/* Accent line */}
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 75,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto mt-6 h-0.75 rounded-full bg-linear-to-r from-[#168cff] to-[#00c6ff] shadow-[0_0_14px_rgba(22,140,255,0.45)]"
          />
        </motion.div>

        {/* SKILL CARDS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={{
            hidden: {},

            visible: {
              transition: {
                staggerChildren: 0.16,
                delayChildren: 0.05,
              },
            },
          }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {skillsData.map((category, categoryIndex) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0a0f17]/75 p-6 backdrop-blur-xl sm:p-7"
              >

                {/* Card hover glow */}
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#168cff]/0 blur-[70px] transition-all duration-500 group-hover:bg-[#168cff]/10"
                />

                {/* Card top border */}
                <div
                  className="absolute left-0 top-0 h-px w-0 bg-linear-to-r from-[#168cff] to-[#00c6ff] transition-all duration-500 group-hover:w-full"
                />

                {/* CARD HEADER */}
                <div className="relative z-10 mb-8 flex items-start gap-4">

                  {/* Icon */}
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#168cff]/20 bg-[#168cff]/6 text-[#168cff] shadow-[0_0_20px_rgba(22,140,255,0.06)] transition-all duration-300 group-hover:border-[#168cff]/40 group-hover:bg-[#168cff]/10 group-hover:shadow-[0_0_22px_rgba(22,140,255,0.12)]"
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#168cff]">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* SKILLS */}
                <motion.div
                  variants={skillsContainerVariants}
                  className="relative z-10 space-y-5"
                >
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                    >

                      {/* Name + percentage */}
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <span className="text-sm font-semibold text-gray-200">
                          {skill.name}
                        </span>

                        <span className="text-xs font-medium text-[#168cff]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress track */}
                      <div className="h-1.25 w-full overflow-hidden rounded-full bg-white/[0.07]">

                        {/* Animated progress */}
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${skill.level}%`,
                          }}
                          viewport={{
                            once: true,
                            amount: 0.15,
                          }}
                          transition={{
                            duration: 1.1,
                            delay: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="relative h-full rounded-full bg-linear-to-r from-[#168cff] to-[#00c6ff] shadow-[0_0_10px_rgba(22,140,255,0.35)]"
                        />

                      </div>

                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <p className="text-xs leading-6 text-gray-600 sm:text-sm">
            Always learning. Always building.

            <span className="text-gray-400">
              {" "}Focused on creating technology that actually solves problems.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;