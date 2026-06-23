import type { Metadata } from "next";
import { References } from "@/components/sections/references";

export const metadata: Metadata = {
  title: "Referanslarımız",
  description:
    "Celyx Digital ile çalışan markalar ve referanslarımız.",
};

export default function Page() {
  return (
    <main id="icerik" className="min-h-dvh bg-ink pt-20">
      <References />
    </main>
  );
}
