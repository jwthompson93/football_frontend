import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MatchTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.match = props.match;
        console.log(this.match);
    }

    render() {
        return (
            <tr>
                <td>
                    <div className="text-center">
                        <div className="row justify-content-center align-self-center">
                            <div className="col-5 d-flex align-self-center justify-content-center">
                                <a href={ "/team/" + this.match.homeTeam.id } style={{"textDecoration":"none"}}><b>{ this.match.homeTeam.name }</b></a>
                            </div>
                            {
                                this.match.status === 'FIXTURE' ? 
                                    <div className="col-2 d-flex align-self-center justify-content-center text-light bg-secondary">
                                        { new Date(this.match.timestamp).toLocaleTimeString('en-GB', {timeZone: 'GMT'}) }
                                    </div>
                                :
                                    <div className="col-2 d-flex align-self-center justify-content-center text-light bg-success">
                                        <b>{ this.match.homeTeamGoals }</b> : <b>{ this.match.awayTeamGoals }</b>
                                    </div>
                            }
                            <div className="col-5 d-flex align-self-center justify-content-center">
                                <a href={ "/team/" + this.match.awayTeam.id } style={{"textDecoration":"none"}}><b>{ this.match.awayTeam.name }</b></a>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
}