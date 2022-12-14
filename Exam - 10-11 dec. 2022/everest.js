function everest(input) {
    let index = 0;
    let restCommand = input[index];
    index++;
    let metersClimbed = Number(input[index]);
    index++;

    let startMeters = 5364;
    let mountainMeters = 8848;
    let daysCount = 1;

    while (restCommand !== "END") {
        if (restCommand === "Yes") {
            daysCount++;
        }
        startMeters += metersClimbed;
        restCommand = input[index];
        index++;
        metersClimbed = Number(input[index]);
        index++;
        if (startMeters >= mountainMeters) {
            console.log(`Goal reached for ${daysCount} days!`);
            break;
        } else if (daysCount === 5 && startMeters < mountainMeters) {
            console.log("Failed!");
            console.log(`${startMeters}`);
            break;
        } 
    
    }
    
    if (restCommand === "END") {
        console.log("Failed!");
        console.log(`${startMeters}`);
    }

}

everest(["Yes",
"1254",
"Yes",
"1402",
"No",
"250",
"Yes",
"635"])



