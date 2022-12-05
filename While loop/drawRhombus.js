function drawRhombus(n) {
    for (let row = 1; row <= n; row++) {
        let line = "";
        for (let col = 1; col <= n - row; col++) {
            line += " ";
        }

        line += "*";
        for (let col = 1; col < row; col++) {
            line += " *";
        }
        console.log(line);
        
    }
    for (let row = 1; row <= n; row++) {
        let line = " ";
        for (let col = 1; col <= n - row; col++) {
            line += "";
        }

        line += "*";
        for (let col = 1; col < row; col++) {
            line += " *";
        }
        console.log(line);

    }
}

drawRhombus([4])