import { Result } from "../../../Models/RickMortyModel";
import "./Table.css";

interface TableProps{
    table: Result[];
}

function Table(props: TableProps): JSX.Element {
    const header = ['Name', 'ID', 'Status', 'Species', 'Image'];
    return (
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        {header.map(h => <th key={h}>{h}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {props.table.map(t => 
                    <tr key={t.name}>
                        <td>{t.name}</td>
                        <td>{t.id}</td>
                        <td>{t.status}</td>
                        <td>{t.species}</td>
                        <td>
                            <img src={t.image} alt={`${t.name}'s picture`} />
                        </td>
                    </tr>
                    )

                    }
                </tbody>
            </table>
			
        </div>
    );
}

export default Table;
