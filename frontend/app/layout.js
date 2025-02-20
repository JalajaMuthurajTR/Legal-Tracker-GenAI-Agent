import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Navbar from "@/components/core/layout/navbar/Navbar";
import { Settings, BrainCircuit, LogIn } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Project-TR",
  description:
    "Project-TR is a test case agent for manual, web automation, and web service automation test cases.",
  keywords:
    "test case agent, manual test case agent, web automation test case agent, web service automation test case agent",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader color="#000" />
        <Navbar
          links={[
            {
              path: "/manual-test-case-agent",
              label: "Manual Test Case Agent",
              icon: <BrainCircuit size={24} />,
            },
            {
              path: "/web-automation-test-case-agent",
              label: "Web Automation Test Case Agent",
              icon: <BrainCircuit size={24} />,
            },
            {
              path: "/web-service-automation-test-case-agent",
              label: "Web Service Automation Test Case Agent",
              icon: <BrainCircuit size={24} />,
            },
            {
              path: "/settings",
              label: "Settings",
              icon: <Settings size={24} />,
            },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
