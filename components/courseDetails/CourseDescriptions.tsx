import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaCheck, FaPlayCircle, FaStar, FaUsers } from "react-icons/fa";
import { IoRibbon } from "react-icons/io5";

const description = {
  objectives: [
    "Laravel Setup: Learn how to setup and configure Laravel.",
    "MVC Architecture: Understand Laravel's MVC design pattern.",
    "Routing: Master Laravel's critical routing system.",
    "Blade Templating: Use Laravel's Blade for managing views.",
    "Eloquent ORM: Explore database management with Eloquent ORM.",
    "Database Seeding: Learn migrations and seeding in Laravel.",
    "RESTful APIs: Develop APIs handling JSON requests/responses.",
  ],
  description:
    "As PHP 8 unfolds, Laravel is all set to redefine your perception of PHP altogether. It's like the Ruby on Rails of the PHP universe, and perhaps even superior. It's expressive, fun, fluent, easy to master, and a breeze to use. Both newcomers and seasoned professionals can't seem to get enough of it! Now, you have the opportunity to join this community of satisfied individuals who enjoy building things and earn while doing so.",
  instructor: {
    name: "Piotr Jura",
    students: 54326,
    rating: 4.6,
    reviews: 9253,
    courses: 9,
    img: "/img/course_details/instructor.jpg",
    brief:
      "Hey there, I'm Piotr Jura, and I've been tinkering with things since I was old enough to hold a screwdriver. I'm passionate about taking complex technology and breaking it down into bite-sized chunks that anyone can understand.",
  },
};

const CourseDescription: FC = () => {
  let studentsNumber;
  return (
    <ul className="flex flex-col gap-3">
      {/* Description */}
      <li>
        <h3 className="text-2xl font-bold text-neutral-800 mb-2">
          Description
        </h3>
        <p className="text-neutral-700 text-sm">{description.description}</p>
      </li>
      {/* Learning Objectives */}
      <li>
        <h3 className="text-2xl font-bold text-neutral-800 mb-2">
          What will you learn in this course
        </h3>
        <ul className="flex flex-col gap-3 px-4">
          {description.objectives.map((objective, index) => (
            <li
              key={index}
              className="flex gap-4 text-sm text-neutral-700 font-semibold "
            >
              <FaCheck />
              {objective}
            </li>
          ))}
        </ul>
      </li>
      {/* Instructor info */}
      <h3 className="text-2xl font-bold text-neutral-800">Instructor </h3>
      <Link href="/" className="text-xl underline text-teal-800">
        Piotr Jura | 50,000+ Students
      </Link>
      <div className="flex gap-4 items-center">
        <div className="w-24 h-24 rounded-full relative overflow-hidden">
          <Image
            className="object-fit"
            src={description.instructor.img}
            fill
            alt={`${description.instructor.name} Photo`}
          />
        </div>
        <ul className="text-sm text-neutral-700">
          <li className="flex items-center gap-2">
            <FaStar /> {description.instructor.rating} Instructor Rating
          </li>
          <li className="flex items-center gap-2">
            <IoRibbon /> {description.instructor.reviews} Reviews
          </li>
          <li className="flex items-center gap-2">
            <FaUsers /> {description.instructor.students} Students
          </li>
          <li className="flex items-center gap-2">
            <FaPlayCircle /> {description.instructor.students} Courses
          </li>
        </ul>
      </div>
      <p className="text-sm text-neutral-800 mb-4">
        {description.instructor.brief}
      </p>
    </ul>
  );
};

export default CourseDescription;
