import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

const suggestions = [
  "What does Love build?",
  "What are his skills?",
  "Tell me about his projects",
  "Can I hire Love?",
];

const ChatSuggestions = ({ onSelect }) => {
  return (
    <motion.div
      initial={{opacity: 0, y: 12,}}
      animate={{opacity: 1, y: 0,}}
      className="mb-5"
    >
      <div className="mb-3 flex items-center gap-2">
        <Sparkles size={12} className="text-[#168cff]"/>
        <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-gray-600">Quick questions</span>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {suggestions.map((question, index) => (
          <motion.button
            key={question}
            initial={{opacity: 0, x: -8,}}
            animate={{opacity: 1, x: 0,}}
            transition={{delay: index * 0.05,}}
            whileHover={{x: 3,}}
            whileTap={{scale: 0.98,}}
            onClick={() => onSelect(question)}
            className="group flex cursor-pointer items-center justify-between rounded-xl border border-white/[0.07] bg-[#101a2a]/70 px-3.5 py-2.5 text-left text-[11px] text-gray-400 shadow-sm transition-all duration-200 hover:border-[#168cff]/25 hover:bg-[#142238] hover:text-gray-200 "
          >
            <span>{question}</span>

            <ArrowUpRight
              size={13}
              className="text-gray-700 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#168cff] "
            />
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ChatSuggestions;