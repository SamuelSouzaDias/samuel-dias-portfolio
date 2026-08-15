import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Samuel Dias — a data professional moving from Business Intelligence into Analytics Engineering and Data Engineering.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
        About
      </p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Samuel Dias
      </h1>

      <div className="mt-10 flex flex-col gap-6 lg:flex-row lg:gap-12">
        <div className="flex-1">
          <p className="text-lg leading-relaxed text-text-muted">
            I&apos;m a data professional who started on the ground floor —
            literally learning SQL and Python on my own time — and worked my
            way into a data team by building something good enough to get
            noticed. That instinct hasn&apos;t changed: I still care more
            about whether a number can be trusted than about how a dashboard
            looks.
          </p>
        </div>
        <div className="mx-auto w-full max-w-[220px] shrink-0 lg:mx-0">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-border bg-bg-elevated">
            <Image
              src="/images/samuel-photo.png"
              alt="Samuel Dias"
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-12">
        <section>
          <h2 className="text-xl font-semibold text-text">What I Do</h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            I build the layer between raw data and business decisions — from
            Databricks/PySpark pipelines to the executive dashboards people
            actually use to make calls. My strongest work tends to start with
            a question nobody had quite asked yet: not &ldquo;what&apos;s the
            number,&rdquo; but &ldquo;can we trust the number, and why does it
            keep changing.&rdquo;
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">How I Work</h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            I default to ownership end-to-end — ingestion, modeling,
            governance, and the final report — rather than handing off pieces
            along the way. I use a PR-based Git workflow even for BI work,
            because I think analytics deserves the same rigor as software.
            And I&apos;d rather flag a metric I don&apos;t trust yet than
            ship a clean-looking number I can&apos;t defend.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text">
            What I&apos;m Learning
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Right now: dbt and Airflow, to formalize the orchestration and
            testing discipline I&apos;ve been applying informally for years —
            plus enough French to widen where I can work. Long-term,
            I&apos;m moving deliberately from BI toward Analytics Engineering
            and Data Engineering, without losing the business fluency that BI
            forced me to build first.
          </p>
        </section>
      </div>
    </div>
  );
}
