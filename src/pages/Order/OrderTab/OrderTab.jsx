import { FoodCard } from "../../../Components/FoodCard/FoodCard"

// eslint-disable-next-line react/prop-types
export const OrderTab = ({item}) => {
  return (
<div className='grid md:grid-cols-3 gap-4'>
{
    item.map(item=> <FoodCard key={item._id} item={item}></FoodCard>)
}
</div>
  )
}
