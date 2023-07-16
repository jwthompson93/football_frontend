class TeamRaw {
    constructor() {
        this.datas = [{"id":"AVL","name":"Aston Villa","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"ARS","name":"Arsenal","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"BOU","name":"AFC Bournemouth","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"BRE","name":"Brentford","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"BHA","name":"Brighton & Hove Albion","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"CRY","name":"Crystal Palace","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"CHE","name":"Chelsea","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"EVE","name":"Everton","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"FUL","name":"Fulham","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"LEE","name":"Leeds United","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"LEI","name":"Leicester City","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"LIV","name":"Liverpool","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"MCI","name":"Manchester City","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"MUN","name":"Manchester United","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"NEW","name":"Newcastle United","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"NFO","name":"Nottingham Forest","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"SOU","name":"Southampton","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"TOT","name":"Tottenham Hotspur","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"WHU","name":"West Ham United","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]},{"id":"WOL","name":"Wolverhampton Wanderers","competitions":[{"id":1,"name":"Premier League"},{"id":3,"name":"EFL Cup"},{"id":2,"name":"FA Cup"}]}];
    }

    getTeams() {
        return this.datas;
    }

    getTeamById(id) {
        var team = this.datas.find((data) => data.id === id);
        return team;
    }
}

export default TeamRaw;