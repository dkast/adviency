import Image from "next/image";

import SnowfallBackground from "@/components/SnowfallBackground";
import "./globals.css";
import ToasterWrapper from "@/components/ToasterWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gradient-to-b from-cyan-100 to-sky-400 relative">
        <SnowfallBackground />
        <ToasterWrapper />
        <div className="flex flex-col h-screen">
          <main className="grow">{children}</main>
          <footer className="w-full h-48 relative object-cover">
            <Image src="/snow.svg" alt="snow" fill className="object-cover" />
          </footer>
        </div>
      </body>
    </html>
  );
}
