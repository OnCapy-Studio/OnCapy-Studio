import Img1 from 'assets/img/Img_1.svg';
import './style.css';

function Homepage(){
    return(
        <div className="home" id='home'>
            <div className="home-content">
                <h1 className='home-title-blue'>OnCapy</h1>
                <h1 className='home-title-green'>Studio</h1>
                <p>A tecnologia é a nossa ferramenta para transformar o mundo, e nós estamos prontos para isso.</p>
                <button><a href="#contato">SAIBA MAIS</a></button>
            </div>

            <div className="home-img">
                <img src={Img1} alt="img"></img>
            </div>

        </div>
    );
}

export default Homepage;