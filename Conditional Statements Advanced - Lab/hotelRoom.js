function hotelRoom(input) {
    let month = input[0];
    let numberOfNights = Number(input[1]);
    let priceForStudio = 0;
    let priceForApartment = 0;

    switch (month) {
        case "May":
        case "October":
            priceForStudio = 50;
            priceForApartment = 65;
        if (numberOfNights > 7 && numberOfNights <=14) {
            priceForStudio = 0.95 * priceForStudio;
        } else if (numberOfNights > 14) {
            priceForStudio = 0.70 * priceForStudio;
            priceForApartment = 0.90 * priceForApartment;
        }
        break;

        case "June":
        case "September":
            priceForStudio = 75.20;
            priceForApartment = 68.70;
        if (numberOfNights > 14) {
            priceForStudio = 0.80 * priceForStudio;
            priceForApartment = 0.90 * priceForApartment;
        }
        break;
        case "July":
        case "August":
            priceForStudio = 76;
            priceForApartment = 77;
        if (numberOfNights > 14) {
            priceForApartment = 0.90 * priceForApartment;
        }
        break;

    }
    let totalPriceForApartment = numberOfNights * priceForApartment;
    console.log(`Apartment: ${totalPriceForApartment.toFixed(2)} lv.`);
    let totalPriceForStudio = numberOfNights * priceForStudio;
    console.log(`Studio: ${totalPriceForStudio.toFixed(2)} lv.`);

}

hotelRoom(["May", "15"]);
