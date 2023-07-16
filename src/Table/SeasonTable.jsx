import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Table } from "react-bootstrap";
import SeasonTableHead from "./SeasonTableHead";
import SeasonTableBody from "./SeasonTableBody";

function SeasonTable({id, season, tournament, size, limit}) {
    const [teams, setTeams] = useState();

    useEffect(() =>{
        axios.get(`https://api-football-standings.azharimm.dev/leagues/${id}/standings?season=${season}&sort=asc`)
        .then(res => {
            setTeams(res.data.data.standings);
        }).catch(err =>{
            console.log(err);
        });
    },[id, season]);

    return (
    <>
        <h4>{tournament}</h4>

        <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
        }}>
            <Table striped hover>
                <SeasonTableHead size={size}></SeasonTableHead>
                <SeasonTableBody teams={teams} size={size}></SeasonTableBody>
            </Table>
        </div>
    </>
    )
}

SeasonTable.defaultProps = {
    season: "2022", 
    size: "large",
    limit: 30
}

export default SeasonTable;