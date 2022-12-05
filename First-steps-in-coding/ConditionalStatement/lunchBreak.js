function lunchBreak(input) {
    let nameOfFilm = input[0];
    let episodeDuration = Number(input[1]);
    let restTime = Number(input[2]);

    let lunchTime = (1 / 8) * restTime;
    let leisureTime = (1 / 4) * restTime;

    let busyTime = lunchTime + leisureTime;
    let timeLeft = restTime - busyTime;

    if (timeLeft >= episodeDuration) {
        let timeAfterMovie = timeLeft - episodeDuration;
        console.log(`You have enough time to watch ${nameOfFilm} and left with ${Math.ceil(timeAfterMovie)} minutes free time.`);
    } else {
        let timeNeeded = episodeDuration - timeLeft;
        console.log(`You don't have enough time to watch ${nameOfFilm}, you need ${Math.ceil(timeNeeded)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf", "48", "60"]);