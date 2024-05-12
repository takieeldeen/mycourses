import { FC } from "react";
import CourseItem from "../CourseItem";

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
    course_thumbnail: "/img/home/trending-1.png",
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
    course_thumbnail: "/img/home/trending-2.png",
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
    course_thumbnail: "/img/home/trending-3.png",
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
    course_thumbnail: "/img/home/trending-4.png",
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
    course_thumbnail: "/img/home/trending-5.png",
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
    course_thumbnail: "/img/home/trending-6.png",
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
    course_thumbnail: "/img/home/trending-7.png",
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
    course_thumbnail: "/img/home/trending-8.png",
    course_bestseller: true,
    course_sale: 25,
  },
];

const TrendingCourses: FC = () => {
  return (
    <section className=" py-12 ">
      <h2 className="text-2xl font-black">Trending Courses.</h2>
      <p className="text-neutral-600 mb-4 font-semibold">
        Here are the top pickups for you.
      </p>
      <ul className="flex flex-wrap justify-center md:justify-between gap-4">
        {courses.map((course, index) => (
          <li key={index} className="w-[18rem] flex-shrink-0">
            <CourseItem course={course} />
          </li>
        ))}
      </ul>
    </section>
  );
};
export default TrendingCourses;
