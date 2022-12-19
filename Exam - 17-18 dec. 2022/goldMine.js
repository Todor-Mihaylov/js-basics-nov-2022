function goldMine(input) {
    let index = 0;
    let numberOfLocations = Number(input[0]);
    index++;

    for (let i = 1; i <= numberOfLocations; i++) {
        let expectedAverageYield = Number(input[index]);
        index++;
        let numberOfDays = Number(input[index]);
        index++;
        let yieldForDay = 0;

        for (let j = 1; j <= numberOfDays; j++) {
            let dayYield = Number(input[index]);
            index++;
            yieldForDay += dayYield
        }

        let averageYieldForLocation = yieldForDay / numberOfDays;

        if (averageYieldForLocation >= expectedAverageYield) {
            console.log(`Good job! Average gold per day: ${averageYieldForLocation.toFixed(2)}.`);
        } else if (averageYieldForLocation < expectedAverageYield) {
            let goldNeeded = expectedAverageYield - averageYieldForLocation;
            console.log(`You need ${goldNeeded.toFixed(2)} gold.`);
        }
    }

}

goldMine([
    "2",
    "10",
    "3",
    "10",
    "10",
    "11",
    "20",
    "2",
    "20",
    "10"]);