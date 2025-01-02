import useCard from '../../Hooks/useCard';
import { Link } from 'react-router-dom';
import { FaDeleteLeft } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import axios from 'axios';

const Cart = () => {
    const [cart,refetch,isLoading,isPending] = useCard()

    console.log('pending',isPending  , 'loading',isLoading)
    const {image ,name, price, user,_id} = cart;
    console.log(cart)
    const handleDelete = async(id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             axios.delete(`http://localhost:5000/carts/${id}`)
             Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
              refetch();
            }
          });
    }
 
    return (
        <div className='px-8'>
            <div className='flex justify-between py-5'>
                <div><h3 className='text-3xl font-bold mt-10'>Total Order : {cart.length}</h3></div>
                <div><h3 className='text-3xl font-bold pt-10'>Total Price : 
                    {cart.reduce((total,item)=> total + (item.price),0)}
                    </h3></div>
                <div><h3 className='text-3xl p-2 font-bold pt-10'>Pay</h3></div>

            </div>
          <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th>
                        No
                    </th>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Item Image</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span>Item Name</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span>Price</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200 '>
                 {
                  cart?.map((job,index) =>  
                  <tr key={job._id}>


                    <td>{index +1}</td>
                    {/* img */}
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      <img className='w-[80px] rounded-md' src={job.image} alt="" />
                    </td>
                    {/* name */}
                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      {job.name}
                    </td>

                    <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                      ${job.price}
                      {/* $500-$600 */}
                    </td>
                   


                    <td className='px-4 py-4 text-sm whitespace-nowrap'>
                      <div className='flex items-center gap-x-6'>
                        {/* delete */}
                        <button onClick={()=> handleDelete(job._id)} className='text-gray-500 transition-colors duration-200   hover:text-red-500 focus:outline-none'>
                          <FaDeleteLeft className='text-2xl'></FaDeleteLeft>
                        </button>
                      </div>
                    </td>
                  </tr>)
                 }
                </tbody>
              </table>
        </div>
    );
};

export default Cart;