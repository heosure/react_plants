import "../css/banner.css";
export default function SecBanner() {
  return (
    <section className="sec1">
      <div className="_inner mw">
        <h2>
          Buy your <br />
          dream plants
        </h2>
        <div className="desc">
          <p>
            <span>50+</span>
            <span>Plant Species</span>
          </p>
          <p>
            <span>100+</span>
            <span>Customers</span>
          </p>
        </div>
        <div className="inputBox">
          <input placeholder="What are you looking for?"></input>
          <button onClick={() => {}}>search</button>
        </div>
        <div className="imgCon">
          <img src="./img/sec1_img1.png" alt=""></img>
        </div>
      </div>
    </section>
  );
}
