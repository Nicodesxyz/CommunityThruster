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
  title: "Community Thruster",
  description: "Thruster Community DEFI App",
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
