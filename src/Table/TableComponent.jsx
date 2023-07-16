import SeasonTable from "./SeasonTable";
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from 'react';
import axios from 'axios';

function TableComponent({size}) {
    const [league, setLeague] = useState();
    const [id, setId] = useState('eng.1');
    const [season, setSeason] = useState('2022');
    const [tournament, setTournament] = useState('Premier League');

    const year = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];

    useEffect(() =>{
        axios.get('https://api-football-standings.azharimm.dev/leagues').then(res => {
            setLeague(res.data.data);
        }).catch(err =>{
            console.log(err);
        });
    },[]);

    return (
        <div className='container'>
            <SeasonTable season={season} id={id} tournament={tournament} size={size} limit={10}></SeasonTable>
        </div>
    );
}

export default TableComponent;