import React, { useState } from "react"; //Pour gerer l'etat des collapses

export function Collapses(props) {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
        setCollapsed(!collapsed);
    };  
    
  
    return (
        <div className="collapses">
            <div className="collapses_content" onClick={toggleCollapse}>
                <h2>{props.subject}</h2>
                <i className='fa-solid fa-angle-up'></i>
            </div>
            {!collapsed && (
                <div className="textContent">
                    <p>{props.text}</p>
                </div>
            )}
        </div>
    );
}
