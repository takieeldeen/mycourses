"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

const BreadCrumbs: FC = () => {
  const pathName = usePathname();
  const pathArr = pathName.split("/").splice(1);
  console.log(pathArr);
  return (
    <ul className="flex gap-1 text-sm text-neutral-800 mb-1">
      {pathArr.map((path, index) => (
        <li key={index}>
          <Link href={`/${path}`}>{`/${path}`}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumbs;
