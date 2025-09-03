import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 overflow-hidden">
      {/* Background Foto untuk Desktop */}
      <div className="absolute top-0 left-0 w-full h-screen hidden md:block z-0">
        <Image
          src="/me3.png"
          alt="Dicky Pratama Kusuma"
          fill
          className="opacity-10 object-cover object-top"
          priority
        />
      </div>

      {/* Background Foto untuk Mobile */}
      <div className="absolute top-0 left-0 w-full h-screen md:hidden z-0">
        <Image
          src="/me2.png"
          alt="Dicky Pratama Kusuma (Mobile)"
          fill
          className="opacity-10 object-cover object-bottom"
          priority
        />
      </div>

      {/* Konten di atas background */}
      <div className="relative z-10">
        <h1 className="font-extrabold text-[var(--accent)] tracking-tight leading-tight text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
          DICKY PRATAMA KUSUMA
        </h1>
        <p className="mt-3 mb-10 text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-neutral-400 max-w-2xl mx-auto text-center">
          DATA ANALYST & CREATIVE TECHNOLOGIST
        </p>
        <div className="flex flex-col items-center gap-3 mt-4 md:mt-12">
          <p className="text-xs sm:text-sm md:text-base text-neutral-400">
            Got a project to discuss?
          </p>
          <Link
            href="/contact"
            className="px-5 py-2 rounded-2xl border border-neutral-600 text-xs sm:text-sm md:text-base text-neutral-200 hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer"
          >
            Get in touch →
          </Link>
        </div>
      </div>
    </main>
  );
}
