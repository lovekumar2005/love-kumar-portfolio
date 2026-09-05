import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ChatInput = ({input, setInput, onSend,isTyping,}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      onSend();
    }
  };

  const handleChange = (event) => {
    const value = event.target.value;

    if (value.length <= 1000) {
      setInput(value);
    }
  };

  return (
    <div className="shrink-0 border-t border-white/8 bg-[#07111f]/95 p-3">
      <div
        className="flex items-end gap-2 rounded-2xl border border-white/8 bg-[#0d1828] p-1.5 transition-all duration-200 focus-within:border-[#168cff]/30 focus-within:shadow-[0_0_25px_rgba(22,140,255,0.07)]>"
      >
        <textarea
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask about Love..."
          rows={1}
          maxLength={1000}
          disabled={isTyping}
          className="max-h-24 min-h-10 flex-1 resize-none bg-transparent px-3 py-2.5 text-[12px] text-gray-200 outline-none placeholder:text-gray-600 disabled:cursor-not-allowed disabled:opacity-50"
        />

        <motion.button
          whileHover={{scale: 1.05,}}
          whileTap={{scale: 0.92,}}
          onClick={() => onSend()}
          disabled={!input.trim() || isTyping}
          aria-label="Send message"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-linear-to-br from-[#168cff] to-[#176dd0]
            text-white shadow-[0_0_20px_rgba(22,140,255,0.2)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(22,140,255,0.35)] disabled:cursor-not-allowed disabled:opacity-25"
        >
          <Send size={15} strokeWidth={2}/>
        </motion.button>
      </div>

      <div className="mt-2 flex items-center justify-center gap-2">
        <span className="text-[8px] text-gray-700">AI Portfolio Assistant</span>
        <span className="text-[8px] text-gray-800">•</span>
        <span className="text-[8px] text-gray-700">Press Enter to send</span>
      </div>
    </div>
  );
};

export default ChatInput;