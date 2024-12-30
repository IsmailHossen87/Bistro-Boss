import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import menuImage from '../assets/menu/banner3.jpg'
import dissestImage from '../assets/menu/dessert-bg.jpeg'
import PizzaImage from '../assets/menu/pizza-bg.jpg'
import SoupImage from '../assets/menu/soup-bg.jpg'
import UseMenu from '../Hooks/UseMenu';
import Title from '../Components/Title';
import MenuCategory from '../Components/MenuCategory';


const Menu = () => {
    const {menu}= UseMenu()
    console.log(menu)
    const dissert = menu?.filter (diss => diss.category === 'dessert')
    const pizza = menu?.filter (diss => diss.category === 'pizza')
    const salad = menu?.filter (diss => diss.category === 'salad')
    const soup = menu?.filter (diss => diss.category === 'soup')
    const offered = menu?.filter (diss => diss.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>
            <Cover img={menuImage} title='Our Menu' subtitle='would you like to try a dish?'></Cover>
            {/* offeres */}
           <Title heading='Dont miss' subtitle='Todays Offer'></Title>
           <MenuCategory item={offered}></MenuCategory>
           {/* dissert */}
           <MenuCategory item={dissert} img={dissestImage} title='dessert' subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>
           {/* pizza */}
           <MenuCategory item={pizza} img={PizzaImage} title='pizza' subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>
           {/* soup */}
           <MenuCategory item={soup} img={SoupImage} title='soup' subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>
        </div>
    );
};

export default Menu;