function trainTheTrainers(input) {
    let index = 0;
    let numberOfJudges = Number(input[index]);
    index++
    let presentationName = input[index];
    index++;
    
    let currentTotalGrade = 0;
    let numOfPresentations = 0;
    let averageGrade = 0;

    while (presentationName !== "Finish") {
        numOfPresentations++;
        
        for (let i = 1; i <= numberOfJudges; i++) {
            let grade = Number(input[index]);
            index++;
            
            currentTotalGrade += grade;
        }

        let currentAverageGrade = currentTotalGrade / numberOfJudges;
        console.log(`${presentationName} - ${currentAverageGrade.toFixed(2)}.`);

        averageGrade += currentAverageGrade;
        currentTotalGrade = 0;

        presentationName = input[index];
        index++;
    }

    let totalAverageGrade = averageGrade / numOfPresentations;
    console.log(`Student's final assessment is ${totalAverageGrade.toFixed(2)}.`);
    
}

trainTheTrainers([
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);