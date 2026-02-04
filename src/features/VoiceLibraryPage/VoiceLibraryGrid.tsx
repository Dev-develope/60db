import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Play,
  Pause,
  Volume2,
  Filter,
  ChevronRight,
  Loader,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getVoices } from "@/lib/api";
import { toast } from "sonner";

const categories = [
  "All",
  "Narrator",
  "Character",
  "Social Media",
  "Video Games",
  "News",
  "Meditation",
];

const VoiceLibraryGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [voices, setVoices] = useState<any[]>([]);
  const [isLoadingVoices, setIsLoadingVoices] = useState(true);
  const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fetch voices on component mount
  useEffect(() => {
    const fetchVoices = async () => {
      try {
        setIsLoadingVoices(true);
        const response = await getVoices();
        if (response?.success) {
          const allVoices = [
            ...(response?.data?.cloned_voices || []),
            ...(response?.data?.built_in_voices || []),
          ];
          setVoices(allVoices);
        } else {
          toast.error("Failed to fetch voices");
          setVoices([]);
        }
      } catch (error) {
        console.error("Failed to fetch voices:", error);
        toast.error("Error loading voices");
        setVoices([]);
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

  const filteredVoices = voices.filter((voice) => {
    const voiceName = voice.name || voice.voice_name || "";
    const voiceCategory = voice.category || voice.voice_category || "Character";
    const voiceTags = voice.tags || voice.labels || [];

    const matchesSearch =
      voiceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (Array.isArray(voiceTags) &&
        voiceTags.some((tag: any) =>
          (typeof tag === "string" ? tag : tag.name || "")
            .toLowerCase()
            .includes(searchQuery.toLowerCase()),
        ));
    const matchesCategory =
      activeCategory === "All" || voiceCategory === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const playVoiceSample = (voice: any) => {
    const sampleUrl =
      voice?.sample_url || voice?.preview_url || voice?.sample || "";

    if (!sampleUrl) {
      toast.error("No sample available for this voice");
      return;
    }

    // If clicking the same voice, toggle play/pause
    if (playingVoiceId === voice.voice_id) {
      if (audioRef.current) {
        if (audioRef.current.paused) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
      }
      return;
    }

    // Stop previous audio if playing
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Play new voice sample
    const audio = new Audio(sampleUrl);
    audioRef.current = audio;
    setPlayingVoiceId(voice.voice_id);

    audio.play().catch((err) => {
      console.error("Error playing audio:", err);
      toast.error("Could not play voice sample");
      setPlayingVoiceId(null);
    });

    audio.onended = () => {
      setPlayingVoiceId(null);
    };
  };

  return (
    <section className="py-12 bg-background font-sans min-h-[800px]">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-start md:items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/30" />
            <input
              type="text"
              placeholder="Search by name or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-background border border-border rounded-2xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? "bg-primary text-primary-foreground shadow-sm" : "bg-secondary text-foreground/60 hover:text-foreground hover:bg-secondary/70"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {isLoadingVoices && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40"
          >
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Loader className="w-8 h-8 text-primary animate-spin" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Loading voices...
            </h3>
            <p className="text-foreground/40 font-medium">
              Fetching available voice library
            </p>
          </motion.div>
        )}

        {/* Voice Grid */}
        {!isLoadingVoices && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredVoices.map((voice) => {
                const voiceName =
                  voice.name || voice.voice_name || "Unknown Voice";
                const voiceCategory =
                  voice.category || voice.voice_category || "Character";
                const voiceTags = voice.tags || voice.labels || [];
                const isPlaying = playingVoiceId === voice.voice_id;

                return (
                  <motion.div
                    layout
                    key={voice.voice_id || voice.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="bg-background rounded-[2rem] p-6 border border-border shadow-sm hover:shadow-elevated hover:border-border/50 transition-all group cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 shadow-inner flex-shrink-0 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">
                          {voiceName.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <button
                        onClick={() => playVoiceSample(voice)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center shadow-sm transition-all ${
                          isPlaying
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-foreground/40 group-hover:bg-primary group-hover:text-primary-foreground"
                        }`}
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4 fill-current" />
                        ) : (
                          <Play className="w-4 h-4 fill-current ml-0.5" />
                        )}
                      </button>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {voiceName}
                      </h3>
                      <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">
                        {voiceCategory}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {Array.isArray(voiceTags) &&
                        voiceTags.map((tag: any, idx: number) => {
                          const tagName =
                            typeof tag === "string" ? tag : tag.name || tag;
                          return (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-secondary/50 text-foreground/60 rounded-full text-[10px] font-bold"
                            >
                              {tagName}
                            </span>
                          );
                        })}
                    </div>

                    <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-[11px] font-bold text-foreground/30 group-hover:text-foreground/60 transition-colors">
                      <div className="flex items-center gap-1.5">
                        <Volume2 className="w-3 h-3" />
                        <span>
                          {isPlaying ? "Playing..." : "Preview Voice"}
                        </span>
                      </div>
                      <ChevronRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* Empty State */}
        {!isLoadingVoices && filteredVoices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40"
          >
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="w-8 h-8 text-foreground/20" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              No voices found
            </h3>
            <p className="text-foreground/40 font-medium">
              Try adjusting your filters or search query.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-8 text-primary font-bold hover:underline"
            >
              Reset filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default VoiceLibraryGrid;
