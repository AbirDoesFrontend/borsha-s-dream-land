import logo from "../../assets/logo.jpg";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
      <div>
        <div>
          <img src={logo} className="w-[100px] h-auto rounded" />
        </div>
        <p className="font-bold">
          Borsha&apos;s Dream Land <br />
          Sharing happiness since 2023
        </p>
        <p className="font-semibold">Cell : 01721860683</p>
        <address className="font-semibold">17/07 , D-block , Mirpur-12 , Dhaka-1216</address>
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/AbirWebDev" target="blank">
            <button className="btn btn-circle">
              <ImFacebook />
            </button>
          </a>
          <a href="https://www.facebook.com/AbirWebDev" target="blank">
            <button className="btn btn-circle">
              <ImInstagram />
            </button>
          </a>
          <a href="https://www.facebook.com/AbirWebDev" target="blank">
            <button className="btn btn-circle">
              <ImTwitter />
            </button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
