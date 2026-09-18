import { mediumUrl, notes } from "@/data/notes";

export function Notes({ limit }: { limit?: number }) {
  const visibleNotes = limit ? notes.slice(0, limit) : notes;

  return (
    <div>
      {visibleNotes.map((note) => (
        <article
          className="group grid gap-3 border-t border-line py-8 transition-[padding] duration-200 hover:pl-2 sm:grid-cols-[10rem_1fr_1fr] sm:gap-8"
          key={note.title}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.1em]">
              {note.date}
            </p>
            <p className="mt-1 text-xs text-accent">{note.topic}</p>
          </div>
          <h3 className="font-display text-3xl leading-tight tracking-[-0.035em] sm:text-4xl">
            {note.title}
          </h3>
          <p className="max-w-lg text-sm leading-relaxed text-muted">
            {note.excerpt}
            <span className="mt-4 block text-xs font-bold text-ink">
              Coming to this notebook soon
            </span>
          </p>
        </article>
      ))}
      <a
        className="text-link mt-8 inline-block text-sm font-bold"
        href={mediumUrl}
        target="_blank"
        rel="noreferrer"
      >
        Older writing on Medium ↗
      </a>
    </div>
  );
}
