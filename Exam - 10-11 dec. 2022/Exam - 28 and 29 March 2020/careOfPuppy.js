function careOfPuppy(input) {
    let index = 0;
    let kilogramFood = input[index];
    index++;

    let foodInGrams = kilogramFood * 1000;
    let eatingFood = 0;

    while (kilogramFood !== "Adopted") {
        kilogramFood = Number(input[index]);
        index++
        
        eatingFood += kilogramFood;

        kilogramFood = input[index];

    }

        if (eatingFood <= foodInGrams) {
        let foodLeft = foodInGrams - eatingFood;
        console.log(`Food is enough! Leftovers: ${foodLeft} grams.`);
        } else {
        let foodNeeded = eatingFood - foodInGrams;
        console.log(`Food is not enough. You need ${foodNeeded} grams more.`);
        }
}

careOfPuppy(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])

