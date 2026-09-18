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
    <header className="site-shell pb-16 pt-24 sm:pb-24 sm:pt-36">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display max-w-5xl text-[clamp(4rem,11vw,9rem)]">
        {title}<span className="text-accent">.</span>
      </h1>
      <p className="mt-10 max-w-2xl border-l border-accent pl-5 text-xl leading-relaxed sm:ml-[25%] sm:text-2xl">
        {intro}
      </p>
    </header>
  );
}
