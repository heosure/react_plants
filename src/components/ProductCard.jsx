export default function ProductCard({ cardList }) {
  return (
    <div className="card">
      <div className="imgCon">
        <img src={`/img/${cardList.pImg}`} alt={cardList.pName}></img>
      </div>
      <div className="desc">
        <p className="pName">{cardList.pName}</p>
        <p className="pPrice">{cardList.pPrice}</p>
      </div>
    </div>
  );
}
