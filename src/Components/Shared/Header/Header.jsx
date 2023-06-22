import { useContext } from "react";
import logo from "../../assets/logo.jpg";
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import Swal from 'sweetalert2'

const Header = () => {
  const { user , logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    logOut()
    .then(() => {
      Swal.fire(
        'Logout Successful',
        'Be with our dream world!',
        'success'
      )
    })
  }

  return (
    <div className="nav_section p-3">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="flex items-center nav-logo">
            <img src={logo} className="w-[100px] h-auto rounded logo" />
            <a className="btn btn-ghost normal-case text-xl logo-name">
              Borsha&apos;s Dream Land
            </a>
          </div>
        </div>
        <div className="navbar-center middle-nav">
          <ul className="menu menu-horizontal px-1 navbar-menu">
            <li className="navlink-custom-bg">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="navlink-custom-bg">
              <NavLink
                to="/alltoys"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                All Toys
              </NavLink>
            </li>
            {
              user ? <li className="navlink-custom-bg">
              <NavLink
                to="/mytoys"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                My Toys
              </NavLink>
            </li> : ''
            }
            {
              user ? <li className="navlink-custom-bg">
              <NavLink
                to="/addtoy"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Add A Toy
              </NavLink>
            </li> : ''
            }
            <li className="navlink-custom-bg">
              <NavLink
                to="/blog"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end nav-right-side">
          {user ? (
            <div className="flex items-center">
              <div
                className="w-16 mask mask-squircle"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
              >
                <img src={user?.photoURL} />
              </div>
              <div className="ml-2 border border-white p-2 rounded-lg logout-btn">
                <button onClick={handleLogOut}>Logout</button>
              </div>
            </div>
          ) : (
            <Link to="/login" className="border border-white p-2 rounded-lg logout-btn">Login</Link>
          )}
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default Header;
