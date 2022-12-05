function skyTrip(input) {
    let stayDays = Number(input[0]);
    let typeOfRoom = input[1];
    let evaluation = input[2];
    
    let nights = stayDays - 1;
    let discount = 0;
    let priceWithDiscount = 0;
    let totalPrice = 0;

    if (typeOfRoom === "room for one person") {
        priceWithDiscount = nights * 18;
    
    } else if (typeOfRoom === "apartment") {
        if (stayDays < 10) {
            discount = 0.30;
            priceWithDiscount = nights * 25 * (1 - discount);

        } else if (stayDays >= 10 && stayDays <=15) {
            discount = 0.35;
            priceWithDiscount = nights * 25 * (1 - discount);

        } else if (stayDays > 15) {
            discount = 0.50;
            priceWithDiscount = nights * 25 * (1 - discount);
        }

    } else if (typeOfRoom === "president apartment") {
            if (stayDays < 10) {
                discount = 0.10;
                priceWithDiscount = nights * 35 * (1 - discount);

            } else if (stayDays >= 10 && stayDays <= 15) {
                discount = 0.15;
                priceWithDiscount = nights * 35 * (1 - discount);

            } else if (stayDays > 15) {
                discount = 0.20;
                priceWithDiscount = nights * 35 * (1 - discount);

            }
        }

        if (evaluation === "positive") {
            totalPrice = priceWithDiscount * (1 + 0.25);

        } else if (evaluation === "negative") {
            totalPrice = priceWithDiscount * (1 - 0.10);
        }

        console.log(totalPrice.toFixed(2));
    }


skyTrip(["30", "president apartment", "negative"]);
