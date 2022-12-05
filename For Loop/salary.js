function salary(input) {
  let numOfOpenTabs = Number(input[0]);
  let salary = Number(input[1]);

  for (let i = 1; i < numOfOpenTabs + 2; i++) {
    let tab = input[i];

    if (tab === "Facebook") {
      salary -= 150;
    } else if (tab === "Instagram") {
      salary -= 100;
    } else if (tab === "Reddit") {
      salary -= 50;
    }
  }

  if (salary <= 0) {
    console.log("You have lost your salary.");
  } else {
    console.log(salary);
  }
}

salary([
  "10",
  "750",
  "Facebook",
  "Dev.bg",
  "Instagram",
  "Facebook",
  "Reddit",
  "Facebook",
  "Facebook",
]);
