const photoIdeas = [
  "Nairobi",
  "The next hike",
  "Interesting places",
  "Match day",
  "Details noticed",
];

export function PhotoStrip() {
  return (
    <section className="site-shell py-14 sm:py-18">
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div>
          <p className="eyebrow">Scenes along the way</p>
          <h2 className="display text-4xl sm:text-5xl">A visual notebook.</h2>
        </div>
        <p className="max-w-md self-end text-sm leading-relaxed text-muted sm:justify-self-end">
          Space for Nairobi, trails, journeys, football, and small details worth
          noticing. Real photographs will live here; no borrowed scenery.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5 sm:gap-3">
        {photoIdeas.map((idea) => (
          <div className="photo-placeholder" key={idea}>
            <span>{idea}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
