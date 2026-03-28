'use client'; // Đảm bảo có dòng này vì dùng Framer Motion
import Image from 'next/image';
import { motion } from 'framer-motion';

const demoProjects = [
  { id: 1, title: "Nội Thất HA House", year: "2024", img: "/3.jpg" },
  { id: 2, title: "Phòng Giám Đốc MAT NAU", year: "2023", img: "/2.jpg" },
  { id: 3, title: "Xưởng May MAT NAU", year: "2024", img: "/1.jpg" },
];

export const ProjectGrid = () => {
  return (
    <section className="p-2 md:p-4 grid grid-cols-1 md:grid-cols-12 gap-3 bg-white min-h-screen">
      
      {/* Dự án 1 (Lớn bên trái) */}
      <div className="md:col-span-7 relative aspect-[4/3] md:aspect-auto group overflow-hidden cursor-pointer bg-zinc-100">
        <Image 
          src={demoProjects[0].img} 
          alt={demoProjects[0].title}
          fill 
          // 👈 THÊM DÒNG NÀY ĐỂ HẾT LỖI SIZES
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
        />
        
        {/* Overlay: Bình thường hiện mờ, Hover hiện rõ */}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-700 flex flex-col items-center justify-center text-white p-6">
          <motion.h3 
            className="font-cormorant text-2xl md:text-4xl font-light tracking-[0.1em] text-center mb-3 transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:translate-y-[-10px]"
          >
            {demoProjects[0].title}
          </motion.h3>
          <div className="w-0 group-hover:w-24 h-[1px] bg-white/40 transition-all duration-700 mb-3" />
          <span className="font-inter text-[9px] tracking-[0.6em] uppercase opacity-0 group-hover:opacity-60 transition-all duration-700 delay-100">
            {demoProjects[0].year}
          </span>
        </div>
      </div>

      {/* Cột phải (2 ảnh nhỏ) */}
      <div className="md:col-span-5 grid grid-rows-2 gap-3">
        {demoProjects.slice(1).map((project) => (
          <div key={project.id} className="relative group overflow-hidden cursor-pointer aspect-video md:aspect-auto bg-zinc-100">
            <Image 
              src={project.img} 
              alt={project.title}
              fill 
              className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-700 flex flex-col items-center justify-center text-white p-4">
              <h3 className="font-cormorant text-xl md:text-2xl font-light tracking-[0.1em] text-center transition-all duration-700 opacity-80 group-hover:opacity-100">
                {project.title}
              </h3>
              <div className="w-0 group-hover:w-16 h-[1px] bg-white/40 transition-all duration-700 my-2" />
              <span className="font-inter text-[8px] tracking-[0.5em] uppercase opacity-0 group-hover:opacity-60 transition-all duration-700">
                {project.year}
              </span>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};