class Weather {
    constructor(city, state) {
        this.api_key = '99dfe35fcb7de1ee';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async fetchWeather() {
        const response = await fetch(`http://api.wunderground.com/api/${this.api_key}/conditions/q/${this.state}/${this.city}.json`);

        const resData = await response.json();
        return resData.current_observation;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}