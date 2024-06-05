import { Banner } from "../Banner/Banner"
import { PopularMenu } from "../PopularMenu/PopularMenu"
import { Catagory } from "./Catagory/Catagory"
import { Featured } from "./Featured/Featured"
import { Testimonials } from "./Testimonials/Testimonials"
import { Helmet } from 'react-helmet-async';

export const Home = () => {
  return (
  <>
   <Helmet>

<title>Home</title>
</Helmet>
  <Banner></Banner>
  <Catagory></Catagory>
  <PopularMenu></PopularMenu>
  <Featured></Featured>
  <Testimonials></Testimonials>
  
  </>
  )
}
