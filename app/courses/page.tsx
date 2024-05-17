import Filters from "@/components/courseQuery/Filters";
import Query from "@/components/courseQuery/Query";
import PopularInstructor from "@/components/home/PopularInstructor";
import Recommendations from "@/components/home/Recommendations";
import TrendingCourses from "@/components/home/Trending";
import { FC } from "react";

const AllCoursesPage: FC = () => {
  return (
    <main className="px-4 flex flex-col items-start md:flex-row">
      <Filters />
      <Query />
    </main>
  );
};

export default AllCoursesPage;
