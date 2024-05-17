import { FC } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import ButtonLink from "../ButtonLink";
import { IoNewspaperOutline } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOndemandVideo } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";

const CourseProps: FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Make Uber Clone App</h1>
      <div className="flex gap-4">
        <p className="text-red-700 text-sm">Steven Arnatouvice</p>
        <p className="flex gap-1 items-center text-xs mb-4">
          <FaStar className="text-orange-500" /> 4.8{" "}
          <span className="text-neutral-600">(1,812 ratings)</span>
        </p>
      </div>
      {/* Course Playing and details */}
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Video Container */}
        <div className="w-full h-96 bg-teal-700 rounded-2xl"></div>
        {/* Purchase Details */}
        <div className="flex flex-col gap-2 mb-6 md:min-w-80">
          {/* Price Details */}
          <p className="text-xl font-semibold flex gap-2 items-start">
            US$22.40
            <span className="text-neutral-600 text-sm line-through">
              $30.13
            </span>
          </p>
          <p className="bg-purple-700 text-neutral-100 self-start px-2 py-1 text-xs font-semibold">
            20% OFF
          </p>
          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            <ButtonLink
              href="/"
              className="bg-teal-500 text-center text-teal-50"
            >
              Buy
            </ButtonLink>
            <ButtonLink
              href="/"
              className="flex items-center gap-1  border-2 border-neutral-400 justify-center text-neutral-700 font-semibold"
            >
              <FaHeart className="text-neutral-400" /> Wishlist
            </ButtonLink>
          </div>
          {/* Videos Details */}
          <ul className="flex flex-col gap-2">
            <li
              className="flex gap-2 items-center text-sm text-neutral-600
             font-semibold"
            >
              <IoNewspaperOutline className="text-lg" /> 22 sections
            </li>
            <li
              className="flex gap-2 items-center text-sm text-neutral-600
             font-semibold"
            >
              <SiGoogleclassroom className="text-lg" /> 152 Lectures
            </li>
            <li
              className="flex gap-2 items-center text-sm text-neutral-600
             font-semibold"
            >
              <MdOndemandVideo className="text-lg" /> 21h 33m total lengths
            </li>
            <li
              className="flex gap-2 items-center text-sm text-neutral-600
             font-semibold"
            >
              <AiFillSound className="text-lg" /> English
            </li>
          </ul>
        </div>
      </div>
      {/* Review and sugestion section */}
      <div className="flex flex-col gap-6">{/* Review Section */}</div>
    </div>
  );
};
export default CourseProps;
