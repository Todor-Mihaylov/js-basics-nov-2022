function basketballEquipment(input) {
let priceForTreining = Number(input[0]);
let priceForSneakers = priceForTreining * 0.60;
let priceForOutfit = priceForSneakers * 0.80;
let priceForBasketball = priceForOutfit * 0.25;
let priceForAccessories = priceForBasketball * 0.20;
let totalPrice = priceForTreining + priceForSneakers + priceForOutfit + priceForBasketball + priceForAccessories;
console.log(totalPrice);

}

basketballEquipment(["365"])

// Цена на тренировките за година: 365
// Цена на баскетболните кецове: 365 – 40% = 219
// Цена на баскетболен екип: 219 – 20% = 175.20
// Цена на баскетболна топка: 1 / 4 от 175.20 = 43.80
// Цена на баскетболни аксесоари: 1 /  5 от 43.80 = 8.76
// Обща цена за екипировката: 365 + 219 + 175.20 + 43.80 + 8.76 = 811.76