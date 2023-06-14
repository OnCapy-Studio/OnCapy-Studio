import './style.css';
import Logo from 'assets/img/logo_3.png';

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
                <h1>NAVIGATION</h1>
                <a href='#home'>Home</a>
                <a href='#aboutUs'>About</a>
                <a href='#values'>Mission</a>
                <a href='#team'>Team</a>
                <a href='#contato'>Contact</a>
            </div>

            <div className='footer-section'>
                <h1>PRODUCTS</h1>
                <a href='#'>Skilloo</a>
            </div>

            <div className='footer-section'>
                <h1>EMAIL</h1>
                <p>Send an e-mail to</p>
                <h6>oncapy.studio@gmail.com</h6>
            </div>
        </div>
    </div>
    </>
    );
}

export default Footer;