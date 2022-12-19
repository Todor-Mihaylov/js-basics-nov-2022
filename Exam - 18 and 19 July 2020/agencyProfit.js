function agencyProfit(input) {
    let companyName = input[0];
    let numberOfTicketsForAdults = Number(input[1]);
    let numberOfTicketsForKids = Number(input[2]);
    let netPricePerAdultTicket = Number(input[3]);
    let priceOfService = Number(input[4]);

    let netPricePerKidsTicket = netPricePerAdultTicket * 0.30;
    let totalPricePerAdultTicket = netPricePerAdultTicket + priceOfService;
    let totalPriceForKidsTicket = netPricePerKidsTicket + priceOfService;
    let totalPriceForTickets = numberOfTicketsForKids * totalPriceForKidsTicket + numberOfTicketsForAdults * totalPricePerAdultTicket;
    let profit = totalPriceForTickets * 0.20;

    console.log(`The profit of your agency from ${companyName} tickets is ${profit.toFixed(2)} lv.`);
}

agencyProfit([
    "WizzAir",
    "15",
    "5",
    "120",
    "40"]);