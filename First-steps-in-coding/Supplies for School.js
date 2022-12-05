function suppliesForSchool(input) {
    let packetsOfPen = Number(input[0]) * 5.80;
    let packetsOfMarkers = Number(input[1]) * 7.20;
    let litersOfDetergent = Number(input[2]) * 1.20;
    let percentDiscount = Number(input[3]) / 100;
    let priceForMaterials = packetsOfPen + packetsOfMarkers + litersOfDetergent;
    let totalPrice = priceForMaterials - (priceForMaterials * percentDiscount);
console.log(totalPrice);

}

suppliesForSchool(["2","3","4","25"])

// Цена на пакетите химикали => 2 * 5.80 = 11.60 лв.
// Цена на пакетите маркери => 3 * 7.20 = 21.60 лв.
// Цена на препарата => 4 * 1.20 = 4.80 лв.
// Цена за всички материали => 11.60 + 21.60 + 4.80 = 38.00 лв.
// 25% = 0.25
// Цена с намаление = 38.00 – (38.00 * 0.25) = 28.50 лв.