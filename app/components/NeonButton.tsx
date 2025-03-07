"use client"; // ✅ Required for interactive components
import Image from "next/image";
export default function NeonButton({ text, onClick }: { text: string; onClick: () => void }) {
    return (

        <a href="https://www.instagram.com/404notinlove?igsh=eTVkdDA2d2JncjY1https://www.instagram.com/yourpage" target="_blank" className="neon-button">
            <Image src="/ig.svg" alt="Instagram" width={150}
                height={150} />
            Follow Us
        </a>


    );
}
