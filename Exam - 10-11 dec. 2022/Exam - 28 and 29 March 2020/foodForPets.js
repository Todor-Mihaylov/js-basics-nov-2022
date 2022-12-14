function foodForPets(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let amountOfFood = Number(input[index]);
    index++;
    
    let foodEatenForDay = 0;
    let biscuitsEaten = 0;
    let dogEatenFood = 0;
    let catEatenFood = 0;
    let totalBiscuitsEaten = 0;

    for (let i = 1;i <= days; i ++) {
        let dogFood = Number(input[index]);
        index++;
        let catFood = Number(input[index]);
        index++;
        foodEatenForDay = dogFood + catFood;
        dogEatenFood += dogFood;
        catEatenFood += catFood;
        
        if (i % 3 === 0) {
            biscuitsEaten = foodEatenForDay * 0.10;   
            totalBiscuitsEaten += biscuitsEaten;

        } 
    }

    let eatenFood = dogEatenFood + catEatenFood;
    let eatenFoodPercent = eatenFood / amountOfFood * 100;
    let dogEatenFoodPercent = dogEatenFood / eatenFood * 100;
    let catEatenFoodPercent = catEatenFood / eatenFood * 100;

    console.log(`Total eaten biscuits: ${Math.round(totalBiscuitsEaten)}gr.`);
    console.log(`${eatenFoodPercent.toFixed(2)}% of the food has been eaten.`);
    console.log(`${dogEatenFoodPercent.toFixed(2)}% eaten from the dog.`);
    console.log(`${catEatenFoodPercent.toFixed(2)}% eaten from the cat.`);
}

foodForPets([
    "3",
    "1000",
    "300",
    "20",
    "100",
    "30",
    "110",
    "40"]);