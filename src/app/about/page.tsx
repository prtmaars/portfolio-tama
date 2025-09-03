"use client";
import Image from "next/image";
import { logos } from "@/constants/logo";

export default function About() {
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

      {/* Nama */}
      <h1
        className="
          whitespace-nowrap font-extrabold text-[var(--accent)] tracking-tight leading-tight 
          relative z-10 text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
        "
      >
        DICKY PRATAMA KUSUMA
      </h1>

      {/* Deskripsi */}
      <div
        className="
          relative z-10 max-w-3xl mt-4 mb-10 
          text-xs sm:text-sm md:text-lg lg:text-xl 
          text-neutral-400 leading-relaxed px-2
        "
      >
        <p className="mb-4">
          Hi! You can call me Diki, Iky, or Tama. I&apos;m a fresh{" "}
          <span className="text-[var(--accent)] font-semibold">
            Mathematics graduate
          </span>{" "}
          from Sepuluh Nopember Institute of Technology.
        </p>
        <p className="mb-4">
          My expertise spans{" "}
          <span className="text-[var(--accent)] font-semibold">
            data analysis, machine learning, deep learning
          </span>
          ,{" "}
          <span className="text-[var(--accent)] font-semibold">
            front-end development
          </span>
          , and 3D modeling. I enjoy transforming complex problems into
          efficient solutions, exploring digital image processing, and
          developing innovative projects in AI and 3D visualization.
        </p>
      </div>

      {/* Logo Tech Stack */}
      <div className="relative z-10 w-full max-w-6xl border-t border-neutral-800 pt-10">
        {/* Mobile (stacked, kecil, wrap) */}
        <div className="md:hidden flex flex-col gap-6">
          {logos.map((group, i) => (
            <div key={i} className="flex flex-wrap justify-center items-center gap-3 px-2">
              {group.map((logo, idx) => (
                <Image
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  width={18}
                  height={18}
                  className="block m-0 grayscale hover:grayscale-0 transition-transform duration-200"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Desktop (1 baris, separator vertikal, no overlap) */}
        <div className="hidden md:flex items-center justify-center">
          {logos.map((group, i) => (
            <div key={i} className="flex items-center">
              {/* Grup logo */}
              <div className="flex flex-nowrap items-center gap-6 px-3 md:overflow-visible">
                {group.map((logo, idx) => (
                  <Image
                    key={idx}
                    src={logo.src}
                    alt={logo.alt}
                    width={36}
                    height={36}
                    className="
                      block m-0 shrink-0 grayscale transition-transform duration-200 
                      hover:grayscale-0 hover:scale-105 will-change-transform
                    "
                  />
                ))}
              </div>

              {/* Separator vertikal (kecuali setelah grup terakhir) */}
              {i < logos.length - 1 && (
                <div className="h-6 w-px bg-neutral-700 mx-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
