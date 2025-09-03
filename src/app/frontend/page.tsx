"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { projects } from "@/constants/portfrontend";

export default function FrontendPage() {
  const [hovered, setHovered] = useState(projects[0]);

  return (
    <main className="relative flex flex-col md:flex-row h-screen overflow-hidden">
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

      {/* List Project */}
      <div
        className="
          relative z-10
          w-full md:w-1/3 bg-neutral-950/50
          flex flex-col justify-center gap-9
          px-6 md:px-20 py-10 md:py-0
          mt-20 md:mt-0
          md:max-h-none
          max-h-[45vh] overflow-y-auto   /* 🔹 tambahkan ini untuk mobile */
        "
      >
        {projects.map((project) => {
          const isActive = hovered.id === project.id;
          return (
            <div key={project.id} className="relative flex flex-col">
              {/* Judul + tombol */}
              <div className="flex items-center justify-between">
                <Link
                  href={`/frontend/${project.id}`}
                  className={`text-lg sm:text-xl md:text-2xl transition-all duration-300 origin-left ${
                    isActive ? "text-[var(--accent)] scale-105" : "text-neutral-400"
                  }`}
                  onMouseEnter={() => setHovered(project)}
                >
                  {project.title}
                </Link>

                {/* Tombol Preview (ikon mata) hanya di mobile */}
                <button
                  type="button"
                  className={`md:hidden ml-3 transition ${
                    isActive ? "text-green-400" : "text-gray-400"
                  }`}
                  onClick={() => setHovered(project)}
                >
                  {isActive ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                </button>
              </div>

              {/* Short Desc absolute */}
              <div
                className={`absolute left-0 top-full mt-1 transition-opacity duration-500 ${
                  isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <p className="text-xs sm:text-sm text-neutral-500">{project.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Preview di Mobile */}
      <div className="mt-6 md:hidden px-6">
        <div className="rounded-2xl overflow-hidden shadow-lg w-full aspect-video relative">
          <Image
            src={hovered.preview}
            alt={hovered.title}
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Preview di Desktop */}
      <div className="hidden md:flex flex-1 items-center justify-center p-6 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-lg w-full max-w-6xl">
          <Image
            src={hovered.preview}
            alt={hovered.title}
            width={1920}
            height={1080}
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      {/* Tulisan FRONT-END */}
      <div className="absolute bottom-4 right-4 z-20">
        <span
          className="
            text-green-500 font-extrabold opacity-80 tracking-widest
            text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] leading-none
          "
        >
          FRONT-END
        </span>
      </div>
    </main>
  );
}
