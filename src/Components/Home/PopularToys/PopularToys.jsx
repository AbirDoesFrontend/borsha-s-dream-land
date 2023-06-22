import "./PopularToys.css";

const PopularToys = () => {
  return (
    <div className="flex justify-center p-5 banner">
      <div className="flex flex-col justify-center text-center ml-5 text-black">
        <h2 className="text-5xl font-semibold">
          Our Popular and Best Selling Toys
        </h2>
        <div className="toy-details flex justify-center gap-5 mt-10 mb-10">
          <h4 className="border border-[#ff7979] rounded p-4 text-4xl">
            5.4m <br />
            <span className="text-2xl"><small>Toys Sell</small></span>
          </h4>
          <h4 className="border border-[#ff7979] rounded p-4 text-4xl">
            1.5m <br />
            <span className="text-2xl"><small>Active Users</small></span>
          </h4>
        </div>
        <button className="btn btn-primary text-white">Explore More</button>
      </div>
    </div>
  );
};

export default PopularToys;
