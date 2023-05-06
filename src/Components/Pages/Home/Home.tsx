import "./Home.css";
import { MdOutlineWavingHand } from 'react-icons/md';

function Home(): JSX.Element {
    return (
        <div className="Home centerColumn">
			<h2>Hi! <MdOutlineWavingHand/> Welcome to the Rick and Morty app.</h2>
            <h2>We are so glad you've decided to join us.</h2>
            <iframe 
            src="https://giphy.com/embed/cOKjNdJDbqNCm4n0Jm" 
            width="480" 
            height="480" 
            frameBorder="0" 
            className="giphy-embed" 
            allowFullScreen
            title="Rick and Morty GIF">
            </iframe>
        </div>
    );
}

export default Home;
