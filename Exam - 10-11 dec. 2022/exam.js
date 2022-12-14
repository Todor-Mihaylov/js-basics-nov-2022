function exam(input) {
    let numberOfStudents = Number(input[0]);
    let index = 1;
    let examGrade = Number(input[index]);
    index++;
    let topStudents = 0;
    let studentsBetween4And5 = 0;
    let studentsBetween3And4 = 0;
    let failStudents = 0;
    let sumGrades = 0;

    for (let i = 1;i <= numberOfStudents; i++) {
        examGrade = Number(input[i]);
        if(examGrade >= 2 && examGrade < 3) {
            failStudents++;
            sumGrades += examGrade;
        } else if (examGrade >= 3 && examGrade < 4) {
            studentsBetween3And4++;
            sumGrades += examGrade;
        } else if (examGrade >= 4 && examGrade < 5) {
            studentsBetween4And5++;
            sumGrades += examGrade;
        } else if (examGrade >= 5) {
            topStudents++;
            sumGrades += examGrade;
        }

        examGrade = Number(input[i]);
        index++;
        
    }

    let percentTopStudents = (topStudents / numberOfStudents) * 100;
    let percentBetween4And5 = (studentsBetween4And5 / numberOfStudents) * 100;
    let percentBetween3And4 = (studentsBetween3And4 / numberOfStudents) * 100;
    let percentFailed = (failStudents / numberOfStudents) * 100;
    let averageGrade = sumGrades / numberOfStudents;

    console.log(`Top students: ${percentTopStudents.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentBetween4And5.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentBetween3And4.toFixed(2)}%`);
    console.log(`Fail: ${percentFailed.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);


}

exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])

