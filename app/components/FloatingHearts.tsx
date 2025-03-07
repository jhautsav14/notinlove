"use client";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<number[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setHearts((prev) => [...prev, Math.random()]);
            setTimeout(() => {
                setHearts((prev) => prev.slice(1));
            }, 5000);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="floating-hearts">
            {hearts.map((heart, index) => (
                <span
                    key={index}
                    className="heart"
                    style={{
                        left: `${Math.random() * 100}vw`,
                        animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                >
                    ❤️
                </span>
            ))}
        </div>
    );
}
