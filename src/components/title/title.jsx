export function Title(props) {

    return (
        <div className="title">
            <h3>{props.title}</h3>
            <p>{props.location}</p>
            <div className="infos">
                {props.tags.map((tag, index) => (
                    <div key={index}>{tag}</div>
                ))}
            </div>
        </div>
    )
}