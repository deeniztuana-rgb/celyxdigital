import { Hero } from "@/components/sections/hero";
import { InHouse } from "@/components/sections/in-house";
import { StatsBar } from "@/components/sections/stats-bar";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { MeetMaya } from "@/components/sections/meet-maya";
import { References } from "@/components/sections/references";

export default function Home() {
  return (
    <main id="icerik" className="overflow-x-clip">
      <Hero />
      <InHouse />
      <StatsBar />
      <WhatWeDo />
      <MeetMaya />
      <References />
    </main>
  );
}
