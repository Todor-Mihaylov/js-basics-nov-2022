function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let spendMoney;
    let kindOfVacation;
    
    switch (season) {
        
        case "summer":
            if (budget <= 100) {
                spendMoney = 0.30 * budget;
                destination = "Bulgaria";
                kindOfVacation = "Camp";
            } else if (budget <= 1000) {
                spendMoney = 0.40 * budget;
                destination = "Balkans";
                kindOfVacation = "Camp";
            }
            break;
        case "winter":
            if (budget <= 100) {
                spendMoney = 0.70 * budget;
                destination = "Bulgaria";
                kindOfVacation = "Hotel";

            } else if (budget <= 1000) {
                spendMoney = 0.80 * budget;
                destination = "Balkans";
                kindOfVacation = "Hotel";
            }
            break;
        }

            if (budget > 1000) {
                spendMoney = 0.90 * budget;
                destination = "Europe";
                kindOfVacation = "Hotel";
            }
        console.log(`Somewhere in ${destination}`);
        console.log(`${kindOfVacation} - ${spendMoney.toFixed(2)}`);

}

journey(["1500", "summer"])