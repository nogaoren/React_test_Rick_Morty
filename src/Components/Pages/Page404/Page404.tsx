import { Link } from "react-router-dom";
import "./Page404.css";

function Page404(): JSX.Element {
    return (
        <div className="Page404 centerColumn">
			<h2>Ho, no!</h2> 
            <h2>The page you were looking for does not exist!</h2>
            <iframe 
            allow="fullscreen" 
            frameBorder="0" 
            width="480"
            height="270" 
            src="https://giphy.com/embed/2N7E1MUmbz812T4TDk/video"
            title="Rick and Morty GIF page404">
            </iframe>
            <p>How about going back to the <Link to="home">Home</Link> page?</p>
        </div>
    );
}

export default Page404;
