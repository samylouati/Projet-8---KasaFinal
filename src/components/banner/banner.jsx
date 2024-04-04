import ImgHome from '../../assets/Images/Bannière.png' //pour la page Home
import ImgAbout from '../../assets/Images/Bannière_about.png' //Pour la page About

export function Banner (props) {

    return (
        <div className="banner">
            <img src={props.image} alt="" />
            <p>{props.text}</p>
        </div>
    );
}