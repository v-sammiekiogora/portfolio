export type PersonalPhoto = {
  title: string;
  alt: string;
  src?: string;
};

export const personalPhotos: PersonalPhoto[] = [
  {
    title: "On the farm",
    alt: "Sammy beside a tractor while working on the farm",
    src: "/photos/sammy-farming.jpg",
  },
  {
    title: "Oldonyo Sabuk",
    alt: "Sammy at the summit of Oldonyo Sabuk after a hike",
    src: "/photos/sammy-hiking.jpg",
  },
  {
    title: "At the coast",
    alt: "Sammy standing at the shoreline on the Kenyan coast",
    src: "/photos/sammy-coast.jpg",
  },
];
