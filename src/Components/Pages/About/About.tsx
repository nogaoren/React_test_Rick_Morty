import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">
			<h2>This is the Rick and Morty app</h2>
            <p>Here you can see the different characters and read their properties: name, status (alive or unknown) species (human or alien).</p>
            <p>You can also search according to status or species.</p>
            <p>Hope you enjoy. </p>
        </div>
    );
}

export default About;
