"use client"

import { motion } from "framer-motion"
import { MessageCircle, Bot, Zap } from "lucide-react"
import { useState, useEffect } from "react"

const chatMessages = [
  { type: "user", message: "What are the best De-Fi protocols for yield farming?" },
  {
    type: "bot",
    message:
      "Based on current market conditions, I recommend looking at Aave, Compound, and Uniswap V3. Here's a detailed analysis...",
  },
  { type: "user", message: "Can you help me audit this smart contract?" },
  {
    type: "bot",
    message:
      "I'll analyze your contract for security vulnerabilities and gas optimization opportunities. Please share the contract code.",
  },
]

export default function AITelegramSection() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [displayedText, setDisplayedText] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % chatMessages.length)
      setDisplayedText("")
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const message = chatMessages[currentMessage].message
    let index = 0
    const typeInterval = setInterval(() => {
      if (index < message.length) {
        setDisplayedText(message.slice(0, index + 1))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [currentMessage])

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-[#928DAB] bg-clip-text text-transparent">
              AI-Powered Assistant
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get instant Web3 guidance through our intelligent Telegram bot
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Telegram Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-[#928DAB]/20 rounded-3xl p-6 max-w-md mx-auto">
              {/* Telegram Header */}
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-[#928DAB]/20">
                <div className="w-10 h-10 bg-gradient-to-r from-[#928DAB] to-[#B8B3CC] rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Web3Wise Bot</h3>
                  <p className="text-green-400 text-sm">Online</p>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 h-64 overflow-hidden">
                {chatMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: index <= currentMessage ? 1 : 0.3,
                      y: 0,
                    }}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        msg.type === "user" ? "bg-[#928DAB] text-white" : "bg-white/10 text-gray-300"
                      }`}
                    >
                      {index === currentMessage ? displayedText : msg.message}
                      {index === currentMessage && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                          className="ml-1"
                        >
                          |
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input Area */}
              <div className="mt-4 pt-4 border-t border-[#928DAB]/20">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 bg-white/5 rounded-full px-4 py-2">
                    <span className="text-gray-500">Type your Web3 question...</span>
                  </div>
                  <button className="w-10 h-10 bg-gradient-to-r from-[#928DAB] to-[#B8B3CC] rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="backdrop-blur-xl bg-white/5 border border-[#928DAB]/20 rounded-3xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#928DAB] to-[#B8B3CC] rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Instant Responses</h3>
              </div>
              <p className="text-gray-400">
                Get immediate answers to your Web3 questions, 24/7 availability with lightning-fast AI processing.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-[#928DAB]/20 rounded-3xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#928DAB] to-[#B8B3CC] rounded-xl flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Smart Analysis</h3>
              </div>
              <p className="text-gray-400">
                Advanced AI algorithms analyze market trends, smart contracts, and provide personalized recommendations.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-[#928DAB]/20 rounded-3xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#928DAB] to-[#B8B3CC] rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Telegram Integration</h3>
              </div>
              <p className="text-gray-400">
                Seamlessly integrated with Telegram for convenient access from anywhere, anytime.
              </p>
            </div>

            <motion.button
              className="w-full bg-gradient-to-r from-[#928DAB] to-[#B8B3CC] text-white py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-[#928DAB]/25 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Start Chatting on Telegram
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
