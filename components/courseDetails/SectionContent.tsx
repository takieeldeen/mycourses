"use client";
import { formatDuration } from "@/utils/helpers";
import Link from "next/link";
import { FC, useState } from "react";
import { FaChevronRight, FaFile, FaPlayCircle } from "react-icons/fa";

interface SectionProps {
  sectionNo: number;
  section: {
    title: string;
    content: {
      type: string;
      name: string;
      length: number;
      previewable: boolean;
    }[];
  };
}
const SectionContent: FC<SectionProps> = ({ section, sectionNo }) => {
  const [isExpanded, setIsExpanded] = useState(sectionNo === 0 ? true : false);
  const sectionDuration = section.content.reduce(
    (acc, cur) => acc + cur.length,
    0
  );
  return (
    <li onClick={() => setIsExpanded(!isExpanded)} className="cursor-pointer">
      <div className="flex items-center justify-between py-2 px-1">
        <strong className="flex flex-col">
          Chapter {sectionNo + 1} : {section.title}
          <span className="text-sm text-neutral-700">
            {section.content.length} Videos ({formatDuration(sectionDuration)})
          </span>
        </strong>
        <button onClick={() => setIsExpanded(!isExpanded)}>
          <FaChevronRight
            className={`transition all duration-300 ${
              isExpanded === true ? "rotate-90" : ""
            }`}
          />
        </button>
      </div>
      {isExpanded && (
        <ul className="p-3 text-sm">
          {section.content.map((lecture, index) => (
            <li key={index} className="flex justify-between">
              <p className="text-neutral-700 p-2 flex flex-col">
                {lecture.name}
                <span className="text-xs font-semibold flex items-center gap-1">
                  {lecture.type === "file" ? <FaFile /> : <FaPlayCircle />}
                  {formatDuration(lecture.length)}
                </span>
              </p>
              {lecture.previewable && (
                <Link href="/" className="text-teal-800 underline">
                  Preview
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SectionContent;
