import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container flex">
        <div className="footer-left-container">
          <div className="flex align-center just-center ">
            <Image src="/Logo.png" width={50} height={50} alt="logo" />
            <h1 className="burial logo-font">Thruster Community Tools</h1>
          </div>
          <div>
            <p className="copyright">2024 - By Titans </p>
          </div>
        </div>

        <div className="footer-right-container flex gap-20 align-center">
          <div className="nav-container flex">
            <a>navlink1</a>
            <a>navlink2</a>
            <a>navlink3</a>
          </div>

          <div className="social-container">
            <a>
              <Image src="/git.svg" width={30} height={30} alt="social-icon" />
            </a>
            <a>
              <Image src="/x.svg" width={30} height={30} alt="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
