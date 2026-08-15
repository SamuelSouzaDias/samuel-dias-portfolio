import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section className="overflow-x-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Samuel Dias
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-text sm:text-5xl">
            Data &amp; Analytics Engineer
            <span className="block text-text-muted">
              — in transition, with 4+ years of BI foundation
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-text-muted lg:mx-0">
            I build the layer between raw data and business decisions — and I
            care more about whether a number can be trusted than about how a
            dashboard looks.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start">
            <Link
              href="/projects"
              className="rounded-md bg-gold px-6 py-3 text-sm font-semibold text-bg transition-[filter,box-shadow] duration-200 ease-out hover:shadow-[0_0_24px_4px_rgba(176,141,43,0.3)] hover:brightness-110 motion-reduce:transition-none"
            >
              Explore My Work
            </Link>
            <Link
              href={site.resumeComplete}
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-text transition-[color,border-color,filter,box-shadow] duration-200 ease-out hover:border-gold hover:text-gold hover:shadow-[0_0_20px_3px_rgba(176,141,43,0.28)] hover:brightness-110 motion-reduce:transition-none"
            >
              Download Resume
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:ml-auto lg:mr-[-2.5rem] lg:max-w-md xl:mr-[-4rem] xl:max-w-lg">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[8%] h-[70%] w-[75%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(176,141,43,0.35)_0%,rgba(176,141,43,0)_70%)] blur-3xl"
          />
          <Image
            src="/images/samuel-photo.png"
            alt="Samuel Dias"
            width={1409}
            height={1100}
            priority
            sizes="(min-width: 1280px) 32rem, (min-width: 1024px) 28rem, (min-width: 640px) 24rem, 20rem"
            className="hero-photo-mask relative z-10 h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
