import React from "react"
import { Banner } from "../components/banner/banner"
import { Gallery } from "../layouts/gallery/gallery"
import ImgHome from '../assets/Images/Bannière.png' //pour l'image de la banniere 
import "../datas/data.json" //j'importe le fichier json

export function Home() {
    return (
        <div>
            <Banner image={ImgHome} text="Chez vous, partout et ailleurs"/>
            <Gallery />
        </div>
    )
}