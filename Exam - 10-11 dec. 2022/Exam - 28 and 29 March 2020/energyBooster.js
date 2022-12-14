function energyBooster(input) {
    let fruit = input[0];
    let setSize = input[1];
    let numberOfSets = Number(input[2]);

    let fruitPrice = 0;

    if (fruit === "Watermelon" && setSize === "small") {
        fruitPrice = 56 * 2;
    } else if (fruit === "Mango" && setSize === "small") {
        fruitPrice = 36.66 * 2;
    } else if (fruit === "Pineapple" && setSize === "small") {
        fruitPrice = 42.10 * 2;
    } else if (fruit === "Raspberry" && setSize === "small") {
        fruitPrice = 20 * 2;
    } else if (fruit === "Watermelon" && setSize === "big") {
        fruitPrice = 28.70 * 5;
    } else if (fruit === "Mango" && setSize === "big") {
        fruitPrice = 19.60 * 5;
    } else if (fruit === "Pineapple" && setSize === "big") {
        fruitPrice = 24.80 * 5;
    } else if (fruit === "Raspberry" && setSize === "big") {
        fruitPrice = 15.20 * 5;
    }

        let totalPrice = numberOfSets * fruitPrice;

    if (totalPrice >= 400 && totalPrice <= 1000) {
        totalPrice = totalPrice * 0.85;
    } else if (totalPrice > 1000) {
        totalPrice = totalPrice * 0.50;
    }

    console.log(`${totalPrice.toFixed(2)} lv.`);


}

energyBooster(["Pineapple", "small", "1"]);
