//ajouter une classe active pour la page active 
import LOGO from '../../assets/Images/LOGO_header.png' //je met la source de l'image dans une variable pour la changer plus facilement
import { NavBar } from '../../components/NavBar/NavBar';

export function Header () {
  
    return (
        <header>
            <h1><img src={LOGO} alt="" /></h1>
            <NavBar />
        </header>
    );
}