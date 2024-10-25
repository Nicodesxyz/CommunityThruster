"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="features-section" id="features">
      <div className="features-content-container">
        <div className="flex-col just-center align-center features-content">
          <div className="flex-col align-center gap-20" data-aos="fade-down">
            <h3 className="maintitle gradient-text-strokes">
              WHY COMMUNITY TOOLS
            </h3>
            <p>
              This app will embody the collective efforts of DAO members
              dedicated to enhancing the DeFi experience on Thruster. Leveraging
              real-time data streams, it provides users with a comprehensive
              view of liquidity pools and opportunities. A powerful, all-in-one
              tool built by the community, for the community.
            </p>
          </div>
        </div>

        <div className="grid-container">
          <div className="align-center">
            <h3 className="sectiontitle gradient-text-strokes fade-2">
              FUTURE FEATURES
            </h3>
          </div>
          <div className="grid-feature">
            <div
              className="grid-child child-1 flex-col  just-center"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <h4 className="burial  text-center">LP Analyzer</h4>

              <div className="feature-p">
                <p className=" text-center">
                  Get easy insights into liquidity pools, track performance and
                  fees from a user-first view.
                </p>
              </div>
            </div>

            <div
              className="grid-child child-2 flex-col  just-center "
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h4 className="burial  text-center">Governance</h4>
              <div className="feature-p">
                <p className=" text-center">
                  Keep up with proposals and votes, staying updated on key
                  decisions.
                </p>
              </div>
            </div>

            <div
              className="grid-child child-3 flex-col just-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h4 className="burial text-center">Token Bubble Map</h4>

              <div className="feature-p">
                <p className=" text-center">
                  Visualize token movements and whale activities with a clear,
                  interactive map.
                </p>
              </div>
            </div>

            <div
              className="grid-child child-4 flex-col  just-center"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <h4 className="burial text-center">More Features</h4>

              <div className="feature-p">
                <p className=" text-center">
                  We&apos;ll add more features based on contributions and
                  community feedback!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="orbit-ring">
        <Image
          src="/orbitring.svg"
          width={600}
          height={600}
          alt="background_image"
        />
      </div>
    </section>
  );
};

export default Features;
