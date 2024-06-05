import { useEffect, useState } from "react"
import { SectionTitle } from "../../../Components/SectionTitle/SectionTitle"
import { MenuItem } from "../../Shared/MenuItem/MenuItem"
import {useMenu  } from "../../../hooks/useMenu";


export const PopularMenu = () => {
const [menu]=useMenu();
const popular=menu.filter(item=>item.category==='popular')







  
  return (
    <div className="mb-12">
        <SectionTitle
        heading="From Our menu"
        subHeading="Popular Item" >
    
        </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">

{        popular.map(item => 
          
            <MenuItem key={item._id} item={item}  >
            </MenuItem>)
            }
           
           

            </div>
        






    </div>
  )
}
