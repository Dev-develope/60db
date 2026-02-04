// // components/TTSInteractiveDemo.tsx
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Play, Volume2, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { getVoices, generateTTS } from "@/lib/api";
// import { toast } from "sonner";

// const MAX_CHARS = 100;

// const TTSInteractiveDemo = () => {
//   const [voices, setVoices] = useState<any[]>([]);
//   const [selectedVoice, setSelectedVoice] = useState<any>(null);
//   const [isLoadingVoices, setIsLoadingVoices] = useState(true);
//   const [ttsText, setTtsText] = useState(
//     "Welcome to the future of voice AI. Create lifelike voiceovers in seconds.",
//   );
//   const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);
//   const [isGenerating, setIsGenerating] = useState(false);
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   // Fetch voices on mount
//   useEffect(() => {
//     const fetchVoices = async () => {
//       try {
//         const response = await getVoices();
//         if (response?.success) {
//           const allVoices = [
//             ...(response?.data?.cloned_voices || []),
//             ...(response?.data?.built_in_voices || []),
//           ];
//           setVoices(allVoices);
//           if (allVoices.length > 0) {
//             setSelectedVoice(allVoices[0]);
//           }
//         }
//       } catch (error) {
//         console.error("Failed to fetch voices:", error);
//         toast.error("Failed to load voices. Please try again later.");
//       } finally {
//         setIsLoadingVoices(false);
//       }
//     };

//     fetchVoices();

//     return () => {
//       if (audioRef.current) {
//         audioRef.current.pause();
//       }
//     };
//   }, []);

//   // Play voice sample
//   const playSample = (voice: any) => {
//     if (!voice) return;

//     const sampleUrl = voice?.sample_url || voice?.preview_url;
//     if (!sampleUrl) {
//       toast.error("No sample available for this voice");
//       return;
//     }

//     // Stop current playback if playing the same voice
//     if (playingVoiceId === voice.voice_id) {
//       audioRef.current?.pause();
//       setPlayingVoiceId(null);
//       return;
//     }

//     // Stop any currently playing audio
//     if (audioRef.current) {
//       audioRef.current.pause();
//     }

//     // Create and play new audio
//     const audio = new Audio(sampleUrl);
//     audioRef.current = audio;
//     setPlayingVoiceId(voice.voice_id);

//     audio.play().catch((err) => {
//       console.error("Audio playback failed:", err);
//       toast.error("Failed to play voice sample");
//       setPlayingVoiceId(null);
//     });

//     audio.onended = () => {
//       setPlayingVoiceId(null);
//     };
//   };

//   // Generate TTS audio
//   const handleGenerate = async () => {
//     if (!selectedVoice) {
//       toast.error("Please select a voice first");
//       return;
//     }

//     if (!ttsText.trim()) {
//       toast.error("Please enter some text");
//       return;
//     }

//     if (ttsText.length > MAX_CHARS) {
//       toast.error(`Max limit of ${MAX_CHARS} characters reached`);
//       return;
//     }

//     setIsGenerating(true);
//     const toastId = toast.loading("Generating speech...");

//     try {
//       const response = await generateTTS(ttsText, selectedVoice.voice_id);

//       if (response?.success && response?.backendResponse?.audio_base64) {
//         const audioBase64 = response.backendResponse.audio_base64;
//         const audioSrc = `data:audio/wav;base64,${audioBase64}`;
//         const audio = new Audio(audioSrc);

//         audio.play().catch((e) => {
//           console.error("Error playing generated audio", e);
//           toast.error("Failed to play generated audio", { id: toastId });
//         });

//         toast.success("Speech generated and playing!", { id: toastId });
//       } else {
//         toast.error("Failed to generate speech. Please try again.", {
//           id: toastId,
//         });
//       }
//     } catch (error) {
//       console.error("TTS generation error:", error);
//       toast.error("Failed to generate speech. Please try again.", {
//         id: toastId,
//       });
//     } finally {
//       setIsGenerating(false);
//     }
//   };

//   // Get avatar text from voice name
//   const getAvatarText = (name: string) => {
//     if (!name) return "??";
//     const words = name.split(" ");
//     if (words.length >= 2) {
//       return `${words[0][0]}${words[1][0]}`.toUpperCase();
//     }
//     return name.substring(0, 2).toUpperCase();
//   };

//   return (
//     <section className="py-12 bg-background font-sans">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.98 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="bg-card rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-border overflow-hidden"
//           >
//             {/* Demo Header */}
//             <div className="px-8 py-6 border-b border-border flex flex-wrap items-center justify-between gap-4">
//               <div className="flex items-center gap-4">
//                 {/* Voice Selection */}
//                 <div className="flex items-center gap-2 bg-muted/30 px-4 py-2 rounded-full border border-border">
//                   {isLoadingVoices ? (
//                     <div className="w-6 h-6 rounded-full bg-secondary animate-pulse" />
//                   ) : selectedVoice ? (
//                     <>
//                       <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
//                         {getAvatarText(selectedVoice.name)}
//                       </div>
//                       <Select
//                         value={selectedVoice?.voice_id}
//                         onValueChange={(id) => {
//                           const voice = voices.find((v) => v.voice_id === id);
//                           setSelectedVoice(voice);
//                           if (playingVoiceId) {
//                             audioRef.current?.pause();
//                             setPlayingVoiceId(null);
//                           }
//                         }}
//                       >
//                         <SelectTrigger className="border-0 bg-transparent px-0 py-0 h-auto flex items-center gap-1 focus:ring-0 focus:ring-offset-0">
//                           <SelectValue>
//                             <span className="text-sm font-bold">
//                               {selectedVoice.name}
//                             </span>
//                           </SelectValue>
//                           <ChevronDown className="w-4 h-4 text-muted-foreground ml-1" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           {voices.map((voice) => (
//                             <SelectItem
//                               key={voice.voice_id}
//                               value={voice.voice_id}
//                               className="flex items-center gap-3"
//                             >
//                               <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary flex-shrink-0">
//                                 {getAvatarText(voice.name)}
//                               </div>
//                               <div className="flex flex-col">
//                                 <span className="font-medium">
//                                   {voice.name}
//                                 </span>
//                                 <span className="text-xs text-muted-foreground">
//                                   {voice.labels?.accent ||
//                                     voice.category ||
//                                     "Neutral"}
//                                 </span>
//                               </div>
//                             </SelectItem>
//                           ))}
//                         </SelectContent>
//                       </Select>
//                     </>
//                   ) : (
//                     <span className="text-sm text-muted-foreground">
//                       No voices available
//                     </span>
//                   )}
//                 </div>

//                 {/* Play Sample Button */}
//                 {selectedVoice && (
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="h-10 w-10 rounded-lg border border-border shrink-0 hover:bg-accent"
//                     onClick={() => playSample(selectedVoice)}
//                     disabled={isLoadingVoices}
//                   >
//                     {playingVoiceId === selectedVoice.voice_id ? (
//                       <div className="flex gap-0.5 items-end h-4">
//                         <div
//                           className="w-0.5 bg-primary animate-wave h-full"
//                           style={{ animationDelay: "0ms" }}
//                         />
//                         <div
//                           className="w-0.5 bg-primary animate-wave h-3/4"
//                           style={{ animationDelay: "100ms" }}
//                         />
//                         <div
//                           className="w-0.5 bg-primary animate-wave h-1/2"
//                           style={{ animationDelay: "200ms" }}
//                         />
//                         <div
//                           className="w-0.5 bg-primary animate-wave h-3/4"
//                           style={{ animationDelay: "300ms" }}
//                         />
//                         <div
//                           className="w-0.5 bg-primary animate-wave h-full"
//                           style={{ animationDelay: "400ms" }}
//                         />
//                       </div>
//                     ) : (
//                       <Volume2 className="h-5 w-5 text-foreground" />
//                     )}
//                   </Button>
//                 )}
//               </div>
//             </div>

//             {/* Input Area */}
//             <div className="p-8">
//               <Textarea
//                 value={ttsText}
//                 onChange={(e) => {
//                   const newText = e.target.value;
//                   if (newText.length <= MAX_CHARS) {
//                     setTtsText(newText);
//                   } else {
//                     toast.error(`Max limit of ${MAX_CHARS} characters reached`);
//                   }
//                 }}
//                 className="w-full h-40 bg-transparent border-none focus:ring-0 text-xl md:text-2xl leading-relaxed text-foreground placeholder:text-muted resize-none font-medium"
//                 placeholder="Start typing something for the AI to speak..."
//                 maxLength={MAX_CHARS}
//               />

//               <div className="mt-8 flex items-center justify-between">
//                 <div className="flex items-center gap-6 text-muted-foreground">
//                   <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
//                     <Volume2 className="w-4 h-4" />
//                     <span>Preview mode</span>
//                   </div>
//                   <span
//                     className={`text-xs font-bold transition-colors ${
//                       ttsText.length > MAX_CHARS * 0.9
//                         ? ttsText.length > MAX_CHARS
//                           ? "text-destructive"
//                           : "text-orange-500"
//                         : ""
//                     }`}
//                   >
//                     {ttsText.length} / {MAX_CHARS}
//                   </span>
//                 </div>

//                 <Button
//                   className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-2xl font-bold flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
//                   onClick={handleGenerate}
//                   disabled={
//                     isGenerating || isLoadingVoices || ttsText.length === 0
//                   }
//                 >
//                   {isGenerating ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
//                       Generating...
//                     </>
//                   ) : (
//                     <>
//                       <Play className="w-5 h-5 fill-current" />
//                       Generate Audio
//                     </>
//                   )}
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TTSInteractiveDemo;

// components/TTSInteractiveDemo.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { getVoices, generateTTS, getLanguages } from "@/lib/api";
import { toast } from "sonner";

const MAX_CHARS = 100;

const TTSInteractiveDemo = () => {
  const [voices, setVoices] = useState<any[]>([]);
  const [languages, setLanguages] = useState<any[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<any>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [isLoadingVoices, setIsLoadingVoices] = useState(true);
  const [isLoadingLanguages, setIsLoadingLanguages] = useState(true);
  const [ttsText, setTtsText] = useState(
    "Welcome to the future of voice AI. Create lifelike voiceovers in seconds.",
  );
  const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Fetch languages on mount
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await getLanguages();
        console.log("Fetched languages:", response);
        if (
          response?.data?.languages &&
          Array.isArray(response.data.languages)
        ) {
          setLanguages(response.data.languages);

          // Set default to English if available
          const englishLang = response.data.languages.find(
            (l: any) => l.code === "en",
          ); // FIXED
          if (englishLang) {
            setSelectedLanguage("en");
          } else if (response.data.languages.length > 0) {
            // FIXED
            setSelectedLanguage(response.data.languages[0].code);
          }
        }
      } catch (error) {
        console.error("Failed to fetch languages:", error);
        // Fallback to default languages
        const fallbackLanguages = [
          { code: "en", name: "English" },
          { code: "hi", name: "Hindi" },
          { code: "bn", name: "Bengali" },
          { code: "ta", name: "Tamil" },
          { code: "te", name: "Telugu" },
        ];
        setLanguages(fallbackLanguages);
        setSelectedLanguage("en");
        toast.error("Failed to load languages. Using defaults.");
      } finally {
        setIsLoadingLanguages(false);
      }
    };

    fetchLanguages();
  }, []);

  // Fetch voices on mount
  useEffect(() => {
    const fetchVoices = async () => {
      try {
        const response = await getVoices();
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
        toast.error("Failed to load voices. Please try again later.");
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

  // Play voice sample
  const playSample = (voice: any) => {
    if (!voice) return;

    const sampleUrl = voice?.sample_url || voice?.preview_url;
    if (!sampleUrl) {
      toast.error("No sample available for this voice");
      return;
    }

    // Stop current playback if playing the same voice
    if (playingVoiceId === voice.voice_id) {
      audioRef.current?.pause();
      setPlayingVoiceId(null);
      return;
    }

    // Stop any currently playing audio
    if (audioRef.current) {
      audioRef.current.pause();
    }

    // Create and play new audio
    const audio = new Audio(sampleUrl);
    audioRef.current = audio;
    setPlayingVoiceId(voice.voice_id);

    audio.play().catch((err) => {
      console.error("Audio playback failed:", err);
      toast.error("Failed to play voice sample");
      setPlayingVoiceId(null);
    });

    audio.onended = () => {
      setPlayingVoiceId(null);
    };
  };

  // Generate TTS audio
  const handleGenerate = async () => {
    if (!selectedVoice) {
      toast.error("Please select a voice first");
      return;
    }

    if (!ttsText.trim()) {
      toast.error("Please enter some text");
      return;
    }

    if (ttsText.length > MAX_CHARS) {
      toast.error(`Max limit of ${MAX_CHARS} characters reached`);
      return;
    }

    setIsGenerating(true);
    const toastId = toast.loading("Generating speech...");

    try {
      const response = await generateTTS(ttsText, selectedVoice.voice_id);

      if (response?.success && response?.backendResponse?.audio_base64) {
        const audioBase64 = response.backendResponse.audio_base64;
        const audioSrc = `data:audio/wav;base64,${audioBase64}`;
        const audio = new Audio(audioSrc);

        audio.play().catch((e) => {
          console.error("Error playing generated audio", e);
          toast.error("Failed to play generated audio", { id: toastId });
        });

        toast.success("Speech generated and playing!", { id: toastId });
      } else {
        toast.error("Failed to generate speech. Please try again.", {
          id: toastId,
        });
      }
    } catch (error) {
      console.error("TTS generation error:", error);
      toast.error("Failed to generate speech. Please try again.", {
        id: toastId,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // Get avatar text from voice name
  const getAvatarText = (name: string) => {
    if (!name) return "??";
    const words = name.split(" ");
    if (words.length >= 2) {
      return `${words[0][0]}${words[1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  };

  // Get language display name
  const getLanguageDisplayName = (langCode: string) => {
    const lang = languages.find((l) => l.code === langCode);
    return lang ? lang.name : langCode.toUpperCase();
  };

  // Get language avatar (2-letter code)
  const getLanguageAvatar = (langCode: string) => {
    return langCode.toUpperCase().slice(0, 2);
  };

  return (
    <section className="py-12 bg-background font-sans">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-border overflow-hidden"
          >
            {/* Demo Header */}
            <div className="px-8 py-6 border-b border-border flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Language Selection */}
                <div className="flex items-center gap-2 bg-muted/30 px-4 py-2 rounded-full border border-border">
                  {isLoadingLanguages ? (
                    <div className="w-6 h-6 rounded-full bg-secondary animate-pulse" />
                  ) : (
                    <>
                      <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">
                        {getLanguageAvatar(selectedLanguage)}
                      </div>
                      <Select
                        value={selectedLanguage}
                        onValueChange={setSelectedLanguage}
                      >
                        <SelectTrigger className="border-0 bg-transparent px-0 py-0 h-auto flex items-center gap-1 focus:ring-0 focus:ring-offset-0">
                          <SelectValue>
                            <span className="text-sm font-bold">
                              {getLanguageDisplayName(selectedLanguage)}
                            </span>
                          </SelectValue>
                          <ChevronDown className="w-4 h-4 text-muted-foreground ml-1" />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((lang: any) => (
                            <SelectItem key={lang.code} value={lang.code}>
                              <span>{lang.name}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </>
                  )}
                </div>

                {/* Voice Selection */}
                <div className="flex items-center gap-2 bg-muted/30 px-4 py-2 rounded-full border border-border">
                  {isLoadingVoices ? (
                    <div className="w-6 h-6 rounded-full bg-secondary animate-pulse" />
                  ) : selectedVoice ? (
                    <>
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                        {getAvatarText(selectedVoice.name)}
                      </div>
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
                        <SelectTrigger className="border-0 bg-transparent px-0 py-0 h-auto flex items-center gap-1 focus:ring-0 focus:ring-offset-0">
                          <SelectValue>
                            <span className="text-sm font-bold">
                              {selectedVoice.name}
                            </span>
                          </SelectValue>
                          <ChevronDown className="w-4 h-4 text-muted-foreground ml-1" />
                        </SelectTrigger>
                        <SelectContent>
                          {voices.map((voice) => (
                            <SelectItem
                              key={voice.voice_id}
                              value={voice.voice_id}
                              className="flex items-center gap-3"
                            >
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary flex-shrink-0">
                                {getAvatarText(voice.name)}
                              </div>
                              <div className="flex flex-col">
                                <span className="font-medium">
                                  {voice.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {voice.labels?.accent ||
                                    voice.category ||
                                    "Neutral"}
                                </span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </>
                  ) : (
                    <span className="text-sm text-muted-foreground">
                      No voices available
                    </span>
                  )}
                </div>

                {/* Play Sample Button */}
                {selectedVoice && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-lg border border-border shrink-0 hover:bg-accent"
                    onClick={() => playSample(selectedVoice)}
                    disabled={isLoadingVoices}
                  >
                    {playingVoiceId === selectedVoice.voice_id ? (
                      <div className="flex gap-0.5 items-end h-4">
                        <div
                          className="w-0.5 bg-primary animate-wave h-full"
                          style={{ animationDelay: "0ms" }}
                        />
                        <div
                          className="w-0.5 bg-primary animate-wave h-3/4"
                          style={{ animationDelay: "100ms" }}
                        />
                        <div
                          className="w-0.5 bg-primary animate-wave h-1/2"
                          style={{ animationDelay: "200ms" }}
                        />
                        <div
                          className="w-0.5 bg-primary animate-wave h-3/4"
                          style={{ animationDelay: "300ms" }}
                        />
                        <div
                          className="w-0.5 bg-primary animate-wave h-full"
                          style={{ animationDelay: "400ms" }}
                        />
                      </div>
                    ) : (
                      <Volume2 className="h-5 w-5 text-foreground" />
                    )}
                  </Button>
                )}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-8">
              <Textarea
                value={ttsText}
                onChange={(e) => {
                  const newText = e.target.value;
                  if (newText.length <= MAX_CHARS) {
                    setTtsText(newText);
                  } else {
                    toast.error(`Max limit of ${MAX_CHARS} characters reached`);
                  }
                }}
                className="w-full h-40 bg-transparent border-none focus:ring-0 text-xl md:text-2xl leading-relaxed text-foreground placeholder:text-muted resize-none font-medium"
                placeholder="Start typing something for the AI to speak..."
                maxLength={MAX_CHARS}
              />

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                    <Volume2 className="w-4 h-4" />
                    <span>Preview mode</span>
                  </div>
                  <span
                    className={`text-xs font-bold transition-colors ${
                      ttsText.length > MAX_CHARS * 0.9
                        ? ttsText.length > MAX_CHARS
                          ? "text-destructive"
                          : "text-orange-500"
                        : ""
                    }`}
                  >
                    {ttsText.length} / {MAX_CHARS}
                  </span>
                </div>

                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-2xl font-bold flex items-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg"
                  onClick={handleGenerate}
                  disabled={
                    isGenerating || isLoadingVoices || ttsText.length === 0
                  }
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-current" />
                      Generate Audio
                    </>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TTSInteractiveDemo;
