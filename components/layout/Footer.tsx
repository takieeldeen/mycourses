import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const categories = [
  "Web Programming",
  "Mobile Programming",
  "Java Beginner",
  "PHP Beginner",
  "Adobe illustrator",
  "Adobe Photoshop",
  "Design Logo",
  "Writing Course",
  "Photography",
  "Video Making",
];

const Footer: FC = () => {
  return (
    <footer className="bg-neutral-900 px-2 md:px-12 py-6 text-neutral-200 flex flex-col gap-2">
      <div className="self-center">
        <Image
          src="/img/home/logo-white.png"
          height={60}
          width={120}
          alt="MyCourse.io Logo"
        />
      </div>
      <ul className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {categories.map((category: string, index: number) => (
          <li key={index}>
            <Link href={`/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <div className="py-2 border-t-[1px] border-neutral-700 flex flex-col md:flex-row md:justify-between  items-center gap-3">
        <p>Copyright &copy; MyCourses.io 2024. All rights are Reserved</p>
        <ul className="flex gap-2 text-3xl">
          <li>
            <Link href="/">
              <FaLinkedin />
            </Link>
          </li>
          <li>
            <Link href="/">
              <FaGithub />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
