export function Title(props) {

    return (
        <div className="title">
            <h3>{props.title}</h3>
            <p>{props.location}</p>
            <div className="infos">
                {props.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                ))}
            </div>
        </div>
    )
}