function braceletStand(input) {
    let pocketMoneyPerDay = Number(input[0]);
    let moneyWinForDay = Number(input[1]);
    let expenses = Number(input[2]);
    let presentPrice = Number(input[3]);
    
    let pocketMoneySaved = pocketMoneyPerDay * 5;
    let moneyWin = moneyWinForDay * 5;
    let spendMoney = pocketMoneySaved + moneyWin;
    let totalSpendMoney = spendMoney - expenses;

    if (totalSpendMoney >= presentPrice) {
        console.log(`Profit: ${totalSpendMoney.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        let moneyNeeded = presentPrice - totalSpendMoney;
        console.log(`Insufficient money: ${moneyNeeded.toFixed(2)} BGN.`);
    }
}

braceletStand(["2.10",
"17.50",
"20.20",
"148.50"])

