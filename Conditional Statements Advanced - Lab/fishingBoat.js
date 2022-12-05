function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherCount = Number(input[2]);
    let priceForBoat = 0;

    switch(season) {
        case "Spring":
            if (season === "Spring") {
                priceForBoat = 3000;
            } 
            break;

        case "Summer":
        case "Autumn":
            if (season === "Summer" || season === "Autumn") {
                priceForBoat = 4200;
            }
            break;

        case "Winter":
            if (season === "Winter") {
                priceForBoat = 2600;
            }
            break;
        }

        if (fisherCount <= 6) {
            priceForBoat = priceForBoat * 0.90;
        
        } else if (fisherCount <=11) {
            priceForBoat = priceForBoat * 0.85;
        
        } else if (fisherCount >= 12) {
            priceForBoat = priceForBoat * 0.75;

        } 
        
        if (fisherCount % 2 === 0 && season !== "Autumn") {
            priceForBoat = 0.95 * priceForBoat;
        }

        if (budget >= priceForBoat) {
            let totalPrice = budget - priceForBoat;
            console.log(`Yes! You have ${totalPrice.toFixed(2)} leva left.`) ;
        } else {
            let moneyNeeded = priceForBoat - budget;
            console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva.`);
        }
}

fishingBoat(["3000", "Summer", "11"]);
