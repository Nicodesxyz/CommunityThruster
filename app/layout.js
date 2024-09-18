import localFont from "next/font/local";
import "./globals.css";

const burial = localFont({
  src: "./fonts/Burial.ttf",
  variable: "--font-burial",
  weight: "100 900",
});
const spaceGrotesk = localFont({
  src: "./fonts/SpaceGroteskvr.ttf",
  variable: "--font-space-grotesk",
  weight: "100 900",
});

export const metadata = {
  title: "Thruster Community Tools",
  description:
    "DEFI tool built by the Thruster community—enjoy an all-in-one solution to never miss yield and asset growth opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${burial.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
