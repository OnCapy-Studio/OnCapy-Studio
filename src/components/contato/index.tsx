import Img from 'assets/img/contato.svg';
import Wpp from 'assets/img/wpp.svg';
import Br from 'assets/img/brasil.svg';
import Email from 'assets/img/email.svg';
import './style.css';

function Contato(){
    return(
        <>
        <div className="contato-container" id='contato'>
            <div className="contato-content">
                <h1>CONTACT</h1>
                <h1 className='contato-title-green'>US</h1>
                <p>We'll help solve your problem</p>

                <div className="contato-item">
                    <img src={Br} alt=""></img>
                    <p>São Paulo - SP</p>
                </div>

                <div className="contato-item">
                    <img src={Wpp} alt=""></img>
                    <p>+55 (11) 99444-9772</p>
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