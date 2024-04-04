import { useState } from 'react';

export function Slide (props) {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

    //Basculer sur l'image suivante
    const nextPicture = () => {
        const newIndex = (currentPictureIndex + 1) % props.pictures.length;
        setCurrentPictureIndex(newIndex);
    };

    //Basculer sur l'image precedente
    const prevPicture = () => {
        const newIndex = (currentPictureIndex -1 + props.pictures.length) % props.pictures.length;
        setCurrentPictureIndex(newIndex);
    };

    //Vérifier si il y a plus d'une photo
    const nbPicture = props.pictures.length > 1;

    return (
        <div className="slide">
            {props.pictures.length > 0 && (
                <img src={props.pictures[currentPictureIndex]} alt="" />
            )}
            {nbPicture && (  
                <>
                    <i className="fa-solid fa-chevron-left" onClick={prevPicture}></i>
                    <i className="fa-solid fa-chevron-right" onClick={nextPicture}></i>
                    <p>{currentPictureIndex +1}/{props.pictures.length}</p>
                </>
            )}
        </div>
    );
}