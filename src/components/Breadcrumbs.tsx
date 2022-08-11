import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { TbHome } from "react-icons/tb";
import { useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const paths = useLocation().pathname.split("/");
  return (
    <Breadcrumb
      spacing="8px"
      separator={<BsChevronRight color="gray.500" />}
      className="w-full h-16 p-4 border border-x-0 flex items-center justify-start"
    >
      <BreadcrumbItem>
        <TbHome />
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">BUCKETS</BreadcrumbLink>
      </BreadcrumbItem>

      {paths.map((path, index) => {
        if (index === 0) return <></>;
        return (
          <BreadcrumbItem>
            <BreadcrumbLink href={paths.slice(paths.length - index).join("/")}>
              {path.toUpperCase()}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
      {/* 
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Buckets</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Contact</BreadcrumbLink>
      </BreadcrumbItem> */}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
