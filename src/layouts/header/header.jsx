import LOGO from '../../assets/Images/LOGO_header.png' //je met la source de l'image dans une variable pour la changer plus facilement
import { NavBar } from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom'

export function Header () {
  
    return (
        <header>
            <Link to="/"><h1><img src={LOGO} alt="" /></h1></Link>
            <NavBar />
        </header>
    );
}