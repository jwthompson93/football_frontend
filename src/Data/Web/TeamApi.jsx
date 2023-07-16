import BaseApi from "./BaseApi";

export class TeamApi extends BaseApi {
    constructor() {
        super();
        this.endpoint = "/team";
    }

    getTeams() {
        return this.getArray(this.endpoint);
    }

    getTeamById(id) {
        return this.getSingle(this.get(this.endpoint + "/" + id));
    }
}