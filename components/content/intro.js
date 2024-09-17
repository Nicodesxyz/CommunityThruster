import Particules from "../particules";
import Button from "../button";
import Image from "next/image";

const Intro = () => {
  return (
    <section className="section-intro ">
      <div className="intro-container flex  align-center just-center">
        <div className="intro-text-container flex-col">
          <div className="flex align-center just-center ">
            <Image src="/Logo.png" width={50} height={50} alt="logo" />
            <h1 className="burial logo-font">THRUST APP COMMUNITY</h1>
          </div>

          <div className="sub-text flex-col align-center just-center fade">
            <h2 className="maintitle burial fade ">
              ALL IN ONE DEFI APP <br /> BUILT
              <span className="gradient-text"> BY TITANS</span>
            </h2>
            <p className="">
              Explore diverse liquidity pools that offer ample opportunities for
              yield and asset growth. Thruster DeFi, viewed from the
              user`&apos;`s perspective, enables seamless access to
              opportunities with the community tool.
            </p>

            <div className="flex gap-20 fade-3">
              <Button text="Launch App" link="/" target="_blank" />
              <Button text="Explore" link="#features" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-line">
        <Image
          src="/lightbeam.svg"
          width={1300}
          height={1300}
          alt="background_image"
        />
      </div>
      <Particules />
    </section>
  );
};

export default Intro;
