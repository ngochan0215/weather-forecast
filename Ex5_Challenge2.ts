var weatherForecast = [
    {
        day: "Today",
        temperature: {
            high: 55,
            low: 32
        },
        conditions: "sunny",
        astronomy: {
            sunrise: "7:43 AM",
            sunset: "5:09 PM"
        }
    },
    {
        day: "Saturday",
        temperature: {
            high: 50,
            low: 29
        },
        conditions: "cloudy",
        astronomy: {
            sunrise: "7:44 AM",
            sunset: "5:08 PM"
        }
    },
    {
        day: "Sunday",
        temperature: {
            high: 47,
            low: 35
        },
        conditions: "chance of rain",
        astronomy: {
            sunrise: "7:45 AM",
            sunset: "5:07 PM"
        }
    }
]

const today = weatherForecast[0];
const saturday = weatherForecast[1];
const sunday = weatherForecast[2];

console.log("Today's weather conditions: ", today.conditions);
console.log("Saturday's high temperature (°F): ", saturday.temperature.high);
console.log("Saturday's sunrise time: ", saturday.astronomy.sunrise);
console.log("Sunday's conditions: ", sunday.conditions);
console.log("Sunday's sunset time: ", sunday.astronomy.sunset);

console.log(`Sunday's weather forecast: expect ${sunday.conditions} with a high temperature of ${sunday.temperature.high}°F and a low of ${sunday.temperature.low}°F. The sun will rise at ${sunday.astronomy.sunrise} and set at ${sunday.astronomy.sunset}.`);