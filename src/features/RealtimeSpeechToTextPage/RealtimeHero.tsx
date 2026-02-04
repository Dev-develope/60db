import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Mic, ArrowRight, Globe, Copy, Check, Loader } from "lucide-react";
import { generateSTT, getLanguages } from "@/lib/api";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Fallback languages list
const FALLBACK_LANGUAGES = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "de", name: "German", nativeName: "Deutsch" },
  { code: "it", name: "Italian", nativeName: "Italiano" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
  { code: "ru", name: "Russian", nativeName: "Русский" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
  { code: "zh", name: "Chinese (Simplified)", nativeName: "中文（简体）" },
  { code: "ko", name: "Korean", nativeName: "한국어" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "nl", name: "Dutch", nativeName: "Nederlands" },
  { code: "pl", name: "Polish", nativeName: "Polski" },
  { code: "tr", name: "Turkish", nativeName: "Türkçe" },
  { code: "vi", name: "Vietnamese", nativeName: "Tiếng Việt" },
  { code: "th", name: "Thai", nativeName: "ไทย" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia" },
  { code: "fil", name: "Filipino", nativeName: "Filipino" },
  { code: "auto", name: "Auto-detect", nativeName: "Auto-detect" },
];

const RealtimeHero = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [transcriptionText, setTranscriptionText] = useState("");
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [languages, setLanguages] = useState<any[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("auto");
  const [copied, setCopied] = useState(false);
  const [isLoadingLanguages, setIsLoadingLanguages] = useState(true);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  //   useEffect(() => {
  //     const fetchLanguages = async () => {
  //       try {
  //         setIsLoadingLanguages(true);
  //         const response = await getLanguages();
  //         if (response) {
  //           const fetchedLangs = Array.isArray(response)
  //             ? response
  //             : response.data || [];
  //           // Merge fetched languages with fallback list, prioritizing fetched ones
  //           const mergedLangs =
  //             fetchedLangs.length > 0 ? fetchedLangs : FALLBACK_LANGUAGES;
  //           setLanguages(mergedLangs);
  //         } else {
  //           setLanguages(FALLBACK_LANGUAGES);
  //         }
  //       } catch (error) {
  //         console.error("Failed to fetch languages, using fallback:", error);
  //         setLanguages(FALLBACK_LANGUAGES);
  //       } finally {
  //         setIsLoadingLanguages(false);
  //       }
  //     };

  //     fetchLanguages();
  //   }, []);

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

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        setIsTranscribing(true);
        const t = toast.loading("Transcribing audio...");
        try {
          const response = await generateSTT(audioBlob, selectedLanguage);
          const transText =
            response?.data?.stt_response?.text ||
            response?.data?.text ||
            response?.backendResponse?.text;

          if (response?.success && transText) {
            setTranscriptionText(transText);
            toast.success("Transcription completed", { id: t });
          } else {
            toast.error("Failed to get transcription text", { id: t });
          }
        } catch (error) {
          console.error("STT error:", error);
          toast.error("Error during transcription", { id: t });
        } finally {
          setIsTranscribing(false);
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
      setTranscriptionText("");
    } catch (error) {
      console.error("Failed to access microphone:", error);
      toast.error("Please allow microphone access");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
      setIsRecording(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(transcriptionText);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const clearTranscription = () => {
    setTranscriptionText("");
  };

  return (
    <section className="pt-32 pb-20 container mx-auto px-6 md:px-12 text-center">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
        <div className="text-left max-w-2xl">
          <div className="text-sm font-semibold text-muted mb-4 uppercase tracking-wider">
            Realtime Speech to Text
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight">
            Transcribe live speech instantly
          </h1>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button
              onClick={isRecording ? stopRecording : startRecording}
              className={`rounded-full px-6 py-6 text-sm font-bold transition-all ${
                isRecording
                  ? "bg-destructive text-white hover:bg-destructive/90"
                  : "bg-foreground text-background hover:bg-foreground/90"
              }`}
            >
              {isRecording ? "Stop Recording" : "Start transcribing"}
            </Button>
            <Button
              variant="ghost"
              className="rounded-full px-6 py-6 text-sm font-bold hover:bg-secondary/50"
            >
              Explore the docs <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="text-left max-w-sm">
          <p className="text-sm text-muted leading-relaxed">
            Scribe v2 Realtime is the most accurate real-time transcription
            model with 150ms latency across 90+ languages. Available via API.
          </p>
        </div>
      </div>

      {/* Interactive Gradient Card */}
      <div className="relative w-full rounded-3xl overflow-hidden group shadow-2xl">
        {/* Grainy Gradient Background */}
        <div className="absolute inset-0 bg-[#1a1a1a]">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/40 via-purple-500/40 to-blue-600/40 blur-3xl opacity-80" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-[100px] animate-pulse-glow" />
          <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[100px] animate-pulse-glow delay-1000" />
          {/* Noise Overlay */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Center Card */}
        <div className="relative flex items-center justify-center p-6 min-h-[500px] md:min-h-[600px]">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl p-8 md:p-12 text-center shadow-xl max-w-2xl w-full transition-transform duration-500">
            {!isRecording && !transcriptionText && !isTranscribing && (
              <div className="space-y-8">
                <div
                  className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto shadow-lg cursor-pointer hover:scale-105 transition-transform group/mic"
                  onClick={startRecording}
                >
                  <Mic className="text-white w-8 h-8 group-hover/mic:scale-110 transition-transform" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-2 text-gray-900">
                    Click to start transcribing
                  </h3>
                  <p className="text-gray-500 text-sm mb-8">
                    Experience the power of Scribe v2 Realtime - Transcribe in
                    90+ languages
                  </p>

                  {/* Language Selector */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-3">
                      <Globe className="w-5 h-5 text-blue-600" />
                      <span className="text-sm font-semibold text-gray-700">
                        Select Language
                      </span>
                    </div>
                    <Select
                      value={selectedLanguage}
                      onValueChange={setSelectedLanguage}
                    >
                      <SelectTrigger className="w-full max-w-sm bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-colors">
                        <div className="flex items-center gap-2 w-full">
                          <Globe className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <SelectValue placeholder="Select your language" />
                        </div>
                      </SelectTrigger>
                      <SelectContent className="max-h-80">
                        {isLoadingLanguages ? (
                          <div className="flex items-center justify-center p-4">
                            <Loader className="w-4 h-4 animate-spin text-blue-600" />
                          </div>
                        ) : languages.length > 0 ? (
                          languages.map((lang: any) => {
                            const code =
                              typeof lang === "string"
                                ? lang
                                : lang.code || lang.id || lang;
                            const englishName =
                              typeof lang === "string"
                                ? lang
                                : lang.name ||
                                  lang.label ||
                                  lang.english_name ||
                                  code;
                            const nativeName =
                              typeof lang === "string"
                                ? ""
                                : lang.native_name || lang.nativeName || "";

                            return (
                              <SelectItem key={code} value={code}>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">
                                    {englishName}
                                  </span>
                                  {nativeName && (
                                    <span className="text-sm text-gray-500">
                                      ({nativeName})
                                    </span>
                                  )}
                                </div>
                              </SelectItem>
                            );
                          })
                        ) : (
                          <SelectItem value="en">English</SelectItem>
                        )}
                      </SelectContent>
                    </Select>

                    {/* Language Info */}
                    <div className="mt-4 text-center">
                      {selectedLanguage && (
                        <p className="text-xs text-gray-500">
                          📍 Recording will be transcribed to{" "}
                          <span className="font-semibold text-gray-700">
                            {languages.find(
                              (l) =>
                                (typeof l === "string" ? l : l.code || l.id) ===
                                selectedLanguage,
                            )
                              ? typeof languages.find(
                                  (l) =>
                                    (typeof l === "string"
                                      ? l
                                      : l.code || l.id) === selectedLanguage,
                                ) === "string"
                                ? languages.find(
                                    (l) =>
                                      (typeof l === "string"
                                        ? l
                                        : l.code || l.id) === selectedLanguage,
                                  )
                                : languages.find(
                                    (l) =>
                                      (typeof l === "string"
                                        ? l
                                        : l.code || l.id) === selectedLanguage,
                                  )?.name ||
                                  languages.find(
                                    (l) =>
                                      (typeof l === "string"
                                        ? l
                                        : l.code || l.id) === selectedLanguage,
                                  )?.label ||
                                  selectedLanguage
                              : selectedLanguage}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isRecording && (
              <div className="space-y-8 animate-in fade-in zoom-in duration-300">
                <div className="relative">
                  <div
                    className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all group/mic"
                    onClick={stopRecording}
                  >
                    <div className="absolute inset-0 rounded-full bg-red-400/30 animate-pulse" />
                    <div className="w-3 h-3 bg-white rounded-sm relative z-10" />
                  </div>
                  {/* Waveform Visualization */}
                  <div className="mt-8 flex items-center justify-center gap-1">
                    {[...Array(12)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 bg-gradient-to-t from-red-500 to-orange-500 rounded-full animate-pulse"
                        style={{
                          height: `${Math.random() * 60 + 20}px`,
                          animationDelay: `${i * 0.08}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2 text-gray-900">
                    Recording...
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    Speak clearly into your microphone
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-blue-600 font-medium">
                    <Globe className="w-3 h-3" />
                    <span>
                      Language:{" "}
                      {languages.find(
                        (l) =>
                          (typeof l === "string" ? l : l.code || l.id) ===
                          selectedLanguage,
                      )
                        ? typeof languages.find(
                            (l) =>
                              (typeof l === "string" ? l : l.code || l.id) ===
                              selectedLanguage,
                          ) === "string"
                          ? languages.find(
                              (l) =>
                                (typeof l === "string" ? l : l.code || l.id) ===
                                selectedLanguage,
                            )
                          : languages.find(
                              (l) =>
                                (typeof l === "string" ? l : l.code || l.id) ===
                                selectedLanguage,
                            )?.name ||
                            languages.find(
                              (l) =>
                                (typeof l === "string" ? l : l.code || l.id) ===
                                selectedLanguage,
                            )?.label ||
                            selectedLanguage
                        : selectedLanguage}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {isTranscribing && (
              <div className="space-y-8 animate-in fade-in duration-300">
                <div className="flex gap-1.5 justify-center">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">
                    Processing...
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Converting speech to text
                  </p>
                </div>
              </div>
            )}

            {transcriptionText && !isRecording && (
              <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 text-left border border-blue-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      Transcribed from{" "}
                      {languages.find(
                        (l) =>
                          (typeof l === "string" ? l : l.code || l.id) ===
                          selectedLanguage,
                      )
                        ? typeof languages.find(
                            (l) =>
                              (typeof l === "string" ? l : l.code || l.id) ===
                              selectedLanguage,
                          ) === "string"
                          ? languages.find(
                              (l) =>
                                (typeof l === "string" ? l : l.code || l.id) ===
                                selectedLanguage,
                            )
                          : languages.find(
                              (l) =>
                                (typeof l === "string" ? l : l.code || l.id) ===
                                selectedLanguage,
                            )?.name ||
                            languages.find(
                              (l) =>
                                (typeof l === "string" ? l : l.code || l.id) ===
                                selectedLanguage,
                            )?.label ||
                            selectedLanguage
                        : selectedLanguage}
                    </p>
                  </div>
                  <p className="text-gray-900 leading-relaxed text-base">
                    {transcriptionText}
                  </p>
                </div>
                <div className="flex gap-3 justify-center flex-wrap">
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    className="rounded-lg border-gray-200 text-gray-700 hover:bg-gray-50 gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={clearTranscription}
                    className="rounded-lg bg-blue-600 text-white hover:bg-blue-700 gap-2"
                  >
                    <Mic className="w-4 h-4" />
                    Record Again
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealtimeHero;
