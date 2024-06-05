import React from 'react'
import { MenuItem } from "../../pages/Shared/MenuItem/MenuItem";
import { Cover } from '../../pages/Shared/Cover/Cover';
import { Link } from 'react-router-dom';


export const MenuCatagory = ({items,title,img}) => {

 
  return (
    <div className='pt-8'>
    {title && <Cover img={img} title={title}/>}
   <div className='grid md:grid-cols-2 gap-10 my-20'>
   {        items.map(item => 
          
          <MenuItem key={item._id} item={item}  >
          </MenuItem>)
          }
   </div>
   <Link to={`/order/${title}`}>   <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
  
      </div>
  )
}
