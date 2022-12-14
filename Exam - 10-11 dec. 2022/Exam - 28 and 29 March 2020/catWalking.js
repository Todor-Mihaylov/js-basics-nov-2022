function catWalking(input) {
    let minutesOfWalkingPerDay = Number(input[0]);
    let numberOfWalkings = Number(input[1]);
    let caloriesPerDay = Number(input[2]);
    let caloriesPerMinuet = 5;
    let totalBurnCalories = (minutesOfWalkingPerDay * numberOfWalkings) * caloriesPerMinuet;

    if (totalBurnCalories >= (caloriesPerDay / 2)) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalBurnCalories}.`);
    } else if (totalBurnCalories < (caloriesPerDay / 2)) {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalBurnCalories}.`);
    }

}

catWalking(["40", "2", "300"]);
