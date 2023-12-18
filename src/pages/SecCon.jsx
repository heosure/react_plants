import SecBanner from "./SecBanner"; //sec1
import BestSelling from "./BestSelling"; //sec2
import AboutUs from "./AboutUs"; //sec3
import Categories from "./Categories"; //sec4
import Members from "./Members"; //sec5
import "swiper/css";
import "swiper/css/navigation";

export default function SecCon({ data }) {
  return (
    <div className="secCon">
      <SecBanner />
      <BestSelling data={data} />
      <AboutUs />
      <Categories />
      <Members />
    </div>
  );
}
