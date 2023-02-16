
const input = require('sync-input');

let gifts = {
    1: {name: "Teddy Bear", price: 10},
    2: {name: "Big Red Ball", price: 5},
    3: {name: "Huge Bear", price:  50},
    4: {name: "Candy", price: 8},
    5: {name: "Stuffed Tiger", price: 15},
    6: {name: "Stuffed Dragon", price: 30},
    7: {name: "Skateboard", price: 100,},
    8: {name: "Toy Car", price: 25},
    9: {name: "Basketball", price: 20},
    10: {name: "Scary Mask", price: 75},
}
let totalTickets = 0;

function menu() {
    loop: while(true) {
        let choiceInput = Number(input("\nWhat do you want to do?\n" +
            "1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n"));
        switch (choiceInput) {
            case 1:
                if(Object.entries(gifts).length === 0) {
                    console.log("Wow! There are no gifts to buy.");
                }
                else buyGift();
                break;
            case 2:
                addTickets();
                break;
            case 3:
                checkTickets();
                break;
            case 4:
                if(Object.entries(gifts).length === 0) {
                    console.log("Here's the list of gifts:\n\n" +
                        "Wow! There are no gifts to buy.");
                }
                else showGifts();
                break;
            case 5:
                break loop;
            default:
                console.log("Please enter a valid number!");
        }
    }
}
function buyGift() {
    let numGift = Number(input("Enter the number of the gift you want to get: "));
    if(isNaN(numGift)) console.log("Please enter a valid number!");
    else if(gifts[numGift] == undefined) console.log("There is no gift with that number!");
    else if(totalTickets < gifts[numGift].price) console.log("You don't have enough tickets to buy this gift.");
    else {
        totalTickets -= gifts[numGift].price;
        console.log(`Here you go, one ${gifts[numGift].name}!
Total tickets: ${totalTickets}`);
        delete gifts[numGift];
    }
}
function addTickets() {
    let ticketAmount = Number(input("Enter the ticket amount: "));
    if(isNaN(ticketAmount) || ticketAmount < 0 || ticketAmount > 1000) {
        console.log("Please enter a valid number between 0 and 1000.");
    } else {
        totalTickets += ticketAmount;
        console.log(`Total tickets: ${totalTickets}`);
    }
}
function checkTickets() {
    console.log(`Total tickets: ${totalTickets}`);
}
function showGifts() {
    console.log("Here's the list of gifts:\n");
    for (let i = 1; i < 11; i++) {
        if((gifts[i] != undefined)) console.log(i + `- ${gifts[i].name}, Cost: ${gifts[i].price} tickets`);
    }
}
function startMessage() {
    console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);
}
function endMessage() {
    console.log("Have a nice day!")
}
function allFunction() {
    startMessage();
    showGifts();
    menu();
    endMessage();
}

allFunction();