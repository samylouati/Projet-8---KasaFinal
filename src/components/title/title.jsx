export function Title(props) {

    return (
        <div className="title">
            <h3>{props.title}</h3>
            <p>{props.location}</p>
            <div className="infos">
                <p>Cozy</p>
                <p>Canal</p>
                <p>Paris 10</p>
            </div>
        </div>
    )
}