document.addEventListener('DOMContentLoaded', (event) => {
            regenWeather();
            checkAlertsForHouston();
        });

        function regenWeather() {
            clearWeather();
            newWeather();
        }

        function newWeather() {
            console.log('Fetching new weather data');

            fetch(`https://api.weather.gov/gridpoints/HGX/57,102/forecast`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    const periods = data.properties.periods;
                    const current = periods[0];

                    const temperature = current.temperature;
                    const condition = current.shortForecast;
                    const windSpeedONE = current.windSpeed;
                    const windSpeedTWO = current.windDirection;
                    const updated = current.endTime;
                    const img = current.icon;
                    const cloud = current.detailedForecast;

                    document.getElementById('temp').innerHTML = `${temperature} °F`;
                    document.getElementById('cond').innerHTML = `${condition}`;
                    document.getElementById('wind').innerHTML = `${windSpeedONE} winds at ${windSpeedTWO}`;
                    document.getElementById('humid').innerHTML = '';
                    document.getElementById('update').innerHTML = `Last updated: ${updated}`;
                    document.getElementById('img').src = `${img}`;
                    document.getElementById('cloud').innerHTML = `${cloud}`;

                    document.getElementById('logo').href = `${img}`;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                    document.getElementById('temp').innerHTML = 'Error fetching weather data';
                });
        }

        function checkAlertsForHouston() {
    fetch('https://api.weather.gov/alerts/active?area=TX')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Filter alerts for those specifically mentioning Houston
            const houstonAlerts = data.features.filter(alert => 
                alert.properties.headline.toLowerCase().includes('houston') || 
                alert.properties.description.toLowerCase().includes('houston')
            );

            const alertMessages = houstonAlerts.map(alert => 
                `${alert.properties.headline} issued ${new Date(alert.properties.sent).toLocaleString()}`
            ).join('<br>') || 'No alerts mentioning Houston.';

            document.getElementById('alerts').innerHTML = 'ALERTS ARE STILL IN BETA!! USE THE DEFAULT DESCRIPTION FOR CLUES! >>>> MAYBE JUST USE YOUR BRAIN THIS TIME :| ';
        })
        .catch(error => {
            console.error('Error fetching alerts:', error);
            document.getElementById('alerts').innerHTML = 'ALERT: Error fetching alerts';
        });
}




        function clearWeather() {
            console.log('Clearing weather data');
            document.getElementById('temp').innerHTML = '...';
            document.getElementById('cond').innerHTML = '';
            document.getElementById('wind').innerHTML = '';
            document.getElementById('humid').innerHTML = '';
            document.getElementById('cloud').innerHTML = '';
            document.getElementById('update').innerHTML = 'Updating...';
            document.getElementById('img').src = '';
        }
