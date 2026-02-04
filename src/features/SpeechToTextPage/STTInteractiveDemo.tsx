// components/STTInteractiveDemo.tsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, FileAudio, Play, Pause, RotateCcw, Upload, Loader2, ChevronDown, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getLanguages, generateSTT } from "@/lib/api";
import { toast } from "sonner";

const STTInteractiveDemo = () => {
  const [activeTab, setActiveTab] = useState<'realtime' | 'standard'>('realtime');
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  
  // Standard STT State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [transcription, setTranscription] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  
  // Language State
  const [languages, setLanguages] = useState<any[]>([]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");
  const [isLoadingLanguages, setIsLoadingLanguages] = useState(true);
  
  // Error State
  const [error, setError] = useState<string | null>(null);
  
  // Realtime STT State
  const [realtimeTranscription, setRealtimeTranscription] = useState<string>("");
  const [copied, setCopied] = useState(false);
  
  // Refs
  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  // Fetch languages on mount
  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await getLanguages();
        console.log("Fetched languages:", response);
        if (response?.data?.languages && Array.isArray(response.data.languages)) {
          setLanguages(response.data.languages);
          
          // Set default to English if available
          const englishLang = response.data.languages.find((l: any) => l.code === "en");
          if (englishLang) {
            setSelectedLanguage("en");
          } else if (response.data.languages.length > 0) {
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

  // Cleanup media recorder on unmount
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setError(null);
      setTranscription("");
    }
  };

  // Handle file transcription
  const handleTranscribe = async () => {
    if (!selectedFile) {
      setError("Please select an audio file first.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await generateSTT(selectedFile, selectedLanguage);
      
      if (result?.success && result?.backendResponse?.text) {
        setTranscription(result.backendResponse.text);
        toast.success("Transcription completed successfully!");
      } else if (result?.data?.stt_response?.text) {
        setTranscription(result.data.stt_response.text);
        toast.success("Transcription completed successfully!");
      } else {
        throw new Error("No transcription text in response");
      }
    } catch (err) {
      console.error("Transcription error:", err);
      setError("Transcription failed. Please try again.");
      toast.error("Failed to transcribe audio");
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger file input
  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  // Start recording
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];
      
      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };
      
      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        setIsTranscribing(true);
        
        const toastId = toast.loading("Transcribing audio...");
        
        try {
          const response = await generateSTT(audioBlob, selectedLanguage);
          
          const transText = 
            response?.backendResponse?.text ||
            response?.data?.stt_response?.text ||
            response?.data?.text;
          
          if (response?.success && transText) {
            setRealtimeTranscription(transText);
            toast.success("Transcription completed!", { id: toastId });
          } else {
            toast.error("Failed to get transcription text", { id: toastId });
          }
        } catch (error) {
          console.error("STT error:", error);
          toast.error("Error during transcription", { id: toastId });
        } finally {
          setIsTranscribing(false);
        }
      };
      
      mediaRecorder.start();
      setIsRecording(true);
      setRealtimeTranscription("");
      toast.success("Recording started. Click again to stop.");
    } catch (error) {
      console.error("Failed to access microphone:", error);
      toast.error("Please allow microphone access");
    }
  };

  // Stop recording
  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
      setIsRecording(false);
    }
  };

  // Copy transcription to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  // Clear transcription
  const clearTranscription = () => {
    setTranscription("");
    setRealtimeTranscription("");
    setError(null);
  };

  // Reset demo
  const resetDemo = () => {
    setSelectedFile(null);
    setTranscription("");
    setRealtimeTranscription("");
    setError(null);
    setIsRecording(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Get language display name
  const getLanguageDisplayName = (langCode: string) => {
    const lang = languages.find(l => l.code === langCode);
    return lang ? lang.name : langCode.toUpperCase();
  };

  return (
    <section className="py-12 bg-background font-sans">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-border overflow-hidden"
          >
            {/* Tabs Navigation */}
            <div className="flex border-b border-border p-1 bg-muted/30 rounded-t-[2.5rem]">
              <button
                onClick={() => setActiveTab('realtime')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-t-[2rem] font-bold text-sm transition-all ${
                  activeTab === 'realtime'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${
                  activeTab === 'realtime' 
                    ? 'bg-orange-500 animate-pulse' 
                    : 'bg-muted'
                }`}></div>
                Realtime Transcription
              </button>
              <button
                onClick={() => setActiveTab('standard')}
                className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-t-[2rem] font-bold text-sm transition-all ${
                  activeTab === 'standard'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <FileAudio className="w-4 h-4" />
                File Upload
              </button>
            </div>

            {/* Interactive Area */}
            <div className="p-12 min-h-[500px] flex flex-col items-center justify-center text-center">
              <AnimatePresence mode="wait">
                {activeTab === 'realtime' ? (
                  <motion.div
                    key="realtime"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full max-w-3xl"
                  >
                    {!isRecording && !realtimeTranscription && !isTranscribing && (
                      <div className="space-y-8">
                        <div
                          onClick={startRecording}
                          className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto cursor-pointer transition-all ${
                            isRecording
                              ? 'bg-destructive shadow-[0_0_30px_rgba(249,115,22,0.4)] scale-110'
                              : 'bg-primary hover:scale-105'
                          }`}
                        >
                          <Mic className="w-8 h-8 text-primary-foreground" />
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold mb-4">Click to start transcribing</h3>
                          <p className="text-muted-foreground font-medium mb-8">
                            Experience real-time transcription with industry-leading accuracy
                          </p>
                          
                          {/* Language Selector */}
                          <div className="space-y-4 max-w-sm mx-auto">
                            <div className="flex items-center justify-center gap-2 mb-3">
                              <ChevronDown className="w-5 h-5 text-primary" />
                              <span className="text-sm font-semibold text-foreground">
                                Select Language
                              </span>
                            </div>
                            
                            <Select
                              value={selectedLanguage}
                              onValueChange={setSelectedLanguage}
                              disabled={isLoadingLanguages}
                            >
                              <SelectTrigger className="w-full bg-background border-border hover:border-primary transition-colors">
                                <div className="flex items-center gap-2 w-full">
                                  <ChevronDown className="w-4 h-4 text-primary flex-shrink-0" />
                                  <SelectValue placeholder="Select your language">
                                    {isLoadingLanguages ? "Loading languages..." : getLanguageDisplayName(selectedLanguage)}
                                  </SelectValue>
                                </div>
                              </SelectTrigger>
                              <SelectContent>
                                {isLoadingLanguages ? (
                                  <div className="flex items-center justify-center p-4">
                                    <Loader2 className="w-4 h-4 animate-spin text-primary" />
                                  </div>
                                ) : languages.length > 0 ? (
                                  languages.map((lang: any) => (
                                    <SelectItem key={lang.code} value={lang.code}>
                                      <span>{lang.name}</span>
                                    </SelectItem>
                                  ))
                                ) : (
                                  <SelectItem value="en">English</SelectItem>
                                )}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {isRecording && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-8"
                      >
                        <div className="relative">
                          <div
                            className="w-24 h-24 bg-destructive rounded-full flex items-center justify-center mx-auto shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all"
                            onClick={stopRecording}
                          >
                            <div className="absolute inset-0 rounded-full bg-red-400/30 animate-pulse" />
                            <div className="w-4 h-4 bg-background rounded-sm relative z-10" />
                          </div>
                          
                          {/* Waveform Visualization */}
                          <div className="mt-8 flex items-center justify-center gap-1.5">
                            {[...Array(12)].map((_, i) => (
                              <motion.div
                                key={i}
                                className="w-1.5 bg-gradient-to-t from-destructive to-orange-400 rounded-full"
                                animate={{ height: [20, 60, 20] }}
                                transition={{ 
                                  duration: 0.8, 
                                  repeat: Infinity, 
                                  delay: i * 0.08,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold mb-2">Recording...</h3>
                          <p className="text-muted-foreground text-sm mb-4">
                            Speak clearly into your microphone
                          </p>
                          <div className="flex items-center justify-center gap-2 text-sm text-primary font-medium">
                            <ChevronDown className="w-4 h-4" />
                            <span>Language: {getLanguageDisplayName(selectedLanguage)}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {isTranscribing && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-8"
                      >
                        <div className="flex gap-2 justify-center">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="w-3 h-3 rounded-full bg-primary"
                              animate={{ scale: [1, 1.5, 1] }}
                              transition={{ 
                                duration: 0.8, 
                                repeat: Infinity, 
                                delay: i * 0.2 
                              }}
                            />
                          ))}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">Processing...</h3>
                          <p className="text-muted-foreground text-sm mt-2">
                            Converting speech to text
                          </p>
                        </div>
                      </motion.div>
                    )}

                    {realtimeTranscription && !isRecording && !isTranscribing && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-6"
                      >
                        <div className="bg-muted/30 rounded-xl p-6 text-left border border-border">
                          <div className="flex items-center gap-2 mb-4">
                            <ChevronDown className="w-4 h-4 text-primary" />
                            <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                              Transcribed from {getLanguageDisplayName(selectedLanguage)}
                            </p>
                          </div>
                          <p className="text-foreground leading-relaxed text-lg">
                            {realtimeTranscription}
                          </p>
                        </div>
                        
                        <div className="flex gap-3 justify-center flex-wrap">
                          <Button
                            onClick={() => copyToClipboard(realtimeTranscription)}
                            variant="outline"
                            className="gap-2"
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
                            onClick={() => {
                              setRealtimeTranscription("");
                              startRecording();
                            }}
                            className="gap-2"
                          >
                            <Mic className="w-4 h-4" />
                            Record Again
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="standard"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="w-full max-w-3xl"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="audio/*"
                      className="hidden"
                    />
                    
                    {!selectedFile ? (
                      <>
                        <div
                          onClick={triggerFileSelect}
                          className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-8 mx-auto border-2 border-dashed border-border cursor-pointer hover:bg-accent transition-colors"
                        >
                          <Upload className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Upload an audio file</h3>
                        <p className="text-muted-foreground font-medium mb-12">
                          Transcribe pre-recorded content with extreme accuracy
                        </p>
                        <div className="flex items-center justify-center gap-4">
                          <Button
                            onClick={triggerFileSelect}
                            className="px-8 py-6 rounded-2xl font-bold hover:scale-105 transition-transform"
                          >
                            Select Audio File
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="space-y-8 w-full">
                        <div className="flex flex-col items-center gap-6">
                          <div className="flex items-center gap-4 bg-muted px-6 py-4 rounded-xl border border-border w-full max-w-2xl mx-auto">
                            <FileAudio className="w-6 h-6 text-primary" />
                            <span className="font-bold text-sm truncate flex-1 text-left">
                              {selectedFile.name}
                            </span>
                            <button
                              onClick={() => {
                                setSelectedFile(null);
                                if (fileInputRef.current) fileInputRef.current.value = '';
                              }}
                              className="text-muted-foreground hover:text-foreground transition-colors"
                              title="Remove file"
                            >
                              <RotateCcw className="w-5 h-5" />
                            </button>
                          </div>
                          
                          <div className="flex items-center gap-4 w-full max-w-md mx-auto">
                            <div className="relative flex-1">
                              <Select
                                value={selectedLanguage}
                                onValueChange={setSelectedLanguage}
                                disabled={isLoading}
                              >
                                <SelectTrigger className="w-full bg-background border-border rounded-xl font-bold text-sm">
                                  <SelectValue>
                                    {getLanguageDisplayName(selectedLanguage)}
                                  </SelectValue>
                                </SelectTrigger>
                                <SelectContent>
                                  {languages.map((lang) => (
                                    <SelectItem key={lang.code} value={lang.code}>
                                      {lang.name}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <Button
                              onClick={handleTranscribe}
                              disabled={isLoading}
                              className="px-8 py-6 rounded-xl font-bold disabled:opacity-50 min-w-[140px]"
                            >
                              {isLoading ? (
                                <Loader2 className="w-5 h-5 animate-spin" />
                              ) : (
                                "Transcribe"
                              )}
                            </Button>
                          </div>
                        </div>
                        
                        {error && (
                          <div className="text-destructive text-sm font-bold bg-destructive/10 p-4 rounded-xl border border-destructive/20 max-w-2xl mx-auto">
                            {error}
                          </div>
                        )}
                        
                        {transcription && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-muted/30 rounded-2xl p-8 text-left max-w-3xl mx-auto"
                          >
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex items-center gap-2">
                                <ChevronDown className="w-4 h-4 text-primary" />
                                <h4 className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                                  Transcription Result
                                </h4>
                              </div>
                              <Button
                                onClick={() => copyToClipboard(transcription)}
                                variant="ghost"
                                size="sm"
                                className="gap-2"
                              >
                                <Copy className="w-4 h-4" />
                                Copy
                              </Button>
                            </div>
                            <Textarea
                              value={transcription}
                              readOnly
                              className="min-h-[120px] bg-background border-border font-medium text-lg"
                            />
                          </motion.div>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Demo Footer */}
            <div className="bg-muted/30 px-8 py-6 flex items-center justify-between border-t border-border rounded-b-[2.5rem]">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    {activeTab === 'realtime' ? 'Realtime Ready' : 'File Upload Ready'}
                  </span>
                </div>
                <div className="h-4 w-px bg-border"></div>
                <div 
                  className="flex items-center gap-2 cursor-pointer hover:text-foreground transition-colors"
                  onClick={resetDemo}
                >
                  <RotateCcw className="w-3 h-3 text-muted-foreground" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Reset
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground italic">
                Powered by Advanced STT API
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default STTInteractiveDemo;