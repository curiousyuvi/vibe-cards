import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { RiHome4Fill, RiHome4Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const isHistory = location.pathname === "/history";
  const isHome = location.pathname === "/";
  const bucketName = useSelector((state: any) => state.buckets.bucket.name);
  const bucketID = useSelector((state: any) => state.buckets.bucket.id);

  return (
    <Breadcrumb
      spacing="8px"
      separator={<BsChevronRight color="gray.500" />}
      className="w-full h-16 p-4 border border-x-0 flex items-center justify-start"
    >
      <BreadcrumbItem>
        <Link className="group text-xl" to="/">
          <RiHome4Line className="group-hover:hidden" />
          <RiHome4Fill className="hidden group-hover:flex" />
        </Link>
      </BreadcrumbItem>
      {isHistory ? (
        <BreadcrumbItem>
          <Link className="hover:underline" to="/history">
            HISTORY
          </Link>
        </BreadcrumbItem>
      ) : (
        <BreadcrumbItem>
          <Link className="hover:underline" to="/">
            BUCKETS
          </Link>
        </BreadcrumbItem>
      )}
      {!isHome && !isHistory ? (
        <BreadcrumbItem>
          <Link className="hover:underline" to={`/${bucketID}`}>
            {bucketName.toUpperCase()}
          </Link>
        </BreadcrumbItem>
      ) : (
        <></>
      )}

      {/* {paths.map((path, index) => {
          if (index === 0) return <></>;
        return (
          <BreadcrumbItem>
            <Link
              className="hover:underline"
              to={paths.slice(paths.length - index).join("/")}
            >
              {path.toUpperCase()}
            </Link>
          </BreadcrumbItem>
        );
      })} */}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
