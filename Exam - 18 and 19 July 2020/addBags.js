function addBags(input) {
    let priceOfLuggage = Number(input[0]);
    let luggageKilograms = Number(input[1]);
    let daysUntilTheTrip = Number(input[2]);
    let numberOfLuggage = Number(input[3]);

    if (luggageKilograms < 10) {
        priceOfLuggage *= 0.20;
    } else if (luggageKilograms >= 10 && luggageKilograms <=20) {
        priceOfLuggage *= 0.50;
    } else if (luggageKilograms > 20) {
        priceOfLuggage = priceOfLuggage;
    }

    if (daysUntilTheTrip > 30) {
        priceOfLuggage = priceOfLuggage + (priceOfLuggage *0.10);
    } else if (daysUntilTheTrip >= 7 && daysUntilTheTrip <= 30) {
        priceOfLuggage = priceOfLuggage + (priceOfLuggage * 0.15);
    } else if (daysUntilTheTrip < 7) {
        priceOfLuggage = priceOfLuggage + (priceOfLuggage * 0.40);
    }

    let totalPrice = priceOfLuggage * numberOfLuggage;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv. `);
}

addBags(["63.80", "23", "3", "1"]);

