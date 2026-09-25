export type PersonalPhoto = {
  title: string;
  alt: string;
  src?: string;
};

export const personalPhotos: PersonalPhoto[] = [
  {
    title: "Our family grows",
    alt: "A baby’s hand holding Sammy’s finger",
    src: "/photos/new-chapter.jpg",
  },
  {
    title: "On the farm",
    alt: "Sammy beside a tractor while working on the farm",
    src: "/photos/sammy-farming.jpg",
  },
  {
    title: "After a hike",
    alt: "Sammy at the summit of Oldonyo Sabuk after a hike",
    src: "/photos/sammy-hiking.jpg",
  },
  {
    title: "Travelling at the beach",
    alt: "Sammy standing at the shoreline on the Kenyan coast",
    src: "/photos/sammy-coast.jpg",
  },
  {
    title: "Somewhere interesting",
    alt: "Sammy visiting the Nairobi National Museum",
    src: "/photos/sammy-museum.jpg",
  },
];
