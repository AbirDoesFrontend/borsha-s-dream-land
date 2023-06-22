import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { Link , useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

import loginImg from '../../assets/login.jpg';
import useTitle from "../../../hooks/useTitle";


const Login = () => {

  useTitle('Login')

  const { googleSignIn , userSingIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        Swal.fire(
            'Login Successful',
            `Welcome ${user?.displayName}`,
            'success'
        )
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${error.message}`,
        });
      });
  };

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userSingIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        Swal.fire(
          'Login Successful',
          `Welcome ${loggedUser?.displayName}`,
          'success'
      )
      navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${error.message}`,
        });
      });

    form.reset();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
            <img src={loginImg} className="w-[500px] h-auto rounded"/>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>
            <form onSubmit={handleLogIn}>
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
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" value="Login" type="submit"/>
              </div>
              <label className="label">
                  <small>New to Borsha&apos;s Dream Land?<Link to="/signup" className='text-[#F87272]'> Sign Up</Link></small>
             </label>
            </form>
            <div className="divider">OR</div>
            <div className="text-center">
              <button
                className="btn btn-circle btn-outline"
                onClick={handleGoogleLogIn}
              >
                <FcGoogle />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
