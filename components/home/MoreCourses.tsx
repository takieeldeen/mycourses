import { FC } from "react";
import CourseMenu from "../CourseMenu";

interface MoreCoursesProps {
  author: string;
}

const courses = [
  {
    course_name: "Vue JS Scratch Course",
    course_author: "Kitani Studio",
    course_description:
      "More than 8yr Experience as illustrator. Learn how to become professional illustrator. With kitani studio.",
    course_rating: 4.5,
    course_audience: 1200,
    course_priceBefore: 32.9,
    course_priceAfter: 24.92,
    course_thumbnail: "/img/home/course-1.png",
    course_bestseller: true,
    course_sale: 25,
  },
  {
    course_name: "Vue JS Scratch Course",
    course_author: "Kitani Studio",
    course_description:
      "More than 8yr Experience as illustrator. Learn how to become professional illustrator. With kitani studio.",
    course_rating: 4.5,
    course_audience: 1200,
    course_priceBefore: 32.9,
    course_priceAfter: 24.92,
    course_thumbnail: "/img/home/course-2.png",
    course_bestseller: false,
    course_sale: 30,
  },
  {
    course_name: "Vue JS Scratch Course",
    course_author: "Kitani Studio",
    course_description:
      "More than 8yr Experience as illustrator. Learn how to become professional illustrator. With kitani studio.",
    course_rating: 3.5,
    course_audience: 1200,
    course_priceBefore: 32.9,
    course_priceAfter: 24.92,
    course_thumbnail: "/img/home/course-3.png",
    course_bestseller: true,
    course_sale: 15,
  },
  {
    course_name: "Vue JS Scratch Course",
    course_author: "Kitani Studio",
    course_description:
      "More than 8yr Experience as illustrator. Learn how to become professional illustrator. With kitani studio.",
    course_rating: 2.5,
    course_audience: 450,
    course_priceBefore: 32.9,
    course_priceAfter: 24.92,
    course_thumbnail: "/img/home/course-4.png",
    course_bestseller: true,
    course_sale: 25,
  },
];

const MoreCourses: FC<MoreCoursesProps> = ({ author = "Kitani Studio" }) => {
  return (
    <section>
      <h2 className="text-2xl font-black">More Courses from {author}</h2>
      <p className="text-neutral-600 mb-4 font-semibold">
        We Know the best courses for you.
      </p>
      <CourseMenu courses={courses} />
    </section>
  );
};

export default MoreCourses;
