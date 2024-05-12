"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Image from "next/image";
import ButtonLink from "../ButtonLink";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FC, useEffect, useState } from "react";

export default function HeroSlider(): JSX.Element {
  const HeroSlides = [
    {
      src: "/img/home/heroSlide-1.png",
      author: "Jessica Wong",
      authorImg: "/img/home/Jessica Wong_slide.png",
      role: "Photographer",
      awwards: "Winner Photo 2017 Awwards",
      education: "Joined Klevr since 2006",
      link: "/photography",
      category: "Photography",
    },
    {
      src: "/img/home/heroSlide-1.png",
      author: "Jessica Wong",
      authorImg: "/img/home/Jessica Wong_slide.pnh",
      role: "Photographer",
      awwards: "Winner Photo 2017 Awwards",
      education: "Joined Klevr since 2006",
      link: "/photography",
      category: "Photography",
    },
  ];
  return (
    <div className="w-4/5 md:w-[95%] mx-auto h-96">
      <Swiper className="mySwiper h-full ">
        {HeroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="rounded-3xl overflow-hidden">
            <div className=" h-full relative md:flex">
              {/* Banner */}
              <div className=" bg-teal-400 absolute md:relative z-10 w-full md:w-auto bottom-0 p-6 md:pl-16 min-h-24 md:flex md:flex-col md:justify-center md:items-start">
                <strong className="text-3xl md:text-5xl font-extrabold text-neutral-50 flex flex-col gap-2 mb-4">
                  Learn something new everyday
                  <span className="text-sm font-normal md:text-base">
                    Become professional and ready to join the world
                  </span>
                </strong>
                <ButtonLink
                  href="/"
                  className="bg-white text-teal-500 font-bold px-5 py-3 hover:bg-neutral-200 z-20"
                >
                  Explore Photography
                </ButtonLink>
                <Image
                  fill
                  src="/svg/home/slider_pattern.svg"
                  className="select-none"
                  alt="pattern"
                />
              </div>
              {/* Image */}
              <div className="w-full h-full relative">
                <Image
                  src={slide.src}
                  fill
                  alt={"Image for Jessica Wong"}
                  className="object-fit"
                />
                <div className="hidden md:flex md:justify-end md:gap-16 absolute  w-full py-3 px-6 bottom-0 bg-neutral-950/50">
                  {/* author */}
                  <div className="flex gap-3 items-center ">
                    <div className="h-16 w-16 relative rounded-full overflow-hidden border-4 border-neutral-200">
                      <Image
                        src={slide.authorImg}
                        fill
                        alt={slide.author}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-row gap-16">
                      <p className="flex flex-col text-white font-bold">
                        Jessica Wong{" "}
                        <span className="text-sm font-normal">
                          Photographer
                        </span>
                      </p>
                      <p className="flex flex-col items-end text-neutral-100">
                        Winner Photo 2017 Awwards{" "}
                        <span>Joined Klevr since 2006</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SliderControls />
        <div className="bg-red-500 absolute -bottom-20 -translate-y-1/2 h-12 w-12 z-20">
          <SliderPagination />
        </div>
      </Swiper>
    </div>
  );
}

const SliderControls: FC = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute z-10 w-full   flex items-center justify-between top-1/2 -translate-y-1/2">
      <button
        className="h-16 w-8 bg-neutral-100/50 hover:bg-neutral-100/70"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <FaChevronLeft className="text-3xl text-neutral-700" />
      </button>
      <button
        className="h-16 w-8 bg-neutral-100/50 hover:bg-neutral-100/70"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <FaChevronRight className="text-3xl text-neutral-700" />
      </button>
    </div>
  );
};

const SliderPagination: FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiper = useSwiper();
  const slides = swiper.slides;

  function navigateTo(slide: number): void {
    swiper.slideTo(slide);
  }

  useEffect(() => {
    setActiveSlide(swiper.activeIndex);
  }, [swiper]);

  return (
    <ul>
      {slides.map((slide: HTMLElement, index: number) => (
        <li
          key={index}
          onClick={() => navigateTo(index)}
          className={`h-4 w-4 bg-cyan-500 rounded-full`}
        ></li>
      ))}
    </ul>
  );
};
