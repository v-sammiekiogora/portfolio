import { nowItems } from "@/data/now";

export function Currently() {
  return (
    <div>
      {nowItems.map((item, index) => (
        <article
          className="grid gap-4 border-t border-line py-6 sm:grid-cols-[3rem_10rem_1fr]"
          key={item.label}
        >
          <p className="font-display text-xl italic text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.12em]">
            {item.label}
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed">
            {item.value}
          </p>
        </article>
      ))}
    </div>
  );
}
