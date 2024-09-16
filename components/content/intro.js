import React from "react";
import Particules from "../particules";
import Image from "next/image";

const Intro = () => {
  return (
    <section>
      <div className="intro-container flex align-center just-center">
        <div className="intro-text-container flex-col">
          <div className="flex align-center just-center">
            <Image src="/Logo.png" width={50} height={50} />
            <h1 className="burial logo-font">THRUSTER COMMUNITY</h1>
          </div>

          <div className="sub-text flex-col align-center just-center">
            <h2 className="maintitle burial">
              ALL IN ONE DEFI APP <br /> BUILT
              <span className="gradient-text"> BY TITANS</span>
            </h2>
            <p>
              Experience robust market activity with high trading volume driving
              liquidity across the platform. Significant gas spent reflects
              active network usage, ensuring seamless transactions. Explore
              diverse liquidity pools offering ample opportunities for yield and
              asset growth.
            </p>
          </div>
        </div>
      </div>
      <Particules />
    </section>
  );
};

export default Intro;
