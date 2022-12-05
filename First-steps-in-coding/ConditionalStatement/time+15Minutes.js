function timePlus15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let totaltime = hour * 60 + minutes;
    let timeAfter15Minutes = totaltime + 15;
    let hours = Math.floor(timeAfter15Minutes / 60);
    let newMinutes = timeAfter15Minutes % 60;

    if (hours === 24) {
        hours = 0
    }
    if (newMinutes < 10) {
        console.log(`${hours}:0${newMinutes}`);
} else {
        console.log(`${hours}:${newMinutes}`);
    }

}

timePlus15Minutes(["23", "59"])