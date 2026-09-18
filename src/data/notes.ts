export type Note = {
  date: string;
  title: string;
  topic: string;
  excerpt: string;
  slug?: string;
  href?: string;
};

export const notes: Note[] = [
  {
    date: "Notebook 01",
    title: "Good products make the next step feel obvious",
    topic: "Product",
    excerpt:
      "A note on discovery, momentum, and the difference between showing people everything and helping them choose.",
    slug: "good-products-make-the-next-step-obvious",
  },
  {
    date: "Notebook 02",
    title: "Learning with AI, not around it",
    topic: "AI + Learning",
    excerpt:
      "Questions I am carrying about confidence, feedback, curiosity, and what learning looks like when answers are abundant.",
    slug: "learning-with-ai",
  },
  {
    date: "Notebook 03",
    title: "What the data cannot tell you",
    topic: "Data",
    excerpt:
      "Metrics are useful. So is noticing what they flatten, who they leave out, and when to go ask a human.",
    slug: "what-data-cannot-tell-you",
  },
];

export const mediumUrl = "https://medium.com/@sammymati";
