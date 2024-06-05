
import { Helmet } from 'react-helmet-async';
import { Cover } from '../../pages/Shared/Cover/Cover';
import menuImg from '../../assets/menu/pizza-bg.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'
import { useMenu } from '../../hooks/useMenu';
import { SectionTitle } from "../../Components/SectionTitle/SectionTitle/";

import { MenuCatagory } from '../MenuCatagory/MenuCatagory';


export const Menu = () => {
  const [menu]=useMenu();
  const desserts=menu.filter(item=>item.category==='dessert')
  const soup=menu.filter(item=>item.category==='soup')
  const salad=menu.filter(item=>item.category==='salad')
  const pizza=menu.filter(item=>item.category==='pizza')
  const offered=menu.filter(item=>item.category==='offered')


  return (
    <div>
      <Helmet>
        <title>Pakwaan Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"/>
   <SectionTitle subHeading='Do not miss' heading="Today's Offer">

   </SectionTitle>
   {/* offfered */}
   <MenuCatagory items={offered}></MenuCatagory>
   {/* desserts */}
   <MenuCatagory items={desserts} title={"dessert"} img={dessertImg}></MenuCatagory>
   <MenuCatagory items={pizza} title={"pizza"} img={pizzaImg}></MenuCatagory>
   <MenuCatagory items={salad} title={"salad"} img={saladImg}></MenuCatagory>
   <MenuCatagory items={soup} title={"soup"} img={soupImg}></MenuCatagory>

    </div>
  );
};
