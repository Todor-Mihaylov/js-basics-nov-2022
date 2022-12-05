function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let profit = 0;

    if (type == "Premiere") {
        profit = rows * columns * 12.00;
    } else if (type == "Normal") {
        profit = rows * columns * 7.50;
    } else if (type == "Discount") {
        profit = rows * columns * 5.00;
    }
    console.log(`${profit.toFixed(2)} leva`);
}

cinema(["Premiere", "10", "12"]);