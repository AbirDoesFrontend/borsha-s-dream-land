import logo from "../../assets/login.jpg";
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="flex justify-center items-center mt-10 mb-10">
      <div>
        <img src={logo} width={300} height={400} />
      </div>
      <div className="m-20 subscripe-part">
        <span className="footer-title text-3xl">Subscribe to our newsletter</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text text-2xl">Enter your email address</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
