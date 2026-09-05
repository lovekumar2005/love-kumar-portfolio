import { useEffect, useState } from "react";

import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: "ai",
    text: "Hi! 👋 I'm **Love's AI Assistant**.",
    createdAt: new Date(),
  },
  {
    id: 2,
    sender: "ai",
    text: "I can tell you about Love's **skills, projects, AI automation work, services, and how to work with him.**",
    createdAt: new Date(),
  },
];

// CREATE / GET SESSION ID
const createSessionId = () => {
  const newSession = crypto.randomUUID();

  localStorage.setItem("portfolio-chat-session", newSession);
  return newSession;
};

const getSessionId = () => {
  if (typeof window === "undefined") {
    return crypto.randomUUID();
  }

  const existingSession = localStorage.getItem("portfolio-chat-session");
  if (existingSession) {
    return existingSession;
  }

  return createSessionId();
};

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);

  // SESSION ID
  const [sessionId, setSessionId] = useState(getSessionId);

  // ESCAPE KEY
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // BODY SCROLL CONTROL ON MOBILE
  useEffect(() => {
    if (isOpen && window.innerWidth < 640) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // SEND MESSAGE
  const handleSend = async (messageText = input) => {
    const text = messageText.trim();

    if (!text || isTyping) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
      createdAt: new Date(),
    };

    setMessages((previous) => [
      ...previous,
      userMessage,
    ]);

    setInput("");
    setIsTyping(true);

    //Send message to n8n
    try {
      const response = await fetch("https://abdullahrasheed.app.n8n.cloud/webhook-test/portfolio-chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message: text,
            sessionId: sessionId,
            source: "portfolio-chatbot",
          }),
        }
      );

      //Response
      if (!response.ok) {
        throw new Error(
          `n8n request failed: ${response.status}`
        );
      }

      const data = await response.json();

      // GET AI RESPONSE
      const aiReply = data.reply || data.output || data.response || data.message;

      // FALLBACK
      if (!aiReply) {
        throw new Error(
          "No AI response received from n8n"
        );
      }

      // AI MESSAGE
      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text: String(aiReply).trim(),
        createdAt: new Date(),
      };

      setMessages((previous) => [
        ...previous,
        aiMessage,
      ]);
    } catch (error) {
      console.error(
        "Portfolio chatbot error:",
        error
      );

      // ERROR MESSAGE
      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          sender: "ai",
          text:
            "Sorry, I'm having trouble connecting right now. **Please try again in a moment.**",
          createdAt: new Date(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  // CLEAR CHAT / NEW CONVERSATION
  const handleClearChat = () => {
    // Create a completely new session
    const newSessionId = createSessionId();

    setSessionId(newSessionId);

    // Reset chat messages
    setMessages(
      INITIAL_MESSAGES.map((message) => ({
        ...message,
        createdAt: new Date(),
      }))
    );

    setInput("");
    setIsTyping(false);
  };

  return (
    <>
      {!isOpen && (
        <ChatButton
          onClick={() => setIsOpen(true)}
        />
      )}

      <ChatWindow
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        messages={messages}
        input={input}
        setInput={setInput}
        isTyping={isTyping}
        onSend={handleSend}
        onSuggestedQuestion={handleSend}
        onClearChat={handleClearChat}
      />
    </>
  );
};

export default PortfolioChatbot;