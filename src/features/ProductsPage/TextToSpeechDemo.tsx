
import { useState, useEffect, useRef } from "react";
import { Play, Mic, SkipBack, SkipForward, Volume2, Globe, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css/mousewheel";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { getVoices, generateTTS, generateSTT, getLanguages } from "@/lib/api";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const TextToSpeechDemo = () => {
    const MAX_CHARS = 100;
    const [activeTab, setActiveTab] = useState("Text to Speech");
    const [viewMode, setViewMode] = useState<"demo" | "code">("demo");
    const [ttsText, setTtsText] = useState("In the ancient land of Eldoria, where skies shimmered and forests, whispered secrets to the wind, lived a dragon named Zephyros.");
    const [voices, setVoices] = useState<any[]>([]);
    const [selectedVoice, setSelectedVoice] = useState<any>(null);
    const [isLoadingVoices, setIsLoadingVoices] = useState(true);
    const [playingVoiceId, setPlayingVoiceId] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Transcription states
    const [isRecording, setIsRecording] = useState(false);
    const [transcriptionText, setTranscriptionText] = useState("");
    const [isTranscribing, setIsTranscribing] = useState(false);
    const [languages, setLanguages] = useState<any[]>([]);
    const [selectedLanguageSTT, setSelectedLanguageSTT] = useState<string>("en");
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);

    useEffect(() => {
        const fetchVoices = async () => {
            try {
                const [voicesRes, langsRes] = await Promise.all([
                    getVoices(),
                    getLanguages()
                ]);

                if (voicesRes?.success) {
                    const allVoices = [
                        ...(voicesRes?.data?.cloned_voices || []),
                        ...(voicesRes?.data?.built_in_voices || []),
                    ];
                    setVoices(allVoices);
                    if (allVoices.length > 0) {
                        setSelectedVoice(allVoices[0]);
                    }
                }

                if (langsRes) {
                    // Assuming langsRes is an array or has a specific structure
                    setLanguages(Array.isArray(langsRes) ? langsRes : (langsRes.data || []));
                }
            } catch (error) {
                console.error("Failed to fetch initial data:", error);
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

    const tabs = ["Text to Speech", "Transcription", "Music", "Sound Effects"];
    const logos = [
        "Lovable", "Synthesia", "Stripe", "perplexity", "twilio"
    ];

    const codeSnippets = {
        "Text to Speech": `import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient();

const audio = await client.generate({
  voice: "Jessica",
  text: "In the ancient land of Eldoria...",
  model_id: "eleven_multilingual_v2"
});

await play(audio);`,
        "Transcription": `import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient();

const transcription = await client.transcribe({
  file: audioFile,
  model_id: "scribe_v1"
});

console.log(transcription.text);`,
        "Music": `import { ElevenLabsClient } from "elevenlabs";

const client = new ElevenLabsClient();

const audio = await client.textToMusic.convert({
  text: "Cinematic scores, Orchestral, Epic",
  duration_seconds: 10
});

await play(audio);`,
        "Sound Effects": `import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";

const elevenlabs = new ElevenLabsClient();

const audio = await elevenlabs.textToSoundEffects.convert({
  text: "Cinematic Braam, Horror",
});`
    };

    const renderCode = () => {
        const code = codeSnippets[activeTab as keyof typeof codeSnippets];
        return (
            <div className="bg-white rounded-2xl p-4 md:p-8 shadow-sm mb-10 overflow-hidden font-mono text-sm relative min-h-[300px] flex items-center">
                <div className="absolute top-4 right-4 flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/20"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/20"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/20"></div>
                </div>
                <pre className="text-gray-700 whitespace-pre-wrap">
                    {activeTab === "Sound Effects" ? (
                        <>
                            <span className="text-purple-600">import</span> {"{ ElevenLabsClient }"} <span className="text-purple-600">from</span> <span className="text-green-600">"@elevenlabs/elevenlabs-js"</span>;
                            {"\n\n"}
                            <span className="text-blue-600">const</span> elevenlabs = <span className="text-blue-600">new</span> <span className="text-yellow-600">ElevenLabsClient</span>();
                            {"\n\n"}
                            <span className="text-blue-600">const</span> audio = <span className="text-purple-600">await</span> elevenlabs.textToSoundEffects.<span className="text-yellow-600">convert</span>({"{"}
                            {"\n"}  text: <span className="text-green-600">"Cinematic Braam, Horror"</span>,
                            {"\n"});
                        </>
                    ) : (
                        // Generic highlighting for others for now
                        code
                    )}
                </pre>
            </div>
        );
    };

    const playSample = (voice: any) => {
        const sampleUrl = voice?.sample_url || voice?.preview_url;
        if (!sampleUrl) {
            toast.error("No sample available for this voice");
            return;
        }

        if (playingVoiceId === voice.voice_id) {
            if (audioRef.current) {
                audioRef.current.pause();
                setPlayingVoiceId(null);
            }
            return;
        }

        if (audioRef.current) {
            audioRef.current.pause();
        }

        const audio = new Audio(sampleUrl);
        audioRef.current = audio;
        setPlayingVoiceId(voice.voice_id);

        audio.play();

        audio.onended = () => {
            setPlayingVoiceId(null);
        };
    };

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
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
                setIsTranscribing(true);
                const t = toast.loading("Transcribing audio...");
                try {
                    const response = await generateSTT(audioBlob, selectedLanguageSTT);
                    const transText = response?.data?.stt_response?.text || response?.data?.text || response?.backendResponse?.text;

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
            mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());
            setIsRecording(false);
        }
    };

    const renderContent = () => {
        if (viewMode === "code") {
            return renderCode();
        }

        switch (activeTab) {
            case "Text to Speech":
                return (
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-10 relative">
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center justify-between">
                                <label className="text-sm font-medium text-foreground opacity-60">
                                    Input Text
                                </label>
                                <span
                                    className={`text-xs ${ttsText.length > MAX_CHARS
                                        ? 'text-destructive font-bold'
                                        : 'text-muted-foreground/60'
                                        }`}
                                >
                                    {ttsText.length} / {MAX_CHARS} characters
                                </span>
                            </div>

                            <Textarea
                                className="min-h-[120px] bg-transparent border-none text-lg leading-relaxed text-foreground/80 p-0 focus-visible:ring-0 resize-none font-light"
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

                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                                    <Globe className="w-3.5 h-3.5 text-blue-500" />
                                    <span className="text-sm font-medium">English</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Select
                                        value={selectedVoice?.voice_id}
                                        onValueChange={(id) => {
                                            const voice = voices.find((v) => v.voice_id === id);
                                            setSelectedVoice(voice);
                                            if (audioRef.current) audioRef.current.pause();
                                            setPlayingVoiceId(null);
                                        }}
                                    >
                                        <SelectTrigger className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 h-auto rounded-full border border-gray-100 hover:bg-gray-100 transition-colors">
                                            <div className="w-4 h-4 rounded-full bg-pink-400"></div>
                                            <span className="text-sm font-medium">{selectedVoice?.name || "Select Voice"}</span>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {voices.map((voice) => (
                                                <SelectItem key={voice.voice_id} value={voice.voice_id}>
                                                    <div className="flex items-center justify-between w-full min-w-[200px]">
                                                        <span>{voice.name}</span>
                                                        <button
                                                            className="ml-2 p-1 hover:bg-secondary rounded"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                playSample(voice);
                                                            }}
                                                        >
                                                            {playingVoiceId === voice.voice_id ? (
                                                                <div className="flex gap-0.5 items-center h-3">
                                                                    <div className="w-0.5 bg-primary animate-wave h-full" />
                                                                    <div className="w-0.5 bg-primary animate-wave h-2/3" />
                                                                    <div className="w-0.5 bg-primary animate-wave h-3/4" />
                                                                </div>
                                                            ) : (
                                                                <Volume2 className="h-3.5 w-3.5" />
                                                            )}
                                                        </button>
                                                    </div>
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <button
                                onClick={async () => {
                                    if (!selectedVoice) {
                                        toast.error("Please select a voice first");
                                        return;
                                    }
                                    if (!ttsText.trim()) {
                                        toast.error("Please enter some text");
                                        return;
                                    }
                                    if (ttsText.length > MAX_CHARS) {
                                        toast.error("Max limit of 100 characters exceeded");
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
                                className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
                            >
                                <Play className="w-5 h-5 fill-current ml-1" />
                            </button>
                        </div>
                    </div>
                );
            case "Transcription":
                return (
                    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm mb-10 min-h-[300px] flex flex-col items-center justify-center text-center relative overflow-hidden">
                        {isTranscribing && (
                            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center">
                                <div className="flex gap-1.5 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-0" />
                                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-150" />
                                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-300" />
                                </div>
                                <p className="text-sm font-medium text-foreground/70 text-animate">Transcribing...</p>
                            </div>
                        )}

                        <div className="flex flex-col items-center gap-6 w-full max-w-md">
                            {!transcriptionText && !isRecording && (
                                <div className="w-full space-y-4">
                                    {languages.length > 0 && (
                                        <div className="flex flex-col items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-500">
                                            <label className="text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                                                Transcription Language
                                            </label>
                                            <Select
                                                value={selectedLanguageSTT}
                                                onValueChange={setSelectedLanguageSTT}
                                            >
                                                <SelectTrigger className="w-48 h-10 rounded-full bg-white border-gray-200 shadow-sm focus:ring-2 focus:ring-primary/20 transition-all">
                                                    <div className="flex items-center gap-2">
                                                        <Globe className="w-4 h-4 text-blue-500" />
                                                        <SelectValue placeholder="Select Language" />
                                                    </div>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {languages.map((lang: any) => {
                                                        const code = typeof lang === 'string' ? lang : (lang.code || lang.id);
                                                        const name = typeof lang === 'string' ? lang : (lang.name || lang.label);
                                                        return (
                                                            <SelectItem key={code} value={code}>
                                                                <span className="capitalize">{name}</span>
                                                            </SelectItem>
                                                        );
                                                    })}
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    )}

                                    <div className="flex flex-col items-center">
                                        <div
                                            onClick={startRecording}
                                            className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center shadow-xl cursor-pointer hover:scale-105 active:scale-95 transition-all group ring-offset-background hover:ring-2 hover:ring-primary hover:ring-offset-4"
                                        >
                                            <Mic className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="mt-6">
                                            <h3 className="text-xl font-medium text-foreground mb-1">Start Transcribing</h3>
                                            <p className="text-muted-foreground text-sm">Convert your speech to text in real-time</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {isRecording && (
                            <div className="animate-in fade-in zoom-in duration-300 flex flex-col items-center">
                                <div
                                    onClick={stopRecording}
                                    className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mb-6 shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all relative group"
                                >
                                    <div className="absolute inset-0 rounded-full bg-destructive/20 animate-ping" />
                                    <div className="w-6 h-6 bg-white rounded-sm group-hover:scale-90 transition-transform" />
                                </div>
                                <h3 className="text-lg font-medium text-foreground mb-1">Recording...</h3>
                                <p className="text-muted-foreground text-sm">Speak clearly into your microphone</p>

                                <div className="mt-8 flex gap-1 items-center h-4">
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-1 bg-destructive/40 rounded-full animate-wave"
                                            style={{
                                                height: `${Math.random() * 100}%`,
                                                animationDelay: `${i * 0.1}s`
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}

                        {transcriptionText && !isRecording && !isTranscribing && (
                            <div className="w-full h-full animate-in slide-in-from-bottom-4 duration-500">
                                <div className="flex items-center justify-between mb-4 w-full px-2">
                                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/60">Transcription</span>
                                    <button
                                        onClick={() => setTranscriptionText("")}
                                        className="text-xs text-primary font-medium hover:underline"
                                    >
                                        Try Again
                                    </button>
                                </div>
                                <div className="bg-gray-50/50 rounded-xl p-6 text-left border border-gray-100">
                                    <p className="text-lg text-foreground/80 leading-relaxed font-light first-letter:capitalize">
                                        {transcriptionText}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                );
            case "Music":
                return (
                    <div className="bg-white rounded-2xl p-6 md:p-12 shadow-sm mb-10 flex flex-col items-center justify-center">
                        <div className="relative w-64 h-64 bg-gradient-to-br from-red-700 to-red-900 rounded-2xl shadow-xl p-8 text-white flex flex-col justify-between overflow-hidden mb-8">
                            {/* Sphere Effect */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gradient-to-br from-red-400/50 to-transparent blur-sm"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-transparent blur-md"></div>

                            <div className="relative z-10">
                                <h3 className="text-lg font-semibold">Cinematic scores</h3>
                            </div>

                            <div className="relative z-10 text-xs font-medium space-y-0.5 opacity-90">
                                <p>Orchestral</p>
                                <p>Epic</p>
                                <p>Triumphant</p>
                                <p>Fantasy</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-8">
                            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                <SkipBack className="w-5 h-5" />
                            </button>
                            <button className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-200 transition-colors">
                                <Play className="w-5 h-5 fill-current ml-1" />
                            </button>
                            <button className="text-gray-400 hover:text-gray-600 transition-colors">
                                <SkipForward className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                );
            case "Sound Effects":
                // Using Swiper for scrolling
                return (
                    <div className="bg-white rounded-2xl p-6 md:p-12 shadow-sm mb-10 overflow-hidden">
                        <Swiper
                            spaceBetween={24}
                            slidesPerView="auto"
                            freeMode={true}
                            loop={true}
                            mousewheel={true}
                            modules={[FreeMode, Mousewheel, Autoplay]}
                            className="w-full !overflow-visible"
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide className="!w-auto">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                                    </div>
                                    <span className="text-sm font-medium text-gray-500">Spaceship</span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="!w-auto">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-48 h-48 rounded-lg overflow-hidden relative group cursor-pointer">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-orange-500 opacity-80"></div>
                                        {/* Lion/Roar Placeholder - simulating the image */}
                                        <img
                                            src="https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbiUyMHJvYXJ8ZW58MHx8MHx8fDA%3D"
                                            alt="Roar"
                                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                                        />

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                                <Play className="w-5 h-5 text-white fill-white" />
                                            </div>
                                        </div>
                                    </div>
                                    <span className="text-sm font-medium text-gray-500">Roar</span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="!w-auto">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                                    </div>
                                    <span className="text-sm font-medium text-gray-500">Rain</span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="!w-auto">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                                    </div>
                                    <span className="text-sm font-medium text-gray-500">Wind</span>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className="!w-auto">
                                <div className="flex flex-col items-center gap-3">
                                    <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                                    </div>
                                    <span className="text-sm font-medium text-gray-500">Laser</span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                );
            default:
                return null;
        }
    };

    const getHeaderContent = () => {
        switch (activeTab) {
            case "Text to Speech":
                return { title: "Text to Speech", desc: "Convert text to speech using AI voices" };
            case "Transcription":
                return { title: "Transcription", desc: "Convert speech to text live or in bulk" };
            case "Music":
                return { title: "Music", desc: "Create music from a single prompt" };
            case "Sound Effects":
                return { title: "Sound Effects", desc: "Create professional-grade sound effects from a single prompt" };
            default:
                return { title: "Text to Speech", desc: "Convert text to speech using AI voices" };
        }
    };

    const { title, desc } = getHeaderContent();

    return (
        <section className="py-20 bg-background font-sans">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Main Card */}
                    <div className="bg-[#F5F5F3] rounded-3xl p-6 md:p-12 mb-20 min-h-[500px]">
                        {/* Header */}
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                            <div>
                                <h2 className="text-2xl font-medium text-foreground mb-2">{title}</h2>
                                <p className="text-muted-foreground">{desc}</p>
                            </div>
                            <div className="bg-white rounded-full p-1 flex items-center shadow-sm">
                                <button
                                    onClick={() => setViewMode("demo")}
                                    className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${viewMode === "demo"
                                        ? "bg-white shadow-sm text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    Demo
                                </button>
                                <button
                                    onClick={() => setViewMode("code")}
                                    className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 ${viewMode === "code"
                                        ? "bg-white shadow-sm text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    Code
                                </button>
                            </div>
                        </div>

                        {/* Interactive Area */}
                        {renderContent()}

                        {/* Tabs */}
                        <div className="flex flex-wrap justify-center gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeTab === tab
                                        ? "bg-white shadow-sm text-foreground"
                                        : "text-muted-foreground hover:text-foreground"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Logos */}
                    <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale">
                        {/* SVG Placeholders - using text for now as specific SVGs aren't available */}
                        {logos.map((logo) => (
                            <span key={logo} className="text-xl font-bold font-serif">{logo}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TextToSpeechDemo;
