'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Header = () => {
  const { scrollY } = useScroll();

  // 1. Nền mờ dần sang trắng khi scroll
  const backgroundColor = useTransform(
    scrollY, 
    [0, 100], 
    ['rgba(255,255,255,0)', 'rgba(255,255,255,1)']
  );

  // 2. Màu chữ & Icon: Trắng (khi ở top) -> Đen (khi scroll)
  const textColor = useTransform(scrollY, [0, 100], ['#ffffff', '#000000']);

  // 3. Filter Logo: Invert sang trắng (khi ở top) -> Trở về màu gốc (khi scroll)
  const logoFilter = useTransform(scrollY, [0, 100], ['invert(1)', 'invert(0)']);

  return (
    <motion.header 
      style={{ backgroundColor, color: textColor }}
      className="fixed top-0 w-full z-50 px-10 py-5 flex justify-between items-center transition-all duration-300"
    >
      {/* Menu trái */}
      <nav className="flex gap-10 text-[10px] font-bold tracking-[0.25em] uppercase">
        <Link href="/design" className="hover:opacity-50 transition">Design</Link>
        <Link href="/sketching" className="hover:opacity-50 transition">Sketching</Link>
        <Link href="/about" className="hover:opacity-50 transition">About Us</Link>
        <Link href="/contact" className="hover:opacity-50 transition">Contact</Link>
      </nav>

      {/* Logo chính giữa - HS House */}
      <Link 
        href="/" 
        className="absolute left-1/2 -translate-x-1/2 flex items-center group cursor-pointer"
      >
        <motion.div 
          style={{ filter: logoFilter }} 
          className="flex items-center"
        >
          <Image 
            src="/logo.png" // Đảm bảo file này đã ĐƯỢC TÁCH NỀN TRONG SUỐT
            alt="HS House"
            width={57}      // Giảm nhẹ kích thước để trông tinh tế hơn
            height={30}
            className="object-contain transition-transform duration-500 group-hover:scale-105"
            priority
          />
        </motion.div>
      </Link>

      {/* Icon bên phải */}
      <div className="flex gap-4 items-center">
        <Link href="#" className="hover:opacity-50 transition">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </Link>
      </div>
    </motion.header>
  );
};