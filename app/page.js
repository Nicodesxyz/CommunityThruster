import Image from "next/image";
import styles from "./page.module.css";
import Intro from "@/components/content/intro.js";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Intro />
      </main>
    </div>
  );
}
