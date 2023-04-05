import Img2 from "assets/img/img2.svg";
import './style.css';

function AboutUs() {
  return (
    <div className="aboutUs-container" id="aboutUs">
      <div className="aboutUs-img">
      <img src={Img2} alt="Img2"></img>
      </div>

      <div className="aboutUs-content">
        <h1>Sobre Nós</h1>
        <p>
          Somos uma equipe de seis jovens apaixonados por tecnologia e inovação,
          que juntos uniram forças para criar uma ferramenta que mudasse a vida
          de diversos profissionais. Acreditamos que o desenvolvimento de
          software é uma arte e uma ciência - a arte de criar experiências
          digitais excepcionais e a ciência de garantir que essas experiências
          sejam eficientes. Combinamos nossas habilidades únicas para criar
          soluções que não apenas funcionem bem, mas também pareçam incríveis.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
