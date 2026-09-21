"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Sparkles,
  Minimize2,
  ExternalLink,
  RefreshCw
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { generateBotResponse, getDefaultQuickActions } from "../lib/chatbotEngine";
import { askChatbotAction } from "../app/actions/chatbotAction";

interface Message {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
  quickActions?: { label: string; action: string; link?: string }[];
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: "welcome-1",
    sender: "bot",
    text: "Hello! 👋 I'm **OctaBot**, your AI assistant for **OctaBitLogics**.\n\nHow can I help you explore our services, case studies, or tech stack today?",
    timestamp: getFormattedTime(),
    quickActions: getDefaultQuickActions()
  }
];

function getFormattedTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function Chatbot() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: text,
      timestamp: getFormattedTime()
    };

    const updatedHistory = [...messages, userMsg];
    setMessages(updatedHistory);
    if (!textToSend) setInputValue("");
    setIsTyping(true);

    try {
      const response = await askChatbotAction(text, messages);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: response.text,
        timestamp: getFormattedTime(),
        quickActions: response.quickActions
      };
      setMessages(prev => [...prev, botMsg]);

      // Agent Navigation Execution
      if (response.navigateTo) {
        setTimeout(() => {
          router.push(response.navigateTo!);
        }, 600);
      }
    } catch (err) {
      const fallback = generateBotResponse(text);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: fallback.text,
        timestamp: getFormattedTime(),
        quickActions: fallback.quickActions
      };
      setMessages(prev => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickAction = (actionItem: { label: string; action: string; link?: string }) => {
    handleSendMessage(actionItem.label);
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <>
      <style>{`
        .octa-chat-launcher {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #002046 0%, #003366 100%);
          color: #ffffff;
          padding: 14px 20px;
          border-radius: 9999px;
          border: 1px solid rgba(59, 173, 176, 0.4);
          box-shadow: 0 10px 25px -5px rgba(0, 32, 70, 0.35), 0 0 15px rgba(59, 173, 176, 0.2);
          cursor: pointer;
          font-family: inherit;
          font-weight: 700;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .octa-chat-launcher:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 15px 30px -5px rgba(0, 32, 70, 0.45), 0 0 20px rgba(59, 173, 176, 0.35);
          border-color: #3BADB0;
        }

        .octa-chat-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 14px;
          height: 14px;
          background: #2ECC40;
          border: 2px solid #002046;
          border-radius: 50%;
        }

        .octa-chat-window {
          position: fixed;
          bottom: 90px;
          right: 24px;
          z-index: 9999;
          width: 380px;
          max-width: calc(100vw - 32px);
          height: 560px;
          max-height: calc(100vh - 120px);
          background: #faf9fd;
          border-radius: 16px;
          border: 1px solid rgba(0, 32, 70, 0.15);
          box-shadow: 0 20px 40px -10px rgba(0, 32, 70, 0.25);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: inherit;
        }

        .octa-chat-header {
          background: #002046;
          color: #ffffff;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .octa-chat-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .octa-chat-avatar {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #3BADB0 0%, #2ECC40 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(46, 204, 64, 0.2);
        }

        .octa-chat-header-title {
          font-size: 0.95rem;
          font-weight: 800;
          margin: 0;
          color: #ffffff;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .octa-chat-header-status {
          font-size: 0.72rem;
          color: #3BADB0;
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 600;
        }

        .octa-chat-status-dot {
          width: 7px;
          height: 7px;
          background: #2ECC40;
          border-radius: 50%;
          display: inline-block;
        }

        .octa-chat-header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .octa-chat-btn-icon {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          padding: 6px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .octa-chat-btn-icon:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }

        .octa-chat-body {
          flex: 1;
          padding: 16px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 14px;
          background: #faf9fd;
        }

        .octa-msg-row {
          display: flex;
          gap: 10px;
          max-width: 88%;
        }

        .octa-msg-row.user {
          align-self: flex-end;
          flex-direction: row-reverse;
        }

        .octa-msg-row.bot {
          align-self: flex-start;
        }

        .octa-msg-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 0.75rem;
        }

        .octa-msg-avatar.bot {
          background: #002046;
          color: #3BADB0;
        }

        .octa-msg-avatar.user {
          background: #3BADB0;
          color: #ffffff;
        }

        .octa-msg-bubble {
          padding: 12px 14px;
          border-radius: 14px;
          font-size: 0.85rem;
          line-height: 1.5;
          word-break: break-word;
        }

        .octa-msg-bubble.bot {
          background: #ffffff;
          color: #002046;
          border: 1px solid rgba(0, 32, 70, 0.08);
          border-top-left-radius: 4px;
          box-shadow: 0 2px 6px rgba(0, 32, 70, 0.04);
        }

        .octa-msg-bubble.user {
          background: linear-gradient(135deg, #002046 0%, #003366 100%);
          color: #ffffff;
          border-top-right-radius: 4px;
        }

        .octa-msg-time {
          font-size: 0.65rem;
          color: #74777f;
          margin-top: 4px;
          text-align: right;
        }

        .octa-msg-row.user .octa-msg-time {
          color: rgba(255, 255, 255, 0.7);
        }

        .octa-quick-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 10px;
        }

        .octa-quick-pill {
          background: #ffffff;
          border: 1px solid rgba(59, 173, 176, 0.4);
          color: #002046;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.76rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          text-decoration: none;
        }

        .octa-quick-pill:hover {
          background: #3BADB0;
          color: #ffffff;
          border-color: #3BADB0;
          transform: translateY(-1px);
        }

        .octa-typing-indicator {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 14px;
          background: #ffffff;
          border: 1px solid rgba(0, 32, 70, 0.08);
          border-radius: 14px;
          border-top-left-radius: 4px;
          width: fit-content;
        }

        .octa-typing-dot {
          width: 6px;
          height: 6px;
          background: #3BADB0;
          border-radius: 50%;
          animation: octaBounce 1.4s infinite ease-in-out both;
        }

        .octa-typing-dot:nth-child(1) { animation-delay: -0.32s; }
        .octa-typing-dot:nth-child(2) { animation-delay: -0.16s; }

        @keyframes octaBounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }

        .octa-chat-footer {
          padding: 12px 14px;
          background: #ffffff;
          border-top: 1px solid rgba(0, 32, 70, 0.08);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .octa-chat-input {
          flex: 1;
          border: 1px solid rgba(0, 32, 70, 0.15);
          border-radius: 20px;
          padding: 10px 16px;
          font-size: 0.85rem;
          outline: none;
          color: #002046;
          background: #faf9fd;
          transition: border-color 0.2s ease;
        }

        .octa-chat-input:focus {
          border-color: #3BADB0;
          background: #ffffff;
        }

        .octa-chat-send-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #002046 0%, #3BADB0 100%);
          border: none;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .octa-chat-send-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(59, 173, 176, 0.3);
        }

        .octa-chat-send-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 640px) {
          .octa-chat-window {
            bottom: 0 !important;
            right: 0 !important;
            width: 100vw !important;
            height: 100dvh !important;
            max-width: 100vw !important;
            max-height: 100dvh !important;
            border-radius: 0 !important;
            border: none !important;
          }
          .octa-chat-launcher {
            bottom: 16px !important;
            right: 16px !important;
            padding: 12px 16px !important;
            font-size: 0.82rem !important;
          }
          .octa-chat-footer {
            padding-bottom: calc(12px + env(safe-area-inset-bottom, 0px)) !important;
          }
          .octa-msg-row {
            max-width: 92% !important;
          }
        }
      `}</style>

      {/* Floating Launcher Button */}
      {!isOpen && (
        <motion.button
          className="octa-chat-launcher"
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
        >
          <span className="octa-chat-badge" />
          <MessageSquare size={18} />
          <span>Chat with Us</span>
          <Sparkles size={14} className="text-[#3BADB0]" />
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="octa-chat-window"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="octa-chat-header">
              <div className="octa-chat-header-info">
                <div className="octa-chat-avatar">
                  <Bot size={22} />
                </div>
                <div>
                  <h3 className="octa-chat-header-title">
                    OctaBot <Sparkles size={12} className="text-[#3BADB0]" />
                  </h3>
                  <div className="octa-chat-header-status">
                    <span className="octa-chat-status-dot" />
                    <span>AI Assistant • Online</span>
                  </div>
                </div>
              </div>
              <div className="octa-chat-header-actions">
                <button
                  className="octa-chat-btn-icon"
                  onClick={handleResetChat}
                  title="Reset conversation"
                >
                  <RefreshCw size={15} />
                </button>
                <button
                  className="octa-chat-btn-icon"
                  onClick={() => setIsOpen(false)}
                  title="Minimize"
                >
                  <Minimize2 size={16} />
                </button>
                <button
                  className="octa-chat-btn-icon"
                  onClick={() => setIsOpen(false)}
                  title="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Body / Message List */}
            <div className="octa-chat-body">
              {messages.map(msg => (
                <div key={msg.id} className={`octa-msg-row ${msg.sender}`}>
                  <div className={`octa-msg-avatar ${msg.sender}`}>
                    {msg.sender === "bot" ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div>
                    <div className={`octa-msg-bubble ${msg.sender}`}>
                      {msg.text.split("\n").map((line, idx) => {
                        const cleanLine = line.trim();
                        if (!cleanLine) return <div key={idx} className="h-1" />;
                        return (
                          <p key={idx} className={idx > 0 ? "mt-1.5" : ""}>
                            {formatMarkdownText(cleanLine)}
                          </p>
                        );
                      })}
                    </div>
                    <div className="octa-msg-time">{msg.timestamp}</div>

                    {/* Quick Action Pills */}
                    {msg.quickActions && msg.quickActions.length > 0 && (
                      <div className="octa-quick-actions">
                        {msg.quickActions.map((qa, i) =>
                          qa.link ? (
                            <Link
                              key={i}
                              href={qa.link}
                              className="octa-quick-pill"
                              onClick={() => setIsOpen(false)}
                            >
                              <span>{qa.label}</span>
                              <ExternalLink size={12} />
                            </Link>
                          ) : (
                            <button
                              key={i}
                              className="octa-quick-pill"
                              onClick={() => handleQuickAction(qa)}
                            >
                              <span>{qa.label}</span>
                            </button>
                          )
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="octa-msg-row bot">
                  <div className="octa-msg-avatar bot">
                    <Bot size={16} />
                  </div>
                  <div className="octa-typing-indicator">
                    <div className="octa-typing-dot" />
                    <div className="octa-typing-dot" />
                    <div className="octa-typing-dot" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <div className="octa-chat-footer">
              <input
                type="text"
                className="octa-chat-input"
                placeholder="Ask about AI, Web Dev, Services..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="octa-chat-send-btn"
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                title="Send Message"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Clean text renderer formatting bold (**text**), bullet points, and code
function formatMarkdownText(text: string) {
  // Strip raw table pipe formatting if any exists
  let cleaned = text.replace(/\|/g, " ").replace(/[-]{3,}/g, "").trim();

  const parts = cleaned.split(/(\*\*.*?\*\*|`.*?`)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} className="font-bold text-[#002046]">{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index} className="bg-gray-100 text-[#3BADB0] px-1 py-0.5 rounded text-xs">{part.slice(1, -1)}</code>;
    }
    return part;
  });
}
