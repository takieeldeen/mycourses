import HeroSlider from "@/components/home/HeroSlider";
import MoreCourses from "@/components/home/MoreCourses";
import NewsLetter from "@/components/layout/NewsLetter";
import PopularInstructor from "@/components/home/PopularInstructor";
import Recommendations from "@/components/home/Recommendations";
import TrendingCourses from "@/components/home/Trending";

export default function Home() {
  return (
    <main className="px-2 md:px-10">
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
