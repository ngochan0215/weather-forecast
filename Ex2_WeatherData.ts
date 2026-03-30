var highTemperatures = [55, 57, 53, 47, 56, 50];
var lowTemperatures = [33, 30, 29, 35, 31, 32]; 

let highestTemperature = highTemperatures[0];
let lowestTemperature = lowTemperatures[0];

let averageHighTemperature = 0;
let averageLowTemperature = 0;

function sortArray(arr) {
    let a = arr.slice();
    for (let i = 0; i < a.length - 1; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
            }
        }
    }
    return a;
}

function findMedian(arr) {
    let sortedArr = sortArray(arr);
    let n = sortedArr.length;

    if (n % 2 === 1) {
        return sortedArr[Math.floor(n / 2)];
    } else {
        return (sortedArr[n / 2 - 1] + sortedArr[n / 2]) / 2;
    }
}

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

console.log("Highest temperature: ", highestTemperature);
console.log("Lowest temperature: ", lowestTemperature);

console.log("Average high temperature: ", Math.round(averageHighTemperature / highTemperatures.length * 100) / 100);
console.log("Average low temperature: ", Math.round(averageLowTemperature / lowTemperatures.length * 100) / 100);

console.log("Median high temperature: ", findMedian(highTemperatures));
console.log("Median low temperature: ", findMedian(lowTemperatures));