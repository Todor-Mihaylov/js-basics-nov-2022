function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minutesOfArrival = Number(input[3]);
    
    let totalExamMinutes = examHour * 60 + examMinute;
    let totalArrivalMinutes = hourOfArrival * 60 + minutesOfArrival;

    let totalMinutesDiff = Math.abs(totalExamMinutes - totalArrivalMinutes);
    let hoursDiff = Math.floor(totalMinutesDiff / 60);
    let minutesDiff = totalMinutesDiff % 60;

    let timeDiff = "";

    if (hoursDiff > 0) {
        if (minutesDiff < 10) {
            timeDiff = `${hoursDiff}:0${minutesDiff}`;
        } else {
            timeDiff = `${hoursDiff}:${minutesDiff}`;
        }
    } else {
        timeDiff = minutesDiff;
    }

    if (totalArrivalMinutes < totalExamMinutes) {
        if (totalMinutesDiff <= 30) {
            console.log("On time");
            console.log(`${timeDiff} minutes before the start`);
        } else {
            console.log("Early");

            if (totalMinutesDiff < 60) {
                console.log(`${timeDiff} minutes before the start`);
            } else {
                console.log(`${timeDiff} hours before the start`);
            }
        }
    } else if (totalArrivalMinutes > totalExamMinutes) {
        console.log("Late");
        
        if (totalMinutesDiff < 60) {
            console.log(`${timeDiff} minutes after the start`);
        } else {
            console.log(`${timeDiff} hours after the start`);
        
        }
    } else {
        console.log("On time");
    }
}

onTimeForTheExam(["9", "30", "9", "50"]);
