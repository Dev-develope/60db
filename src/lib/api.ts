export const getVoices = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://api-dev.qcall.ai";
    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        "accept": "application/json, text/plain, */*",
        "origin": "https://qlabsui.netlify.app",
        "referer": "https://qlabsui.netlify.app/",
    };

    if (token) {
        headers["Authorization"] = `Bearer ${'sk_live_aae5a7508a51f6aacd21841791914435161007b8a8eaaf0b'}`;
    }

    try {
        const response = await fetch(`${baseUrl}/tts/voices`, {
            method: "GET",
            headers: headers,
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching voices:", error);
        throw error;
    }
};

export const generateTTS = async (text: string, voiceId: string) => {
    const ttsUrl = "https://api-dev.qcall.ai/tts/tts-synthesize";
    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        "accept": "application/json, text/plain, */*",
        "origin": "https://qlabsui.netlify.app",
        "referer": "https://qlabsui.netlify.app/",
    };

    if (token) {
        headers["Authorization"] = `Bearer ${'sk_live_aae5a7508a51f6aacd21841791914435161007b8a8eaaf0b'}`;
    }

    try {
        const response = await fetch(ttsUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({ text, voice_id: voiceId }),
        });

        if (!response.ok) {
            throw new Error(`TTS error: ${response.status}`);
        }

        // Assuming it returns audio blob/url or similar
        return await response.json();
    } catch (error) {
        console.error("Error generating TTS:", error);
        throw error;
    }
};
