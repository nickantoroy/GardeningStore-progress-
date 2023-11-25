/* eslint-disable react/prop-types */
import "./Card.css";
function Card({iurl,name,desc,price}) {
  return (
    <div className="card">
      <img src={iurl} alt="" />
      <div className="card-content">
        <h4>{name}</h4>
        <p>{desc}</p>
        <h4>{price}</h4>
      </div>
    </div>
  );
}

export default Card;
