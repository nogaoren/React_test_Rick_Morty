import { Result } from "../../../Models/RickMortyModel";
import "./Card.css";

interface CardProps{
    rickMorty: Result;
}

function Card(props: CardProps): JSX.Element {
    return (
        <div className="Card centerColumn border">
            <h3>{props.rickMorty.name}</h3>
            <p><span className="headline">ID:</span> {props.rickMorty.id}</p>
            <p><span className="headline">Status:</span> {props.rickMorty.status}</p>
            <p><span className="headline">Specie:</span> {props.rickMorty.species}</p>
			<img src={props.rickMorty.image} alt="Character" className="border"/>
        </div>
    );
}

export default Card;
