function tournamentOfChristmas(input) {
    let index = 0;
    let tournamentDays = Number(input[index]);
    index++;
    let sport = input[index];
    index++;
    let result = input[index];
    index++;

    let earnMoney = 0;
    let totalEarnMoney = 0;
    let winGamesCount = 0;
    let loseGamesCount = 0;
    let daysCount = 0
    let dayEarnMoney = 0
    let totalWinGames = 0;
    let totalLoseGames = 0;

    for (let i = 1; i <= tournamentDays; i++) {
        if (daysCount >= tournamentDays) {
            break;
        }
        while (sport !== "Finish") {
            
            if (result === "win") {
                earnMoney = 20;
                totalEarnMoney += earnMoney;
                winGamesCount++;
                totalWinGames++;
            } else if (result === "lose") {
                loseGamesCount++;
                totalLoseGames++;
            }
            sport = input[index];
            index++;
            
            if (sport === "Finish") {
                break;
            } else {
                result = input[index];
            index++;
            }
    
        }

        if (winGamesCount >= loseGamesCount) {
            dayEarnMoney += totalEarnMoney * 1.1;
            daysCount++;
            sport = input[index];
            index++;
            result = input[index];
            index++;
            totalEarnMoney = 0;
        } else {
            dayEarnMoney += totalEarnMoney;
            daysCount++;
            sport = input[index];
            index++;
            result = input[index];
            index++;
            totalEarnMoney = 0;

        }
        if (daysCount < tournamentDays) {
            winGamesCount = 0;
            loseGamesCount = 0;
        }

    }

    if (totalWinGames > totalLoseGames) {
        let totalMoney = dayEarnMoney + (dayEarnMoney * 0.20);
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        totalMoney = dayEarnMoney;
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }

}

tournamentOfChristmas(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"]);