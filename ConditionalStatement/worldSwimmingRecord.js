function worldSwimmingRecord(input) {
    let recordSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeSeconds = Number(input[2]);
    
    let swimTime = distanceInMeters * timeSeconds;
    let waterResistance = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = swimTime + waterResistance;
    let diffrence = (totalTime - recordSeconds);

    if (totalTime < recordSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${(totalTime).toFixed(2)} seconds.`);
    } else if (totalTime >= recordSeconds) {
        console.log(`No, he failed! He was ${(diffrence).toFixed(2)} seconds slower.`);

    }

}

worldSwimmingRecord(["10464", "1500", "20"])