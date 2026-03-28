// src/components/home/Hero.tsx
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-900">
      <Image
        src="/hero-arch.jpg" 
        alt="Featured Project"
        fill
        className="object-cover opacity-50"
        priority
      />
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white pt-20">
        {/* 1. HS HOUSE - To, Dùng Font Serif có chân (font-cormorant) */}
        <h1 className="font-cormorant text-7xl md:text-[160px] font-extralight tracking-[-0.01em] uppercase mb-4 animate-fade-in leading-none">
          HS House
        </h1>

        {/* 2. SPACE & LIGHT - Nhỏ, Giãn cách rộng, Font không chân (font-inter) */}
        <h2 className="font-inter text-[10px] md:text-[11px] font-bold tracking-[1.2em] uppercase opacity-60 ml-[1.2em]">
          Space & Light
        </h2>
        
        {/* ... (phần đường kẻ scroll bên dưới) */}
      </div>
    </section>
  );
};