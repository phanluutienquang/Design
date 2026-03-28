import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google"; 
import { Header } from "@/components/common/Header";
import { Footer } from "@/components/common/Footer";
import "./globals.css";

// 1. Khai báo Font (Thêm weight 300 cho mỏng đúng chất kiến trúc)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

// 2. Metadata (SEO)
export const metadata: Metadata = {
  title: "HS Architects | Space & Light",
  description: "Minimalist architectural designs showcasing innovative space and light concepts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      {/* Gom tất cả class vào một thẻ body duy nhất */}
      <body className={`${inter.variable} ${cormorantGaramond.variable} antialiased bg-white flex flex-col min-h-screen`}>
        
        <Header />

        {/* Nội dung chính sẽ nằm ở đây */}
        <main className="flex-1">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}