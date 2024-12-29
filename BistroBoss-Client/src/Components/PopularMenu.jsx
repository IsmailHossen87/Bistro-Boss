import React, { useEffect, useState } from 'react';
import Title from './Title';
import MenuCard from '../Shared/MenuCard';

const PopularMenu = () => {
    const [menu, setmenu] = useState([]);

useEffect(() => {
    fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const item = data.filter(item => item.category === 'popular');
            setmenu(item); 
        });
}, []);

console.log(menu);

    return (
        <div>
            <Title 
            heading='From Our Menu'
            subtitle='Popular Items'
            ></Title>
            <div className='grid md:grid-cols-2 gap-10 my-5'>
                {menu?.map (item => <MenuCard item={item}></MenuCard>)}
            </div>
          <div className='text-center'>  <button className='btn  btn-outline border-0 border-b-4'>some more</button>  </div> 
        </div>
    );
};

export default PopularMenu;