import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BreadcrumbItem } from '../types';

const Breadcrumb: React.FC = () => {
  const { pathname } = useLocation();
  const paths = pathname.split('/').filter(Boolean);

  const crumbs: BreadcrumbItem[] = paths.map((path, index) => {
    const url = `/${paths.slice(0, index + 1).join('/')}`;
    const title = path.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
    return { path: url, title };
  });

  const homeCrumb: BreadcrumbItem = { title: 'Home', path: '/' };
  crumbs.unshift(homeCrumb);

  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center flex-col">
      <div>
      Ultimo elemento
      </div>
      <nav aria-label="breadcrumb">
        <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
          {crumbs.map((crumb, i) => (
            <li
              key={i}
              className={`${
                i === crumbs.length - 1 ? 'text-gray-500' : 'text-indigo-600'
              } px-2`}
            >
              {i === crumbs.length - 1 ? (
                <span>{crumb.title}</span>
              ) : (
                <Link to={crumb.path} className="text-blue-600 hover:text-blue-700">
                  {crumb.title}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;


// Usage example:
// <Breadcrumb crumbs={[
//   { title: 'Home', path: '/' },
//   { title: 'Product', path: '/product' },
//   { title: 'Ushuaia Dream', path: '/product/ushuaia-dream' }
// ]} />