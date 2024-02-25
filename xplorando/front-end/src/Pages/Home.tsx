import React from "react";
import Breadcrumb from "../Components/Breadcrumb"
import { useLocation } from "react-router-dom";
import { BreadcrumbItem } from "../types";

export function Home() {
  const { pathname } = useLocation();
  
  // Split the pathname and remove the first empty string if the path starts with '/'
  const paths = pathname.split('/').filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = paths.map((path, index) => {
    // Reconstruct the path up to this part of the URL
    const url = `/${paths.slice(0, index + 1).join('/')}`; //Capitalize the first letter and replace dashes with spaces
    const title = path.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());

    return { path: url, title };
  });
  return <div>Home<Breadcrumb crumbs={breadcrumbs}/>
  </div>;
}
