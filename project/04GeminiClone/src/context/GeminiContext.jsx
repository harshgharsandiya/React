import React, { createContext, useState, useCallback } from "react";
import { runGeminiQuery } from "../config/gemini";

export const GeminiContext = createContext();

const GeminiProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [previousPrompt, setPreviousPromt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    
    const onSent = async (prompt) => {

        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input);

        const response = await runGeminiQuery(input);

        setResultData(response);
        setLoading(false);
        setInput("");

    }

    const contextValue = {
        previousPrompt,
        setPreviousPromt,
        onSent,
        setRecentPrompt,
        recentPrompt, 
        showResult, 
        loading, 
        resultData,
        input,
        setInput,
    }


    return (
      <GeminiContext.Provider
        value={contextValue}
      >
        {props.children}
      </GeminiContext.Provider>
    );
};

export default GeminiProvider;
