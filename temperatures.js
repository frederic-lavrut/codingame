const n = parseInt(readline()); // the number of temperatures to analyse
const temps = readline().split(' '); // the n temperatures expressed as integers ranging from -273 to 5526
const positiveTemps = temps.filter((v) => v >= 0).sort((a, b) => a - b); // split and sort values to positive only
const negativeTemps = temps.filter((v) => v < 0).sort((a, b) => b - a); // split and sort values to negative only
const nearestFromZero = positiveTemps[0] <= negativeTemps[0] * -1 ? positiveTemps[0] : negativeTemps[0];
print(nearestFromZero != undefined ? nearestFromZero : 0);
