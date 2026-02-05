'use client'

import { useState } from 'react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Send, MessageCircle, Sparkles, Heart } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const predefinedQuestions = [
  "What products do you sell?",
  "Do you accept custom orders?",
  "Are these handmade?",
  "What are your prices?",
  "Where are you located?",
  "How can I place an order?"
]

const botResponses: { [key: string]: string } = {
  "what products do you sell?": "We sell a variety of handmade accessories including bracelets, hair clips, keychains, lanyards, and school supplies! Each item is carefully crafted with love and attention to detail. You can browse our full collection on the Products page! ✨",
  "do you accept custom orders?": "Yes, we love creating custom pieces! Whether you want specific colors, designs, or personalized items, we're here to bring your vision to life. Please contact us directly to discuss your custom order requirements! 💕",
  "are these handmade?": "Absolutely! Every single item at Ashby Atelier is handmade by us with love and care. We believe in the personal touch that comes with handmade creations - each piece is unique and special! 🎨",
  "what are your prices?": "Our prices range from ₱60 for small accessories like bookmarks to ₱250 for premium items like personalized pencil cases. Each product listing shows the exact price. We try to keep our prices affordable while maintaining quality! 💰",
  "where are you located?": "We're based in Maharlika Village, Taguig, Philippines! While we're temporarily closed for in-person visits, we're still available for online orders and deliveries within the area. 📍",
  "how can i place an order?": "You can place an order by contacting us directly through our Contact page! We accept orders via phone at +63 907 021 3521. Just let us know which items you'd like and we'll guide you through the process! 📱"
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm your Ashby Atelier assistant! 🌸 I'm here to help you learn about our handmade accessories. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate bot response delay
    setTimeout(() => {
      const lowerText = text.toLowerCase().trim()
      let botResponse = botResponses[lowerText]

      if (!botResponse) {
        // Default response for unrecognized questions
        const defaultResponses = [
          "That's a great question! For the most accurate information about our handmade accessories, I'd recommend checking out our Products page or contacting us directly. We're always happy to help! 💕",
          "I'm still learning about all the details of Ashby Atelier! For specific inquiries about our handmade accessories, custom orders, or pricing, please reach out to us through our Contact page. We'd love to hear from you! ✨",
          "Thanks for asking! While I'm a simple assistant, our team at Ashby Atelier would be delighted to help you personally. Visit our Contact page or browse our Products to see our cute handmade creations! 🌸"
        ]
        botResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const handlePredefinedQuestion = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      {/* Chat Section */}
      <section className="flex-1 container px-4 py-8">
        <div className="max-w-4xl mx-auto h-full flex flex-col">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Ask Our Assistant
            </h1>
            <p className="text-muted-foreground">
              Your friendly guide to Ashby Atelier's handmade accessories
            </p>
          </div>

          {/* Chat Container */}
          <div className="flex-1 bg-card border rounded-xl shadow-sm overflow-hidden flex flex-col">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-xl ${
                      message.sender === 'user'
                        ? 'bg-pink-600 text-white'
                        : 'bg-muted text-foreground'
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.sender === 'bot' && (
                        <Sparkles className="h-4 w-4 text-pink-600 dark:text-pink-400 mt-0.5 flex-shrink-0" />
                      )}
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-pink-100' : 'text-muted-foreground'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground max-w-xs lg:max-w-md px-4 py-3 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-pink-600 dark:text-pink-400" />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Predefined Questions */}
            {messages.length === 1 && (
              <div className="border-t p-4 bg-muted/30">
                <p className="text-sm text-muted-foreground mb-3">Popular questions:</p>
                <div className="flex flex-wrap gap-2">
                  {predefinedQuestions.map((question) => (
                    <button
                      key={question}
                      onClick={() => handlePredefinedQuestion(question)}
                      className="text-xs px-3 py-1.5 bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 rounded-full hover:bg-pink-200 dark:hover:bg-pink-900/50 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="border-t p-4">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSendMessage(inputText)
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isTyping}
                  className="px-4 py-2 bg-pink-600 hover:bg-pink-700 disabled:bg-pink-400 text-white rounded-lg transition-colors flex items-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Info Box */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/30 rounded-full text-pink-700 dark:text-pink-300 text-sm">
              <MessageCircle className="h-4 w-4" />
              This is a demo assistant - for real inquiries, please contact us directly!
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
