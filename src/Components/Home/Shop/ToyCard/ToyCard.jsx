import Rating from "react-rating";
import { BsStarHalf , BsFillStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import './ToyCard.css'

const ToyCard = ({ carDetails }) => {
  const { _id , name, img, rating, price } = carDetails;

  return (
    <div className="card bg-base-100 shadow-xl border border-[#ff7979] toycard">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl uppercase">{name}</h2>
        <p className="text-2xl ">Price : $ {price}</p>
        <Rating
          initialRating={rating}
          readonly
          emptySymbol={
             <BsStarHalf />
          }
          fullSymbol={
            <BsFillStarFill />
          }
        />
        <div className="card-actions">
          <Link to={`/toys/${_id}`} className="btn btn-primary text-white">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
