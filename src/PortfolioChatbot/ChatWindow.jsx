import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatSuggestions from "./ChatSuggestions";
import TypingIndicator from "./TypingIndicator";
import ChatInput from "./ChatInput";

const ChatWindow = ({isOpen, onClose, messages, input, setInput, isTyping, onSend, onSuggestedQuestion, onClearChat,}) => {
  const messagesEndRef = useRef(null);

  // AUTO SCROLL TO LATEST MESSAGE
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isTyping]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{opacity: 0, scale: 0.95, y: 20,}}
          animate={{opacity: 1, scale: 1, y: 0,}}
          exit={{opacity: 0, scale: 0.95, y: 20,}}
          transition={{duration: 0.3, ease: [0.22, 1, 0.36, 1],}}
          className="fixed z-100
            /* MOBILE */
            inset-0 flex h-dvh w-full flex-col overflow-hidden rounded-none

            border-0
            bg-[#07111f]

            /* DESKTOP */
            sm:inset-auto sm:bottom-7 sm:right-7 sm:h-[min(640px,calc(100vh-56px))] sm:w-[calc(100vw-56px)] sm:max-w-102.5 sm:rounded-3xl sm:border sm:border-white/12

            shadow-[0_25px_100px_rgba(0,0,0,0.65),0_0_60px_rgba(22,140,255,0.12)] backdrop-blur-2xl"
        >
          {/* TOP ACCENT */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-0 z-20 h-px bg-linear-to-r from-transparent via-[#168cff] to-transparent opacity-70"
          />

          {/* HEADER */}
          <ChatHeader onClose={onClose} onClearChat={onClearChat}/>

          {/* MESSAGES AREA */}
          <div
            className="relative min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3 py-4 sm:px-4 sm:py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
          >
            {/* Animated background glow */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.2, 0.35, 0.2],}}
              transition={{duration: 6, repeat: Infinity, ease: "easeInOut",}}
              className="pointer-events-none absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[#168cff]/[0.035] blur-[90px] "
            />

            <div className="relative w-full min-w-0">
              {/* SUGGESTED QUESTIONS */}
              {messages.length <= 2 && !isTyping && (
                <ChatSuggestions onSelect={onSuggestedQuestion}/>
              )}

              {/* MESSAGES */}
              <div className="space-y-3.5">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message}/>
                ))}

                {/* TYPING INDICATOR */}
                <AnimatePresence>
                  {isTyping && <TypingIndicator />}
                </AnimatePresence>

                <div ref={messagesEndRef} />
              </div>
            </div>
          </div>

          {/* INPUT */}
          <div className="shrink-0">
            <ChatInput
              input={input}
              setInput={setInput}
              onSend={onSend}
              isTyping={isTyping}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChatWindow;