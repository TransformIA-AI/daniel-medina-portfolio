type SectionHeadingProps = {
  align?: "left" | "center";
  eyebrow: string;
  title: string;
  body?: string;
};

export function SectionHeading({ align = "left", eyebrow, title, body }: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div className={isCentered ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {body ? (
        <p className={isCentered ? "mx-auto mt-4 max-w-3xl whitespace-pre-line text-base leading-7 text-slate" : "mt-4 whitespace-pre-line text-base leading-7 text-slate"}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
