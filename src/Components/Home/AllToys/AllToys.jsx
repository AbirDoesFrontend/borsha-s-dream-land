import { useEffect, useState } from "react";
import ToyRow from "./ToyRow";
import useTitle from "../../../hooks/useTitle.js";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [toySearch, setToySearch] = useState('')

  useEffect(() => {
    fetch("https://toy-marketplace-server-iota.vercel.app/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  useTitle("All Toys");

  const handleSearch = () => {
    fetch(`https://toy-marketplace-server-iota.vercel.app/search?search=${toySearch}`)
    .then(res => res.json())
    .then((data) => setToySearch(data));
  }
  

  return (
    <div>
      <h2 className="text-center text-4xl uppercase">All Toys</h2>
      <div className="flex justify-center mt-10 mb-10">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
              onChange={(event) => setToySearch(event.target.value)}
            />
            <button className="btn btn-square" onClick={handleSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Image</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToyRow key={toy._id} toy={toy} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
