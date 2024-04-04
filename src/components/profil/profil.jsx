export function Profil (props) {
  
    return (
            <div className="profil">
                <h2>{props.name}</h2>
                <img src={props.picture} alt="" />
            </div>
    );
}