function changeBureau(input) {
    let bitcoin = Number(input[0]);
    let chineseYuan = Number(input[1]);
    let commission = Number(input[2]);
    
    let dollarPrice = 1.76;
    let yuanPrice = (0.15 * dollarPrice) * chineseYuan;
    let changeMoney = (bitcoin * 1168) + yuanPrice;
    let totalInEuro = changeMoney / 1.95;
    let commissionPrice = totalInEuro * (commission / 100);
    let result = totalInEuro - commissionPrice;

    console.log(result.toFixed(2));

}


changeBureau(["1", "5", "5"]);
