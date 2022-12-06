function cinemaTickets(input) {
    let index = 0;

    let movieTitle = input[index];
    index++;
    
    let standardTickets = 0;
    let studentTickets = 0;
    let kidTickets = 0;
    
    while (movieTitle !== "Finish") {
        let spacesAvailable = Number(input[index]);
        index++;
        
        let currentTicket = input[index];
        index++;

        let spacesTaken = 0;

        while (currentTicket !== "End") {
            if (currentTicket === "standard") {
                standardTickets += 1;
            } else if (currentTicket === "student") {
                studentTickets += 1;
            } else if (currentTicket === "kid") {
                kidTickets += 1;
            }

            spacesTaken += 1;

            if (spacesTaken === spacesAvailable) {
                break;
            }

            currentTicket = input[index];
            index++;
        }

        let percentFull = (spacesTaken / spacesAvailable) * 100;
        console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);

        movieTitle = input[index];
        index++;
    }

    let totalTickets = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${totalTickets}`);
    
    let standardPercent = (standardTickets / totalTickets) * 100;
    let studentPercent = (studentTickets / totalTickets) * 100;
    let kidPercent = (kidTickets / totalTickets) * 100;
    
    console.log(`${studentPercent.toFixed(2)}% student tickets.`);
    console.log(`${standardPercent.toFixed(2)}% standard tickets.`);
    console.log(`${kidPercent.toFixed(2)}% kids tickets.`);

}

cinemaTickets([
    "Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"]);