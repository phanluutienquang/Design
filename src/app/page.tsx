import { Hero } from "@/components/home/Hero";
import { ProjectGrid } from "@/components/project/ProjectGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectGrid />
      {/* Bạn có thể thêm nhiều ProjectGrid với layout khác nhau ở đây */}
    </>
  );
}