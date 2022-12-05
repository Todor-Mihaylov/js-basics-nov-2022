function areaOfFigures(input) {
    let shape = input[0];
    
    if (shape === "square") {
    let a = Number(input[1]);
    console.log((a * a).toFixed(3));
    } else if (shape === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        console.log((a * b).toFixed(3));
    } else if (shape === "circle") {
        let r = Number(input[1]);
        console.log((Math.PI * (r * r).toFixed(3)).toFixed(3));
    } else if (shape === "triangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        console.log(((a * b) / 2).toFixed(3));

    }
    }


areaOfFigures(["circle","6"])