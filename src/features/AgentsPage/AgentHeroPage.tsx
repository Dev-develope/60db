import React, { useState } from 'react';

const AgentHeroPage: React.FC = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hey, my computer is frozen", sender: "user", timestamp: "10:30 AM" },
    { id: 2, text: "Hi Robert - I've got you. Now let me pull up your device.", sender: "agent", timestamp: "10:31 AM" },
    { id: 3, text: "Got it! Let's just try a hard reboot by holding the power button for 3 seconds.", sender: "agent", timestamp: "10:32 AM" },
    { id: 4, text: "Yeah, it's back up and running! Thank you so", sender: "user", timestamp: "10:33 AM" }
  ]);

  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      
      {/* Chat Interface */}
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-2xl shadow-lg">
        <div className="space-y-4 mb-6">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'agent' && (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">A</div>
              )}
              <div className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                msg.sender === 'user' 
                  ? 'bg-gray-100 text-gray-800 rounded-br-none' 
                  : 'bg-black text-white rounded-bl-none'
              }`}>
                {msg.text}
              </div>
              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">U</div>
              )}
            </div>
          ))}
        </div>
        
        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="flex items-center gap-2 border-t pt-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.894 2.553a1 1 0 00-1.784 0l-7 14.000a1.169 1.169 0 001.409 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 002 0l5-1.429a1.169 1.169 0 001.408-1.408l-7-14z" />
            </svg>
          </button>
          <button
            type="button"
            className="p-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 005 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V16a1 1 0 102 0v-1.07z" clipRule="evenodd" />
            </svg>
          </button>
        </form>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          The conversational agents platform
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Deploy natural, human-sounding agents in 32 languages with leading accuracy and ultra low latency in voice or chat. Connected to your knowledge base and tools, our agents handle complex workflows to deliver faster resolutions with enterprise-grade reliability and control.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors">
            Talk to Sales
          </button>
          <button className="px-6 py-3 border border-gray-300 rounded-full font-medium hover:bg-gray-50 transition-colors">
            Create an AI Agent
          </button>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { name: 'deliveroo', logo: 'D' },
            { name: 'meesho', logo: 'M' },
            { name: 'cisco', logo: 'C' },
            { name: 'deutsche telekom', logo: 'T' },
            { name: 'perplexity', logo: 'P' },
            { name: 'traba', logo: 'T' }
          ].map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-24 h-12 bg-gray-100 rounded-lg">
              <span className="text-gray-500 font-bold">{logo.logo}</span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-200">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold">A</div>
            <span>Talk to an agent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentHeroPage;