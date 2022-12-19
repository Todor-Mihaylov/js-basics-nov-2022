function andProcessors(input) {
    let numberOfProcessors = Number(input[0]);
    let numberOfEmployees = Number(input[1]);
    let workingDays = Number(input[2]);

    let madeProcessors = numberOfEmployees * workingDays * 8;
    let totalMadeProcessors = Math.floor(madeProcessors / 3);

    if (totalMadeProcessors >= numberOfProcessors) {
        let profit = (totalMadeProcessors - numberOfProcessors) * 110.10;
        console.log(`Profit: -> ${profit.toFixed(2)} BGN`);
    } else if (totalMadeProcessors < numberOfProcessors) {
        profit = (numberOfProcessors - totalMadeProcessors) * 110.10;
        console.log(`Losses: -> ${profit.toFixed(2)} BGN`);
    }


}

andProcessors(["150",
"7",
"18"])

