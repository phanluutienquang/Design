'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'vi';

interface Translations {
  [key: string]: {
    en: string;
    vi: string;
  };
}

export const translations: Translations = {
  nav_design: { en: 'Design', vi: 'Thiết Kế' },
  nav_sketching: { en: 'Sketching', vi: 'Phác Thảo' },
  nav_about: { en: 'About Us', vi: 'Về Chúng Tôi' },
  nav_contact: { en: 'Contact', vi: 'Liên Hệ' },
  hero_title: { en: 'HS House', vi: 'HS House' },
  hero_subtitle: { en: 'Space & Light', vi: 'Không Gian & Ánh Sáng' },
  proj_view_all: { en: 'View All Projects', vi: 'Xem Tất Cả Dự Án' },
  footer_desc: { en: 'Defining space through minimalist innovation.', vi: 'Định hình không gian qua sự đổi mới tối giản.' },
  footer_explore: { en: 'Explore', vi: 'Khám Phá' },
  footer_projects: { en: 'Projects', vi: 'Dự Án' },
  footer_services: { en: 'Services', vi: 'Dịch Vụ' },
  footer_studio: { en: 'The Studio', vi: 'Đội Ngũ' },
  footer_careers: { en: 'Careers', vi: 'Tuyển Dụng' },
  footer_contact: { en: 'Contact', vi: 'Liên Hệ' },
  footer_connect: { en: 'Connect', vi: 'Kết Nối' },
  footer_join: { en: 'Join', vi: 'Tham Gia' },
  footer_rights: { en: 'Notion Architects. All rights reserved.', vi: 'Notion Architects. Mọi quyền được bảo lưu.' },
  footer_privacy: { en: 'Privacy Policy', vi: 'Chính Sách Bảo Mật' },
  footer_terms: { en: 'Terms of Service', vi: 'Điều Khoản Dịch Vụ' },
};

export const demoProjectsTransl = [
  { id: 1, title: { en: "HA House Interior", vi: "Nội Thất HA House" }, year: "2024", img: "/3.jpg" },
  { id: 2, title: { en: "Director's Office MAT NAU", vi: "Phòng Giám Đốc MAT NAU" }, year: "2023", img: "/2.jpg" },
  { id: 3, title: { en: "MAT NAU Garment Factory", vi: "Xưởng May MAT NAU" }, year: "2024", img: "/1.jpg" },
];

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('vi');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
