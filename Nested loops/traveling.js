function traveling(input) {
    let index = 0;
    let destination = input[index];
    index++;
    let moneyNeeded = Number(input[index]);
    index++;
    let sum = 0;
    let isEnd = false;

    while (destination !== "End") {
            while (moneyNeeded > sum) {
                let saveMoney = input[index];
                if (saveMoney !== "End") {
                    saveMoney = Number(input[index]);
                } else {
                    isEnd = true;
                    break;
                }
                index++;
                sum += saveMoney;
            }
            if (isEnd) {
                break;
            }
            console.log(`Going to ${destination}!`);

            destination = input[index];
            index++;
            moneyNeeded = Number(input[index]);
            index++;
            sum = 0;
    }
}


traveling([
    "Greece",
    "1000",
    "200",
    "200",
    "300",
    "100",
    "150",
    "240",
    "Spain",
    "1200",
    "300",
    "500",
    "193",
    "423",
    "End"]);