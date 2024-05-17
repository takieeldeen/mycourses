import { FC } from "react";
import SectionContent from "./SectionContent";
const content = [
  {
    title: "Introduction to the Course",
    content: [
      {
        type: "video",
        name: "Welcome to the course",
        length: 227,
        previewable: true,
      },
      {
        type: "video",
        name: "What will you learn in this course",
        length: 567,
        previewable: true,
      },
      {
        type: "video",
        name: "Who is this course for",
        length: 296,
        previewable: false,
      },
      {
        type: "file",
        name: "Who is this course for",
        length: 0,
        previewable: false,
      },
    ],
  },
  {
    title: "Introduction to Backend Engineering",
    content: [
      {
        type: "video",
        name: "Welcome to the course",
        length: 227,
        previewable: true,
      },
      {
        type: "video",
        name: "What will you learn in this course",
        length: 567,
        previewable: true,
      },
      {
        type: "video",
        name: "Who is this course for",
        length: 296,
        previewable: false,
      },
      {
        type: "file",
        name: "Who is this course for",
        length: 0,
        previewable: false,
      },
    ],
  },
  {
    title: "Introduction to the Basics of http",
    content: [
      {
        type: "video",
        name: "Welcome to the course",
        length: 227,
        previewable: true,
      },
      {
        type: "video",
        name: "What will you learn in this course",
        length: 567,
        previewable: true,
      },
      {
        type: "video",
        name: "Who is this course for",
        length: 296,
        previewable: false,
      },
      {
        type: "file",
        name: "Who is this course for",
        length: 0,
        previewable: false,
      },
    ],
  },
];
const CourseContent: FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-neutral-800 mb-2">
        Course Content
      </h3>
      <ul className="bg-neutral-200 p-2 rounded-2xl mb-8">
        {content.map((section, index) => (
          <SectionContent key={index} section={section} sectionNo={index} />
        ))}
      </ul>
    </div>
  );
};

export default CourseContent;
