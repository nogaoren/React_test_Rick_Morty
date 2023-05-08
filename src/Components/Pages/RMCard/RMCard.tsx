import { useEffect, useState } from "react";
import "./RMCard.css";
import axios from "axios";
import Card from "../../Shared/Card/Card";
import { Result, Root } from "../../../Models/RickMortyModel";

function RMCard(): JSX.Element {
    // For fetching the data
    const [cards, setCards] = useState<Result[]>([]);
    // For searching according to status and species in a select box
    const [selectStatus, setSelectStatus] = useState<string>('All');
    const [selectSpecies, setSelectSpecies] = useState<string>('All');

    useEffect(() => {
        axios.get<Root>('https://rickandmortyapi.com/api/character')
            .then(res => {
                setCards(res.data.results);
                console.log('Data load successfully');
            })
            .catch(err => {console.log('Data did not load');})
    }, []);

    return (
        <div className="RMCard">
            <div className="CardsHeader centerColumn">
                <h2>Rick and Morty characters</h2>
                <div className="centerRow">
                    <select placeholder="Select status" value={selectStatus} onChange={(e) => setSelectStatus(e.target.value)} className="border">
                        <option value="All">All</option>
                        <option value="Alive">Alive</option>
                        <option value="Dead">Dead</option>
                        <option value="unknown">Unknown</option>
                    </select>
                    <select placeholder="Select specie" value={selectSpecies} onChange={(e) => setSelectSpecies(e.target.value)} className="border">
                        <option value="All">All</option>
                        <option value="Human">Human</option>
                        <option value="Alien">Alien</option>
                    </select>
                </div>
            </div>
            <div className="centerRow">
                {
                    cards.filter((c) => {
                        // return c.status.includes(selectStatus) && c.species.includes(selectSpecies)
                        const statusMatch = selectStatus === 'All' || c.status.toLowerCase() === selectStatus.toLowerCase();
                        const speciesMatch = selectSpecies === 'All' || c.species.toLowerCase() === selectSpecies.toLowerCase();
                        return statusMatch && speciesMatch;
                    }).map((c) => <Card key={c.id} rickMorty={c} />)
                }
            </div>
			
        </div>
    );
}

export default RMCard;
