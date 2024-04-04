import React from "react";
import { Card } from "../../components/card/card";
import data from "../../datas/data.json"; // données json dans la variable data

export function Gallery () {

    return (
        <section className="gallery">
            {/*methode map pour generer les cards : iteration sur chaque element de key, cover et title*/}
            {/* key permet à React d'identifier chaque element */}
            {data.map((item, index) => (
                <Card 
                    key={item.id} // Utilisation de l'id du logement comme clé
                    id={item.id} // Passez l'id du logement à la carte
                    cover={item.cover}
                    title={item.title} />
            ))}
            {/* <Card cover="cover" title="title"/> m'a servit pour construire la structure*/}
        </section>
    );
}

//fonction forEach (ou map) pour generer les items
