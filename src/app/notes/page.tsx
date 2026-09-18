import type { Metadata } from "next";
import { Notes } from "@/components/Notes";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Notes from Sammy Mati on product, AI, data, UX, technology, building, and noticing.",
};

export default function NotesPage() {
  return (
    <main id="main">
      <PageHeader
        eyebrow="Notes"
        title="Things I’ve been thinking about"
        intro="Observations, questions, discoveries, and lessons from building. Some become essays. Some just need somewhere to live."
      />
      <section className="site-shell pb-24">
        <Notes />
      </section>
    </main>
  );
}
