import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb, index, array) => {
      const path = `/${array.slice(0, index + 1).join("/")}`;
      return (
        <div className="crumb" key={crumb} style={{color:"black"}}>
          <Link to={path} style={{color:"black"}}>{crumb}</Link>
          {index < array.length - 1 && <span> / </span>}
        </div>
      );
    });

  return (
    <div className="breadcrumbs">
      {crumbs}
    </div>
  );
};

export default BreadCrumbs;
