function depositCalculator(input) {
let depositSum = Number(input[0]);
let depositTime = Number(input[1]);
let yearPercent = Number(input[2]) / 100;
let totalSum = depositSum + depositTime * ((depositSum * yearPercent) / 12);
console.log(totalSum);

}

depositCalculator(["200","3","5.7"])

// 1. Изчисляваме натрупаната лихва: 200 * 0.057 (5.7%) = 11.40 лв.
// 2. Изчисляваме лихвата за 1 месец: 11.40 лв. / 12 месеца = 0.95 лв.
// 3. Общата сума е: 200 лв. + 3 * 0.95 лв. = 202.85 лв.