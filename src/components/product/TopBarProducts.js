import React from "react";
import topdata from "../../data/TopData";

const TopBarProducts = () => {
  return (
    <div className="wrapper products_wrapper" style={{display:"flex",justifyContent:"center",alignItems:"center"}} >
      <div
        className="row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          gap:"6rem",
          marginTop:"10%",
          textAlign:"center",
          overflowX:"auto"
        }}
      >
        {topdata.map((item) => (
          <div key={item.id} className="col-md-2 product" style={{alignItems:"center"}}>
            <div className="rounded">
              <a href={item.href}>
                <img src={item.img} alt={item.title} style={{height:"100px",width:"100px"}} />
              </a>
            </div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBarProducts;
