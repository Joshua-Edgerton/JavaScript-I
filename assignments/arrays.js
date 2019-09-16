// To help us use arrays with real world problems we are going to simulate a used car dealer that has 50 cars in their inventory.

// The car dealer has all of their inventory housed in the array seen below.  Scroll down past the data to find out how you can help the car dealer.
// 8, 25, 30, 44, 45
let inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 4, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 5, car_make: "Mitsubishi", car_model: "Galant", car_year: 1990 },
  { id: 6, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  { id: 7, car_make: "Smart", car_model: "Fortwo", car_year: 2009 },
  { id: 8, car_make: "Audi", car_model: "4000CS Quattro", car_year: 1987 },
  { id: 9, car_make: "Ford", car_model: "Windstar", car_year: 1996 },
  { id: 10, car_make: "Mercedes-Benz", car_model: "E-Class", car_year: 2000 },
  { id: 11, car_make: "Infiniti", car_model: "G35", car_year: 2004 },
  { id: 12, car_make: "Lotus", car_model: "Esprit", car_year: 2004 },
  { id: 13, car_make: "Chevrolet", car_model: "Cavalier", car_year: 1997 },
  { id: 14, car_make: "Dodge", car_model: "Ram Van 1500", car_year: 1999 },
  { id: 15, car_make: "Dodge", car_model: "Intrepid", car_year: 2000 },
  { id: 16, car_make: "Mitsubishi", car_model: "Montero Sport", car_year: 2001 },
  { id: 17, car_make: "Buick", car_model: "Skylark", car_year: 1987 },
  { id: 18, car_make: "Geo", car_model: "Prizm", car_year: 1995 },
  { id: 19, car_make: "Oldsmobile", car_model: "Bravada", car_year: 1994 },
  { id: 20, car_make: "Mazda", car_model: "Familia", car_year: 1985 },
  { id: 21, car_make: "Chevrolet", car_model: "Express 1500", car_year: 2003 },
  { id: 22, car_make: "Jeep", car_model: "Wrangler", car_year: 1997 },
  { id: 23, car_make: "Eagle", car_model: "Talon", car_year: 1992 },
  { id: 24, car_make: "Toyota", car_model: "MR2", car_year: 2003 },
  { id: 25, car_make: "BMW", car_model: "525", car_year: 2005 },
  { id: 26, car_make: "Cadillac", car_model: "Escalade", car_year: 2005 },
  { id: 27, car_make: "Infiniti", car_model: "Q", car_year: 2000 },
  { id: 28, car_make: "Suzuki", car_model: "Aerio", car_year: 2005 },
  { id: 29, car_make: "Mercury", car_model: "Topaz", car_year: 1993 },
  { id: 30, car_make: "BMW", car_model: "6 Series", car_year: 2010 },
  { id: 31, car_make: "Pontiac", car_model: "GTO", car_year: 1964 },
  { id: 32, car_make: "Dodge", car_model: "Ram Van 3500", car_year: 1999 },
  { id: 33, car_make: "Jeep", car_model: "Wrangler", car_year: 2011 },
  { id: 34, car_make: "Ford", car_model: "Escort", car_year: 1991 },
  { id: 35, car_make: "Chrysler", car_model: "300M", car_year: 2000 },
  { id: 36, car_make: "Volvo", car_model: "XC70", car_year: 2003 },
  { id: 37, car_make: "Oldsmobile", car_model: "LSS", car_year: 1997 },
  { id: 38, car_make: "Toyota", car_model: "Camry", car_year: 1992 },
  { id: 39, car_make: "Ford", car_model: "Econoline E250", car_year: 1998 },
  { id: 40, car_make: "Lotus", car_model: "Evora", car_year: 2012 },
  { id: 41, car_make: "Ford", car_model: "Mustang", car_year: 1965 },
  { id: 42, car_make: "GMC", car_model: "Yukon", car_year: 1996 },
  { id: 43, car_make: "Mercedes-Benz", car_model: "R-Class", car_year: 2009 },
  { id: 44, car_make: "Audi", car_model: "Q7", car_year: 2012 },
  { id: 45, car_make: "Audi", car_model: "TT", car_year: 2008 },
  { id: 46, car_make: "Oldsmobile", car_model: "Ciera", car_year: 1995 },
  { id: 47, car_make: "Volkswagen", car_model: "Jetta", car_year: 2007 },
  { id: 48, car_make: "Dodge", car_model: "Magnum", car_year: 2008 },
  { id: 49, car_make: "Chrysler", car_model: "Sebring", car_year: 1996 },
  { id: 50, car_make: "Lincoln", car_model: "Town Car", car_year: 1999 }
];

// Example 1 for loop:

// const arr = ['a', 'b', 'c', 'd'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// 'a' 'b' 'c' 'd'

// Example 2 for loop:

// const arr = [12, 13, 14, 15];
// const evens = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) { evens.push(arr[i]); }
// }
// console.log(evens);
// [12, 14]

// ==== Challenge 1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by logging the car's year, make, and model in the console log provided to you below:
console.log("Car 33 is a " + (inventory[32].car_year) + " " + (inventory[32].car_make) + " " + (inventory[32].car_model));

// ==== Challenge 2 ====
// The dealer needs the information on the last car in their inventory.  What is the make and model of the last car in the inventory?  Log the make and model into the console.
let lastCar = 0;
console.log((inventory[49].car_make) + " " + (inventory[49].car_model));

// ==== Challenge 3 ====
// The marketing team wants the car models listed alphabetically on the website. Sort all the car model names into alphabetical order and log the results in the console
let carModels = [];
let carModelsSorted = [];
var listlength = inventory.length - 1;
const carsList = [inventory[1].car_model, inventory[2].car_model, inventory[3].car_model, inventory[4].car_model, inventory[5].car_model, inventory[6].car_model, inventory[7].car_model, inventory[8].car_model, inventory[9].car_model, inventory[10].car_model, inventory[11].car_model, inventory[12].car_model, inventory[13].car_model, inventory[14].car_model, inventory[15].car_model, inventory[16].car_model, inventory[17].car_model, inventory[18].car_model, inventory[19].car_model, inventory[20].car_model, inventory[21].car_model, inventory[22].car_model, inventory[23].car_model, inventory[24].car_model, inventory[25].car_model, inventory[26].car_model, inventory[27].car_model, inventory[28].car_model, inventory[29].car_model, inventory[30].car_model, inventory[31].car_model, inventory[32].car_model, inventory[33].car_model, inventory[34].car_model, inventory[35].car_model, inventory[36].car_model, inventory[37].car_model, inventory[38].car_model, inventory[39].car_model, inventory[40].car_model, inventory[41].car_model, inventory[42].car_model, inventory[43].car_model, inventory[44].car_model, inventory[45].car_model, inventory[46].car_model, inventory[47].car_model, inventory[48].car_model, inventory[49].car_model];

console.log(carsList.sort());

// ==== Challenge 4 ====
// The accounting team needs all the years from every car on the lot. Create a new array from the dealer data containing only the car years and log the result in the console.
const carsYear = [inventory[1].car_year, inventory[2].car_year, inventory[3].car_year, inventory[4].car_year, inventory[5].car_year, inventory[6].car_year, inventory[7].car_year, inventory[8].car_year, inventory[9].car_year, inventory[10].car_year, inventory[11].car_year, inventory[12].car_year, inventory[13].car_year, inventory[14].car_year, inventory[15].car_year, inventory[16].car_year, inventory[17].car_year, inventory[18].car_year, inventory[19].car_year, inventory[20].car_year, inventory[21].car_year, inventory[22].car_year, inventory[23].car_year, inventory[24].car_year, inventory[25].car_year, inventory[26].car_year, inventory[27].car_year, inventory[28].car_year, inventory[29].car_year, inventory[30].car_year, inventory[31].car_year, inventory[32].car_year, inventory[33].car_year, inventory[34].car_year, inventory[35].car_year, inventory[36].car_year, inventory[37].car_year, inventory[38].car_year, inventory[39].car_year, inventory[40].car_year, inventory[41].car_year, inventory[42].car_year, inventory[43].car_year, inventory[44].car_year, inventory[45].car_year, inventory[46].car_year, inventory[47].car_year, inventory[48].car_year, inventory[49].car_year];
console.log(carsYear.sort());

// ==== Challenge 5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the carYears array you just created, find out how many cars were made before the year 2000 by populating the array oldCars and logging it's length.
if (carsYear[0] < 2000){console.log(carsYear[0])}
if (carsYear[1] < 2000){console.log(carsYear[1])}
if (carsYear[2] < 2000){console.log(carsYear[2])}
if (carsYear[3] < 2000){console.log(carsYear[3])}
if (carsYear[4] < 2000){console.log(carsYear[4])}
if (carsYear[5] < 2000){console.log(carsYear[5])}
if (carsYear[6] < 2000){console.log(carsYear[6])}
if (carsYear[7] < 2000){console.log(carsYear[7])}
if (carsYear[8] < 2000){console.log(carsYear[8])}
if (carsYear[9] < 2000){console.log(carsYear[9])}
if (carsYear[10] < 2000){console.log(carsYear[10])}
if (carsYear[11] < 2000){console.log(carsYear[11])}
if (carsYear[12] < 2000){console.log(carsYear[12])}
if (carsYear[13] < 2000){console.log(carsYear[13])}
if (carsYear[14] < 2000){console.log(carsYear[14])}
if (carsYear[15] < 2000){console.log(carsYear[15])}
if (carsYear[16] < 2000){console.log(carsYear[16])}
if (carsYear[17] < 2000){console.log(carsYear[17])}
if (carsYear[18] < 2000){console.log(carsYear[18])}
if (carsYear[19] < 2000){console.log(carsYear[19])}
if (carsYear[20] < 2000){console.log(carsYear[20])}
if (carsYear[21] < 2000){console.log(carsYear[21])}
if (carsYear[22] < 2000){console.log(carsYear[22])}
if (carsYear[23] < 2000){console.log(carsYear[23])}
if (carsYear[24] < 2000){console.log(carsYear[24])}
if (carsYear[25] < 2000){console.log(carsYear[25])}
if (carsYear[26] < 2000){console.log(carsYear[26])}
if (carsYear[27] < 2000){console.log(carsYear[27])}
if (carsYear[28] < 2000){console.log(carsYear[28])}
if (carsYear[29] < 2000){console.log(carsYear[29])}
if (carsYear[30] < 2000){console.log(carsYear[30])}
if (carsYear[31] < 2000){console.log(carsYear[31])}
if (carsYear[32] < 2000){console.log(carsYear[32])}
if (carsYear[33] < 2000){console.log(carsYear[33])}
if (carsYear[34] < 2000){console.log(carsYear[34])}
if (carsYear[35] < 2000){console.log(carsYear[35])}
if (carsYear[36] < 2000){console.log(carsYear[36])}
if (carsYear[37] < 2000){console.log(carsYear[37])}
if (carsYear[38] < 2000){console.log(carsYear[38])}
if (carsYear[39] < 2000){console.log(carsYear[39])}
if (carsYear[40] < 2000){console.log(carsYear[40])}
if (carsYear[41] < 2000){console.log(carsYear[41])}
if (carsYear[42] < 2000){console.log(carsYear[42])}
if (carsYear[43] < 2000){console.log(carsYear[43])}
if (carsYear[44] < 2000){console.log(carsYear[44])}
if (carsYear[45] < 2000){console.log(carsYear[45])}
if (carsYear[46] < 2000){console.log(carsYear[46])}
if (carsYear[47] < 2000){console.log(carsYear[47])}
if (carsYear[48] < 2000){console.log(carsYear[48])}
if (carsYear[49] < 2000){console.log(carsYear[49])}

// ==== Challenge 6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory. Return an array that only contains BMW and Audi cars.  Once you have populated the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
let BMWAndAudi = inventory[7, 24, 29, 43, 44];
console.log();
console.log(JSON.stringify(BMWAndAudi));