import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{opacity: 0, y: 8,}}
      animate={{opacity: 1, y: 0,}}
      exit={{opacity: 0, y: 8,}}
      className="flex items-start gap-2"
    >
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#168cff]/20 bg-[#168cff]/8 text-[#168cff]">
        <Bot size={13} />
      </div>

      <div className="flex items-center gap-1 rounded-2xl rounded-tl-md border border-white/8 bg-[#111c2d]/80 px-4 py-3">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#168cff]/60 [animation-delay:-0.3s]"/>
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#168cff]/60 [animation-delay:-0.15s]"/>
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#168cff]/60"/>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;