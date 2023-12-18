export default function Member({ memberList }) {
  return (
    <div className="member">
      <p className="opinion">{memberList.opinion}</p>
      <img src={`${process.env.PUBLIC_URL}/img/${memberList.img}`} alt={memberList.name} />
      <div className="memberInfo">
        <p className="cateName">{memberList.name}</p>
        <p className="cateDesc">{memberList.job}</p>
      </div>
      <span className="score">{memberList.score}</span>
    </div>
  );
}
