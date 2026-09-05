import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const formatTime = (date) => {
  if (!date) return "";

  return new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(date));
};

const ChatMessage = ({ message }) => {
  const isUser = message.sender === "user";

  // Convert escaped newlines from n8n/AI into real line breaks
  const formattedText =
    typeof message.text === "string"
      ? message.text
          .replace(/\\n/g, "\n")
          .replace(/\r\n/g, "\n")
          .trim()
      : "";

  return (
    <motion.div
      initial={{opacity: 0, y: 10, scale: 0.98,}}
      animate={{opacity: 1, y: 0, scale: 1,}}
      transition={{duration: 0.25,}}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div className={`flex max-w-[88%] gap-2 ${isUser ? "flex-row-reverse" : "flex-row"}`}>
        {/* Avatar */}
        <div
          className={`
            mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg
            ${
              isUser
                ? `border border-white/10 bg-white/5 text-gray-500`
                : `border border-[#168cff]/20 bg-[#168cff]/8 text-[#168cff]`
            }
          `}
        >
          {isUser ? (<User size={12} />) : (<Bot size={13} />)}
        </div>

        {/* Content */}
        <div
          className={`flex min-w-0 flex-col ${isUser ? "items-end" : "items-start"}`}
        >
          <div
            className={`
              rounded-2xl px-3.5 py-2.5 text-[12px] leading-[1.65]
              ${
                isUser
                  ? `rounded-tr-md bg-linear-to-br from-[#168cff] to-[#1675d1] text-white shadow-[0_6px_25px_rgba(22,140,255,0.18)]`
                  : `rounded-tl-md border border-white/8 bg-[#111c2d]/80 text-gray-300 shadow-[0_5px_20px_rgba(0,0,0,0.12)]`
              }
            `}
          >
            <div
              className={` 
                message-text max-w-none [&>p]:m-0 [&>p+p]:mt-2 [&>ul]:my-1.5 [&>ol]:my-1.5 [&>ul]:pl-4 [&>ol]:pl-4 [&>li]:my-0.5 [&_strong]:font-semibold
                ${
                  isUser
                    ? "[&_strong]:text-white"
                    : "[&_strong]:text-gray-100"
                }
              `}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  // Clean bullet points
                  ul: ({ children }) => (<ul className="list-disc">{children}</ul>),

                  // Numbered lists
                  ol: ({ children }) => (<ol className="list-decimal">{children}</ol>),

                  // Links
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#168cff] underline underline-offset-2 hover:text-[#4aa8ff]"
                    >
                      {children}
                    </a>
                  ),

                  // Code
                  code: ({ children }) => (
                    <code
                      className={`
                        rounded bg-black/20 px-1 py-0.5 text-[11px]
                        ${
                          isUser
                            ? "text-white"
                            : "text-[#7fc3ff]"
                        }
                      `}
                    >
                      {children}
                    </code>
                  ),
                }}
              >
                {formattedText}
              </ReactMarkdown>
            </div>
          </div>

          {/* Time */}
          <span className="mt-1 px-1 text-[8px] text-gray-700">{formatTime(message.createdAt)}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatMessage;