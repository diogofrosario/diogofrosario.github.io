import { About, Header, Intro, Skills, Timeline } from "@/components/Sections";

export default function Home() {
  return (
    <main className="h-full font-mono">
      <Header />
      <Intro />
      <About />
      <Timeline />
      {/* <Skills /> */}
    </main>
  );
}
