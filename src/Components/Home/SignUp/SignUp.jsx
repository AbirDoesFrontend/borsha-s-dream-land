import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import loginImg from "../../assets/login.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useLocation, useNavigate } from 'react-router-dom';
import useTitle from "../../../hooks/useTitle";

const SignUp = () => {

  useTitle('Sign Up')

  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Welcome to Borsha's Dream Land",
          showConfirmButton: false,
          timer: 1500,
        });
        updateUserData(createdUser , name , photoUrl)
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${error.message}`,
        });
      });

    const updateUserData = (user, name, photoUrl) => {
      updateProfile(user, {
        displayName: name,
        photoURL: photoUrl,
      })
      .then()
      .catch()
    };

    form.reset();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginImg} className="w-[500px] h-auto rounded" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="photoUrl"
                  name="photoUrl"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  value="Sign Up"
                  type="submit"
                />
              </div>
              <label className="label">
                <small>
                  Already have an account?
                  <Link to="/login" className="text-[#F87272]">
                    {" "}
                    Login
                  </Link>
                </small>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
