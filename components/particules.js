import Spline from "@splinetool/react-spline/next";

const Particules = () => {
  return (
    <div>
      <div className="spline-bg left-anim fade-anim">
        <Spline scene="https://prod.spline.design/dGiTq6a3Pnc7K3NQ/scene.splinecode" />
      </div>

      <div className="spline-bg right-anim fade-anim">
        <Spline scene="https://prod.spline.design/dGiTq6a3Pnc7K3NQ/scene.splinecode" />
      </div>
    </div>
  );
};

export default Particules;
