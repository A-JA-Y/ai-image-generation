"use client";
import React, { useState } from "react";
import { GoogleGenAI, Modality } from "@google/genai";

const InputBox = () => {
  const [imageUrl, setImageUrl] = useState("");
  function handleSubmit(e) {
      e.preventDefault();
      main();
      setInputValue("");
    }
  async function main() {
    const ai = new GoogleGenAI({
      apiKey: "AIzaSyDYyUT96V1ayg23OlUVOH7aLErermIDPFs",
    });
    

    const contents = `${inputValue} in anime style, high quality, detailed, 4k, trending on artstation, cinematic lighting, intricate details, vibrant colors, masterpiece, award-winning, hyper-realistic, photorealistic, sharp focus, dynamic composition`;

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-preview-image-generation",
      contents: contents,
      config: {
        responseModalities: [Modality.TEXT, Modality.IMAGE],
      },
    });
    for (const part of response.candidates[0].content.parts) {
      if (part.text) {
        console.log(part.text);
      } else if (part.inlineData) {
        const imageData = part.inlineData.data;
        const buffer = Buffer.from(imageData, "base64");

        const imageUrl = URL.createObjectURL(
          new Blob([buffer], { type: "image/png" })
        );
        setImageUrl(imageUrl);
      }
    }
  }

  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <form className="flex mt-5 items-center justify-center sm:w-[70%] w-[75%] sm:h-[25%] h-[10%] p-4 border-1 rounded-3xl shadow-md" onSubmit={
        handleSubmit} >
        <input
          type="text"
          placeholder="Type your prompt here and click that button..."
          className=" rounded-lg p-2 w-full outline-0 border-0"
          onChange={handleChange}
        />
        <button
          className=" cursor-pointer  text-white p-4 rounded-full hover:scale-120 transition-all duration-300 sm:text-2xl text-lg  mt-2"
          type="submit"
        >
          <i className="ri-send-plane-fill hover:opacity-90   transition-all "></i>
        </button>
      </form>
      {imageUrl && (
        <div className=" w-[20rem] py-4">
          <img
            id="generatedImg"
            src={imageUrl}
            alt="Generated"
            className=" w-full rounded-xl drop-shadow-2xl shadow-lg "
          />
        
        </div>
      )}
    </>
  );
};

export default InputBox;
