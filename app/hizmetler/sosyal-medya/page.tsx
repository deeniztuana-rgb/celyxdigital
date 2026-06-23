import type { Metadata } from "next";
import { ServiceDetail } from "@/components/sections/service-detail";
import { getServicePage } from "@/components/data/service-pages";

const data = getServicePage("sosyal-medya")!;

export const metadata: Metadata = {
  title: data.title,
  description: data.heroDesc,
};

export default function Page() {
  return <ServiceDetail slug={data.slug} />;
}
