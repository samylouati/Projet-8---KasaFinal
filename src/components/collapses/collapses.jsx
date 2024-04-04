import React, {useState} from "react"; //Pour gerer l'etat du composant

export function Collapses(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
  
    return (
        <div className="collapses">
            <div className="collapses_content" onClick={toggleCollapse}>
                <h2>{props.subject}</h2>
                <i className={`fa-solid ${isOpen ? 'fa-angle-down' : 'fa-angle-up'}`}></i>
            </div>
            <p className={isOpen ? 'open' : 'closed'}>{props.text}</p> 
        </div>
    );
}