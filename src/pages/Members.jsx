import { Swiper, SwiperSlide } from "swiper/react";
import { memberData } from "../data";
import MemberList from "../components/MemberList";
import { useState } from "react";
import "../css/member.css";

export default function Customers() {
  let [list] = useState(memberData);
  return (
    <section className="sec5">
      <div className="_inner mw">
        <div className="heading">
          <h2>
            What customers say about
            <br /> GREEMIND?
          </h2>
        </div>
        <div className="listCon">
          <Swiper navigation={true} spaceBetween={50} slidesPerView={"auto"}>
            {list.map((memberList) => {
              return (
                <SwiperSlide key={memberList.id}>
                  <MemberList memberList={memberList} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
