function mountainRun(input) {
    let recordInSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timeInSeconds = Number(input[2]);

    let timeClaiming = distanceMeters * timeInSeconds;
    let totalTime = timeClaiming + Math.floor(distanceMeters / 50) * 30;

    if (totalTime < recordInSeconds) {
        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else if (totalTime >= recordInSeconds) {
        let timeNeeded = totalTime - recordInSeconds;
        console.log(`No! He was ${timeNeeded.toFixed(2)} seconds slower.`);
    }
}

mountainRun(["1377", "389", "3"]);
