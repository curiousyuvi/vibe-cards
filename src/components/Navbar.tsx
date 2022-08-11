import { Heading } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TbBucket, TbHistory } from "react-icons/tb";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  const isHistoryPage = useLocation().pathname === "/history";
  return (
    <div className="w-full flex rounded-xl border border-black/10  items-center overflow-hidden">
      <NavbarButton
        href="/"
        title="BUCKETS"
        icon={<TbBucket />}
        isHistoryPage={isHistoryPage}
      />
      <NavbarButton
        href="/history"
        title="HISTORY"
        icon={<TbHistory />}
        isHistoryPage={isHistoryPage}
      />
    </div>
  );
};

export default Navbar;
