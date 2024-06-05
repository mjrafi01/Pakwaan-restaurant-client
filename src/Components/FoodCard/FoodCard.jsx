import { useAuth } from "../../hooks/useAuth";
import {useNavigate,useLocation} from "react-router-dom"
import Swal from 'sweetalert2';
import axios from 'axios';
import { useAxiosSecure } from "../../hooks/useAxiosSecure";
import { useCart } from "../../hooks/useCart";

export const FoodCard = ({item}) => {
    const { name, image, recipe ,price,_id} = item;
    const axiosSecure= useAxiosSecure()
    const {user}=useAuth()
    const navigate=useNavigate()
    const location=useLocation()
    const[,refetch]=useCart()
    const handleAddtoCart=()=>{
      if (user && user.email) {
        
        const cartItem={
          menuId:_id,
          email:user.email,
          name,image,price
        }

        axiosSecure.post('/carts',cartItem)
        .then(res=>{
          console.log(res.data)
          if (res.data.insertedId) {
         
Swal.fire({
  position: "top-end",
  icon: "success",
  title: `${name} Added to cart`,
  showConfirmButton: false,
  timer: 1500
});

//refetch
refetch()
          }
        })




      }
      else{
        Swal.fire({
          title: "You are not login ",
          text: "Please Login",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, Login!"
        }).then((result) => {
          if (result.isConfirmed) {
          navigate('/login',{state:{from:location}})
          }
        });
      }
     

    }
  return (
<div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="" /></figure>
  <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
  <div className="card-body flex flex-col items-center ">
<h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions justify-end">
      <button 
      onClick={ handleAddtoCart}
      
      className="btn btn-primary">Add to cart</button>
    </div>
  </div>
</div>
  )
}
