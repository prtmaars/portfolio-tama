"use client";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
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

      {/* Judul */}
      <h1 className="relative z-10 text-[32px] sm:text-[48px] md:text-[100px] font-bold text-[var(--accent)] tracking-wide mb-4">
        GET IN TOUCH
      </h1>

      <p className="relative z-10 mb-10 text-xs sm:text-sm md:text-xl text-neutral-400 max-w-2xl">
        Let’s connect! Feel free to reach me via any of the platforms below or
        send me a message directly.
      </p>

      {/* Sosial Media */}
      <div className="relative z-10 flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
        {[
          {
            href: "https://www.instagram.com/_pratamars/",
            src: "/instagram-2016-5.svg",
            alt: "Instagram",
          },
          {
            href: "https://linkedin.com/in/dickypratamakusuma",
            src: "/linkedin-icon-2.svg",
            alt: "LinkedIn",
          },
          {
            href: "mailto:prtmaars@gmail.com",
            src: "/official-gmail-icon-2020-.svg",
            alt: "Gmail",
          },
          {
            href: "https://github.com/prtmaars",
            src: "/github-icon-2.svg",
            alt: "Github",
          },
          {
            href: "https://www.upwork.com/freelancers/~0157ea95d2a51cbddb?mp_source=share",
            src: "/upwork-roundedsquare-1.svg",
            alt: "Upwork",
          },
        ].map(({ href, src, alt }, i) => (
          <Link
            key={i}
            href={href}
            target="_blank"
            className="group transition-transform"
          >
            <Image
              src={src}
              alt={alt}
              width={24}
              height={24}
              className="sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px] grayscale group-hover:grayscale-0 group-hover:scale-125 transition-all duration-300"
            />
          </Link>
        ))}
      </div>

      {/* Form Kontak */}
      <form
        action="https://formsubmit.co/prtmaars@gmail.com"
        method="POST"
        className="relative z-10 flex flex-col gap-6 w-full max-w-lg mb-10"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-4 rounded-xl bg-white/10 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-4 rounded-xl bg-white/10 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={6}
          className="p-4 rounded-xl bg-white/10 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] transition resize-none"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-[var(--accent)] text-black font-semibold hover:brightness-110 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
