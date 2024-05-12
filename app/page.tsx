import CourseMenu from "@/components/CourseMenu";
import HeroSlider from "@/components/home/HeroSlider";
import MoreCourses from "@/components/home/MoreCourses";
import NewsLetter from "@/components/home/NewsLetter";
import PopularInstructor from "@/components/home/PopularInstructor";
import Recommendations from "@/components/home/Recommendations";
import TrendingCourses from "@/components/home/Trending";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-10">
      {/* Main Slider */}
      <HeroSlider />
      <Recommendations />
      <MoreCourses author="Kitani Studio" />
      <TrendingCourses />
      <PopularInstructor />
      <NewsLetter />
    </main>
  );
}
