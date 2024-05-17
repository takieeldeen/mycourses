import CourseDetails from "@/components/courseDetails/CourseDetails";
import CourseProps from "@/components/courseDetails/CourseProps";
import BreadCrumbs from "@/components/home/BreadCrumbs";
import NewsLetter from "@/components/layout/NewsLetter";
import { FC } from "react";

const CourseDetailsPage: FC = () => {
  return (
    <main className="px-4">
      <BreadCrumbs />
      <CourseProps />
      <CourseDetails />
      <NewsLetter />
    </main>
  );
};
export default CourseDetailsPage;
