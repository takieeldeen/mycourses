import Link from "next/link";
import { cloneElement, FC, ReactNode } from "react";

interface MyProps {
  href: string;
  children: ReactNode;
  className?: string;
  options?: { [prop: string]: any }[];
}
const ButtonLink: FC<MyProps> = ({
  href = "/",
  children,
  className,
  ...options
}) => {
  let finalClassName: string =
    " px-4 py-2 rounded-xl  transition-all duration-300 ";
  if (className) className += finalClassName;
  console.log(finalClassName);
  return cloneElement(
    <Link href={href} className={className}>
      {children}
    </Link>,
    options ?? {}
  );
};

export default ButtonLink;
