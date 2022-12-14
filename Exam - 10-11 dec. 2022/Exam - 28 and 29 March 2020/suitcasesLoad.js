function suitcasesLoad(input) {
    let index = 0;
    let trunkCapacity = input[index];
    index++;
    let suitCaseVolume = Number(input[index]);
    index++

    let numberOfSuitCases = 0;
    let loadSuitcases = 0

    while (suitCaseVolume !== "End") {
        trunkCapacity = Number(trunkCapacity);

        numberOfSuitCases++;

        if (numberOfSuitCases % 3 === 0) {
            suitCaseVolume *= 1.1;
        }

       if (trunkCapacity < suitCaseVolume) {
            console.log("No more space!");
            console.log(`Statistic: ${loadSuitcases} suitcases loaded.`);

            return;
        }

        trunkCapacity -= suitCaseVolume;
        loadSuitcases++;
        suitCaseVolume = input[index];
        index++;

    }

    console.log("Congratulations! All suitcases are loaded!");
    console.log(`Statistic: ${loadSuitcases} suitcases loaded.`);

}

suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])
