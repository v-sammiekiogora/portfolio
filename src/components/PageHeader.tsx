export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <header className="site-shell grid gap-6 pb-10 pt-12 sm:grid-cols-[1.25fr_0.75fr] sm:items-end sm:pb-14 sm:pt-20">
      <p className="eyebrow sm:col-span-2">{eyebrow}</p>
      <h1 className="display max-w-4xl text-[clamp(2.8rem,6.5vw,5.75rem)]">
        {title}<span className="text-accent">.</span>
      </h1>
      <p className="max-w-xl border-l border-accent pl-5 text-base leading-relaxed sm:text-lg">
        {intro}
      </p>
    </header>
  );
}
