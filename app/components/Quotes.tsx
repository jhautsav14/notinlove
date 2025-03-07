const quotes = [
    "Love is a mystery waiting to be solved.",
    "In a world full of signals, be the one worth decoding.",
    "Heartbeats, not algorithms, decide your match.",
    "Sometimes, love is just a glitch in the system.",
];

export default function Quotes() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return <p className="neon-text">"{randomQuote}"</p>;
}
