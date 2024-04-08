import { NavLink } from "react-router-dom";

export function NavBar () {
  
    return (
            <nav>
                <NavLink to="/" activeclassname="active">Accueil</NavLink>
                <NavLink to="/about" activeclassname="active">A propos</NavLink>
            </nav>
    );
}

//"exact" indique que le lien doit etre actif lorsque l'URL corespond "exactement" à to="/"
//class active lorsque que "exactement" l'URL spécifié