'use client'; // Added at the top

import React from "react";
import { useState, useEffect } from "react";
import ActionAreaCard from '../components/card.js';
import styles from './home.module.css'
import ai_model from '../ai/page.js'

export default function Home(props) {
    const [generatedContent, setGeneratedContent] = useState('');
    const [inputValue, setInputValue] = useState('');

    
    const generateText = async()=>{
        const { GoogleGenerativeAI } = require("@google/generative-ai");
        const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent({prompt:inputValue || "Write a story about a magic backpack.",});
        setGeneratedContent(result.response)
        console.log(generatedContent);
        


    }
    useEffect(()=>{
        console.log("result",process.env.NEXT_PUBLIC_Key),
        []
    })
    return(
        <div>
        <h1> Welcome to Home Page</h1>
        <ActionAreaCard/>
        <input value={inputValue} onChange={(e)=>setInputValue(e.target.value)} type="text" placeholder="Prompt Here..." className={styles.input_home}/>
        <button className={styles.home_btn} onClick={generateText}>Submit</button>
        <p>{generatedContent}</p>
        </div>
    )

    
}