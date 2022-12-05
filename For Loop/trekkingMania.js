function trekkingMania(input) {
    let numberOfGroups = Number(input[0]);
    let numOfPeople = Number(input[1]);
    
    let Musala = 0;
    let Montblanc = 0;
    let Kilimanjaro = 0;
    let K2 = 0;
    let Everest = 0;
    let sumOfPeople = 0;

    for (let i = 1; i <= numberOfGroups; i++) {
        numOfPeople = Number(input[i]);

        if (numOfPeople <= 5) {
          Musala += numOfPeople;
        } else if (numOfPeople >= 6 && numOfPeople <= 12) {
            Montblanc += numOfPeople;
        } else if (numOfPeople >=13 && numOfPeople <=25) {
            Kilimanjaro += numOfPeople;
        } else if (numOfPeople >= 26 && numOfPeople <= 40) {
           K2 += numOfPeople;
        } else if (numOfPeople >=41) {
            Everest += numOfPeople;
        }

    }

    sumOfPeople = Musala + Montblanc + Kilimanjaro + K2 + Everest;
    
    let parcentMusala = Musala / sumOfPeople * 100;
    let parcentMontblanc = Montblanc / sumOfPeople * 100;
    let parcentKilimanjaro = Kilimanjaro / sumOfPeople * 100;
    let parcentK2 = K2 / sumOfPeople * 100;
    let parcentEverest = Everest / sumOfPeople * 100;

    console.log(`${parcentMusala.toFixed(2)}%`);
    console.log(`${parcentMontblanc.toFixed(2)}%`);
    console.log(`${parcentKilimanjaro.toFixed(2)}%`);
    console.log(`${parcentK2.toFixed(2)}%`);
    console.log(`${parcentEverest.toFixed(2)}%`);

}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
