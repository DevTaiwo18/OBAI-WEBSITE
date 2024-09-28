import React, { useState } from "react";
import axios from "axios"; // Import axios for making API requests
import { FaPaperPlane } from "react-icons/fa"; // Paper plane icon for send button

function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false); // Track if bot is processing the message
    const [showSuggestions, setShowSuggestions] = useState(true); // Control visibility of suggestions

    const OPENAI_API_KEY = import.meta.env.REACT_APP_OPENAI_API_KEY; 

    // Suggestions data
    const suggestions = [
        { title: "My car is", description: "making a rattling noise in the front, left tire." },
        { title: "There was hail", description: "in my area. How do I file an insurance claim?" },
        { title: "The mechanic said", description: "that a tire alignment costs $80. Is this right?" },
        { title: "I'm worried about", description: "my tires. How do I know if they need changing?" }
    ];

    // Function to fetch a response from OpenAI API
    const fetchBotResponse = async (userMessage) => {
        setLoading(true);
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/completions',
                {
                    model: 'text-davinci-003', // Specify the model you want to use
                    prompt: userMessage,
                    max_tokens: 100, // Limit the response length
                },
                {
                    headers: {
                        Authorization: `Bearer ${OPENAI_API_KEY}`, // Use your API key
                    },
                }
            );
            const botMessage = response.data.choices[0].text.trim();
            setMessages((prevMessages) => [...prevMessages, { text: botMessage, sender: 'bot' }]);
        } catch (error) {
            console.error("Error fetching OpenAI response:", error);
            setMessages((prevMessages) => [...prevMessages, { text: "Sorry, I couldn't process your request. Try again later.", sender: 'bot' }]);
        } finally {
            setLoading(false);
        }
    };

    // Send message function
    const sendMessage = (message) => {
        if (message.trim() !== '') {
            const newMessages = [...messages, { text: message, sender: 'user' }];
            setMessages(newMessages);
            setInput('');
            setShowSuggestions(false); // Hide suggestions after sending a message

            // Fetch bot response using OpenAI API
            fetchBotResponse(message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-off-white px-4 md:px-16 py-5 md:py-10">
            {/* Title */}
            <div className="text-center mb-10">
                <h1 className="text-3xl font-extrabold text-brand-dark">How can I help?</h1>
            </div>

            {/* Suggestions Section */}
            {showSuggestions && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 w-full max-w-2xl">
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            className="bg-brand-dark text-brand-white p-6 rounded-lg cursor-pointer"
                            onClick={() => sendMessage(`${suggestion.title} ${suggestion.description}`)}
                        >
                            <h3 className="text-lg font-bold mb-2">{suggestion.title}</h3>
                            <p className="text-sm">{suggestion.description}</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Show Chat Box only if there are messages */}
            {messages.length > 0 && (
                <div className="w-full max-w-2xl">
                    <div className="rounded-lg p-4 mb-4 h-64 overflow-y-auto">
                        {messages.map((message, index) => (
                            <div key={index} className="flex mb-2">
                                {message.sender === 'user' ? (
                                    <div className="ml-auto px-8 py-4 text-sm bg-brand-dark text-brand-white rounded-[30px] max-w-xs">
                                        {message.text}
                                    </div>
                                ) : (
                                    <div className="mr-auto mt-4 text-left text-sm text-brand-dark w-full">
                                        {message.text}
                                    </div>
                                )}
                            </div>
                        ))}
                        {loading && <div className="text-left text-sm text-brand-dark">Bot is typing...</div>}
                    </div>
                </div>
            )}

            {/* Input Box */}
            <div className="w-full max-w-2xl">
                <div className="flex items-center rounded-full px-4 py-2 bg-transparent border border-brand-dark">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask me a car question :)"
                        className="w-full bg-transparent focus:outline-none px-2 text-brand-dark"
                        disabled={loading} // Disable input when loading
                    />
                    <button
                        onClick={() => sendMessage(input)}
                        className="ml-2 bg-black rounded-full p-2 flex justify-center items-center w-10 h-10"
                        disabled={loading} // Disable button when loading
                    >
                        <FaPaperPlane size={20} className="text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;
