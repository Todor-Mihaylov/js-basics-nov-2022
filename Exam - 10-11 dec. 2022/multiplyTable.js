function multiplyTable(input) {
    let numbers = input[0];

    let firstNum = Number(numbers[0]);
    let secondNum = Number(numbers[1]);
    let thirdNum = Number(numbers[2]);

    for (let x = 1; x <= thirdNum ; x++) {
        for (let x1 = 1; x1 <= secondNum; x1++ ) {
            for (let x2 = 1; x2 <= firstNum; x2++) {
                let result = x * x1 * x2;
                console.log(`${x} * ${x1} * ${x2} = ${result};`);
            }
        } 
    }
}

multiplyTable(["324"]);