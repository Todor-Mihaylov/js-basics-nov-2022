function tennisRanklist(input) {
    let numberOfTournaments = Number(input[0]);
    let startPoints = Number(input[1]);

    let finalPoints = startPoints;
    let wins = 0;

    for (let i = 2; i < input.length; i++) {
        if (input[i] === "W") {
            finalPoints += 2000;
            wins++;
        } else if (input[i] === "F") {
            finalPoints += 1200;
        } else if (input[i] === "SF") {
            finalPoints += 720;
        }

    }

    let averagePoints = (finalPoints - startPoints) / numberOfTournaments;

    console.log(`Final points: ${finalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${((wins / numberOfTournaments) * 100).toFixed(2)}%`);

}

tennisRanklist([
    "5", 
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
