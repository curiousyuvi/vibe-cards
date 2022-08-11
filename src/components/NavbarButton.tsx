import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

const NavbarButton = ({
  isHistoryPage,
  title,
  icon,
  href,
}: {
  isHistoryPage: boolean;
  title: string;
  icon: ReactNode;
  href: string;
}) => {
  return (
    <Link
      to={href}
      className={`w-full p-4 flex items-center justify-center duration-300 ${
        isHistoryPage && href === "/history"
          ? "bg-gradient-to-r from-emerald-200 to-teal-200"
          : "hover:bg-emerald-50"
      } ${
        !isHistoryPage && href !== "/history"
          ? "bg-gradient-to-r from-emerald-200 to-teal-200"
          : "hover:bg-emerald-50"
      }`}
    >
      {icon}
      <span className="mx-1" />
      <span>{title}</span>
    </Link>
  );
};

export default NavbarButton;
