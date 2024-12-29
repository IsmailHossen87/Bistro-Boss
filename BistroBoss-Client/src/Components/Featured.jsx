import React from 'react';
import Title from './Title';
import feature from '../assets/home/featured.jpg'
import './AllCss/featureImage.css'

const Featured = () => {
    return (
        <div className='feature-image text-white bg-fixed'>
           <Title heading='Check it Out' subtitle='Featured Item'></Title>
           <div className='md:flex bg-slate-400 bg-opacity-40 items-center justify-center gap-5 px-36 py-16 '>
            <div>
                <img className='w-[900px]' src={feature} alt="" />
            </div>
            <div>
                <p>Aug ,2028</p>
                <p className='uppercase'>Where can i get Some</p>  
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi sequi, amet possimus odio maiores dicta, tempora consectetur dolore ex error est nihil repellendus porro sed quos recusandae provident reprehenderit iusto. Nisi laboriosam dolorem, officiis, nostrum aut voluptate consequatur sequi rem amet recusandae illo.</p>    
                <button className='btn btn-outline border-0 border-b-4'>some more</button>          
            </div>
           </div>
        </div>
    );
};

export default Featured;