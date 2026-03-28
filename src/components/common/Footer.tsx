'use client';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 lg:gap-12 mb-16">

        {/* Cột 1: Brand & Intro */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-xl font-light tracking-[0.2em] uppercase mb-4">HS</h2>
          <p className="text-[11px] md:text-[12px] text-gray-500 leading-relaxed tracking-wider uppercase">
            Notion Architects<br />
            {t('footer_desc')}
          </p>
        </div>

        {/* Cột 2: Quick Links */}
        <div>
          <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-6">{t('footer_explore')}</h3>
          <ul className="space-y-3 text-[11px] md:text-[12px] text-gray-400 tracking-wide uppercase">
            <li><Link href="/projects" className="hover:text-black transition">{t('footer_projects')}</Link></li>
            <li><Link href="/services" className="hover:text-black transition">{t('footer_services')}</Link></li>
            <li><Link href="/studio" className="hover:text-black transition">{t('footer_studio')}</Link></li>
            <li><Link href="/careers" className="hover:text-black transition">{t('footer_careers')}</Link></li>
          </ul>
        </div>

        {/* Cột 3: Contact Details */}
        <div>
          <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-6">{t('footer_contact')}</h3>
          <ul className="space-y-4 text-[11px] md:text-[12px] text-gray-500 tracking-wide">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-0.5 text-black flex-shrink-0" />
              <span>123 Le Loi, Dist 1,<br />Ho Chi Minh City, VN</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={14} className="text-black flex-shrink-0" />
              <span>+84 123 456 789</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={14} className="text-black flex-shrink-0" />
              <span>contact@notion.vn</span>
            </li>
          </ul>
        </div>

        {/* Cột 4: Newsletter/Social */}
        <div>
          <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-6">{t('footer_connect')}</h3>
          <div className="flex gap-5 mb-6">
            {/* Icon Facebook */}
            <Link href="#" className="hover:opacity-60 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </Link>

            {/* Icon Instagram */}
            <Link href="#" className="hover:opacity-60 transition">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </Link>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="NEWSLETTER"
              className="w-full border-b border-gray-300 py-2 text-[10px] focus:outline-none focus:border-black transition bg-transparent"
            />
            <button className="absolute right-0 top-2 text-[10px] font-bold hover:tracking-widest transition-all uppercase">{t('footer_join')}</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center text-[9px] md:text-[10px] text-gray-400 tracking-[0.1em] uppercase gap-4 md:gap-0">
        <p className="text-center md:text-left">© {currentYear} {t('footer_rights')}</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/privacy" className="hover:text-black transition">{t('footer_privacy')}</Link>
          <Link href="/terms" className="hover:text-black transition">{t('footer_terms')}</Link>
        </div>
      </div>
    </footer>
  );
};