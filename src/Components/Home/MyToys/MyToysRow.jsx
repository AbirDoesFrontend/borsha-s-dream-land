import Swal from "sweetalert2";

const MyToysRow = ({ toy, handleDelete }) => {
  const { img, seller, name, category, price, quantity, _id } = toy;

  const handleUpdate = (event) => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const updatedToyInfo = {
      price: price,
      quantity: quantity,
      description: description,
    };

    const url = `https://toy-marketplace-server-iota.vercel.app/toys/${_id}`;

    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount > 0){
          Swal.fire(
            'Toy Upated',
            'Add more to earn more',
            'success'
          )
        }
      });

    form.reset();
  };

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
        <button
          className="mr-2 btn btn-primary text-white"
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
        <label className="ml-2 btn btn-primary text-white" htmlFor="my-modal-6">
          Update
        </label>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h2 className="text-center text-2xl mt-10 mb-10">
              Update Your Toy
            </h2>
            <form onSubmit={handleUpdate}>
              <div className="p-5">
                <input
                  type="text"
                  placeholder="Price"
                  className="p-2 rounded mr-5 w-1/2 text-black"
                  name="price"
                />
                <input
                  type="text"
                  placeholder="Available Quantity"
                  className="p-2 rounded w-1/2 text-black"
                  name="quantity"
                />
              </div>
              <div className="p-5 text-center">
                <input
                  type="text"
                  placeholder="Description"
                  className="p-2 rounded w-3/4 text-black"
                  name="description"
                />
              </div>
              <div className="flex justify-center">
                <input
                  type="submit"
                  className="btn btn-primary text-white mr-5"
                />
                <label htmlFor="my-modal-6" className="btn">
                  Close
                </label>
              </div>
            </form>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default MyToysRow;
