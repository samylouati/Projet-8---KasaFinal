import { NavLink } from "react-router-dom";

export function NavBar () {
  
    return (
            <nav>
                <NavLink exact to="/" activeClassName="active">Accueil</NavLink>
                <NavLink to="/about" activeClassName="active">A propos</NavLink>
            </nav>
    );
}

//"exact" indique que le lien doit etre actif lorsque l'URL corespond "exactement" à to="/"
//class active lorsque que "exactement" l'URL spécifié