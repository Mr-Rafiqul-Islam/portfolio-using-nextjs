// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import  { Pagination } from 'swiper/modules';

// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
// icons
import {
  BsArrowRight,
} from "react-icons/bs";

// components 
import Image from "next/image";


const WorkSlider = () => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      className="h-[280px] sm:h-[480px]"
    >
     {workSlides.slides.map((slide, index) => (
       <SwiperSlide key={index}>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
          {slide.images.map((image, index) => (
            <div className="relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
              <div className="overflow-hidden flex items-center justify-center relative">
                <Image
                  src={image.path}
                  width={500}
                  height={300}
                  alt={''}
                  className="w-full h-full"
                />
                {/* overlay gradient */}
                
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700">
                </div>
                {/* title part */}
                <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-16 transition-all duration-300 xl:group-hover:-translate-y-20">
                  <div className="flex items-center justify-center gap-x-2 text-[13px] tracking-[0.2em]"> 
                    {/* title part one */}
                    <div className="delay-100"> LIVE</div>
                    {/* title part two */}
                    <div className="delay-150 translate-y-[500%] group-hover:translate-y-0 transition-all duration-300">PROJECT</div>
                    {/* icons */}
                    <div className="delay-200 text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300"><BsArrowRight /></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
       </SwiperSlide>
     ))}
    </Swiper>
  );
};

export default WorkSlider;
