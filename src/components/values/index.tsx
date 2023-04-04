import Img1 from "assets/img/distintivo 3.svg";
import Img2 from "assets/img/igualdade 1.svg";
import Img3 from "assets/img/chapeu-de-graduacao 1.svg";
import "./style.css";


function Values() {
  return (
    <>
      <div className="values-container">
        <div className="values-title">
          <h1>Missão e Valores</h1>
        </div>

        <div className="values-card">
          <img src={Img3} alt=""></img>
          <h1>VALORIZAÇÃO DA EDUCAÇÃO</h1>
          <p>
            Promovemos a educação e oferecemos soluções para alcançar a
            excelência acadêmica e realização pessoal.
          </p>
        </div>

        <div className="values-card">
          <img src={Img2} alt=""></img>
          <h1>TRANSPARÊNCIA E ÉTICA</h1>
          <p>
          Valorizamos a transparência e ética em nossas ações, estabelecendo relações de confiança com nossos clientes, parceiros e colaboradores.
          </p>
        </div>

        <div className="values-card">
          <img src={Img1} alt=""></img>
          <h1>INOVAÇÃO E QUALIDADE</h1>
          <p>
          Investimos em tecnologia e melhoria contínua para oferecer soluções inovadoras e de alta qualidade que atendam às necessidades de nossos clientes de forma eficiente.
          </p>
        </div>
      </div>
    </>
  );
}

export default Values;
