import React from 'react';
import UseAuth from '../Hooks/UseAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseAxiosSecure from '../Hooks/UseAxiosSecure';
import axios from 'axios';

const FoodCard = ({item}) => {
    const {image,name,recipe,price} =item
    const {user}= UseAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = UseAxiosSecure()
    const handleClick = (item)=>{
      if(user && user.email){
        const cartItem = {
          menuId:item._id,
          user:user.email,
          image: image,
          name: name,
          price: price
        }
        axiosSecure.post('/carts',cartItem)
        .then(res=>{
          Swal.fire("Good job!", "You added to cart", "success");
        })
      }else{  
        Swal.fire({
          title: "You are not login?",
          text: "please login to add to card!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, login!"
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login' , {state:{from:location}})
          }
        });
      }}
    
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
          <button onClick={()=> handleClick(item)} className="btn  btn-outline border-0 bg-slate-300 border-b-4 border-orange-400">
            Add to cart
          </button>{" "}
          </div>
        </div>
      </div>
    );
  }

export default FoodCard;