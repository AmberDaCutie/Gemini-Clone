import {createContext, useState} from "react";
import main from "../config/gemini";


export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");   


    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev=>prev+nextWord);
        }, 75 * index)
    }
    const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResults(true);

    let response;

    if (prompt !== undefined) {
        response = await main(prompt);
        setRecentPrompt(prompt);
    } else {
        setPrevPrompts(prev => [...prev, input]);
        setRecentPrompt(input);
        response = await main(input);
    }

    let cleanResponse = response.replace(/<\/?br\s*\/?>/gi, '\n\n');

    setResultData(cleanResponse);
    setLoading(false);
    setInput("");
    };

    const newChat = () =>   {
        setLoading(false);
        setShowResults(false);
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResults,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return (
        <Context.Provider value = {contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;