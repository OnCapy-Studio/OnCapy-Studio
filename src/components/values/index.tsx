import Img1 from "assets/img/distintivo 3.svg";
import Img2 from "assets/img/igualdade 1.svg";
import Img3 from "assets/img/chapeu-de-graduacao 1.svg";
import "./style.css";


function Values() {
  return (
    <>
      <div className="values-container" id="values">
        <div className="values-title">
          <h1>Mission and Values</h1>
        </div>

        <div className="values-card">
          <img src={Img3} alt=""></img>
          <h1>VALORIZATION OF EDUCATION</h1>
          <p>
          We promote education and offer solutions to achieve academic excellence and personal fulfillment.
          </p>
        </div>

        <div className="values-card">
          <img src={Img2} alt=""></img>
          <h1>TRANSPARENCY AND ETHICS</h1>
          <p>
          We value transparency and ethics in our actions, establishing relationships of trust with our customers, partners and employees.
          </p>
        </div>

        <div className="values-card">
          <img src={Img1} alt=""></img>
          <h1>INNOVATION AND QUALITY</h1>
          <p>
          We invest in technology and continuous improvement to offer innovative, high-quality solutions that meet the needs of our customers efficiently.
          </p>
        </div>
      </div>
    </>
  );
}

export default Values;
