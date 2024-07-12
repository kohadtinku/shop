
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './breadcrumbs.css';

const BreadCrumbs = ({ crumbs }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Don't show breadcrumbs on the home page
  if (currentPath === '/') {
    return null;
  }else if(currentPath ==='/all-products'){
    return null
  }

  const filteredCrumbs = crumbs.filter(crumb => {
    const crumbPath = crumb.to.replace(':productId', '').replace(':searchTerm', '');
    return currentPath.startsWith(crumbPath);
  });

  return (
    <nav aria-label="Breadcrumb" style={{padding:"10px"}}>
      <ol className="breadcrumb">
        {filteredCrumbs.map((crumb, index) => (
          <li key={index} className="breadcrumb-item">
            {index === filteredCrumbs.length - 1 ? (
              <span>{crumb.label}</span>
            ) : (
              <Link to={crumb.to}>{crumb.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
