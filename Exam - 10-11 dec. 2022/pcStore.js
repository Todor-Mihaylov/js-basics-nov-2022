function pcStore(input) {
    let dollarPriceForProcessor = Number(input[0]);
    let dollarPriceForVideoCard = Number(input[1]);
    let dollarPriceForRam = Number(input[2]);
    let numbersOfRam = Number(input[3]);
    let percentDiscount = Number(input[4]);
    
    let dollarPrice = 1.57;
    let processorPrice = dollarPriceForProcessor * dollarPrice;
    let videoCardPrice = dollarPriceForVideoCard * dollarPrice;
    let ramPrice = dollarPriceForRam * dollarPrice * numbersOfRam;
    let discountForProcessor = processorPrice - (processorPrice * percentDiscount);
    let discountForVideoCard = videoCardPrice - (videoCardPrice * percentDiscount);
    let moneyNeeded = discountForProcessor + discountForVideoCard + ramPrice;

    console.log(`Money needed - ${moneyNeeded.toFixed(2)} leva.`);
}

pcStore([
    "500",
    "200",
    "80",
    "2",
    "0.05"
]);