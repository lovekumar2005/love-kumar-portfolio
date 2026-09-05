import { Bot, RotateCcw, X } from "lucide-react";

const ChatHeader = ({onClose, onClearChat,}) => {
  return (
    <header
      className="relative shrink-0 border-b border-white/8 bg-[#081525]/70 px-4 py-4"
    >
      {/* Header glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-24 w-52 rounded-full bg-[#168cff]/[0.07] blur-3xl"/>

      <div className="relative flex items-center justify-between">
        {/* Identity */}
        <div className="flex items-center gap-3">
          <div
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[#168cff]/25 bg-linear-to-br from-[#168cff]/15 to-[#8b5cf6]/10 text-[#168cff] shadow-[0_0_25px_rgba(22,140,255,0.12)]"
          >
            <Bot size={21} strokeWidth={1.7}/>
          </div>

          <div>
            <h3 className="text-[14px] font-semibold tracking-tight text-white">Love's AI Assistant</h3>

            <div className="mt-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-gray-500">Online</span>
              <span className="text-[10px] text-gray-700">•</span>
              <span className="text-[10px] text-gray-500">AI Powered</span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={onClearChat}
            aria-label="Clear conversation"
            title="Clear conversation"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-600 transition-all duration-200 hover:bg-white/6 hover:text-gray-300"
          >
            <RotateCcw size={14} />
          </button>

          <button
            onClick={onClose}
            aria-label="Close AI Assistant"
            title="Close"
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-white/6 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;