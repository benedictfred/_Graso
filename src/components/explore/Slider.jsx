import { ExploreCard } from "./Explore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css/bundle";
import "./Explore.css";
import { ExploreData } from "../../../data/ExploreData";

function Slider() {
  return (
    <div className="w-full hidden max-md:flex justify-center items-center max-w-[1200px] min-w-[400px]">
      <Swiper
        modules={[Navigation, Autoplay, Mousewheel]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        mousewheel={true}
      >
        {ExploreData.map((data) => (
          <SwiperSlide key={data.id}>
            <div className="w-full flex justify-center">
              <ExploreCard data={data} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;