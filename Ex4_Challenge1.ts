let todayWeather = {
    temperature: {
        high: 60,
        low: 35
    },
    conditions: "scorching",
    astronomy: {
        sunrise: "05:45 AM",
        sunset: "05:45 PM"
    }
};

console.log("Today's high temperature (°F): ", todayWeather.temperature.high);
console.log("Today's low temperature (°F): ", todayWeather.temperature.low);
console.log("Today's conditions: ", todayWeather.conditions);
console.log("Today's sunrise time: ", todayWeather.astronomy.sunrise);

console.log(`Today's weather is quite ${todayWeather.conditions} due to a high temperature of ${todayWeather.temperature.high}°F 
    and a low of ${todayWeather.temperature.low}°F. The sun rose at ${todayWeather.astronomy.sunrise} and will set at ${todayWeather.astronomy.sunset}.`);