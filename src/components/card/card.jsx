import { Link } from "react-router-dom";

export function Card (props) {

    return (
        <figure className="card">
            <Link to={`/location/${props.id}`}>
                <img src={props.cover} alt="" />
                <figcaption>{props.title}</figcaption> 
            </Link>
        </figure>
    );
}