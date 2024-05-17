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

const Query: FC = () => {
  return (
    <div className="md:p-8 flex flex-col  w-full">
      <div className="flex justify-between ">
        <p>
          Showing {(2312).toLocaleString("en-us")} results of{" "}
          <span className="font-semibold">UI design</span>
        </p>
        <form>
          <select
            name="sort"
            className="py-1 px-2 bg-neutral-100 border-2 border-neutral-300 rounded-md"
          >
            <option value="popular">Most Popular</option>
            <option value="price-high-to-low">Price (High to Low)</option>
            <option value="pice-low-to-high">Price (Low to High)</option>
          </select>
        </form>
      </div>
      <ul className="md:grid-cols-3 md:grid md:py-4 md:gap-4">
        {courses.map((course, index) => (
          <CourseItem key={index} course={course} />
        ))}
      </ul>
    </div>
  );
};

export default Query;
