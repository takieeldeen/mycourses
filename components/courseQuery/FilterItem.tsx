"use client";
import { FC, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

interface FilterItemProps {
  filterKey: string;
  filterArr: {
    number: number;
    label: string;
  }[];
}

const FilterItem: FC<FilterItemProps> = ({ filterKey, filterArr }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <li>
      <div className="flex justify-between mb-2">
        <p
          className="font-semibold text-lg  text-neutral-800 capitalize"
          onClick={() => setCollapsed(!collapsed)}
        >
          {filterKey}
        </p>
        <button type="button" onClick={() => setCollapsed(!collapsed)}>
          <FaChevronRight
            className={`text-sm ${
              collapsed ? "rotate-0" : "rotate-90"
            } transition-all duration-300`}
          />
        </button>
      </div>
      {!collapsed && (
        <ul>
          {filterArr.map((filter, index: number) => (
            <li key={index} className="flex gap-2 text-sm text-neutral-700">
              <input
                type="checkbox"
                name={filterKey}
                value={Object.keys(filter)[0]}
                id={`${filterKey}-${index}`}
              />
              <label
                htmlFor={`${filterKey}-${index}`}
              >{`${filter["label"]} (${filter["number"]})`}</label>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default FilterItem;
