"use client";
import Image from "next/image";
import Link from "next/link";

export default function PortfolioWebsiteDetail() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-6 md:px-20 py-16 text-center overflow-hidden">
      {/* Background Foto untuk Desktop */}
      <div className="absolute top-0 left-0 w-full h-screen hidden md:block z-0">
        <Image
          src="/me3.png"
          alt="Dicky Pratama Kusuma"
          fill
          className="opacity-10 object-cover object-top blur-md" 
          priority
        />
      </div>

      {/* Background Foto untuk Mobile */}
      <div className="absolute top-0 left-0 w-full h-screen md:hidden z-0">
        <Image
          src="/me2.png"
          alt="Dicky Pratama Kusuma (Mobile)"
          fill
          className="opacity-10 object-cover object-bottom blur-md" 
          priority
        />
      </div>

      {/* Konten */}
      <div className="relative z-10 max-w-3xl">
        {/* Judul */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--accent)] mb-6">
          Personal Portfolio Website
        </h1>

        {/* Gambar utama */}
        <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
          <Image
            src="/portfolio-website.png"
            alt="Preview Portfolio Website"
            width={1280}
            height={720}
            className="object-contain w-full h-auto"
          />
        </div>

        {/* Link Website */}
        <div className="mb-10">
          <Link
            href="https://your-live-demo-link.com"
            target="_blank"
            className="inline-block px-5 py-2 rounded-2xl border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-black transition-colors"
          >
            Go to Website →
          </Link>
        </div>

        {/* Deskripsi */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 mb-10 leading-relaxed">
          This project is my personal portfolio website built with Next.js and TailwindCSS.
          It showcases my profile, projects, and contact information in a clean and responsive layout.
        </p>
      </div>
    </main>
  );
}
