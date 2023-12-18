import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../components/ProductCard";
import "../css/bestsell.css";
import "../css/card.css";

export default function BestSelling({ data }) {
  let [list] = useState(data);
  return (
    <section className="sec2">
      <div className="_inner mw">
        <div className="headline">
          <h2>Best Selling Plants</h2>
          <p>Easiest way to healthy life by buying your favorite plants </p>
          <Link to="/" className="more">
            more
          </Link>
        </div>
        <div className="listCon">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={1}
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
          >
            {list.map((cardList) => {
              return (
                <SwiperSlide key={cardList.id}>
                  <ProductCard cardList={cardList} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
