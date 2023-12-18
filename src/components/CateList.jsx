import { Link } from "react-router-dom";
export default function CateList({ cateList }) {
  return (
    <div className="cate">
      <div className="imgCon">
        <img src={`${process.env.PUBLIC_URL}/img/${cateList.cImg}`} alt={cateList.cName} />
      </div>
      <div className="desc">
        <p className="cateName">{cateList.cName}</p>
        <p className="cateDesc">{cateList.cDesc}</p>
        <Link to="/" className="more">
          Explore
        </Link>
      </div>
    </div>
  );
}
