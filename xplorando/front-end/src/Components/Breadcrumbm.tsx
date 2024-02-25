import React from 'react';
import { Link } from 'react-router-dom';
import { BreadcrumbProps } from '../types';

// Define a type for individual breadcrumb items


const Breadcrumb: React.FC<BreadcrumbProps> = ({ crumbs }) => {
  if (crumbs.length <= 1) {
    // Don't render a breadcrumb for single-item arrays or empty arrays.
    return null;
  }

  console.log (crumbs, 'aaaaaa')

  return (
    <nav aria-label="breadcrumb">
      aa
      <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
        {crumbs.map((crumb, i) => (
          <li
            key={i}
            className={`${
              i === crumbs.length - 1 ? 'text-gray-500' : 'text-indigo-600'
            } px-2`}
          >
            {i === crumbs.length - 1 ? (
              // The last crumb is not a link
              <span>{crumb.title}</span>
            ) : (
              // The rest of the crumbs are links
              <Link to={crumb.path} className="text-blue-600 hover:text-blue-700">
                {crumb.title}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

// Usage example:
// <Breadcrumb crumbs={[
//   { title: 'Home', path: '/' },
//   { title: 'Product', path: '/product' },
//   { title: 'Ushuaia Dream', path: '/product/ushuaia-dream' }
// ]} />