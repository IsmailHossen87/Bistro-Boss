import React from 'react';

const Title = ({heading,subtitle}) => {
    return (
        <div className='md:w-4/12 w-4/5 mx-auto text-center my-4 space-y-3'>
           <p className='text-yellow-600 text-xl'>---{heading}---</p> 
           <h2 className='text-3xl font-bold border-y-4 uppercase'>{subtitle}</h2>
        </div>
    );
};

export default Title;