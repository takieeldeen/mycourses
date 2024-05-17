"use client";
import { FC, useState } from "react";

interface TabsProps {
  tabs: {
    name: string;
    element: JSX.Element;
  }[];
}

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <div className="flex-col md:w-full">
      <ul className="flex items-center gap-3 border-b-2 mb-4 ">
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`transition-all duration-300 border-b-2 py-2  ${
              activeTab.name === tab.name
                ? "border-b-2 border-teal-700"
                : "border-transparent"
            }`}
          >
            <button>{tab.name}</button>
          </li>
        ))}
      </ul>
      {activeTab.element}
    </div>
  );
};

export default Tabs;
