"use client";
import { FC, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";

// // import required modules
// import { FreeMode, Pagination } from "swiper/modules";

const recommendations = [
  "All Recommendations",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "UI Design",
  "Web Programming",
  "Mobile Programming",
  "Backend Development",
  "Vue JS",
];

const Recommendations: FC = () => {
  const [selected, setSelected] = useState("All Recommendations");
  return (
    <section className="py-12">
      <ul className="flex flex-wrap gap-1 ">
        {recommendations.map((category: string, index: number) => (
          <li
            onClick={() => setSelected(category)}
            key={index}
            className={`px-2 py-2  transition-all duration-300 border-2 rounded-2xl select-none ${
              selected === category
                ? "border-2 border-teal-700  text-teal-700"
                : "text-neutral-500 flex-shrink-0 border-transparent cursor-pointer "
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Recommendations;
