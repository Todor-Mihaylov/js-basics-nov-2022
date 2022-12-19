function barcodeGenerator(input) {
    let firstNum = Number(input[0]);
    let lastNum = Number(input[1]);

    let firstNumStr = firstNum.toString();
    let firstNum1 = firstNumStr[0];
    let firstNum2 = firstNumStr[1];
    let firstNum3 = firstNumStr[2];
    let firstNum4 = firstNumStr[3];

    let lastNumStr = lastNum.toString();
    let lastNum1 = lastNumStr[0];
    let lastNum2 = lastNumStr[1];
    let lastNum3 = lastNumStr[2];
    let lastNum4 = lastNumStr[3];

    let result = "";
    let total = "";

    for (let firstN = firstNum1; firstN <= lastNum1; firstN++) {
        for (let secondN = firstNum2; secondN <= lastNum2; secondN++) {
            for (let thirdN = firstNum3; thirdN <= lastNum3; thirdN++) {
                for (let fourthN = firstNum4; fourthN <= lastNum4; fourthN++) {

                    if (firstN % 2 !== 0 && secondN % 2 !== 0 && thirdN % 2 !== 0 && fourthN % 2 !== 0) {
                        result = `${firstN}${secondN}${thirdN}${fourthN}`;
                        total += `${result} `;
                    }
                }
            }
        }
    }

    console.log(total);
}

barcodeGenerator(["2345", "6789"]);