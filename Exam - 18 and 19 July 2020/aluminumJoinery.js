function aluminumJoinery(input) {
    let numberOfWindows = Number(input[0]);
    let typeOfWindowFrames = input[1];
    let methodOfReceipt = input[2];

    let priceForWindows = 0;
    let delivery = 60;
    let totalPrice = 0;

    switch (typeOfWindowFrames) {
        case "90X130":
            priceForWindows = numberOfWindows * 110;
            if (numberOfWindows >= 30 && numberOfWindows < 60) {
                priceForWindows = priceForWindows - (priceForWindows * 0.05);
            } else if (numberOfWindows >= 60) {
                priceForWindows = priceForWindows - (priceForWindows * 0.08);
            }
            break;
        case "100X150":
            priceForWindows = numberOfWindows * 140;
            if (numberOfWindows >= 40 && numberOfWindows < 80) {
                priceForWindows = priceForWindows - (priceForWindows * 0.06);
            } else if (numberOfWindows >= 80) {
                priceForWindows = priceForWindows - (priceForWindows * 0.10);
            }
            break;
        case "130X180":
            priceForWindows = numberOfWindows * 190;
            if (numberOfWindows >= 20 && numberOfWindows < 50) {
                priceForWindows = priceForWindows - (priceForWindows * 0.07);
            } else if (numberOfWindows >= 50) {
                priceForWindows = priceForWindows - (priceForWindows * 0.12);
            }
            break;
        case "200X300":
            priceForWindows = numberOfWindows * 250;
            if (numberOfWindows >= 25 && numberOfWindows < 50) {
                priceForWindows = priceForWindows - (priceForWindows * 0.09);
            } else if (numberOfWindows >= 50) {
                priceForWindows = priceForWindows - (priceForWindows * 0.14);
            }
            break;
            
    }

    if (methodOfReceipt === "With delivery") {
        totalPrice = priceForWindows + delivery;
    } else if (methodOfReceipt === "Without delivery") {
        totalPrice = priceForWindows;
    }

    if (numberOfWindows < 10) {
        console.log("Invalid order");
    } else if (numberOfWindows >= 10 && numberOfWindows <= 99) {
        console.log(`${totalPrice.toFixed(2)} BGN`);
    } else if (numberOfWindows > 99) {
        totalPrice = totalPrice - (totalPrice * 0.04);
        console.log(`${totalPrice.toFixed(2)} BGN`);
    }

}

aluminumJoinery(["40", "90X130", "Without delivery"]);