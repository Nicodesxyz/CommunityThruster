import React from "react";
import Image from "next/image";
import Button from "../button";

const About = () => {
  return (
    <section className="about-section">
      <div className="warphole">
        <Image src="warphole.svg" width={650} height={650} />
      </div>
      <div className="z-5 flex-col align-center gap-20">
        <h3 className="maintitle gradient-text-strokes">ABOUT TITANS</h3>
        <p className="max-940 p-mobile">
          Thruster Titans is a vibrant community that has grown alongside the
          project, uniting top ambassadors dedicated to advancing every aspect
          of the ecosystem. Our team focuses on technical support, development,
          marketing, and building strategic partnerships to ensure ongoing
          growth and improvement. As the project continues to expand, we&apos;re
          always seeking skilled professionals to join our team and contribute
          to our success.
        </p>
      </div>

      <div className="z-5 flex-col align-center">
        <div className="board-container">
          <div className="align-center">
            <h3 className="sectiontitle gradient-text-strokes fade-2">
              WHY JOIN US ?
            </h3>
          </div>
          <div className="grid-feature">
            <div
              className="grid-child child-1 flex-col  align-center  just-center"
              data-aos="fade-up"
              data-aos-duration="400"
            >
              <Image
                src="https://cdn.thrustertitans.com/landing/phone.svg"
                width={80}
                height={80}
                alt="icon"
              />
              <h4 className="burial text-center">Work from Your Phone</h4>
              <p className="text-center">
                Start your web3 journey right from your phone!
              </p>
            </div>

            <div
              className="grid-child child-2 flex-col  align-center  just-center "
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Image
                src="https://cdn.thrustertitans.com/landing/web3.svg"
                width={80}
                height={80}
                alt="icon"
              />
              <h4 className="burial text-center">Learn Blockchain</h4>
              <p className="text-center">
                Explore the world of DeFi, NFTs, and more.
              </p>
            </div>

            <div
              className="grid-child child-3 flex-col align-center  just-center border-table"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <Image
                src="https://cdn.thrustertitans.com/landing/study.svg"
                width={80}
                height={80}
                alt="icon"
              />
              <h4 className="burial text-center">Gain Real Experience</h4>
              <p className="text-center">Work on a cutting-edge Web3 project</p>
            </div>

            <div
              className="grid-child child-4 flex-col align-center   just-center"
              data-aos="fade-up"
              data-aos-duration="1600"
            >
              <Image
                src="https://cdn.thrustertitans.com/landing/money.svg"
                width={80}
                height={80}
                alt="icon"
              />
              <h4 className="burial text-center">Earn as You Learn</h4>
              <p className="text-center">
                Contribute to Thruster and get rewarded.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="z-5 flex-col join-section">
        <div className="flex-col align-center join-section">
          <h3 className="sectiontitle gradient-text-strokes">
            HOW TO JOIN THE TITANS
          </h3>

          <h3 class="steptitle  fade-2">
            1. Choose Your Area: Select the field that interests you.
          </h3>
        </div>
        <div className="flex icon-field-container ">
          <div className="round-icon">
            <div>
              <Image
                src="https://cdn.thrustertitans.com/landing/community.svg"
                width={50}
                height={50}
                alt="icon"
              />
            </div>
            <h4 class="burial text-center">COMMUNITY </h4>
          </div>
          <div className="round-icon">
            <div>
              <Image
                src="https://cdn.thrustertitans.com/landing/governance.svg"
                width={50}
                height={50}
                alt="icon"
              />
            </div>
            <h4 class="burial text-center">GOVERNANCE</h4>
          </div>
          <div className="round-icon">
            <div>
              <Image
                src="https://cdn.thrustertitans.com/landing/dev.svg"
                width={50}
                height={50}
                alt="icon"
              />
            </div>
            <h4 class="burial text-center">WEB3 DEV</h4>
          </div>

          <div className="round-icon">
            <div>
              <Image
                src="https://cdn.thrustertitans.com/landing/ops.svg"
                width={50}
                height={50}
                alt="icon"
              />
            </div>
            <h4 class="burial text-center">OPERATIONS</h4>
          </div>
        </div>

        <h3 class="steptitle max-940  fade-2">2. Submit Your CV.</h3>

        <Button
          text="Apply Here"
          target="_blank"
          link="https://docs.google.com/forms/d/e/1FAIpQLSfg2vYEe6yTB_d2RhyKaSRqaRedsLTN3CLaaWEKVjX6po5zcg/viewform"
        />

        <h3 class="steptitle max-940  fade-2">
          3. Complete a Test Task: Show your skills with a trial assignment.
        </h3>

        <h3 class="steptitle max-940  fade-2">
          4. Become a Titan: After one month, if the Titans vote for you,
          you&apos;ll officially become one of us!
        </h3>
      </div>

      <div className="z-5 about-thruster flex-col">
        <h3 class="maintitle gradient-text-strokes">ABOUT THRUSTER</h3>
        <p className="max-940 p-mobile ">
          Thruster is the leading decentralized exchange (DEX) on the BLAST
          blockchain, serving as the primary liquidity hub and accounting for
          approximately 80% of the network's Total Value Locked (TVL). On
          Thruster, you can provide liquidity, earn fees by contributing to
          existing pools, or seamlessly swap any tokens on BLAST through a wide
          range of liquidity pools. You can also create your own pool with any
          token pair, customized to fit your project&apos;s needs.
        </p>
        <Button
          text="Start using Thruster"
          link="https://app.thruster.finance/ref/VYPE0F"
          target="_blank"
        />
      </div>
    </section>
  );
};

export default About;
