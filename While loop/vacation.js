function vacation(input) {
    let index = 0;
    
    let moneyNeeded = Number(input[index]);
    index++;
    
    let moneyAvailable = Number(input[index]);
    index++;
    
    let action = input[index];
    index++;
    
    let money = Number(input[index]);
    index++;

    let daysSpendCount = 0;
    let totalDays = 0;

    while (moneyAvailable < moneyNeeded) {
        totalDays++;

        if (action === "spend") {
            if (money > moneyAvailable) {
                moneyAvailable = 0;
            } else {
                moneyAvailable -= money;
            }

            daysSpendCount++;
        } else {
            moneyAvailable += money;
            daysSpendCount = 0;
        }

        if (daysSpendCount === 5) {
            console.log("You can't save the money.");
            console.log(totalDays);
            return;
        }

        action = input[index];
        index++;

        money = Number(input[index]);
        index++;
    }

    console.log(`You saved the money for ${totalDays} days.`);

}

vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"]);
