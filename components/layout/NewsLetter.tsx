import Image from "next/image";
import { FC } from "react";

const NewsLetter: FC = () => {
  return (
    <section className="my-4 px-4 py-6 bg-blue-600 rounded-xl flex flex-col items-center gap-4 md:flex-row md:justify-between md:px-24 md:py-16 relative">
      <div className="text-neutral-100 relative z-10">
        <h3 className="text-2xl font-bold md:text-3xl">
          Join and Get amazing discount
        </h3>
        <p className="text-neutral-300">
          What are you waiting for join our platform newsLetter to get the
          latest discounts
        </p>
      </div>
      <form className="flex gap-1 relative z-10">
        <input
          type="email"
          placeholder="Email Address"
          className="py-1 px-4 bg-neutral-100/50 placeholder:text-neutral-800 text-neutral-800 outline-none focus:outline-none"
        />
        <button className="bg-teal-500 text-neutral-100 px-2 py-1 hover:bg-teal-700 transition-all duration-300">
          Subscribe
        </button>
      </form>
      <div className="absolute bottom-0 right-0  h-full w-1/2 md:w-1/4 drop-shadow-lg">
        <Image src="/svg/home/newsLetter_pattern.svg" fill alt="Pattern" />
      </div>
    </section>
  );
};

export default NewsLetter;
