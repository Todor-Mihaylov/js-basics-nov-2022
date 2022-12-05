function shopping(input) {
    let budget = Number(input[0]);
    let numberOfVideoCards = Number(input[1]);
    let numberOfProcessors = Number(input[2]);
    let numberOfRam = Number(input[3]);

    let priceForVideoCards = numberOfVideoCards * 250;
    let processorPrice = priceForVideoCards * 0.35 * numberOfProcessors;
    let ramPrice = priceForVideoCards * 0.10 * numberOfRam;
    let totalPrice = priceForVideoCards + processorPrice + ramPrice;


    if (numberOfVideoCards > numberOfProcessors) {
        totalPrice = totalPrice * 0.85;
    }
    
    if (totalPrice <= budget) {
        let moneyLeft = budget - totalPrice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`);
    } else if (totalPrice > budget) {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);

    }

}

shopping(["900", "2", "1", "3"])