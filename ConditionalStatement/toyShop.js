function toyShop(input) {
let priceForExcursion = Number(input[0]);
let numberOfPuzzels = Number(input[1]);
let numberOfTolkingDolls = Number(input[2]);
let numberOfTeddyBears = Number(input[3]);
let numberOfMinions = Number(input[4]);
let numberOfToyTrucks = Number(input[5]);
let moneyEarned = numberOfPuzzels * 2.60 + numberOfTolkingDolls * 3 + numberOfTeddyBears * 4.10 + numberOfMinions * 8.20 + numberOfToyTrucks * 2;
let toysCount = numberOfPuzzels + numberOfTolkingDolls + numberOfTeddyBears + numberOfMinions + numberOfToyTrucks;

if (toysCount >= 50) {
    moneyEarned = moneyEarned * 0.75;
}   
 
let moneyAfterRent = moneyEarned * 0.90;

if (moneyAfterRent >= priceForExcursion) {
    let moneyLeft = moneyAfterRent - priceForExcursion;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
} else {
    let insufficientMoney = priceForExcursion - moneyAfterRent;
    console.log(`Not enough money! ${insufficientMoney.toFixed(2)} lv needed.`)
}

}

toyShop(["320", "8", "2", "5", "5", "1"]);