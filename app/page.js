import Image from "next/image";
import styles from "./page.module.css";
import Intro from "@/components/content/intro.js";
import Features from "@/components/content/features.js";
import About from "@/components/content/about.js";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Intro />
        <Features />
        <About />
      </main>
    </div>
  );
}
