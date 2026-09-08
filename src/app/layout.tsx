import type { Metadata } from "next";
import "./globals.css";
import Silk from "@/components/Silk";

export const metadata: Metadata = {
  title: "Mohammed Saif — Student & Web Developer",
  description:
    "Portfolio of Mohammed Saif — CSE student, Web Developer, Cybersecurity enthusiast, and core team member at TSIG & GDGC MJCET.",
  keywords: ["Mohammed Saif", "Web Developer", "Portfolio", "MJCET", "TSIG", "GDGC"],
  authors: [{ name: "Mohammed Saif" }],
  openGraph: {
    title: "Mohammed Saif — Student & Web Developer",
    description: "Building the web, one component at a time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/*
          Shader colour is deliberately dark. At the previous #9D8FD1 the
          bright bands of the pattern gave white text roughly 2.9:1
          contrast, so legibility changed as the animation moved.
        */}
        <Silk
          speed={0.5}
          scale={1.2}
          color="#3A3158"
          noiseIntensity={0.9}
          rotation={0}
        />
        {/* Holds contrast steady over the moving shader */}
        <div className="bg-scrim" aria-hidden="true" />

        <a href="#main" className="skip-link">
          Skip to content
        </a>

        <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      </body>
    </html>
  );
}
