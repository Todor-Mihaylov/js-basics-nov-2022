function christmasGifts(input) {
    let index = 0;
    let years = input[index];
    index++;

    let numberOfAdults = 0;
    let numberOfKids = 0;
    let moneyForToys = 5;
    let moneyForSweaters = 15;
    let totalMoneyForToys = 0;
    let totalMoneyForSweaters = 0

    while (years !== "Christmas") {
        years = Number(years);

        if (years <= 16) {
                numberOfKids++;
                totalMoneyForToys += moneyForToys;
        } else if (years > 16) {
                numberOfAdults++;
                totalMoneyForSweaters += moneyForSweaters
        }
        years = input[index];
        index++;
    
    }

    if (years === "Christmas") {
        console.log(`Number of adults: ${numberOfAdults}`);
        console.log(`Number of kids: ${numberOfKids}`);
        console.log(`Money for toys: ${totalMoneyForToys}`);
        console.log(`Money for sweaters: ${totalMoneyForSweaters}`);
    }
    
}

christmasGifts([
    "16",
    "20",
    "46",
    "12",
    "8",
    "20",
    "49",
    "Christmas"]);