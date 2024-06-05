import { SectionTitle } from '../../../../Components/SectionTitle/SectionTitle';
import featuredImg from '../../../../assets/home/featured.jpg';
import './Featured.css';

export const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-10 my-20">
      <SectionTitle heading="Featured Item" subHeading="Check it Out" />

      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-35 py-20 px-8 md:px-36">
        <div className="md:w-1/2 md:mr-10">
          <img src={featuredImg} alt="Featured" className="w-full h-auto rounded-lg" />
        </div>
        <div className="md:w-1/2">
          <p className="text-xs mb-2">Aug 20, 2029</p>
          <h2 className="text-3xl font-bold uppercase mb-4">Where can I get some?</h2>
          <p className="text-base mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?
          </p>
          <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
        </div>
      </div>
    </div>
  );
};
