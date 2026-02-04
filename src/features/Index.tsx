import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Mic, Volume2, Globe, Zap, Users, Code, CheckCircle } from "lucide-react";
import Link from "next/link";
import CreatorsSection from "@/components/CreatorsSection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, useRef } from "react";
import { getVoices, generateTTS } from "@/lib/api";
import { toast } from "sonner";

const MAX_CHARS = 100;

const Index = () => {
  const [voices, setVoices] = useState<any[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<any>(null);
  const [isLoadingVoices, setIsLoadingVoices] = useState(true);
  const [ttsText, setTtsText] = useState("Welcome to the future of voice AI. With 60db, you can create...");
  const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSample = (voice: any) => {
    const sampleUrl = voice?.sample_url || voice?.preview_url;
    if (!sampleUrl) {
      toast.error("No sample available for this voice");
      return;
    }

    if (playingVoiceId === voice.voice_id) {
      audioRef.current?.pause();
      setPlayingVoiceId(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const audio = new Audio(sampleUrl);
    audioRef.current = audio;
    setPlayingVoiceId(voice.voice_id);

    audio.play().catch((err) => {
      console.error("Audio playback failed:", err);
      setPlayingVoiceId(null);
    });

    audio.onended = () => {
      setPlayingVoiceId(null);
    };
  };


  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const response = await getVoices();
        console.log("Voices response:", response);
        if (response?.success) {
          const allVoices = [
            ...(response?.data?.cloned_voices || []),
            ...(response?.data?.built_in_voices || []),
          ];
          setVoices(allVoices);
          if (allVoices.length > 0) {
            setSelectedVoice(allVoices[0]);
          }
        }
      } catch (error) {
        console.error("Failed to fetch voices:", error);
      } finally {
        setIsLoadingVoices(false);
      }
    };

    fetchVoices();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);
  const logos = [
    "The New York Times",
    "Spotify",
    "NTT docomo",
    "NXP",
    "Harvard",
  ];

  const products = [
    {
      title: "Text to Speech",
      description: "The most expressive text to speech tool",
      icon: Volume2,
      tag: "Most Popular",
    },
    {
      title: "Agents Platform",
      description: "Build voice AI agents for any use case",
      icon: Users,
      tag: "New",
    },
  ];

  const features = [
    {
      icon: Globe,
      title: "29+ Languages",
      description: "Generate speech in over 29 languages with native accents",
    },
    {
      icon: Zap,
      title: "50ms Latency",
      description: "Industry-leading low latency for real-time applications",
    },
    {
      icon: Mic,
      title: "Voice Cloning",
      description: "Clone any voice with just a few minutes of audio",
    },
    {
      icon: Code,
      title: "Simple API",
      description: "Integrate in minutes with our developer-friendly API",
    },
  ];

  const useCases = [
    {
      title: "Accessibility & Inclusion",
      description: "Make your content accessible to everyone with natural-sounding voice synthesis.",
      image: "accessibility",
    },
    {
      title: "Something to get started?",
      description: "Explore our templates and examples to get started quickly.",
      image: "started",
    },
  ];

  const updates = [
    {
      tag: "NEW",
      title: "Image & Video",
      description: "Generate voiceovers for your visual content automatically",
    },
    {
      tag: "API",
      title: "Streaming Improvements",
      description: "New streaming endpoints for even lower latency",
    },
    {
      tag: "FEATURE",
      title: "Voice Library",
      description: "Access thousands of pre-made voices for any project",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          {/* Animated wave background */}
          <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(220 80% 60%)" />
                  <stop offset="50%" stopColor="hsl(280 70% 60%)" />
                  <stop offset="100%" stopColor="hsl(340 60% 60%)" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 Q150,20 300,50 T600,50 T900,50 T1200,50 L1200,100 L0,100 Z"
                fill="url(#waveGradient)"
                opacity="0.3"
              />
              <path
                d="M0,60 Q150,30 300,60 T600,60 T900,60 T1200,60 L1200,100 L0,100 Z"
                fill="url(#waveGradient)"
                opacity="0.2"
              />
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground leading-[1.1] mb-6 animate-fade-in-up">
                The most realistic voice
                <br />
                <span className="text-gradient-espresso">AI platform</span>
              </h1>

              <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Create lifelike voiceovers, build AI agents, and bring characters to life with the world's most advanced text to speech technology.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <Button variant="hero" size="xl" asChild>
                  <Link href={process.env.NEXT_PUBLIC_AUTH_URL || "https://qlabsui.netlify.app/"}>
                    Get started free
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl">
                  <Play className="h-5 w-5" />
                  Try a demo
                </Button>
              </div>
            </div>

            {/* Voice Demo Box */}
            <div className="max-w-3xl mx-auto mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-muted">Try it yourself</span>
                  <div className="flex-1 h-px bg-border" />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-foreground">Voice</label>
                    <div className="flex items-center gap-2">
                      <Select
                        value={selectedVoice?.voice_id}
                        onValueChange={(id) => {
                          const voice = voices.find((v) => v.voice_id === id);
                          setSelectedVoice(voice);
                          if (playingVoiceId) {
                            audioRef.current?.pause();
                            setPlayingVoiceId(null);
                          }
                        }}
                      >
                        <SelectTrigger className="w-full h-auto p-3 bg-background border-border flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                            <Users className="h-5 w-5 text-foreground" />
                          </div>
                          <div className="text-left flex-1">
                            <div className="font-medium text-foreground">
                              {selectedVoice?.name || "Select a voice"}
                            </div>
                            <div className="text-xs text-muted">
                              {selectedVoice?.labels?.accent || selectedVoice?.category || "Neutral"}
                            </div>
                          </div>
                        </SelectTrigger>
                        <SelectContent>
                          {voices.map((voice) => (
                            <SelectItem key={voice.voice_id} value={voice.voice_id}>
                              <div className="flex items-center justify-between w-full min-w-[200px]">
                                <div className="flex flex-col">
                                  <span className="font-medium">{voice.name}</span>
                                  <span className="text-xs text-muted">
                                    {voice.labels?.accent || voice.category || "Neutral"}
                                  </span>
                                </div>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {selectedVoice && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-12 w-12 rounded-lg border border-border shrink-0"
                          onClick={() => playSample(selectedVoice)}
                        >
                          {playingVoiceId === selectedVoice.voice_id ? (
                            <div className="flex gap-1 items-end h-3">
                              <div className="w-1 bg-primary animate-wave h-full" />
                              <div className="w-1 bg-primary animate-wave h-2/3" />
                              <div className="w-1 bg-primary animate-wave h-3/4" />
                            </div>
                          ) : (
                            <Volume2 className="h-5 w-5" />
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-foreground">
                        Text
                      </label>

                      <span
                        className={`text-xs ${ttsText.length > MAX_CHARS
                          ? 'text-destructive font-bold'
                          : 'text-muted'
                          }`}
                      >
                        {ttsText.length} / {MAX_CHARS} characters
                      </span>
                    </div>

                    <Textarea
                      className="min-h-[64px] bg-background border-border text-sm resize-none"
                      value={ttsText}
                      onChange={(e) => {
                        const text = e.target.value

                        if (text.length > MAX_CHARS) {
                          toast.error('Max limit of 100 characters reached')
                          return
                        }

                        setTtsText(text)
                      }}
                      placeholder="Enter text to generate speech..."
                    />

                    {ttsText.length > MAX_CHARS && (
                      <p className="text-[10px] text-destructive mt-1 font-medium italic">
                        Max character limit reached. Please shorten your text.
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4">
                  <Button
                    variant="default"
                    size="sm"
                    onClick={async () => {
                      if (!selectedVoice) {
                        toast.error("Please select a voice first");
                        return;
                      }
                      if (!ttsText.trim()) {
                        toast.error("Please enter some text");
                        return;
                      }

                      const wordCount = ttsText.trim().split(/\s+/).length;
                      if (wordCount > 100) {
                        toast.error("Max limit of 100 words exceeded");
                        return;
                      }

                      const t = toast.loading("Generating speech...");
                      try {
                        const response = await generateTTS(ttsText, selectedVoice.voice_id);
                        if (response?.success && response?.backendResponse?.audio_base64) {
                          const audioBase64 = response.backendResponse.audio_base64;
                          const audioSrc = `data:audio/wav;base64,${audioBase64}`;
                          const audio = new Audio(audioSrc);
                          audio.play().catch(e => console.error("Error playing generated audio", e));
                          toast.success("Speech generated and playing", { id: t });
                        } else {
                          toast.success("Speech generated successfully", { id: t });
                        }
                      } catch (error) {
                        toast.error("Failed to generate speech", { id: t });
                      }
                    }}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Generate
                  </Button>
                  <div className="flex-1 h-8 bg-background rounded-full flex items-center px-4 gap-1">
                    {[...Array(40)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-primary/30 rounded-full animate-wave"
                        style={{
                          height: `${Math.random() * 100}%`,
                          minHeight: '4px',
                          animationDelay: `${i * 0.05}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-12 border-y border-border bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "50ms", label: "Latency" },
                { value: "1M+", label: "API Calls/Day" },
                { value: "29+", label: "Languages" },
                { value: "99.9%", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl md:text-4xl font-semibold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {products.map((product) => (
                <div
                  key={product.title}
                  className="group relative bg-card rounded-2xl border border-border p-8 hover:shadow-elevated transition-all duration-300 cursor-pointer"
                >
                  {product.tag && (
                    <span className="absolute top-4 right-4 text-xs font-medium px-2 py-1 bg-primary text-primary-foreground rounded-full">
                      {product.tag}
                    </span>
                  )}
                  <product.icon className="h-12 w-12 text-foreground mb-6" />
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">{product.title}</h3>
                  <p className="text-muted">{product.description}</p>
                  <div className="mt-6 flex items-center gap-2 text-foreground font-medium group-hover:gap-4 transition-all">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
                Generate high-quality audio with AI for voice
              </h2>
              <p className="text-muted text-lg">
                production in audiobooks, video, and podcasts
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {features.map((feature) => (
                <div key={feature.title} className="bg-background rounded-xl border border-border p-6 hover:shadow-card transition-all">
                  <feature.icon className="h-10 w-10 text-foreground mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* API/SDK Section */}
        <section className="py-20 lg:py-32 bg-foreground text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                  Build the most seamless audio experience into
                  <br />your product with our APIs and SDKs
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Build in any app</h3>
                  <p className="text-primary-foreground/70">
                    Integrate our API into your existing workflows with just a few lines of code.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Powerful SDKs</h3>
                  <p className="text-primary-foreground/70">
                    Use our SDKs for Python, JavaScript, and more to get started quickly.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-primary-foreground/10 rounded-full text-xs">Python</span>
                    <span className="px-3 py-1 bg-primary-foreground/10 rounded-full text-xs">JavaScript</span>
                    <span className="px-3 py-1 bg-primary-foreground/10 rounded-full text-xs">React</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">World-class APIs</h3>
                  <p className="text-primary-foreground/70">
                    RESTful APIs with comprehensive documentation and examples.
                  </p>
                </div>
              </div>

              <div className="mt-12 bg-primary-foreground/5 rounded-2xl p-8 border border-primary-foreground/10">
                <pre className="text-sm overflow-x-auto text-primary-foreground/80">
                  {`import { ElevenLabs } from "60db-ai";

const client = new ElevenLabs({ apiKey: "your-api-key" });

const audio = await client.textToSpeech.convert({
  text: "Hello, world!",
  voice_id: "sarah",
  model_id: "eleven_multilingual_v2"
});`}
                </pre>
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                  View documentation
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="py-12 border-y border-border">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm text-muted mb-8">Trusted by leading companies</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {logos.map((logo) => (
                <div key={logo} className="text-muted font-medium text-lg opacity-60 hover:opacity-100 transition-opacity">
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Creators Section */}
        <CreatorsSection />

        {/* Use Cases Section */}

        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {useCases.map((useCase) => (
                <div
                  key={useCase.title}
                  className="bg-card rounded-2xl border border-border p-8 hover:shadow-card transition-all cursor-pointer"
                >
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-muted">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-12">Latest updates</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {updates.map((update) => (
                <div key={update.title} className="group cursor-pointer">
                  <div className="aspect-video bg-background rounded-xl border border-border mb-4 flex items-center justify-center">
                    <span className="text-xs font-semibold px-2 py-1 bg-primary text-primary-foreground rounded">{update.tag}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {update.title}
                  </h3>
                  <p className="text-muted text-sm">{update.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 lg:py-32 bg-foreground text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <div className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-primary-foreground/10 flex items-center justify-center">
              <Volume2 className="h-8 w-8" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
              Create content with
              <br />AI-generated voices
            </h2>
            <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Start creating studio-quality audio content today with our free tier.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="xl" className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90" asChild>
                <Link href={process.env.NEXT_PUBLIC_AUTH_URL || "https://qlabsui.netlify.app/"}>
                  Get started free
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                Contact sales
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
