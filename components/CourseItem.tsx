import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import Ratings from "./Ratings";

interface CourseItemProps {
  course: {
    course_name: string;
    course_author: string;
    course_description: string;
    course_rating: number;
    course_audience: number;
    course_priceBefore: number;
    course_priceAfter: number;
    course_thumbnail: string;
    course_bestseller: boolean;
    course_sale: number;
  };
}

const CourseItem: FC<CourseItemProps> = ({ course }) => {
  return (
    <div className="rounded-t-2xl overflow-hidden ">
      <Link href="/" className="relative">
        <div className="absolute top-2 left-2 z-10 drop-shadow-md flex gap-2">
          {course.course_bestseller && (
            <span className="bg-teal-600 border-[1px] border-white px-2 py-1 text-xs text-neutral-100 rounded-full font-bold ">
              Best Seller
            </span>
          )}
          {course.course_sale > 0 && (
            <span className="bg-purple-600 border-[1px] border-white px-2 py-1 text-xs text-neutral-100 rounded-full font-bold ">
              {course.course_sale}% OFF
            </span>
          )}
        </div>
        <Image
          src={course.course_thumbnail}
          height={600}
          width={300}
          className="rounded-2xl drop-shadow-lg mb-2"
          alt={course.course_name}
        />
      </Link>
      <ul>
        <li className="font-black text-lg">
          <Link href="/">{course.course_name}</Link>
        </li>
        <li className="flex flex-row items-center gap-2 mb-1">
          <CiUser />{" "}
          <Link className="text-teal-700" href="/">
            {course.course_author}
          </Link>
        </li>
        <li className="text-sm text-neutral-600">
          {course.course_description}
        </li>
        <li className="flex gap-1 items-center">
          {" "}
          {<Ratings rating={course.course_rating} />}{" "}
          {course.course_audience >= 1000
            ? `${(course.course_audience / 1000).toFixed(1)}K`
            : course.course_audience}
        </li>
        <li className=" text-lg flex gap-2 items-start">
          <strong className="font-bold">${course.course_priceAfter}</strong>
          <span className="line-through text-neutral-700 text-sm">
            ${course.course_priceBefore}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CourseItem;
