function histogram(input) {
    let numCount = Number(input[0]);
    let currentNum = 0;

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for (let i = 1; i <= numCount; i++) {
        currentNum = input[i];

        if (currentNum < 200) {
            p1++;
        } else if (currentNum < 400) {
            p2++;
        } else if (currentNum < 600) {
            p3++;
        } else if (currentNum < 800) {
            p4++;
        } else {
            p5++;

        }
    }

    let p1Percent = (p1 / numCount) * 100;
    let p2Percent = (p2 / numCount) * 100;
    let p3Percent = (p3 / numCount) * 100;
    let p4Percent = (p4 / numCount) * 100;
    let p5Percent = (p5 / numCount) * 100;

    console.log(`${p1Percent.toFixed(2)}%`);
    console.log(`${p2Percent.toFixed(2)}%`);
    console.log(`${p3Percent.toFixed(2)}%`);
    console.log(`${p4Percent.toFixed(2)}%`);
    console.log(`${p5Percent.toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);
