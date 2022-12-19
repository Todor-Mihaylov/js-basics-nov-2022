function balls(input) {
    let index = 0;
    let numberOfBalls = Number(input[index]);
    index++;

    let redBall = 0;
    let orangeBall = 0;
    let yellowBall = 0;
    let whiteBall = 0;
    let otherColors = 0;
    let totalPoints = 0;
    let dividesFromBlackBalls = 0;

    for (let i = 1; i <= numberOfBalls; i++) {
        let color = input[index];

        if (color === "red") {
            redBall++;
            totalPoints += 5;
        } else if (color === "orange") {
            orangeBall++;
            totalPoints += 10;
        } else if (color === "yellow") {
            yellowBall++;
            totalPoints += 15;
        } else if (color === "white") {
            whiteBall++;
            totalPoints += 20;
        } else if (color === "black") {
            totalPoints = Math.floor(totalPoints / 2);
            dividesFromBlackBalls++;
        } else {
            totalPoints = totalPoints;
            otherColors++;
        }

        color = input[index];
        index++;
    }

    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBall}`);
    console.log(`Orange balls: ${orangeBall}`);
    console.log(`Yellow balls: ${yellowBall}`);
    console.log(`White balls: ${whiteBall}`);
    console.log(`Other colors picked: ${otherColors}`);
    console.log(`Divides from black balls: ${dividesFromBlackBalls}`);
}

balls(["3", "white", "black", "pink"]);
