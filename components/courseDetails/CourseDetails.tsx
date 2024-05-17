"use client";
import { FC, useState } from "react";
import CourseDescription from "./CourseDescriptions";
import CourseContent from "./CourseContent";
import CourseReviews from "./CourseReviews";
import Tabs from "../Tabs";
import Suggested from "./Suggested";

const tabs = [
  {
    name: "Content",
    element: <CourseContent />,
  },
  {
    name: "Reviews",
    element: <CourseReviews />,
  },
  {
    name: "Description",
    element: <CourseDescription />,
  },
];

const CourseDetails: FC = () => {
  return (
    <div className="flex flex-col gap-4 mb-8 md:flex-row md:items-start md:py-12">
      <Tabs tabs={tabs} />
      <Suggested />
    </div>
  );
};
export default CourseDetails;
