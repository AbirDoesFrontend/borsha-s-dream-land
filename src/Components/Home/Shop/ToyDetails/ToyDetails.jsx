import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const [toyDetails, setToyDetails] = useState([]);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    fetch(`http://localhost:5000/toys/${id}`)
      .then((res) => res.json())
      .then((data) => setToyDetails(data));
  }, [id]);

  const { name , img , seller , seller_email , price , rating , description , quantity} = toyDetails;

  return (
    <div className="m-20 flex justify-center">
      <div>
        <img
          src={img}
          alt={name}
          className="rounded"
        />
      </div>
      <div className="ml-10">
        <h2 className="text-3xl uppercase font-semibold border-b-4">{name}</h2>
        <p className="text-2xl mt-2">Seller : {seller}</p>
        <p className="text-2xl mt-2">Email : {seller_email}</p>
        <p className="text-2xl mt-2">Price : ${price}</p>
        <p className="text-2xl mt-2">Rating : {rating}</p>
        <p className="text-2xl mt-2">Available Quantity : {quantity ? quantity : 12}</p>
        <p className="text-2xl mt-2">About : {description}</p>
      </div>
    </div>
  );
};

export default ToyDetails;
