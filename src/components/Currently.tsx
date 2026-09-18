import { currentlyItems, nowItems } from "@/data/now";

export function Currently({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="marquee" aria-label="What Sammy Mati is currently doing">
        <div className="marquee-track">
          {[...currentlyItems, ...currentlyItems].map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    );
  }

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
