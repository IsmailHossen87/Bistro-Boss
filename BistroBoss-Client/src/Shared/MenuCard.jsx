import React from 'react';

const MenuCard = ({item}) => {
    const {image,category,recipe,name,price} = item
    return (
        <div className='flex space-x-3'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[100px] ' src={image} alt="" />
            <div>
                <h1>{name}-----------------</h1>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>{price}</p>
        </div>
    );
};

export default MenuCard;