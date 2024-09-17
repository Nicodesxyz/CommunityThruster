import Image from "next/image";

const Features = () => {
  return (
    <section>
      <div className="flex-col align-center ">
        <h3 className="sectiontitle gradient-text-strokes">WHY THRUST APP</h3>
        <p>
          This app embodies the collective efforts of DAO members dedicated to
          enhancing the DeFi experience on Thruster. Leveraging real-time data
          streams, it provides users with a comprehensive view of liquidity
          pools and opportunities. A powerful, all-in-one tool built by the
          community, for the community.
        </p>
      </div>

      <div>
        <div className="flex-col align-center just-center">
          <Image src="/icon-features-1.svg" width={24} height={24} />
        </div>
      </div>
    </section>
  );
};

export default Features;
