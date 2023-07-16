import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MatchApi } from "../Data/Web/MatchApi";
import MatchTable from "./MatchTable";
import { useEffect } from 'react';
import { useState } from 'react';

function CompetitionMatchTable({teamId, competition}) {

    const [matchList, setMatchList] = useState([]);

    useEffect(() => {
        const matchData = new MatchApi();
        let matchList = matchData.getMatchesByTeamsAndCompetitions(teamId, competition.id);
        console.log(matchList);
        setMatchList(matchList);
        console.log(this.state);
    }, []);

    return (
        <>
            <h3>{competition.name}</h3>
            <MatchTable matches={ matchList }></MatchTable>
        </>
    );
}

export default CompetitionMatchTable;