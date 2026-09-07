import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const ChatButton = ({ onClick }) => {
  return (
    <div
      className="group fixed right-4 bottom-5 sm:right-6sm:bottom-6 lg:right-8 lg:bottom-8 z-9999 flex items-center justify-center"
      style={{paddingBottom: "env(safe-area-inset-bottom)",}}
    >
      {/* Animated outer glow */}
      <motion.span
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute h-18 w-18 rounded-full bg-[#008cff]/30 blur-xl"
      />

      {/* Main button */}
      <motion.button
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          scale: 1.08,
          y: -2,
        }}
        whileTap={{
          scale: 0.94,
        }}
        transition={{
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        onClick={onClick}
        aria-label="Open Love's AI Assistant"
        className="relative z-10 flex h-15.5 w-15.5 shrink-0 items-center justify-center overflow-visible rounded-full border-2 border-[#008cff]/70 >bg-linear-to-br from-[#0f4d82] via-[#082b50] to-[#03101f] text-[#00a8ff] shadow-[0_8px_30px_rgba(0,140,255,0.5)] transition-all duration-300 hover:border-[#19b5ff] hover:shadow-[0_10px_40px_rgba(0,140,255,0.75)]
        "
      >
        {/* Shine */}
        <span
          className="pointer-events-none absolute -left-10 top-0 h-full w-8 rotate-25 rounded-full bg-white/15 blur-md transition-all duration-700 group-hover:left-[120%]"
        />

        {/* Inner glow */}
        <span className="pointer-events-none absolute inset-1 rounded-full bg-[#008cff]/10 shadow-[inset_0_0_25px_rgba(0,140,255,0.45)]"/>

        {/* Center glow */}
        <span className="pointer-events-none absolute h-8 w-8 rounded-full bg-[#008cff]/10 blur-lg"/>

        {/* Bot icon */}
        <Bot
          size={30}
          strokeWidth={1.8}
          className="relative z-10 text-[#00a8ff] transition-all duration-300 group-hover:scale-110 group-hover:text-[#20baff] group-hover:drop-shadow-[0_0_12px_rgba(0,168,255,1)]"
        />

        {/* Online dot pulse */}
        <motion.span
          animate={{
            scale: [1, 1.7],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute top-0.75 right-0.75 z-20 h-3.5 w-3.5 rounded-full bg-emerald-400"
        />

        {/* Online dot */}
        <span
          className="absolute top-0.75 right-0.75 z-30 h-3.5 w-3.5 rounded-full border-2 border-[#071525] bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,1)]"
        />
      </motion.button>

      {/* Tooltip */}
      <span
        className="pointer-events-none absolute right-18 top-1/2 -translate-y-1/2 translate-x-2 whitespace-nowrap rounded-xl border border-white/10 bg-[#07111f]/95 backdrop-blur-xl px-4 py-2 text-sm font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
      >
        Ask AI
        <span className="ml-1 text-[#00a8ff]">✦</span>
      </span>
    </div>
  );
};

export default ChatButton;