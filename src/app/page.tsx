import Image from "next/image";
import "./page.css";
import Hero from "@/components/Hero";
import Panel from "@/components/Panel";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="island">
        <Panel />
      </div>
      <Section />
    </main>
  );
}
