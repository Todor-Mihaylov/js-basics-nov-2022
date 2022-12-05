function vacationBooksList(input) {
let numberOfPages = Number(input[0]);
let pagesForHour = Number(input[1]);
let numberOfDays = Number(input[2]);
let takeshours = numberOfPages / pagesForHour;
let totalTime = takeshours / numberOfDays;
console.log(totalTime);

}

vacationBooksList(["212","20","2"])

// Общо време за четене на книгата: 212 страници / 20 страници за час = 10.6 часа общо
// Необходимите часове на ден: 10.6 часа / 2 дни = 5.3 часа на ден