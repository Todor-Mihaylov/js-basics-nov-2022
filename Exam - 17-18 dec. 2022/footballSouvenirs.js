function footballSouvenirs(input) {
    let team = input[0];
    let kindOfSouvenirs = input[1];
    let numberOfSouvenirs = Number(input[2]);

    let price = 0;

    switch (team) {
        case "Argentina":
            if (kindOfSouvenirs === "flags") {
                price = 3.25;
            } else if (kindOfSouvenirs === "caps") {
                price = 7.20;
            } else if (kindOfSouvenirs === "posters") {
                price = 5.10;
            } else if (kindOfSouvenirs === "stickers") {
                price = 1.25;
            }
            break;
        case "Brazil":
            if (kindOfSouvenirs === "flags") {
                price = 4.20;
            } else if (kindOfSouvenirs === "caps") {
                price = 8.50;
            } else if (kindOfSouvenirs === "posters") {
                price = 5.35;
            } else if (kindOfSouvenirs === "stickers") {
                price = 1.20;
            }
            break;
        case "Croatia":
            if (kindOfSouvenirs === "flags") {
                price = 2.75;
            } else if (kindOfSouvenirs === "caps") {
                price = 6.90;
            } else if (kindOfSouvenirs === "posters") {
                price = 4.95;
            } else if (kindOfSouvenirs === "stickers") {
                price = 1.10;
            }
            break;
        case "Denmark":
            if (kindOfSouvenirs === "flags") {
                price = 3.10;
            } else if (kindOfSouvenirs === "caps") {
                price = 6.50;
            } else if (kindOfSouvenirs === "posters") {
                price = 4.80;
            } else if (kindOfSouvenirs === "stickers") {
                price = 0.90;
            }
            break;
            
            
    }

    if (team !== "Argentina" && team !== "Brazil" && team !== "Croatia" && team !== "Denmark") {
        console.log("Invalid country!");
    } else if (kindOfSouvenirs !== "flags" && kindOfSouvenirs !== "caps" && kindOfSouvenirs !== "posters" && kindOfSouvenirs !== "stickers") {
        console.log("Invalid stock!");
    } else if (team === team && kindOfSouvenirs === kindOfSouvenirs) {
        let totalSum = numberOfSouvenirs * price;
        console.log(`Pepi bought ${numberOfSouvenirs} ${kindOfSouvenirs} of ${team} for ${totalSum.toFixed(2)} lv.`);
    }
}

footballSouvenirs(["Argentina",
"shirts",
"35"])






