import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { TbHome } from "react-icons/tb";

const Breadcrumbs = () => {
  return (
    <Breadcrumb
      spacing="8px"
      separator={<BsChevronRight color="gray.500" />}
      className="w-full p-4 border border-x-0"
    >
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <TbHome />
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/">Buckets</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Contact</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
