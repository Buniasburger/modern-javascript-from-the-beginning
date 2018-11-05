class Storage {
    constructor() {
        this.city = 'Miami';
        this.state = 'FL';
    }

    getLocationData() {
        if(localStorage.getItem('city') !== null) {
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('state') !== null) {
            this.city = localStorage.getItem('state');
        }

        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }
}