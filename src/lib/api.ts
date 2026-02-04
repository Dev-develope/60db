export const getApiAuthHeader = () => {
    if (typeof window !== 'undefined') {
        const userKey = localStorage.getItem("apiKey");
        if (userKey) {
            return `Bearer ${userKey}`;
        }
    }
    throw new Error("API Key is missing. Please set your API key on the home page.");
};

export const getVoices = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "https://api-dev.qcall.ai";
    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        "accept": "application/json, text/plain, */*",
        "origin": "https://qlabsui.netlify.app",
        "referer": "https://qlabsui.netlify.app/",
        "Authorization": getApiAuthHeader(),
    };

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

export const generateTTS = async (text: string, voiceId: string, language?: string) => {
    const ttsUrl = "https://api-dev.qcall.ai/tts/tts-synthesize";

    const headers: HeadersInit = {
        "Content-Type": "application/json",
        "accept": "application/json, text/plain, */*",
        "origin": "https://qlabsui.netlify.app",
        "referer": "https://qlabsui.netlify.app/",
        "Authorization": getApiAuthHeader(),
    };

    try {
        const body: any = { text, voice_id: voiceId };
        if (language) {
            body.language = language;
        }

        const response = await fetch(ttsUrl, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`TTS error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error generating TTS:", error);
        throw error;
    }
};

export const getLanguages = async () => {
    const url = "https://api-dev.qcall.ai/tts/stt/languages";
    try {
        const response = await fetch(url, {
            method: "GET",
            headers: {
                accept: "application/json",
                Authorization: getApiAuthHeader(),
            },
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching languages:", error);
        throw error;
    }
};

export const generateSTT = async (audioBlob: Blob, language: string) => {
    const sttUrl = "https://api-dev.qcall.ai/tts/stt";

    const headers: HeadersInit = {
        "accept": "application/json, text/plain, */*",
        "origin": "https://qlabsui.netlify.app",
        "referer": "https://qlabsui.netlify.app/",
        "Authorization": getApiAuthHeader(),
    };

    const formData = new FormData();
    formData.append("audio", audioBlob, "recording.wav");
    formData.append("language", language);

    try {
        const response = await fetch(sttUrl, {
            method: "POST",
            headers: headers,
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`STT error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Error generating STT:", error);
        throw error;
    }
};
