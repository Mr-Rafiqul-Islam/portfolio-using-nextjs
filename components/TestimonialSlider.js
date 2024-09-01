// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
];

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination, Autoplay } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// icons
import {
  FaQuoteLeft,
} from "react-icons/fa";

// components 
import Image from "next/image";



const TestimonialSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      className="h-[400px]"
    >
     {testimonialData.map((person, index) => (
       <SwiperSlide key={index}>
        <div className="flex flex-col md:flex-row items-center gap-x-8 h-full px-16">
          {/* avatar, name, position */}
          <div className="w-full max-w-[300px] flex flex-col xl:justify-center relative mx-auto xl:mx-0">
            <div className="flex flex-col justify-center text-center">
              {/* image */}
              <div className="w-[100px] h-[100px] mb-2 mx-auto">
                <Image
                  src={person.image}
                  width={100}
                  height={100}
                  alt={''}
                  className="w-full h-full"
                />
              </div>
              {/* name */}
              <div className="text-lg">{person.name}</div>
              {/* position */}
              <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position} </div>
            </div>
          </div>
          {/* quotes & message */}
          <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] xl:pl-20 relative">
            {/* quotes icons */}
            <div className="mb-4"><FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto xl:mx-0" /></div>
            {/* messages */}
            <div className="xl:text-lg text-center md:text-left">
              {person.message}
            </div>
          </div>
        </div>
       </SwiperSlide>
     ))}
    </Swiper>
  );
};

export default TestimonialSlider;
