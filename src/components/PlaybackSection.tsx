import { useState } from "react";
import { Play, Pause, Volume2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const voices = [
  { id: "aria", name: "Aria", accent: "American", style: "Warm & Professional" },
  { id: "marcus", name: "Marcus", accent: "British", style: "Authoritative" },
  { id: "luna", name: "Luna", accent: "Australian", style: "Friendly & Upbeat" },
  { id: "kai", name: "Kai", accent: "Neutral", style: "Calm & Clear" },
];

const PlaybackSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState(voices[0]);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  // Generate random heights for waveform bars
  const waveformBars = Array.from({ length: 60 }, () => Math.random() * 0.7 + 0.3);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Hear the Difference
            </h2>
            <p className="text-lg text-muted max-w-xl mx-auto">
              Experience studio-quality voice synthesis. Select a voice and press play.
            </p>
          </div>

          {/* Playback Card */}
          <Card className="p-6 md:p-8 shadow-elevated border-border/50 bg-card">
            {/* Text Display */}
            <div className="mb-8 p-4 rounded-lg bg-background border border-border">
              <p className="text-foreground text-lg leading-relaxed italic">
                "Welcome to 60db — where every word sounds exactly as you imagined. 
                Our AI doesn't just read text, it brings stories to life with emotion, 
                nuance, and unparalleled clarity."
              </p>
            </div>

            {/* Waveform Visualizer */}
            <div className="relative h-24 mb-8 flex items-center justify-center gap-[2px] overflow-hidden">
              {waveformBars.map((height, index) => (
                <div
                  key={index}
                  className={`w-1 rounded-full bg-primary transition-all duration-150 ${
                    isPlaying ? 'animate-wave' : ''
                  }`}
                  style={{
                    height: `${height * 100}%`,
                    opacity: isPlaying ? 1 : 0.4,
                    animationDelay: `${index * 0.02}s`,
                  }}
                />
              ))}
              
              {/* Progress Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/80 pointer-events-none" />
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Play Button & Progress */}
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <Button
                  size="icon"
                  className="h-14 w-14 rounded-full shadow-card animate-pulse-glow"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6 ml-1" />
                  )}
                </Button>
                
                <div className="flex-1 sm:w-48">
                  <div className="flex justify-between text-sm text-muted mb-1">
                    <span>{isPlaying ? "0:05" : "0:00"}</span>
                    <span>0:12</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-border overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-300"
                      style={{ width: isPlaying ? '40%' : '0%' }}
                    />
                  </div>
                </div>
              </div>

              {/* Voice Selector */}
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => setIsVoiceOpen(!isVoiceOpen)}
                  className="flex items-center justify-between gap-3 w-full sm:w-64 px-4 py-3 rounded-lg border border-border bg-background hover:bg-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Volume2 className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="font-medium text-foreground">{selectedVoice.name}</div>
                      <div className="text-xs text-muted">{selectedVoice.accent} · {selectedVoice.style}</div>
                    </div>
                  </div>
                  <ChevronDown className={`h-5 w-5 text-muted transition-transform ${isVoiceOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Voice Dropdown */}
                {isVoiceOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 py-2 rounded-lg border border-border bg-background shadow-elevated z-10">
                    {voices.map((voice) => (
                      <button
                        key={voice.id}
                        onClick={() => {
                          setSelectedVoice(voice);
                          setIsVoiceOpen(false);
                        }}
                        className={`flex items-center gap-3 w-full px-4 py-3 hover:bg-accent/50 transition-colors ${
                          selectedVoice.id === voice.id ? 'bg-accent/30' : ''
                        }`}
                      >
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Volume2 className="h-4 w-4 text-primary" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-foreground text-sm">{voice.name}</div>
                          <div className="text-xs text-muted">{voice.accent} · {voice.style}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlaybackSection;
