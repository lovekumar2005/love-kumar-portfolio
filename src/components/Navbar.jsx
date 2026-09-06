import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Zap,
  BriefcaseBusiness,
  FolderKanban,
  Mail,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

/* GITHUB ICON */
const GitHubIcon = ({ size = 17, className = "" }) => {
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
        d="M12 0C5.37 0 0 5.37 0 12c0 5.3
        3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
        0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61
        -4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
        -1.089-.745.084-.73.084-.73 1.205.085
        1.84 1.235 1.84 1.235 1.07 1.834 2.807 1.304
        3.495.997.108-.776.418-1.305.762-1.605
        -2.665-.3-5.466-1.332-5.466-5.93
        0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523
        .117-3.176 0 0 1.008-.322 3.3 1.23
        .957-.266 1.983-.399 3.003-.404
        1.02.005 2.046.138 3.003.404
        2.29-1.552 3.296-1.23 3.296-1.23
        .653 1.653.242 2.873.118 3.176
        .77.84 1.233 1.91 1.233 3.22
        0 4.61-2.805 5.625-5.475 5.92
        .43.372.823 1.103.823 2.222
        0 1.606-.015 2.896-.015 3.286
        0 .322.216.696.825.577
        C20.565 21.796 24 17.297 24 12
        24 5.37 18.63 0 12 0z"
      />
    </svg>
  );
};

/* UPWORK ICON */
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

/* FIVERR ICON */
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

/* LINKEDIN ICON */
const LinkedInIcon = ({ size = 17, className = "" }) => {
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
        d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6
        1.12 6 0 4.88 0 3.5S1.12 1 2.49 1
        4.98 2.12 4.98 3.5ZM.5 8h4V23h-4V8Zm6.5 0h3.83v2.05h.05
        c.53-1.01 1.83-2.08 3.77-2.08
        4.03 0 4.78 2.65 4.78 6.1V23h-4v-7.88
        c0-1.88-.04-4.3-2.62-4.3
        -2.62 0-3.02 2.05-3.02 4.17V23H7V8Z"
      />
    </svg>
  );
};

/* NAVIGATION LINKS */
const navLinks = [
  {
    name: "Home",
    href: "#home",
    icon: Home,
  },
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: Zap,
  },
  {
    name: "Experience",
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: FolderKanban,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

/* EXTERNAL LINKS */
const githubUrl = "https://github.com/lovekumar2005";
const upworkUrl = "https://www.upwork.com/freelancers/~0107954c18ad421b7e";
const fiverrUrl = "https://www.fiverr.com/love_aswani/";
const linkedInUrl = "https://www.linkedin.com/in/love-kumar-23866a292/";

/* SOCIAL BUTTON STYLE */
const socialButtonClass = "flex h-9.5 w-9.5 items-center justify-center rounded-lg border border-white/10 bg-white/[0.025] text-slate-400 transition-all duration-300 hover:border-[#168cff]/40 hover:bg-[#168cff]/8 hover:text-[#168cff]";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  /* ACTIVE SECTION DETECTION */
  useEffect(() => {
    const sections = navLinks.map((link) => {
        const id = link.href.replace("#", "");
        return document.getElementById(id);
      })
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          const currentSection =
            visibleSections[0].target.id;

          const currentLink = navLinks.find(
            (link) =>
              link.href === `#${currentSection}`
          );

          if (currentLink) {
            setActive(currentLink.name);
          }
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  /* NAVIGATION CLICK */
  const handleNavClick = (name) => {
    setActive(name);
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{y: -80, opacity: 0,}}
      animate={{y: 0, opacity: 1,}}
      transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1],}}
      className="fixed left-0 top-0 z-50 w-full border-b border-[#168cff]/30 bg-[#030712]/92 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
    >
      {/* BOTTOM GLOW */}
      <div className="pointer-events-none absolute -bottom-8 left-1/2 h-12 w-[55%] -translate-x-1/2 rounded-full bg-[#168cff]/8 blur-2xl" />
      {/*Desktop Navbar */}
      <div
        className="relative mx-auto flex h-20.5 w-[calc(100%-32px)] max-w-7xl items-center justify-between sm:w-[calc(100%-48px)] lg:w-[calc(100%-64px)]"
      >
        {/* LOGO */}
        <a
          href="#home"
          onClick={() => handleNavClick("Home")}
          className="group flex shrink-0 items-center gap-3"
        >
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-[#168cff] to-[#7c3aed] text-[15px] font-black tracking-[-1px] text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 group-hover:shadow-[0_0_28px_rgba(59,130,246,0.5)]"
          >
            LK
          </div>
          <div className="hidden flex-col leading-none sm:flex">
            <span className="text-[20px] font-bold tracking-tight text-white">Love Kumar</span>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = active === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() =>
                  handleNavClick(link.name)
                }
                className={`relative flex items-center gap-1.5 py-3 text-[12px] font-medium transition-colors duration-200 xl:gap-2 xl:text-[13px]
                  ${
                    isActive
                      ? "text-[#168cff]"
                      : "text-slate-400 hover:text-white"
                  }
                `}
              >
                <Icon size={15} strokeWidth={1.7}/>
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="navbarActive"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                    className="absolute -bottom-1.75 left-0 right-0 h-0.5 rounded-full bg-linear-to-r from-[#168cff] to-[#7c3aed] shadow-[0_0_10px_rgba(22,140,255,0.7)]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-2 lg:flex">

          {/* GITHUB */}
          <motion.a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            title="GitHub"
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className={socialButtonClass}
          >
            <GitHubIcon size={17} />
          </motion.a>

          {/* UPWORK */}
          <motion.a
            href={upworkUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            title="Upwork"
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className={socialButtonClass}
          >
            <UpworkIcon size={18} />
          </motion.a>

          {/* FIVERR */}
          <motion.a
            href={fiverrUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr"
            title="Fiverr"
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className={socialButtonClass}
          >
            <FiverrIcon size={18} />
          </motion.a>

          {/* LINKEDIN */}
          <motion.a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            whileHover={{
              y: -2,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className={socialButtonClass}
          >
            <LinkedInIcon size={17} />
          </motion.a>

          {/* HIRE ME */}
          <motion.a
            href="#contact"
            onClick={() =>
              handleNavClick("Contact")
            }
            whileHover={{
              scale: 1.03,
              y: -1,
              boxShadow:
                "0 0 28px rgba(22,140,255,0.4)",
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group ml-1 flex items-center gap-2 rounded-lg border border-[#168cff]/50 bg-linear-to-r from-[#168cff] to-[#7c3aed] px-4 py-2.25 text-[12px] font-semibold text-white shadow-[0_0_18px_rgba(22,140,255,0.18)] transition-all duration-300 hover:border-[#5aaeff] hover:from-[#0d9aff] hover:to-[#8b5cf6]"
          >
            Hire Me
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/4 text-white transition-all duration-200 hover:border-[#168cff]/40 hover:bg-[#168cff]/10 lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? (<X size={22} />) : (<Menu size={22} />)}
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{opacity: 0, height: 0,}}
            animate={{opacity: 1, height: "auto",}}
            exit={{opacity: 0, height: 0,}}
            transition={{duration: 0.3, ease: [0.22, 1, 0.36, 1],}}
            className="overflow-hidden border-t border-white/5 bg-[#030712]/98 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex w-[calc(100%-32px)] max-w-125 flex-col py-4 sm:w-[calc(100%-40px)]">
              {/* SECTION LINKS */}
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const isActive = active === link.name;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() =>
                      handleNavClick(link.name)
                    }
                    initial={{opacity: 0, x: -15,}}
                    animate={{opacity: 1, x: 0,}}
                    transition={{delay: index * 0.04,}}
                    className={` flex items-center gap-3 border-b border-white/5 py-4 text-sm font-medium transition-colors duration-200
                      ${
                        isActive
                          ? "text-[#168cff]"
                          : "text-slate-400 hover:text-white"
                      }
                    `}
                  >
                    <Icon size={18} strokeWidth={1.7}/>
                    {link.name}
                  </motion.a>
                );
              })}

              {/* MOBILE SOCIAL LINKS */}
              <div className="mt-5 grid grid-cols-4 gap-2">
                {/* GITHUB */}
                <motion.a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  whileTap={{ scale: 0.96 }}
                  className="flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/2.5 text-slate-400 transition-all duration-300 hover:border-[#168cff]/40 hover:bg-[#168cff]/8 hover:text-[#168cff]"
                >
                  <GitHubIcon size={17} />
                </motion.a>

                {/* UPWORK */}
                <motion.a
                  href={upworkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Upwork"
                  whileTap={{ scale: 0.96 }}
                  className="flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/2.5 text-slate-400 transition-all duration-300 hover:border-[#168cff]/40 hover:bg-[#168cff]/8 hover:text-[#168cff]"
                >
                  <UpworkIcon size={18} />
                </motion.a>

                {/* FIVERR */}
                <motion.a
                  href={fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fiverr"
                  whileTap={{ scale: 0.96 }}
                  className="flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/2.5 text-slate-400 transition-all duration-300 hover:border-[#168cff]/40 hover:bg-[#168cff]/8 hover:text-[#168cff]"
                >
                  <FiverrIcon size={18} />
                </motion.a>

                {/* LINKEDIN */}
                <motion.a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  whileTap={{ scale: 0.96 }}
                  className="flex h-11 items-center justify-center rounded-lg border border-white/10 bg-white/2.5 text-slate-400 transition-all duration-300 hover:border-[#168cff]/40 hover:bg-[#168cff]/8 hover:text-[#168cff]"
                >
                  <LinkedInIcon size={17} />
                </motion.a>
              </div>

              {/* MOBILE HIRE ME*/}
              <motion.a
                href="#contact"
                onClick={() =>
                  handleNavClick("Contact")
                }
                whileTap={{
                  scale: 0.98,
                }}
                className="group mt-3 flex items-center justify-center gap-2 rounded-lg border border-[#168cff]/50 bg-linear-to-r from-[#168cff] to-[#7c3aed] py-3.5 text-sm font-semibold text-white shadow-[0_0_18px_rgba(22,140,255,0.2)] transition-all duration-300 hover:border-[#5aaeff] hover:from-[#0d9aff] hover:to-[#8b5cf6] hover:shadow-[0_0_28px_rgba(22,140,255,0.45)]"
              >
                Hire Me
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;