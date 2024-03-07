import Hero from "@/components/Hero";
import Panel from "@/components/Panel";
import Section from "@/components/Section";
import "./page.css";

export default function Home() {
  return (
    <main>
      <div className="island">
        <Hero color="bg-orange" />
      </div>
      <div className="island">
        <Panel color="bg-yellow" overlap={true} />
      </div>
      <div className="island">
        <Section color="bg-lavender" />
      </div>
    </main>
  );
}
