import { Link } from "react-router-dom";

export function NavBar () {
  
    return (
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
    );
}