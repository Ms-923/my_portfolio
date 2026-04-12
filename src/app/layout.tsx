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
      <body style={{ background: "#080808" }}>
        <Silk 
          speed={1.2} 
          scale={1.2} 
          color="#9D8FD1" 
          noiseIntensity={1.2} 
          rotation={0} 
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
