let units = 120; // Change value to test
let bill = 0;

if (units <= 50) {
    bill = units * 2;
} else if (units <= 150) {
    bill = units * 4;
} else {
    bill = units * 6;
}

console.log(`Total Electricity Bill: ₹${bill}`);