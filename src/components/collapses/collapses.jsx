import React, { useState } from "react"; //Pour gerer l'etat des collapses

export function Collapses(props) {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleCollapse = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <div className="collapses">
            <div className="collapses_content" onClick={toggleCollapse}>
                <h2>{props.subject}</h2>
                <i className={`fa-solid fa-angle-down ${isExpanded ? '' : 'rotate180'}`}></i>
            </div>
            <div className={`textContent ${isExpanded ? 'visible' : 'hidden'}`}>
                <p>{props.text}</p>
            </div>
        </div>
    );
}
