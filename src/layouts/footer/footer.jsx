import LOGO from '../../assets/Images/LOGO_footer.png' //je met la source de l'image dans une variable pour la changer plus facilement

export function Footer () {
    return (
        <footer>
            <img src={LOGO} alt="" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}