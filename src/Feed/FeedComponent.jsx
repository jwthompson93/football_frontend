import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import NewsFeedRow from "./NewsFeedRow";

function FeedComponent() {
    const news = [
        {
            "id": 1,
            "summary": {
                "title": "Who has gained and lost as Premier League returns?",
                "detail": "BBC Sports looks and the potential beneficiaries and losers from the World Cup as the Premier League gets set to return on 26 December",
            },
            "title": "BBC Sport looks at the potential beneficiaries and losers from the World Cup as the Premier League gets set to return on 26 December",
            "detail": "There are a lot of stories that can be placed here ranging from player transfers and reactions to results",
            "img": "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/8A61/production/_128052453_bbc-sport-index-imagery-3-split-images-gradient-b23a4295-df91-4095-ad33-d08e831edcf2.png"
        },
        {
            "id": 2,
            "summary": {
                "title": "All you need to know when transfer window opens",
                "detail": "Premier League, EFL, Scottish and European clubs can start making signings again from 1 January as the transfer window opens",
            },
            "title": "January transfer window 2023: Clubs can sign players again from 1 January",
            "detail": "Premier League, EFL, Scottish and European clubs can start making signings again from 1 January as the transfer window opens",
            "img": "https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/4AD7/production/_127995191_bbc-sport-index-imagery-3-split-images-gradient-002637c4-f176-4fee-a103-6114409d8d18.png"
        }
    ];

    useEffect(() =>{
        // Get news feed here
        /*axios.get(`https://api-football-standings.azharimm.dev/leagues/${id}/standings?season=${season}&sort=asc`)
        .then(res => {
            setTeam(res.data.data.standings);
        }).catch(err =>{
            console.log(err);
        });*/
    });

    return (
    <>
        <div>
            {news && news.map((story, key) =>{
                return (
                    <NewsFeedRow key={key} story={story}/>
                )
            })}
        </div>
    </>
    )
}

export default FeedComponent;