/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";

export const metadata = {
  title: "Nipuna Dilshan — AI Solutions Engineer",
  description: "Personal portfolio of Nipuna Dilshan, AI Solutions Engineer building practical AI & automated software systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-[#111315] text-[#FFFFFF] antialiased selection:bg-[#F47745] selection:text-white font-sans min-h-screen"
      >
        {children}
      </body>
    </html>
  );
}
