'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage, demoProjectsTransl } from '@/contexts/LanguageContext';

export const ProjectGrid = () => {
  const { language } = useLanguage();

  return (
    <section className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 bg-white min-h-screen items-center py-20">

      {/* Dự án 1 (Lớn bên trái) */}
      <div className="md:col-span-7 relative aspect-[4/5] md:aspect-[4/3] group overflow-hidden cursor-pointer bg-zinc-100 shadow-sm">
        <Image
          src={demoProjectsTransl[0].img}
          alt={demoProjectsTransl[0].title[language]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
          className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
        />

        {/* Overlay: Bình thường hiện mờ, Hover hiện rõ */}
        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-700 flex flex-col items-center justify-end text-white p-8 md:p-12">
          <motion.h3
            className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.05em] text-center mb-4 transition-all duration-700 opacity-90 group-hover:opacity-100 group-hover:-translate-y-2"
          >
            {demoProjectsTransl[0].title[language]}
          </motion.h3>
          <div className="w-8 group-hover:w-24 h-[1px] bg-white/40 transition-all duration-700 mb-4" />
          <span className="font-inter text-[9px] sm:text-[10px] tracking-[0.6em] uppercase opacity-70 group-hover:opacity-100 transition-all duration-700">
            {demoProjectsTransl[0].year}
          </span>
        </div>
      </div>

      {/* Cột phải (2 ảnh nhỏ) */}
      <div className="md:col-span-5 grid grid-rows-2 gap-4 h-full">
        {demoProjectsTransl.slice(1).map((project) => (
          <div key={project.id} className="relative group overflow-hidden cursor-pointer aspect-[4/3] md:aspect-auto h-full bg-zinc-100 shadow-sm">
            <Image
              src={project.img}
              alt={project.title[language]}
              fill
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
            />

            <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all duration-700 flex flex-col items-center justify-end text-white p-6 md:p-8">
              <h3 className="font-cormorant text-xl sm:text-2xl md:text-3xl font-light tracking-[0.05em] text-center transition-all duration-700 opacity-90 group-hover:opacity-100 group-hover:-translate-y-1">
                {project.title[language]}
              </h3>
              <div className="w-8 group-hover:w-16 h-[1px] bg-white/40 transition-all duration-700 my-3" />
              <span className="font-inter text-[8px] sm:text-[9px] tracking-[0.5em] uppercase opacity-70 group-hover:opacity-100 transition-all duration-700">
                {project.year}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};