'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export const ProjectCard = ({ src, title }: { src: string; title: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
    >
      <Image
        src={src}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Overlay đen mờ hiện ra khi hover */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <p className="text-white text-[10px] tracking-[0.3em] uppercase mb-2">Architecture</p>
        <h3 className="text-white text-xl font-light tracking-widest uppercase">{title}</h3>
      </div>
    </motion.div>
  );
};