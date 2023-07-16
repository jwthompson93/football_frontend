import BaseApi from "./BaseApi";

export class MatchApi extends BaseApi {
    constructor() {
        super();
        this.endpoint = "/match";
    }

    getMatches() {
        return this.getArray(this.endpoint);
    }

    async getMatchesByCompetitionAndMatchRound(competitionId, matchRound) {
        console.log(matchRound);
        console.log(competitionId);
        let result = await this.getArray(this.endpoint + "/round/" + competitionId + "/" + matchRound);
        console.log(result.data);
        return result.data;
    }

    async getMatchesByTeamsAndCompetitions(teamId, competitionId) {
        console.log(teamId);
        console.log(competitionId);
        let result = await this.getArray(this.endpoint + "/team/" + teamId + "/" + competitionId);
        console.log(result.data);
        return result.data;
    }
}