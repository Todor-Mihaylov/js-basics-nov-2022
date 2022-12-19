function miningRig(input) {
    let videoCardPrice = Number(input[0]);
    let transitionPrice = Number(input[1]);
    let consumedByCardPerDay = Number(input[2]);
    let profitFromOneCard = Number(input[3]);

    videoCardPrice *= 13;
    transitionPrice *= 13;
    let totalSpendMoney = videoCardPrice + transitionPrice + 1000;
    profitFromOneCard = profitFromOneCard - consumedByCardPerDay;
    let totalProfitForDay = 13 * profitFromOneCard;
    let paybackDays = totalSpendMoney / totalProfitForDay;

    console.log(`${totalSpendMoney}`);
    console.log(`${Math.ceil(paybackDays)}`);
}

miningRig(["700",
"15",
"0.20",
"2"])
