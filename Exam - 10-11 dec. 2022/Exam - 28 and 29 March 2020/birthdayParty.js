function birthdayParty(rentForHall) {

    let priceForCake = rentForHall * 0.20;
    let priceForDrinks = priceForCake * 0.55;
    let priceForAnimator = rentForHall / 3;

    let totalPrice = rentForHall + priceForCake + priceForDrinks + priceForAnimator;

    console.log(totalPrice);
}

birthdayParty(2250);