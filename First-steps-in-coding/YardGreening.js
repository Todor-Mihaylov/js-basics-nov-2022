function yardGreening(input) {
    let priceForGreening = Number(input[0] * 7.61);
    let discount = priceForGreening * 0.18;
    let totalPrice = priceForGreening - discount
    console.log(`The final price is: ${totalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}

yardGreening(["550"])



// •	"The final price is: {крайна цена на услугата} lv."
// •	"The discount is: {отстъпка} lv."

