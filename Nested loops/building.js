function building(input) {
    let index = 0;
    let numberOfFluor = Number(input[index]);
    index++;
    let numberOfRooms = Number(input[index]);
    index++;
    let string = "";
    
    for (let i = numberOfFluor; i >= 1; i--) {
        for (let j = 0; j < numberOfRooms; j++) {
            if (i === numberOfFluor) {
                string += `L${i}${j} `;

            } else if (i % 2 === 0) {
                string += `O${i}${j} `;
            } else {
                string += `A${i}${j} `;
            }
        }
        string += "\n";
    }
    console.log(string);
}

building(["6", "4"]);