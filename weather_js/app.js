const ui = new UI;
const storage = new Storage;
const loc = storage.getLocationData();
const weather = new Weather(loc.city, loc.state);

document.addEventListener('DOMContentLoaded', getWeather);

document.querySelector('#w-change-btn').addEventListener('click', () => {
    // Get location from modal input
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;
    // Change location
    weather.changeLocation(city, state);
    storage.setLocationData(city, state);

    // Repaint UI with new location weather information
    getWeather();
    // Close modal
    $('#locModal').modal('hide');
});

function getWeather() {
    weather.fetchWeather().then(data => ui.paint(data));
}
