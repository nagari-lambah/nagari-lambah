export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div
      className="overflow-hidden rounded-[30px] px-7 py-10 text-white shadow-sm sm:px-10 sm:py-12"
      style={{
        background: "linear-gradient(110deg, #0d3763 0%, #15588a 55%, #0f8292 100%)",
      }}
    >
      <p
        className="text-sm font-extrabold uppercase tracking-[0.25em]"
        style={{ color: "#ffd12f" }}
      >
        {eyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/90">
          {description}
        </p>
      )}
    </div>
  );
}
