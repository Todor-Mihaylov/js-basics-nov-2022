function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
    
    let pricePerFlower = 0;

    switch (flowerType) {
        case "Roses":
            pricePerFlower = 5;
            break;
        case "Dahlias":
            pricePerFlower = 3.80;
            break;
        case "Tulips":
            pricePerFlower = 2.80;
            break;
        case "Narcissus":
            pricePerFlower = 3;
            break;
        case "Gladiolus":
            pricePerFlower = 2.50;
            break;
    }

    let totalPrice = flowerCount * pricePerFlower;

    if (flowerType === "Roses" && flowerCount > 80) {
        totalPrice = totalPrice * 0.90;
    } else if (flowerType === "Dahlias" && flowerCount > 90) {
        totalPrice = totalPrice * 0.85;
    } else if (flowerType === "Tulips" && flowerCount > 80) {
        totalPrice = totalPrice * 0.85;
    } else if (flowerType === "Narcissus" && flowerCount < 120) {
        totalPrice = totalPrice * 1.15;
    } else if (flowerType === "Gladiolus" && flowerCount < 80) {
        totalPrice = totalPrice * 1.20;
    } 

    if (budget >= totalPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`)
    }
}

    newHouse(["Roses", "55", "250"]);