function oddEvenSum(input) {
    let n = Number(input[0]);
    let oddSum = 0;
    let evenSum = 0;

    for (let i = 1; i <= n; i++) {
        if(i % 2 === 0) {
            evenSum += Number(input[i]);
        } else {
            oddSum += Number(input[i]);
        }
    }
        if (evenSum === oddSum) {
    console.log("Yes Sum = " + evenSum);
        } else {
    console.log("No Diff = " + Math.abs(evenSum - oddSum));
        }    
    }

oddEvenSum(["4", "3", "5", "1", "-2"])