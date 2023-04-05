import Img from 'assets/img/contato.svg';
import Wpp from 'assets/img/wpp.svg';
import Br from 'assets/img/brasil.svg';
import Email from 'assets/img/email.svg';
import './style.css';

function Contato(){
    return(
        <>
        <div className="contato-container">
            <div className="contato-content">
                <h1>ENTRE EM CONTATO</h1>
                <h1 className='contato-title-green'>CONOSCO</h1>
                <p>Iremos ajudar a solucionar o seu problema</p>

                <div className="contato-item">
                    <img src={Br} alt=""></img>
                    <p>São Paulo - SP</p>
                </div>

                <div className="contato-item">
                    <img src={Wpp} alt=""></img>
                    <p>+55 (11) 99999-9999</p>
                </div>

                <div className="contato-item">
                    <img src={Email} alt=""></img>
                    <p>oncapy.studio@gmail.com</p>
                </div>

            </div>

            <div className="contato-img">
                <img src={Img} alt=""></img>
            </div>
        </div>
        </>
    );
}

export default Contato;