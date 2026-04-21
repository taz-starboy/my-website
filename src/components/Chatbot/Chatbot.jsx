import { useState, useMemo, useRef, useEffect } from 'react';
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import { systemPrompt } from "../../data/cvData.js";
import './Chatbot.scss';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey });

function Chatbot() {
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null);
    const scrollContainerRef = useRef(null)

    const scrollToBottom = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            container.scrollTo({
                top: container.scrollHeight,
                behavior: "smooth"
            });
        }
    };
    useEffect(() => {
        scrollToBottom();
    }, [history, isLoading]);

    const chat = useMemo(() => {
        return ai.chats.create({
            model: "gemini-3-flash-preview",
            config: {
                thinkingConfig: {
                    thinkingLevel: ThinkingLevel.LOW
                },
                systemInstruction: systemPrompt,
            },
            history: history,
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const input = inputRef.current.value;
        if (!input.trim()) return;

        inputRef.current.value = '';
        setIsLoading(true);
        setHistory(historySoFar => [...historySoFar, { role: "user", parts: [{ text: input }] }]);

        try {
            const response = await chat.sendMessage({
                message: input,
            });
            setHistory(historySoFar => [...historySoFar, { role: "model", parts: [{ text: response.text }] }]);
        } catch (error) {
            console.error("Errore API Gemini:", error);

            let errorMessage = "Credo che qualcosa sia andato storto. Riprova più tardi.";
            if (error.message?.includes("429") || error.status === 429) {
                errorMessage = "Al momento ho ricevuto troppe domande! Ho bisogno di una piccola pausa. Torna tra un minuto per continuare il colloquio.";
            } else if (error.message?.includes("400")) {
                errorMessage = "Questa domanda è un po' troppo complessa o ha attivato i filtri di sicurezza. Prova a chiedermi qualcos'altro sul mio CV!";
            }

            setHistory(historySoFar => [...historySoFar, { role: "model", parts: [{ text: errorMessage }] }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='chatbot-container'>
            <div className='chats-container' ref={scrollContainerRef}>
                {history.map((msg, idx) => (
                    <div key={idx} className={msg.role === 'user' ? 'user-container' : 'model-container'}>
                        {msg.parts[0].text}
                    </div>
                ))}
                {isLoading && (
                    <div className='model-container loading-dots'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                )}
            </div>
            <div>
                <form className='input-container' onSubmit={handleSubmit}>
                    <input
                        autoFocus='true'
                        type='text'
                        ref={inputRef}
                        placeholder="CHATTA col mio AI Clone..."
                    />
                    <button type="submit" disabled={isLoading}>
                        <svg fill="#1e293b" height="28px" width="28px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.00 32.00" xmlSpace="preserve" stroke="#000000" strokeWidth="0.00032">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.44800000000000006"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M21,2H11c-5,0-9,4-9,9v10c0,5,4,9,9,9h10c5,0,9-4,9-9V11C30,6,26,2,21,2z M21.7,16.7l-4,4C17.5,20.9,17.3,21,17,21 s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4l2.3-2.3H10c-0.6,0-1-0.4-1-1s0.4-1,1-1h8.6l-2.3-2.3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l4,4 c0.1,0.1,0.2,0.2,0.2,0.3c0.1,0.2,0.1,0.5,0,0.8C21.9,16.5,21.8,16.6,21.7,16.7z"></path>
                            </g>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Chatbot;