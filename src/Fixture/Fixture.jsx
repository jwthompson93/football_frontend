import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { MatchApi } from '../Data/Web/MatchApi';
import MatchTable from './MatchTable';
import { useState } from 'react';

export default function Fixture() {
    const matchRaw = new MatchApi();
    const [fixtures, setFixtures] = useState([]);
    const [loading, setLoading] = useState([]);

    useEffect(() => {
        async function getData() {
            setLoading(true);
            const fix = await matchRaw.getMatchesByCompetitionAndMatchRound(1, 1);
            this.setFixtures(fix);
            setLoading(false);
        }
        getData();
    }, []);

    if (loading) return (<div>Loading...</div>);

    return (
        <div className='container'>
            <h2>Fixtures</h2>
            {
                Object.entries(fixtures).map((key) => (
                    <>
                        <h4>{key[0]}</h4>
                        <MatchTable matches={key[1]}></MatchTable>
                    </>
                ))
            }
        </div>
    );
}