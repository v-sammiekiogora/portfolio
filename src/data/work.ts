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
  status: "Case study in progress" | "Story in progress";
  themes: string[];
  featured: boolean;
  sections: WorkSection[];
};

const evidencePlaceholder =
  "Evidence, examples, and Sammy’s specific contribution to be added.";

export const workItems: WorkItem[] = [
  {
    slug: "github-learn",
    title: "GitHub Learn",
    eyebrow: "Product · Developer learning · AI",
    summary:
      "Shaping how developers discover learning, navigate it, and move from curiosity to making.",
    status: "Case study in progress",
    themes: [
      "Discovery and navigation",
      "Behavior and data",
      "Information architecture",
      "Content discovery",
      "Search and AI discovery",
      "Product strategy",
      "Collaboration and prioritization",
    ],
    featured: true,
    sections: [
      {
        id: "context",
        title: "Context",
        body: [
          "GitHub Learn is a learning experience for developers. Sammy’s current focus includes how people discover what to learn, navigate the experience, and move from wanting to know something to making something.",
        ],
      },
      {
        id: "problem",
        title: "Problem",
        placeholder:
          "Problem statement, user evidence, and baseline behavior to be added.",
      },
      {
        id: "role",
        title: "Role",
        body: [
          "Sammy works across product and program management on GitHub Learn, with attention to discovery, learning journeys, navigation, and making.",
        ],
        placeholder:
          "Scope, collaborators, decision rights, and timeline to be added.",
      },
      {
        id: "approach",
        title: "Approach",
        body: [
          "This case study is being prepared around the investigation threads below. It will separate observed evidence from assumptions and document how priorities changed as the team learned.",
        ],
        items: [
          "Understand discovery behavior and available signals",
          "Make the information architecture and navigation legible",
          "Explore content, search, and AI-assisted discovery",
          "Connect strategy, collaboration, and prioritization",
        ],
      },
      {
        id: "decisions",
        title: "Key decisions",
        placeholder: evidencePlaceholder,
      },
      {
        id: "collaboration",
        title: "Collaboration",
        placeholder:
          "Team shape, working model, and cross-functional contributions to be added.",
      },
      {
        id: "change",
        title: "What changed",
        placeholder:
          "Before-and-after product, process, or experience evidence to be added.",
      },
      {
        id: "results",
        title: "Results",
        placeholder:
          "[Outcome or metric to be added. No result is claimed until it can be sourced.]",
      },
      {
        id: "lessons",
        title: "Lessons",
        placeholder:
          "Reflections and lessons will be added when the case-study evidence is complete.",
      },
    ],
  },
  {
    slug: "github-certifications",
    title: "GitHub Certifications",
    eyebrow: "Developer experiences · Learning",
    summary:
      "A selected-work story reserved for the product context, Sammy’s contribution, and verified outcomes.",
    status: "Case study in progress",
    themes: ["Context to add", "Role to add", "Evidence to add"],
    featured: true,
    sections: createPlaceholderSections(),
  },
  {
    slug: "creator-commerce",
    title: "Creator Commerce",
    eyebrow: "Product · Platforms",
    summary:
      "A selected-work story in progress. Details will be published when the context and evidence are ready.",
    status: "Story in progress",
    themes: ["Context to add", "Role to add", "Evidence to add"],
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
