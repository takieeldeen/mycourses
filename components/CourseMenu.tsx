"use client";
import { FC } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import CourseItem from "./CourseItem";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CoursesProps {
  courses: {
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
  }[];
}

const CourseMenu: FC<CoursesProps> = ({ courses }) => {
  return (
    <>
      <section className="mb-4">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          <CourseMenuNavigation />
          {courses.map((course, index) => (
            <SwiperSlide key={index} style={{ width: "18rem" }}>
              <div className=" flex flex-col items-center flex-shrink-0">
                <CourseItem course={course} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

const CourseMenuNavigation: FC = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-end gap-4 text-teal-700">
      <button
        onClick={() => swiper.slidePrev()}
        className="p-2 border-2 rounded-full border-teal-700 hover:bg-teal-700 hover:text-teal-50 transition-all duration-300"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="p-2 border-2 rounded-full border-teal-700 hover:bg-teal-700 hover:text-teal-50 transition-all duration-300"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default CourseMenu;
