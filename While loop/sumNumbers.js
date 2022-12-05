function sumNumbers(input) {
    let num = Number(input[0]);
    let sum = 0;
    let index = 1;

    while (sum < num) {
        let currentNumber = Number(input[index]);
        sum = sum + currentNumber;
        index++;
    }
    console.log(sum);
}

sumNumbers([
    "100",
    "10",
    "20",
    "30",
    "40"])
