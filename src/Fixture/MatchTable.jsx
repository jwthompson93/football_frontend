import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import MatchTableRow from "./MatchTableRow";

export default class MatchTable extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.matches);
        this.tableStyle = {
            width: "100%"
        };
    }

    render() {
        return (
            <table className="table table-bordered" style={this.tableStyle}>
                <tbody>
                    {
                        this.props.matches.length > 0 ?
                            this.props.matches.map(match => {
                                return (
                                    <MatchTableRow match={match}/>
                                )
                            })
                            :
                            <tr>
                                <td className="text-center">Data cannot be retreived</td>
                            </tr>
                    }
                </tbody>
            </table>
        );
    }
}