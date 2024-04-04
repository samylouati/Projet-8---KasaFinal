import React from "react"
import { useParams } from "react-router-dom" //Pour gerer les parametres d'URL comme me l'a expliqué Seb
import { Slide } from "../components/slide/slide"
import { Title } from "../components/title/title"
import { Profil } from "../components/profil/profil"
import { Notes } from "../components/notes/notes"
import { Collapses } from "../components/collapses/collapses"
import { Error404 } from '../pages/Error404'
import data from "../datas/data.json";

export function Location() {
    //UseParams pour obtenir les parametres d'URL (ID du logement)
    const { id } = useParams();
    console.log ("ID du logement:", id);

    //trouver le logement qui correspond à l'id
    const logement = data.find((logement) => logement.id === id);

    if (!logement) {
        //gérer le cas ou le logement n'est pas trouvé > 404
        return <Error404 />
    }

    return (
        <div>
            <Slide pictures={logement.pictures}/>
            <div className="informations">
                <div className="location_information">
                    <Title title={logement.title} location={logement.location}/>
                    <div className="identities">
                        <Profil name={logement.host.name} picture={logement.host.picture}/>
                        <Notes rating={logement.rating} />
                    </div>
                </div>
                <section className="collapsesLocation">
                    <div className="collapsesContainer">
                        <Collapses subject="Description" text={logement.description}/>
                    </div>
                    <div className="collapsesContainer">
                        <Collapses subject="Equipements" text={logement.equipments}/>
                    </div>
                </section>
            </div>
        </div>
    )
}