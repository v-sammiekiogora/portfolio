import { nowItems } from "@/data/now";

export function Currently() {
  return (
    <div>
      {nowItems.map((item, index) => (
        <article
          className="grid gap-4 border-t border-line py-8 sm:grid-cols-[4rem_12rem_1fr]"
          key={item.label}
        >
          <p className="font-display text-xl italic text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.12em]">
            {item.label}
          </h2>
          <p className="max-w-2xl text-xl leading-relaxed sm:text-2xl">
            {item.value}
          </p>
        </article>
      ))}
    </div>
  );
}
