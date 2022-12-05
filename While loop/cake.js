function cake(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let numberOfPieces = input[index];
    index++;

    let cakeSize = width * length;

    while (numberOfPieces !== "STOP") {
        numberOfPieces = Number(numberOfPieces);
        
        cakeSize -= numberOfPieces;

        if (cakeSize <= 0) {
            console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`);
            return;
        }
        numberOfPieces = input[index];
        index++;

    }

    console.log(`${cakeSize} pieces are left.`);

}

cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);