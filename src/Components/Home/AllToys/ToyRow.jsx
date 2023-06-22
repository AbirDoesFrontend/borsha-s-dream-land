import { Link } from "react-router-dom";

const ToyRow = ({ toy }) => {
  const { img , seller , name , category , price , quantity , _id} = toy;

  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {img && <img src={img} alt="Avatar" />}
          </div>
        </div>
      </td>
      <td>{seller}</td>
      <td>{name}</td>
      <td className="uppercase">{category}</td>
      <td>{price}</td>
      <td>{quantity ? quantity : 12}</td>
      <td>
        <Link className="btn btn-primary text-white" to={`/toys/${_id}`}>View Detais</Link>
      </td>
    </tr>
  );
};

export default ToyRow;
