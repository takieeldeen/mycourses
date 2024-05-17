import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const suggested = {
  imageUrl: "/img/course_details/suggested.png",
  type: "Webinar",
  link: "/",
  instructor: "Ana Curvosa",
  title: "Masterclass in Design,Thinking, Innovation & Creativity",
};

const Suggested: FC = () => {
  return (
    <Link
      href="/"
      className="bg-teal-700 h-96 md:h-[34rem] w-full rounded-lg relative  overflow-hidden md:max-w-80"
    >
      <div className="absolute bg-gradient-to-t from-neutral-900/90 to-neutral-800/50 w-full h-full z-10"></div>
      <Image
        src={suggested.imageUrl}
        alt={`${suggested.title} ${suggested.type} Image`}
        fill
        className="object-cover "
      />
      <div className="absolute bottom-4 p-4 z-20 flex flex-col gap-2 items-start">
        <span className="uppercase text-xs font-semibold text-neutral-100 bg-teal-600 p-1 ">
          {suggested.type}
        </span>
        <span className="text-neutral-100 text-lg font-light">
          {suggested.instructor}
        </span>
        <span className="text-xl font-bold text-neutral-100">
          {suggested.title}
        </span>
      </div>
    </Link>
  );
};

export default Suggested;
