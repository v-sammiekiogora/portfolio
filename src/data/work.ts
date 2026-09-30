export type WorkSection = {
  id:
    | "context"
    | "problem"
    | "role"
    | "approach"
    | "decisions"
    | "collaboration"
    | "change"
    | "results"
    | "lessons";
  title: string;
  body?: string[];
  items?: string[];
  placeholder?: string;
};

export type WorkItem = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  status:
    | "Case study in progress"
    | "Story in progress"
    | "Published case study";
  themes: string[];
  featured: boolean;
  sections: WorkSection[];
};

const evidencePlaceholder =
  "Evidence, examples, and Sammy’s specific contribution to be added.";

export const workItems: WorkItem[] = [
  {
    slug: "creator-commerce",
    title: "Wowzi",
    eyebrow: "Lead Product Management · Creator commerce",
    summary:
      "Evolving an established two-sided creator-commerce platform—and the way it was built.",
    status: "Published case study",
    themes: [
      "Product strategy",
      "User research",
      "Design systems",
      "Team leadership",
      "Cross-functional delivery",
    ],
    featured: true,
    sections: createPlaceholderSections(),
  },
  {
    slug: "b2b-saas-product-work",
    title: "B2B / SaaS Product Work",
    eyebrow: "Product · Technology platforms",
    summary:
      "A future synthesis of relevant product work, without compressing distinct projects into invented outcomes.",
    status: "Story in progress",
    themes: ["Projects to confirm", "Timeline to add", "Evidence to add"],
    featured: true,
    sections: createPlaceholderSections(),
  },
  {
    slug: "career-product-journey",
    title: "Career / Product Journey",
    eyebrow: "Software · QA · Product · Data · AI",
    summary:
      "A reflective story about moving across disciplines and what each one added to Sammy’s product practice.",
    status: "Story in progress",
    themes: ["Dates to add", "Roles to confirm", "Transitions to document"],
    featured: true,
    sections: createPlaceholderSections(),
  },
];

function createPlaceholderSections(): WorkSection[] {
  return [
    { id: "context", title: "Context", placeholder: evidencePlaceholder },
    { id: "problem", title: "Problem", placeholder: evidencePlaceholder },
    { id: "role", title: "Role", placeholder: evidencePlaceholder },
    { id: "approach", title: "Approach", placeholder: evidencePlaceholder },
    {
      id: "decisions",
      title: "Key decisions",
      placeholder: evidencePlaceholder,
    },
    {
      id: "collaboration",
      title: "Collaboration",
      placeholder: evidencePlaceholder,
    },
    {
      id: "change",
      title: "What changed",
      placeholder: evidencePlaceholder,
    },
    {
      id: "results",
      title: "Results",
      placeholder:
        "[Outcome or metric to be added. No result is claimed until it can be sourced.]",
    },
    { id: "lessons", title: "Lessons", placeholder: evidencePlaceholder },
  ];
}

export function getWorkItem(slug: string) {
  return workItems.find((item) => item.slug === slug);
}
