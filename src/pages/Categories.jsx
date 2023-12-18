import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import CateList from "../components/CateList";
import { useState } from "react";
import { cateData } from "../data";
import "../css/cate.css";

export default function Categories() {
  let [list] = useState(cateData);
  return (
    <section className="sec4">
      <div className="_inner mw">
        <div className="headling">
          <h2>Categories</h2>
          <p>Find what you are looking for</p>
        </div>
        <div className="listCon">
          <Swiper
            navigation={true}
            modules={[Autoplay, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            loop={true}
          >
            {list.map((cateList) => {
              return (
                <SwiperSlide key={cateList.id}>
                  <CateList cateList={cateList} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
