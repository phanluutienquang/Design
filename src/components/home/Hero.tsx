'use client';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-900">
      <Image
        src="/hero-arch.jpg"
        alt="Featured Project"
        fill
        className="object-cover opacity-50"
        priority
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white pt-20 px-4">
        {/* 1. HS HOUSE - To, Dùng Font Serif có chân (font-cormorant) */}
        <h1 className="font-cormorant text-5xl sm:text-7xl md:text-[140px] lg:text-[160px] font-extralight tracking-[-0.01em] uppercase mb-4 md:mb-6 animate-fade-in leading-none text-center">
          {t('hero_title')}
        </h1>

        {/* 2. SPACE & LIGHT - Nhỏ, Giãn cách rộng, Font không chân (font-inter) */}
        <h2 className="font-inter text-[9px] sm:text-[10px] md:text-[12px] font-bold tracking-[0.8em] md:tracking-[1.2em] uppercase opacity-70 ml-[0.8em] md:ml-[1.2em] text-center">
          {t('hero_subtitle')}
        </h2>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
          <span className="text-[8px] uppercase tracking-[0.3em] mb-2 font-light">Scroll</span>
          <div className="w-[1px] h-12 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};