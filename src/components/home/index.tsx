import Img1 from 'assets/img/Img_1.svg';
import './style.css';

function Homepage(){
    return(
        <div className="home" id='home'>
            <div className="home-content">
                <h1 className='home-title-blue'>OnCapy</h1>
                <h1 className='home-title-green'>Studio</h1>
                <p>Technology is our tool to transform the world, and we are ready for it.</p>
                <button><a href="#contato">LEARN MORE</a></button>
            </div>

            <div className="home-img">
                <img src={Img1} alt="img"></img>
            </div>

        </div>
    );
}

export default Homepage;