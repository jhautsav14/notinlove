import Image from "next/image";
import FloatingHearts from "./FloatingHearts";

export default function Header() {
    return (
        <header className="header">
            <FloatingHearts />
            <Image
                src="/logo.png"
                alt="404NotInLove Logo"
                width={150}
                height={150}
                className="logo"
            />
            <h1 className="neon-title">404NotInLove</h1>
            <p className="typing-quote">&quot;Find love in the glitch of time!&quot;</p>
        </header>
    );
}
