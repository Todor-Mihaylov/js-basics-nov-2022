function fitnessCard(input) {
    let moneyOnHand = Number(input[0]);
    let gender = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let sportPrice = 0;

    if (gender === "m" && sport === "Gym") {
        sportPrice = 42;
    } else if (gender === "m" && sport === "Boxing") {
        sportPrice = 41;
    } else if (gender === "m" && sport === "Yoga") {
        sportPrice = 45;
    } else if (gender === "m" && sport === "Zumba") {
        sportPrice = 34;
    } else if (gender === "m" && sport === "Dances") {
        sportPrice = 51;
    } else if (gender === "m" && sport === "Pilates") {
        sportPrice = 39;
    } else if (gender === "f" && sport === "Gym") {
        sportPrice = 35;
    } else if (gender === "f" && sport === "Boxing") {
        sportPrice = 37;
    } else if (gender === "f" && sport === "Yoga") {
        sportPrice = 42;
    } else if (gender === "f" && sport === "Zumba") {
        sportPrice = 31;
    } else if (gender === "f" && sport === "Dances") {
        sportPrice = 53;
    } else if (gender === "f" && sport === "Pilates") {
        sportPrice = 37;
    }

    if (age <= 19) {
        sportPrice = sportPrice * 0.80;
    }
    
    if (sportPrice <= moneyOnHand) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else if (sportPrice > moneyOnHand) {
        let moneyNeeded = sportPrice - moneyOnHand;
        console.log(`You don't have enough money! You need $${moneyNeeded.toFixed(2)} more.`);
    }
}

fitnessCard(["20",
"f",
"15",
"Yoga"])
