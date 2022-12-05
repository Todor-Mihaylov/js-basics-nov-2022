function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let quantumThinner = Number(input[2]) * 5;
    let hoursForWork = Number(input[3]);
    let priceForNylon = (nylon + 2) * 1.50;
    let priceForPaint = (paint * 1.1) * 14.50;
    let pricePerBag = 0.40;
    let priceForMaterials = priceForNylon + priceForPaint + quantumThinner + pricePerBag;
    let priceForMasters = (priceForMaterials * 0.30) * hoursForWork;
    let totalPrice = priceForMaterials + priceForMasters;
    console.log(totalPrice);
    
}

repainting(["10","11","4","8"])

// Сума за найлон: (10 + 2) * 1.50 = 18 лв.
// Сума за боя: (11 + 10%) * 14.50 = 175.45 лв.
// Сума за разредител: 4 * 5.00 = 20.00 лв.
// Сума за торбички: 0.40 лв.
// Обща сума за материали: 18 + 175.45 + 20.00 + 0.40 = 213.85 лв.
// Сума за майстори: (213.85 * 30%) * 8 = 513.24 лв.
// Крайна сума: 213.85 + 513.24 = 727.09 лв.