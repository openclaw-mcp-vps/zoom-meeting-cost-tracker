import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meeting Cost Tracker – Calculate the Real Cost of Every Meeting",
  description: "Connect your calendar and payroll to see the actual dollar cost of every meeting. Stop wasting money on unnecessary meetings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0bc97694-0f1c-41b1-8446-643b69b2967b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
