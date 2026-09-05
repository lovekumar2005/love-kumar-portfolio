import { motion } from "framer-motion";
import { Bot, Sparkles } from "lucide-react";

const ChatButton = ({ onClick }) => {
  return (
    <div className="fixed bottom-5 right-5 z-100 sm:bottom-8 sm:right-8">
      {/* Outer rotating ring */}
      <motion.span
        animate={{rotate: 360,}}
        transition={{duration: 12, repeat: Infinity, ease: "linear",}}
        className="pointer-events-none absolute -inset-2 rounded-[22px] border border-dashed border-[#168cff]/20"
      />

      {/* Glow */}
      <motion.span
        animate={{scale: [1, 1.15, 1], opacity: [0.25, 0.45, 0.25],}}
        transition={{duration: 2.5, repeat: Infinity, ease: "easeInOut",}}
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[#168cff]/20 blur-2xl"
      />

      {/* Button */}
      <motion.button
        initial={{opacity: 0, scale: 0.7, y: 20,}}
        animate={{opacity: 1, scale: 1, y: 0,}}
        whileHover={{scale: 1.08, y: -3,}}
        whileTap={{scale: 0.94,}}
        transition={{duration: 0.35, ease: [0.22, 1, 0.36, 1],}}

        onClick={onClick}

        aria-label="Open Love's AI Assistant"
        className="group relative flex h-14 w-14 cursor-pointer items-center justify-center overflow-hidden rounded-2xl border border-  [#168cff]/40 bg-linear-to-br from-[#0b1d35] via-[#081525] to-[#070d19] text-[#168cff] shadow-[0_0_30px_rgba(22,140,255,0.25)] transition-all duration-300 hover:border-[#168cff]/70 hover:shadow-[0_0_45px_rgba(22,140,255,0.45)] sm:h-16 sm:w-16"
      >
        {/* Shine */}
        <span
          className="pointer-events-none absolute -left-10 top-0 h-full w-8 rotate25 bg-white/10 blur-md transition-all duration-700 group-hover:left-[120%]"
        />

        {/* Icon */}
        <Bot
          size={25}
          strokeWidth={1.7}
          className="relative z-10 transition-transform duration-300 group-hover:rotate-6"
        />

        {/* Online */}
        <span 
          className="absolute right-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-[#08111f] bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]"
        />

      </motion.button>
    </div>
  );
};

export default ChatButton;