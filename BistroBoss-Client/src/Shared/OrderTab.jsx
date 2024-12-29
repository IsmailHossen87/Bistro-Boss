import React from 'react';
import FoodCard from '../Components/FoodCard';

const OrderTab = ({category}) => {
    return (
        <div className="grid md:grid-cols-3 gap-4 mt-6">
                   {
                       category?.map(sala => <FoodCard item={sala}></FoodCard>)
                   }
                   </div>
    );
};

export default OrderTab;