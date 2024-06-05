import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/home/01.jpg";
import img2 from "../../../assets/home/02.jpg";
import img3 from "../../../assets/home/03.png";
import img4 from "../../../assets/home/04.jpg";
import img5 from "../../../assets/home/05.png";
import img6 from "../../../assets/home/06.png";

export const Banner = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-8">
      <Carousel 
        showThumbs={false} 
        showStatus={false} 
        infiniteLoop 
        autoPlay 
        interval={3000} 
        transitionTime={500}
        className="shadow-lg rounded-lg overflow-hidden"
        // Adjust the height of the carousel slides here
        // Example: You can set the height to 400px
        // height={400}
      >
        <div>
          <img src={img1} alt="Slide 1" className="object-cover h-96 w-full" />
        </div>
        <div>
          <img src={img2} alt="Slide 2" className="object-cover h-96 w-full" />
        </div>
        <div>
          <img src={img3} alt="Slide 3" className="object-cover h-96 w-full" />
        </div>
        <div>
          <img src={img5} alt="Slide 4" className="object-cover h-96 w-full" />
        </div>
        <div>
          <img src={img6} alt="Slide 5" className="object-cover h-96 w-full" />
        </div>
        <div>
          <img src={img4} alt="Slide 6" className="object-cover h-96 w-full" />
        </div>
      </Carousel>
    </div>
  );
};
