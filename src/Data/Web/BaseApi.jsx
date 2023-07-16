class BaseApi {
    constructor() {
        this.host = "http://localhost:8080";
    }

    async getArray(endpoint) {
        var datas = [];

        console.log(this.host + endpoint);

        let response = await fetch(this.host + endpoint);

        datas = await response.json();

        console.log(datas);

        return datas;
    }

    async getSingle(endpoint) {
        var data = null;

        await fetch(this.host + endpoint)
            .then(response => response.json())
            .then(responseJson => data = responseJson);

        return data;
    }
}

export default BaseApi;