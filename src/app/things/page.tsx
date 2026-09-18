import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ProjectList } from "@/components/ProjectList";

export const metadata: Metadata = {
  title: "Things I’ve made",
  description:
    "An evolving archive of products, experiments, prototypes, and ideas by Sammy Mati.",
};

export default function ThingsPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="An evolving archive"
        title="Things I’ve made"
        intro="Products, prototypes, experiments, and ideas — including the small ones that taught me something."
      />
      <section className="site-shell pb-16">
        <ProjectList />
      </section>
    </main>
  );
}
