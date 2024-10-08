// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
// icons
import {
  RxPencil2,
  RxDesktop,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { BsShop, BsWordpress } from "react-icons/bs";

// data
const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "Web Design",
    description: "Crafting visually appealing and user-friendly website designs tailored to your brand.",
  },
  {
    icon: <RxDesktop />,
    title: "Web Development",
    description: "Building responsive and high-performance websites with seamless functionality.",
  },
  {
    icon: <BsShop />,
    title: "E-commerce ",
    description: "Developing custom eCommerce platforms to streamline online sales and enhance UX.",
  },
  {
    icon: <BsWordpress />,
    title: "WordPress",
    description: "Designing and developing high-quality WordPress websites with custom features.",
  },
  {
    icon: <RxRocket />,
    title: "Software ",
    description: "Creating scalable and efficient software solutions tailored to your business needs.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      modules={[FreeMode, Pagination]}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((service, index) => (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icons */}
            <div className="text-4xl text-accent mb-4">{service.icon}</div>
            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{service.title}</div>
              <p className="max-w-[350px] leading-normal">
                {service.description}
              </p>
            </div>
            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
