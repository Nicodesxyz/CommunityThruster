import Image from "next/image";
import Button from "../button";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container flex">
        <div className="footer-left-container">
          <div className="logo-container flex align-center just-center ">
            <Image src="/Logo.png" width={50} height={50} alt="logo" />
            <h1 className="burial logo-font">Thruster Community Tools</h1>
          </div>
          <div>
            <p className="copyright">2024 - By Titans </p>
          </div>
        </div>

        <div className="footer-right-container flex gap-20 align-center">
          <div className="social-container">
            <a target="_blank" href="https://github.com/ThrusterTitan">
              <Image src="/git.svg" width={40} height={40} alt="social-icon" />
            </a>
            <a target="_blank" href="https://x.com/ThrusterTitans">
              <Image src="/x.svg" width={40} height={40} alt="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
