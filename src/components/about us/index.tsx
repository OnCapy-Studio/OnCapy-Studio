import Img2 from "assets/img/img2.svg";
import "./style.css";

function AboutUs() {
  return (
    <div className="aboutUs-container" id="aboutUs">
      <div className="aboutUs-img">
        <img src={Img2} alt="Img2"></img>
      </div>

      <div className="aboutUs-content">
        <h1>About Us</h1>
        <p>
          We are a team of six young people passionate about technology and
          innovation, who together joined forces to create a tool that would
          change the lives of several professionals. We believe that software
          development is an art and a science – the art of creating exceptional
          digital experiences and the science of ensuring those experiences are
          efficient. We combine our unique skills to create solutions that not
          only work well, but also look amazing.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
