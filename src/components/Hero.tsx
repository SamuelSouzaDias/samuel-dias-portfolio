import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Samuel Dias
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl">
            Data &amp; Analytics Engineer
            <span className="block text-text-muted">
              — in transition, with 4+ years of BI foundation
            </span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-text-muted">
            I build the layer between raw data and business decisions — and I
            care more about whether a number can be trusted than about how a
            dashboard looks.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/projects"
              className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              Explore My Work
            </Link>
            <Link
              href={site.resumeComplete}
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-text transition-colors hover:border-gold hover:text-gold"
            >
              Download Resume
            </Link>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-bg-elevated">
            <Image
              src="/images/samuel-photo.jpg"
              alt="Samuel Dias"
              fill
              priority
              sizes="(min-width: 1024px) 24rem, 20rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
