import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Abdullah Al Masum | Full-Stack Developer",
  description:
    "Full-Stack Web Developer from Bangladesh specializing in React, Next.js, Node.js, MongoDB & B2B Cold Email Outreach.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}