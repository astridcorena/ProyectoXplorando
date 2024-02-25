
export interface BreadcrumbItem {
    title: string;
    path: string;
  }
  
  // Define a type for the component props
 export interface BreadcrumbProps {
    crumbs: BreadcrumbItem[];
  }
  