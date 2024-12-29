import React from "react";
import MenuCard from "../Shared/MenuCard";
import Cover from "../Shared/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ item, img, title, subtitle }) => {
  return (
    <div className="my-6">
      {title && <Cover img={img} title={title} subtitle={subtitle}></Cover>}
      <div className="w-3/4 mx-auto mt-10">
        <div className="grid md:grid-cols-2 gap-10 my-5">
          {item?.map((item) => (
            <MenuCard item={item}></MenuCard>
          ))}
        </div>
        <div className="text-center">
          {" "}
         <Link to={`/order/${title}`}>
         <button className="btn  btn-outline border-0 border-b-4">
            Order Now
          </button>{" "}</Link>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
