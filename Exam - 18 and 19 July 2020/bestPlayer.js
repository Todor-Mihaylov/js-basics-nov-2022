function bestPlayer(input) {
    let index = 0;
    let playerName = input[index];

    let maxGoals = 0;
    let bestPlayer;

    while (playerName !== "END") {
        index++;
        let numberOfGoals = Number(input[index]);

        if (numberOfGoals > maxGoals) {
            maxGoals = numberOfGoals;
            bestPlayer = playerName;
        }

        if (maxGoals >= 10) {
            break;
        }
        index++;
        playerName = input[index];
    }

    console.log(`${bestPlayer} is the best player!`);
    if (maxGoals >= 3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${maxGoals} goals.`);
    }
}

bestPlayer(["Neymar", "2", "Ronaldo", "1", "Messi", "3", "END"]);