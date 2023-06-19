//Request a user’s name and display the response “Hello, [name]”.

let name = prompt("Please enter your name:");

console.log("Hello, " + name);

//Request a user’s year of birth, count his age, and display the result. Store the current year as a constant. 

const currentYear = 2023;
const yearOfBirth = prompt("Enter your year of birth:");
const age = currentYear - yearOfBirth;

alert("Your age is: " + age);

//Request a length of a side of a square from a user and display the perimeter of the square. 

const sideLength = prompt("Enter the length of a side of the square:");
const perimeter = 4 * sideLength;

alert("The perimeter of the square is: " + perimeter);

//Request a radius of a circle and display the area of such a circle. 

const radius = prompt("Enter the radius of the circle:");
const area = Math.PI * Math.pow(radius, 2);

alert("The area of the circle is: " + area);

//Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time. 

const distance = prompt("Enter the distance between the two cities (in kilometers):");
const time = prompt("Enter the time you want to cover the distance within (in hours):");

const speed = distance / time;

alert("To reach your destination on time, you need to maintain a speed of " + speed + " km/h.");

//Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.

const exchangeRate = 0.92;

const usdAmount = prompt("Enter the amount in USD:");
let eurAmount = usdAmount * exchangeRate;
eurAmount = Math.round(eurAmount * 100) / 100;

alert("The equivalent amount in EUR is: " + eurAmount);

//A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive. 

const flashDriveSizeGB = prompt("Enter the memory size of the flash drive in GB:");
const flashDriveSizeMB = flashDriveSizeGB * 1024;
const fileSizMB = 820;
const numOfFiles = Math.floor(flashDriveSizeMB / fileSizMB);

alert("The flash drive can store " + numOfFiles + " files of 820MB each.");

//A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left. 

const walletAmount = prompt("Enter the amount of money in your wallet:");
const chocolatePrice = prompt("Enter the price of one chocolate bar:");

const numOfChocolates = Math.floor(walletAmount / chocolatePrice);
const change = walletAmount % chocolatePrice;

alert("You can buy " + numOfChocolates + " chocolate bars and have " + change + " left as change.");

//The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest.

const depositMonth1 = prompt("Enter the bank deposit for the first month:");
const depositMonth2 = prompt("Enter the bank deposit for the second month:");
const yearlyInterestRate = 0.05; // 5% anual

const totalDeposit = Number(depositMonth1) + Number(depositMonth2);
const interest = totalDeposit * yearlyInterestRate;

alert("The sum of interest for the bank deposits is: " + interest);