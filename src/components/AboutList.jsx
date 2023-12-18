export default function AboutList({ img, title, desc }) {
  return (
    <div className="content">
      <div className="imgCon">
        <img src={`/img/${img}`} alt="아이콘"></img>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
