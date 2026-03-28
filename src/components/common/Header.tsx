'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const { scrollY } = useScroll();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { href: '/design', label: t('nav_design') },
    { href: '/sketching', label: t('nav_sketching') },
    { href: '/about', label: t('nav_about') },
    { href: '/contact', label: t('nav_contact') },
  ];

  return (
    <>
      <motion.header
        style={{ backgroundColor, color: textColor }}
        className="fixed top-0 w-full z-50 px-6 md:px-10 py-4 md:py-5 flex justify-between items-center transition-all duration-300"
      >
        {/* Menu trái (Desktop) */}
        <nav className="hidden md:flex gap-10 text-[10px] font-bold tracking-[0.25em] uppercase">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:opacity-50 transition">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Nút Hamburger (Mobile) */}
        <button
          className="md:hidden block p-2 -ml-2 hover:opacity-50 transition"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

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
              src="/logo.png"
              alt="HS House"
              width={57}
              height={30}
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </motion.div>
        </Link>

        {/* Icon bên phải & Đổi Ngôn Ngữ */}
        <div className="flex gap-4 md:gap-6 items-center">
          <button
            onClick={toggleLanguage}
            className="text-[10px] font-bold tracking-[0.2em] uppercase hover:opacity-50 transition min-w-[30px]"
          >
            {language === 'en' ? 'VI' : 'EN'}
          </button>

          <Link href="#" className="hidden md:block hover:opacity-50 transition">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </Link>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <Image
                src="/logo.png"
                alt="HS House"
                width={57}
                height={30}
                className="object-contain"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-black hover:opacity-50 transition"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 text-black text-[14px] font-bold tracking-[0.25em] uppercase mt-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="hover:opacity-50 transition inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-black transition-all group-hover:w-full"></span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto mb-8 text-black flex items-center justify-between text-[11px] font-bold tracking-[0.2em] uppercase">
              <button onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }} className="hover:opacity-50 transition">
                {language === 'en' ? 'Switch to Vietnamese' : 'Chuyển sang Tiếng Anh'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};