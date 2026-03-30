var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

let highestTemperature = highTemperatures[0];
let lowestTemperature = lowTemperatures[0];

let averageHighTemperature = 0;
let averageLowTemperature = 0;

for (let i = 0; i < highTemperatures.length; i++) {
    if (highTemperatures[i] > highestTemperature) {
        highestTemperature = highTemperatures[i];
    }
    averageHighTemperature += highTemperatures[i];
}

for (let i = 0; i < lowTemperatures.length; i++) {
    if (lowTemperatures[i] < lowestTemperature) {
        lowestTemperature = lowTemperatures[i];
    }
    averageLowTemperature += lowTemperatures[i];
}

console.log("First high temperature: ", highTemperatures[0]);
console.log("Last low temperature: ", lowTemperatures[lowTemperatures.length - 1]);

console.log("Average high temperature: ", averageHighTemperature);
console.log("Average low temperature: ", averageLowTemperature);
