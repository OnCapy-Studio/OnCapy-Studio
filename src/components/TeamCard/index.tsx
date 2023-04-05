import './style.css';

type Props = {
    name: String,
    func: String,
    img: string;
  };


function TeamCard({name, func, img} : Props){
    return(
        <>
        <div className="team-card-container">
            <img src={img} alt="img"></img>
            <h1>{name}</h1>
            <p>{func}</p>
        </div>
        </>
    );
}

export default TeamCard;