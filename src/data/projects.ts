export type Project = {
  number: string;
  title: string;
  tags: string[];
  summary: string;
  detail: string;
  href?: string;
  linkLabel?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Autobuddy",
    tags: ["Product", "UX", "Africa"],
    summary: "A mobile-first idea for making garage management less chaotic.",
    detail:
      "Designed with African automotive businesses in mind: the practical rhythms, people, and constraints that generic software tends to miss.",
    href: "https://medium.com/design-bootcamp/ux-case-study-designing-an-auto-garage-mobile-app-4abc11be152",
    linkLabel: "Read the case study",
  },
  {
    number: "02",
    title: "GitHub Learn",
    tags: ["Product", "Learning", "AI"],
    summary: "A learning experience for developers who would rather be building.",
    detail:
      "I spend time thinking about discovery, navigation, learning journeys, and how AI might help people get unstuck without getting in the way.",
    href: "https://learn.github.com/",
    linkLabel: "Visit GitHub Learn",
  },
  {
    number: "03",
    title: "Data / AI experiments",
    tags: ["Experiments", "Data", "AI"],
    summary: "Small investigations into signals, models, and useful questions.",
    detail:
      "This shelf is intentionally unfinished. It will collect notebooks, prototypes, and lessons from learning in public.",
  },
  {
    number: "04",
    title: "Other small things",
    tags: ["Prototypes", "Ideas", "In progress"],
    summary: "The side quests that do not need to become startups.",
    detail:
      "Tiny tools, interface studies, half-formed concepts, and things made simply to understand them better.",
  },
];
