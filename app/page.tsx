import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";
import Projects from "@/components/main/Projects";

export default function Home() {
  return (
    <main className="h-full w-full pt-[65px]">
      <div className="flex flex-col gap-10 md:gap-20">
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
