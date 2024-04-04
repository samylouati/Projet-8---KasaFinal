import React, {useState} from "react"; //Pour gerer l'etat du composant

export function Collapses(props) {
    
  
    return (
        <div className="collapses">
            <div className="collapses_content">
                <h2>{props.subject}</h2>
                <i className="fa-solid fa-angle-up"></i>
            </div>
            <div className="textContent ">
                <p>{props.text}</p>
            </div>
        </div>
    );
}
