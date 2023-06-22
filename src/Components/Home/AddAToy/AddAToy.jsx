import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../../Provider/AuthProvider';
import useTitle from '../../../hooks/useTitle';

const AddAToy = () => {

  useTitle('Add A Toy')

  const { user } = useContext(AuthContext)

  const handleAddToy = event => {
    event.preventDefault();

    const form = event.target;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const toyName = form.toyName.value;
    const toyPictureUrl = form.toyPictureUrl.value;
    const toyPrice = form.toyPrice.value;
    const toyRating = form.toyRating.value;
    const toyQuantity = form.toyQuantity.value;
    const toyDescription = form.toyDescription.value;
    const toyCategory = form.toyCategory.value;

    const toyInfo = {
        seller : sellerName,
        seller_email : sellerEmail,
        name : toyName,
        price : toyPrice,
        img : toyPictureUrl,
        rating : toyRating,
        quantity : toyQuantity,
        description : toyDescription,
        category : toyCategory
    }

    console.log(toyInfo)

    fetch('https://toy-marketplace-server-iota.vercel.app/addtoys' , {
      method : 'POST',
      headers : {
        'content-type' : 'application/json',
      },
      body : JSON.stringify(toyInfo)
    })
    .then(res => res.json())
    .then(data => {
      if(data.insertedId){
        Swal.fire(
          'Toy Added',
          'Add more to earn more',
          'success'
        )
      }
    })

    form.reset();
  };

  return (
    <div>
      <h2 className="text-center uppercase text-4xl mt-20 mb-20">
        Be a seller and add your own toys
      </h2>
      <form className="m-20" onSubmit={handleAddToy}>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Seller Name"
            defaultValue={user?.displayName}
            name="sellerName"
            className="w-1/4 m-2 p-2 rounded text-black"
          />
          <input
            type="email"
            placeholder="Seller Email"
            name="sellerEmail"
            className="w-1/4 m-2 p-2 rounded text-black"
            defaultValue={user?.email}
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Toy Name"
            name="toyName"
            className="w-1/4 m-2 p-2 rounded text-black"
          />
          <input
            type="text"
            placeholder="Toy Picture URL"
            name="toyPictureUrl"
            className="w-1/4 m-2 p-2 rounded text-black"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Toy Price"
            name="toyPrice"
            className="w-1/2 m-2 p-2 rounded text-black"
          />
          <input
            type="text"
            placeholder="Toy Rating"
            name="toyRating"
            className="w-1/2 m-2 p-2 rounded text-black"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Toy Category"
            name="toyCategory"
            className="w-1/2 m-2 p-2 rounded text-black"
          />
          <input
            type="text"
            placeholder="Toy Quantity"
            name="toyQuantity"
            className="w-1/2 m-2 p-2 rounded text-black"
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Toy Description"
            name="toyDescription"
            className="w-1/2 m-2 p-2 rounded text-black"
          />
        </div>
        <div className="text-center mt-10">
          <input
            type="submit"
            value="Add Toy"
            className="btn btn-primary text-white"
          />
        </div>
      </form>
    </div>
  );
};

export default AddAToy;
