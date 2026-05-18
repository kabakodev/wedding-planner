import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import "./style.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const raleway = Raleway({
  variable: "--font-raleway",
  weights: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export const metadata = {
  title: "Furu | Planner",
  description: "Platforme de programation des services de mariage",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
