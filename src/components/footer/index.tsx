import './style.css';
import Logo from 'assets/img/logo_1.png';

function Footer(){
    return(
    <>
    <div className="footer-bg">
        <div className="footer-container">
            <div className="footer-empresa">
                <div className="footer-logo">
                    <img src={Logo} alt="logo"></img>
                    <div>
                        <h1>OnCapy</h1>
                        <h1 id='footer-title-green'>Studio</h1>
                    </div>
                </div>
                <p>©2023 ONCAPY STUDIO | ALL RIGHTS RESERVED</p>
            </div>

            <div className='footer-section'>
                <h1>NAVEGAÇÃO</h1>
                <a href='#home'>Home</a>
                <a href='#aboutUs'>Sobre</a>
                <a href='#values'>Missão</a>
                <a href='#team'>Time</a>
                <a href='#contato'>Contato</a>
            </div>

            <div className='footer-section'>
                <h1>PRODUTOS</h1>
                <a href='#'>Skilloo</a>
            </div>

            <div className='footer-section'>
                <h1>EMAIL</h1>
                <p>Envie um e-mail para</p>
                <h6>oncapy.studio@gmail.com</h6>
            </div>
        </div>
    </div>
    </>
    );
}

export default Footer;