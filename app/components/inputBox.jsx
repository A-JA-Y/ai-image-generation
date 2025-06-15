"use client";
import React, { useState } from "react";
import { GoogleGenAI, Modality } from "@google/genai";

const InputBox = () => {
  const [imageUrl, setImageUrl] = useState("");
  async function main() {
    const ai = new GoogleGenAI({
      apiKey: "AIzaSyDYyUT96V1ayg23OlUVOH7aLErermIDPFs",
    });

    const contents = inputValue;

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
      <div className="flex items-center justify-center sm:w-[70%] w-[75%] sm:h-[25%] h-[10%] p-4 border-1 rounded-3xl shadow-md">
        <input
          type="text"
          placeholder="Type your prompt here..."
          className=" rounded-lg p-2 w-full outline-0 border-0"
          onChange={handleChange}
        />
        <button
          className=" cursor-pointer  text-white p-4 rounded-full sm:text-2xl text-lg  mt-2"
          onClick={main}
        >
          <i className="ri-send-plane-fill hover:opacity-90  transition-all "></i>
        </button>
      </div>
      {imageUrl && (
        <div className="flex items-center justify-center sm:w-[70%] w-[60%] h-[65%] p-4  shadow-md">
          <img
            id="generatedImg"
            src={imageUrl}
            alt="Generated"
            className=" w-[25rem] rounded-3xl pt-6 shadow-lg"
          />
        </div>
      )}
    </>
  );
};

export default InputBox;
