function coins(input) {
    let totalSum = Number(input[0]);
    let balanceLeft = Math.round(totalSum * 100);
    let coinsUsed = 0;


    while (balanceLeft > 0) {

        if (balanceLeft >= 200) {
            balanceLeft -= 200;
            coinsUsed++;
        } else if (balanceLeft >= 100) {
            balanceLeft -= 100;
            coinsUsed++;
        } else if (balanceLeft >= 50) {
            balanceLeft -= 50;
            coinsUsed++;
        } else if (balanceLeft >=20) {
            balanceLeft -= 20;
            coinsUsed++;
        } else if (balanceLeft >= 10) {
            balanceLeft -= 10;
            coinsUsed++;
        } else if (balanceLeft >= 5) {
            balanceLeft -= 5;
            coinsUsed++;
        } else if (balanceLeft >= 2) {
            balanceLeft -= 2;
            coinsUsed++
        } else if (balanceLeft >= 1) {
            balanceLeft -= 1;
            coinsUsed++;
        }
    }

    console.log(coinsUsed); 

}

coins(["1.23"]);