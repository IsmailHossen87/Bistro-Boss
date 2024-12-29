import React from 'react';
import { Parallax } from 'react-parallax';

const Cover = ({img,title,subtitle}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div
        className="hero md:h-[600px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className=" md:w-2/4 mx-auto text-neutral-content text-center">
          <div className=" mx-auto">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5  uppercase">{subtitle}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
       
    );
};

export default Cover;