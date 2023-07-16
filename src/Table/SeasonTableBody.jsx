import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';

function SeasonTableBody({teams, size}) {

    useEffect(() => {
        console.log(teams);
    }, []);

    return (
        <tbody>
            {teams && teams.map((team, key) =>{
            return <tr key={key}>
                <td><b>{key + 1}</b></td>
                {
                    size !== 'small' && 
                    <>
                        <td><img src={team.team.logos[0].href} alt='team logo' width={window.innerWidth > 556?40:15} height={window.innerWidth > 556?40:15}/></td>
                    </>
                }
                <td><b><a className="nav-link" href={ "/team/" + team.team.id }>{ size !== 'small' ? team.team.name : team.team.abbreviation}</a></b></td>
                <td>{team.stats.find((a) => a.name === "gamesPlayed").value}</td> {/* games */}
                {
                    size !== 'small' && 
                    <>
                        <td>{team.stats.find((a) => a.name === "wins").value}</td>
                        <td>{team.stats.find((a) => a.name === "ties").value}</td>
                        <td>{team.stats.find((a) => a.name === "losses").value}</td>
                        <td>{team.stats.find((a) => a.name === "pointsFor").value}</td>
                        <td>{team.stats.find((a) => a.name === "pointsAgainst").value}</td>
                    </>
                }
                <td>{team.stats.find((a) => a.name === "pointsFor").value - team.stats.find((a) => a.name === "pointsAgainst").value}</td> {/* GD */}
                <td style={{
                fontWeight: 'bold'
                }}>{team.stats.find((a) => a.name === "points").value}</td> {/* points */}
            </tr>
            })}
        </tbody>
    )
}

export default SeasonTableBody;