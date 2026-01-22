import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Mic, ArrowUp } from "lucide-react";

const TelecomHero: React.FC = () => {
    const [messages] = useState([
        {
            id: 1,
            text: "Sure, I see your current network is 'Johnson Home WIFI'. Do you want me to generate a new password or would you like to set your own?",
            sender: "agent",
            timestamp: "10:30 AM"
        },
        {
            id: 2,
            text: "Please generate a new one.",
            sender: "user",
            timestamp: "10:31 AM"
        }
    ]);

    return (
        <div className="relative pt-32 pb-20 overflow-hidden bg-background">
            {/* Background Gradient */}
            <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-blue-50/50 via-white to-white -z-10" />

            <div className="container mx-auto px-4">
                {/* Chat Interface */}
                <div className="max-w-xl mx-auto mb-16 relative z-10">
                    <div className="bg-white/40 backdrop-blur-md rounded-[32px] p-6 shadow-sm border border-white/50">
                        <div className="space-y-6 mb-8">
                            {messages.map((msg) => (
                                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.sender === 'agent' && (
                                        <div className="flex items-start gap-3 max-w-[85%]">
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 shadow-lg flex-shrink-0" />
                                            <div className="bg-black text-white px-6 py-4 rounded-[24px] rounded-tl-none shadow-md text-[15px] leading-relaxed">
                                                {msg.text}
                                            </div>
                                        </div>
                                    )}
                                    {msg.sender === 'user' && (
                                        <div className="bg-[#E8E8E8] text-gray-900 px-6 py-4 rounded-[24px] rounded-tr-none max-w-[85%] text-[15px] leading-relaxed">
                                            {msg.text}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Enter your message"
                                className="w-full h-14 pl-6 pr-24 rounded-full bg-white border-0 shadow-[0_2px_12px_rgba(0,0,0,0.04)] text-gray-600 focus:ring-0 placeholder:text-gray-400"
                                readOnly
                            />
                            <div className="absolute right-2 top-2 flex gap-2">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 cursor-pointer transition-colors text-gray-400">
                                    <ArrowUp className="w-5 h-5" />
                                </div>
                                <div className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-50 cursor-pointer transition-colors text-gray-400">
                                    <Mic className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center max-w-4xl mx-auto relative z-10">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium text-foreground mb-8 tracking-tight">
                        Keep customers connected
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mx-auto mb-10 leading-relaxed max-w-3xl">
                        Launch natural, human-sounding agents in 32 languages with leading accuracy and ultra-low latency
                        in voice or chat. Improve operational resilience, reduce cost and increase LTV.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button size="lg" className="rounded-full px-8 h-12 text-base font-medium bg-black hover:bg-black/90 text-white min-w-[140px]">
                            Talk to Sales
                        </Button>
                        <Button variant="ghost" className="rounded-full h-12 text-base font-medium hover:bg-transparent hover:underline text-foreground">
                            Create AI Agent
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TelecomHero;