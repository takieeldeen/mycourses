import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const instructors = [
  {
    name: "Alexandar Bastian",
    job: "Expert Mobile Engineer",
    img: "/img/home/instructor-1.png",
  },
  {
    name: "Labie Carthaline",
    job: "Marketing Specialist",
    img: "/img/home/instructor-2.png",
  },
  {
    name: "Jonathan Doe",
    job: "Financial Strategiest",
    img: "/img/home/instructor-3.png",
  },
  {
    name: "Kitani Sarsvati",
    job: "Film maker and Director",
    img: "/img/home/instructor-4.png",
  },
];

const PopularInstructor: FC = () => {
  return (
    <section className="py-5">
      <h2 className="text-2xl font-black">Popular Instructors</h2>
      <p className="text-neutral-600 mb-4 font-semibold">
        Here are the most popular Instructor on our platform
      </p>
      <ul className="py-2 flex flex-wrap justify-center gap-4">
        {instructors.map((instructor, index) => (
          <Link href="/" key={index}>
            <li className="h-96 w-72 rounded-xl relative overflow-hidden">
              <Image
                src={instructor.img}
                fill
                alt={instructor.name}
                className="object-cover "
              />
              <div className="absolute h-full w-full bg-gradient-to-t from-neutral-950/70 via-neutral-950/15 via-50% to-neutral-950/0 flex flex-col justify-end py-5">
                <p className="flex flex-col items-center text-neutral-100 font-bold text-lg">
                  {instructor.name}
                  <span className="text-base font-normal">
                    {instructor.job}
                  </span>
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default PopularInstructor;
