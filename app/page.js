import Image from "next/image";
import styles from "./page.module.css";
import Intro from "@/components/content/intro.js";
import Features from "@/components/content/features.js";
import About from "@/components/content/about.js";
import Footer from "@/components/content/footer.js";
import JoinUs from "@/components/content/JoinUs";

export default function Home() {
  return (
    <main>
      <Intro />
      <Features />

      <About />
      <Footer />
    </main>
  );
}
