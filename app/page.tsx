"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import NeonButton from "./components/NeonButton";

const quotes = [
  "Love is just a glitch in the matrix. Debug it with us!",
  "404NotInLove: Finding your perfect match, one byte at a time.",
  "Sometimes, a blind date is just the right bug fix for your heart."
];

export default function Home() {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % quotes.length;
      setQuote(quotes[index]);
    }, 4000); // Change quote every 4s

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Header />
      <div className="quote-container">{quote}</div>
      <div></div>
      <NeonButton text="Find Your Match 💚" onClick={() => alert("Blind Date Started!")} />
    </main>
  );
}
