import React from 'react';

const FoodCard = ({item}) => {
    const {image,name,recipe,price} =item
    return (
        <div className="card bg-base-100  shadow-xl">
        <figure>
          <img
           className='w-full'
            src={image}
            alt="Shoes" />
        </figure>
        <p className='bg-black text-white absolute right-4 px-4 rounded-md top-4'>${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
          <button className="btn  btn-outline border-0 bg-slate-300 border-b-4 border-orange-400">
            some more
          </button>{" "}
          </div>
        </div>
      </div>
    );
};

export default FoodCard;