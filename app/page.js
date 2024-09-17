import Image from "next/image";
import styles from "./page.module.css";
import Intro from "@/components/content/intro.js";
import Features from "@/components/content/features.js";
import About from "@/components/content/about.js";

export default function Home() {
  return (
    <div>
      <main>
        <Intro />
        <Features />
      </main>
    </div>
  );
}
