import React, {useState} from "react"; //Pour gerer l'etat du composant

export function Collapses(props) {
    const [isExpanded, setIsExpanded] = useState(false); //Etat pour controler l'affichage des <p>

    const changeExpanded = () => {
        setIsExpanded(!isExpanded); //Inversion de l'etat de <p>
    }
  
    return (
        <div className="collapses">
            <div className="collapses_content" onClick={changeExpanded}>
                <h2>{props.subject}</h2>
                <i className={"fa-solid fa-angle-up"}></i>
            </div>
            <p className={isExpanded ? "visible" : "hidden"}>{props.text}</p> 
        </div>
    );
}