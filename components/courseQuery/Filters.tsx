import { FC } from "react";
import { FaChevronRight } from "react-icons/fa";
import FilterItem from "./FilterItem";
const filters: { [key: string]: { label: string; number: number }[] } = {
  categories: [
    {
      label: "Design",
      number: 320,
    },
    {
      label: "Programming",
      number: 520,
    },
    {
      label: "Business and Marketing",
      number: 360,
    },
    {
      label: "Music and Film",
      number: 320,
    },
    {
      label: "Photo and Video",
      number: 320,
    },
    {
      label: "Writing",
      number: 320,
    },
  ],
  durations: [
    {
      label: "0-2 Hours",
      number: 590,
    },
    {
      label: "3-6 Hours",
      number: 5420,
    },
    {
      label: "6-12 Hours",
      number: 6000,
    },
    {
      label: "12+ Hours",
      number: 9500,
    },
  ],
  ratings: [
    {
      label: "4.5 & up",
      number: 6000,
    },
    {
      label: "4 & up",
      number: 8000,
    },
    {
      label: "3.5 & up",
      number: 9500,
    },
  ],
  levels: [
    {
      label: "All Levels",
      number: 16800,
    },
    {
      label: "Beginner",
      number: 4200,
    },
    {
      label: "Intermediate",
      number: 6300,
    },
    {
      label: "Advanced",
      number: 6500,
    },
  ],
  languages: [
    {
      label: "Arabic",
      number: 6500,
    },
    {
      label: "English",
      number: 4300,
    },
    {
      label: "French",
      number: 3000,
    },
  ],
};
const Filters: FC = () => {
  return (
    <aside className="md:w-80 md:px-2 md:py-8">
      <div className="flex justify-between items-center py-2 border-b-2 border-neutral-300">
        <strong className="text-neutral-700">Filters</strong>
        <button className="text-teal-700 font-semibold">Clear</button>
      </div>
      <form action="">
        <ul className="flex flex-col gap-4">
          {Object.keys(filters).map((filterKey: string, index: number) => (
            <FilterItem
              key={index}
              filterKey={filterKey}
              filterArr={filters[filterKey]}
            />
          ))}
        </ul>
      </form>
    </aside>
  );
};
export default Filters;
