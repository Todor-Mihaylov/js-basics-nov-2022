function invalidNumber(input) {
    let num = Number(input[0]);
    let isvalid = num >= 100 && num <= 200 || num === 0;

    if (!isvalid) {
        console.log("invalid")
}

}

invalidNumber(["-1"])