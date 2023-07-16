import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TeamRaw from '../Data/Raw/TeamRaw';
import CompetitionMatchTable from '../Fixture/CompetitionMatchTable';

function TeamPage() {

    const teamRaw = new TeamRaw();
    const { id } = useParams();
    const [team, setTeam] = useState({});

    useEffect(() => {
        setTeam(teamRaw.getTeamById(id));
        console.log(team);
        console.log(id);
    }, [])

    return (
        <div className='container'>
            <h2> { team.name } </h2>
            {
                team.competitions.map((competition) => {
                    return (
                        <div>
                            <CompetitionMatchTable teamId={ team.id } competition={ competition }></CompetitionMatchTable>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default TeamPage;