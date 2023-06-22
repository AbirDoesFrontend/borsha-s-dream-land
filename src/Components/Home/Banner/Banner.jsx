import './Banner.css'

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 banner-home">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h2 className="text-9xl font-bold banner-title">PREMIUM TOYS</h2>
          <h2 className="text-5xl font-semibold">FOR OUR KIDS</h2>
          <p className="py-6 text-2xl">
            Explore the most exciting sports car toys🔥
          </p>
          <button className="btn btn-primary text-white">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
