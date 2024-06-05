
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import  coverImg  from '../../../assets/shop/banner2.jpg';
import { Cover } from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useMenu } from '../../../hooks/useMenu';

import { OrderTab } from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
export const Order = () => {
    const categories=['salad','pizza','soup','dessert','drinks']
    const {category}=useParams()
    const initialIndex=categories.indexOf(category)
    const [tabIndex,setTabIndex]=useState(initialIndex);
    const [menu]=useMenu()
  
   
    const desserts=menu.filter(item=>item.category==='dessert')
    const soup=menu.filter(item=>item.category==='soup')
    const salad=menu.filter(item=>item.category==='salad')
    const pizza=menu.filter(item=>item.category==='pizza')
    const drinks=menu.filter(item=>item.category==='drinks')
  return (
    <div>
         <Helmet>
        <title>Pakwaan Order FOod</title>
      </Helmet>
        <Cover img={coverImg} title="Order Food"></Cover>
        <div role="tablist" className="tabs tabs-lifted">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
  <TabList>
    <Tab>Salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
<OrderTab item={salad}></OrderTab>


  </TabPanel>
  <TabPanel>
    <OrderTab item={pizza}></OrderTab>
    </TabPanel>
  
  <TabPanel> <OrderTab item={soup}></OrderTab></TabPanel>
  
  <TabPanel>  <OrderTab item={desserts}></OrderTab></TabPanel>
 
  <TabPanel>  <OrderTab item={drinks}></OrderTab></TabPanel>

</Tabs>
</div>
    </div>
  )
}
