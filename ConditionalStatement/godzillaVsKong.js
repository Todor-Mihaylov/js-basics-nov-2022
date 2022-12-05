function godzillaVsKong(input) {
    let filmBudget = Number(input[0]);
    let numberOfStatists = Number(input[1]);
    let priceOfClothing = Number(input[2]);
    let decorForFilm = filmBudget * 0.10;
    let priceForStatists = numberOfStatists * priceOfClothing;

    if (numberOfStatists > 150) {
        priceForStatists = priceForStatists * 0.90;
    }
    
    let costOfTheFilm = decorForFilm + priceForStatists;
    
    if (costOfTheFilm > filmBudget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(costOfTheFilm - filmBudget).toFixed(2)} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(filmBudget - costOfTheFilm).toFixed(2)} leva left.`)
    }

    }
godzillaVsKong(["20000","120","55.5"])