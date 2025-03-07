import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "404NotInLove | Blind Dating",
  description: "Find love in the most unexpected places.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
