import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function SeasonTableHead({size}) {
    const smArray = ['', "Team", "P", "GD", "Pts"];
    const lgArray = ['Position', "", "Team", "Played", "Won", "Drawn", "Lost", "For", "Against", "GD", "Points"]
    var array = size == "small" ? smArray : lgArray;

    useEffect(() => {
        console.log(array);
    }, []);

    return (
        <>
            <thead>
                <tr>
                { 
                    array && array.map((column) => {
                        console.log(column);
                        return (
                            <th>{column}</th>
                        )
                    })
                }
                </tr>
            </thead>
        </>
    )
}

export default SeasonTableHead;