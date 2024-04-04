export function Notes (props) {
    const { rating } = props;

    //Boucle pour generer les etoiles "good" (notes)
    const stars = [];
    for (let i= 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<i key={i} className="fa-solid fa-star good"></i>);
        } else {
            stars.push(<i key={i} className="fa-solid fa-star"></i>);
        }
    }
  
    return (
            <div className="notes">
                {stars}
            </div>
    );
}