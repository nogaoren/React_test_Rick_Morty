import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu centerColumn">
            <Link to="home">Home</Link> 
            <Link to="cards">Rick and Morty in Cards</Link> 
            <Link to="table">Rick and Morty in Table</Link>
            <Link to="about">About</Link> 
        </div>
    );
}

export default Menu;
