import Image from "next/image";
import "./page.css";
import Hero from "@/components/Hero";
import Panel from "@/components/Panel";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Hero color="bg-orange" />
      <div className="island">
        <Panel color="bg-yellow" overlap={true} />
      </div>
      <Section color="bg-lavender" />
    </main>
  );
}
