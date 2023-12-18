import { Link } from "react-router-dom";
import AboutList from "../components/AboutList";
import "../css/about.css";
export default function AboutUs() {
  return (
    <section className="sec3">
      <div className="_inner mw">
        <div className="headling">
          <h2>AboutUs</h2>
          <p>Easiest way to healthy life by buying your favorite plants </p>
          <Link to="/" className="more">
            more
          </Link>
        </div>
        <AboutList
          img={"sec3_icon1.svg"}
          title={"Large Assortment"}
          desc={
            "we offer many different types of products with fewer variations in each category."
          }
        />
        <AboutList
          img={"sec3_icon2.svg"}
          title={"Fast & Free Shipping"}
          desc={
            "4-day or less delivery time, free shipping and an expedited delivery option."
          }
        />
        <AboutList
          img={"sec3_icon3.svg"}
          title={"24/7 Support"}
          desc={
            "answers to any business related inquiry 2 4 /7 and in real-time."
          }
        />
      </div>
    </section>
  );
}
