"use strict";

console.log("hello from conditionals lec.js!");

// ================ REAL WORLD SCENARIO ================
// If a user is an admin,show a specific navbar 
// If weather is rainy, show rain icon
// If number of lives is 0, game is over


// ================ IF STATEMENT SYNTAX ================

// if(condition){
    // code here runs if condition evaluates to true
// }
    

// ================ IF STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin
var isAdmin = true;
if (isAdmin){
    //display specific admin navbar
}

//TODO Together: Send a 20% off coupon if its users birthday
var birthday = "03-21"
if( birthday = "03-21"){
    alert("Happy Birthday! 20% off: kjhgkjgh");
}
//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true

var isRainy = false;
if( isRainy ) {
    alert("It's raining!")
}

//TODO Together: Write an if statement that alerts the user whether or not they have enough money to buy a new item. Assume there are no hidden fees or taxes.
var userWallet = 100;
var itemCost = 25;
if( userWallet >= itemCost) {
    alert("You have enough money to buy this.")
} else {
    alert("You do not have enough money to buy this.")
}

//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0
var numberOfLives = 3;
if( numberOfLives == 0){
    alert("Sorry, game over")
}

//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing"
var isSnowy = false;
if (isSnowy = true){
    alert("It's snowing!")
}

//TODO: Write an if statement that alerts true if numberInput is greater than but not equal to 10
var numberInput = 12
if( numberInput > 10){
    alert( true )
}

//TODO: EXTRA BONUS - Refactor each of the previous statements as functions.





// =============== IF / ELSE SYNTAX ================

// if(condition){
//     // code here runs if condition evaluates to true
// } else {
//     // code here runs if condition evaluates to false
// }
    
    

// =============== IF / ELSE STATEMENT EXAMPLES ================
//TODO Together: Show a specific navbar if user is admin, else show a different navbar
var adminNavbar = "Home | About | Contact | Secret";
var userNavbar = "Home | Abobut | Contact";
if(isAdmin) {
    console.log(adminNavbar)
} else {
    console.log(userNavbar)
}

//TODO Together: Write an if statement that alerts "It's raining" if isRainy is true, else return "have a nice day!"
if(isRainy){
    alert("It's raining")
} else {
    alert("Have a nice day.")
}



//TODO: Write an if statement that alerts "Sorry, game over" if numberOfLives is 0, else alert "Next Level!"
if(numberOfLives == 0){
    alert("Sorry, game over.")
} else {
    alert("Next level!")
}
//TODO: Write an if statement that alerts "It's snowing!" if weather is equal to "snowing", else alert "Check back later for more details!"
if(isSnowy){
    alert("It's Snowing!")
} else {
    alert("Check back for more details.")
}
//TODO: Write an if statement that alerts true if numberInput is greater than 10, else alert "the number is less than 10"
if(numberInput > 10){
    alert("This number is greater than 10.")
} else if(numberInput <10) {
    alert("This number is less than 10.")
} else {
    alert("Thi is the number 10.")
}

//TODO: Refactor todo#1 as a function named checkIfGameIsOver, that accepts numberOfLives and returns "Sorry, game over" if numberOfLives is 0, else return "Next Level!.
function checkIfGameIsOver (numberOfLives) {
    if( numberOfLives == 0 ) {
        return "Sorry game over.";
    } else {
        return "Next Level!";
    }}


//TODO: EXTRA BONUS - Refactor todo#2 from above as a function.
function snowExistence(isSnowy){
    if(isSnowy == true){
        return "It's Snowing!";
    } else {
        return "Check back later.";
    }}
    
    
// SHOULD WE DELETE STUFF EXAMPLE




//TODO: Write a confirm asking the user if they are 13 years of age or older. If they are, alert "You may proceed", if they are not, alert "Sorry, you are not able to proceed"
var overThirteen = confirm("Are you 13 or older?");

if (overThirteen){
    alert("You may proceed");
}    else {
    alert("You cannot proceed");
}

// ================ IF / ELSE IF / ELSE STATEMENT SYNTAX ===============
// if(condition1){
//     // code here runs if condition evaluates to true
// }else if (condition2){
//     // code here runs if condition1 is false *and* condition2 evaluates to true
// }else {
//     // code here gets executed if condition1 nor condition2 evaluate to true
// }

    

// =============== IF / ELSE IF/ELSE STATEMENT EXAMPLES ================
//TODO Together: Write an if/else if/else statement that alerts "It's snowing!" if weather is equal to "snowing", alerts "It's raining" if weather is equal to "raining", alerts "have a nice day" for all other cases
var weather = "sunny";
if(weather == "snowy"){
    alert("It's snowing!");
} else if (weather == "raining") {
    alert ("It's raining.");
} else {
    alert("Have a nice day.");
}

//TODO Together: refactor the above statement as a function
function choosyWeather(weather){
    if (weather === snow){
        return "It's snowing.";
    } else if (weather === rain){
        return "It's raining.";
    }else {
        return "Have a nice day.";
    }
}


// Together: PIZZA PREFERENCE EXAMPLE 

var pizzaPreference = prompt("What kind of pizza do you like?");
console.log("User pizza input: " + pizzaPreference);

if (pizzaPreference === "pineapple and hot sauce") {
     alert("What a coincidence, that's my favorite!");
 } else if (pizzaPreference === "cheese") {
     alert("Just plain cheese? Okay...");
 }  else if (pizzaPreference === "ham"){
     alert("Ham is easy to spell and awesome!");
 } else {
     alert(pizzaPreference + " isn't my favorite, but let's order some!");
 }




//TODO: Write a function that accepts a string that is a traffic light color as an input. When this function is called, it should return a message informing the user what to do when approaching that color light at an intersection.

alert( trafficLight("red") );
function trafficLight(lighthue){
    if(lighthue === "red"){
        return "You should stop.";
} else if(lighthue === "yellow"){
        alert("You should slow down.");
}}




// ================ NESTED STATEMENTS ===============
// TODO Together: If user is under 15, they are not eligible for a learners
// permit, else they are. If they are eligible, check age. If they are 15 they
// are eligible for a learners permit, if they are 16 or older and have a
// permit, they are eligible for license, if they are 16 or older and do
//     not have a permit, they are not eligble for a license.

// user < 15, ineligible for permit
// user === 15, eligible for permit
// user >= 16 && r, eligible for permit


function canYouDrive (driverAge, hasPermit){
    if (driverAge <15){
        return "You are completely ineligible";
    } else {
        if (driverAge === 15){
            return "You are eligible for a learner's permit.":
        } else if(driverAge >= 16){
            if (hasPermit) {
                return "You are eligible for a license.";
            } else {
                return "You are not eligible for a license.";
            }
        }
    }
}



// ================ TERNARY STATEMENT ================

//TODO Together: Regular way

 var message;
 var success = true;

 if (success) {
     message = "Operation was successful.";
 } else {
     message = "Oops, something went wrong.";
 }
console.log(message);

 message = success ? "Opertaion successful." : "Oops something went wrong.";

// var success = true;
// var message = (success) ? "Operation was successful from tern." : "Oops, something went wrong from tern.";
// console.log(message)


//TODO: Refactor the following conditional as a ternary

weather = "sunny";
weatherMessage =( weather === 'rainy')? 'Its raining': 'Have a nice day!';

// if(weather === "rainy"){
//    weatherMessage = "It's raining!";
// } else {
//     weatherMessage = "Have a nice day!";
// }

//WRITE YOUR TERNARY STATEMENT HERE!



// =============== SWITCH STATEMENT ================
//TODO Together:

switch(pizzaPreference) {
    case "pineapple and hot sauce":
        alert("What a coincidence, that's my favorite!");
        break;
    case "cheese":
        alert("Just plain cheese? Okay...");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite, but let's order some!");
        break;
}


//TODO: Write a switch statement that evaluates weather as the condition. Check for "rainy", "sunny", "snow", and a default case.


//TODO: Rewrite the intersection function from earlier as a switch statement.



// ================ REVERSE ENGINEERING =================
// Visit each of these links, outline the steps required to achieve each of these demonstrations. You can write code or just write the logic steps that would achieve each output


// 1) https://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html


// 2) https://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html


// 3) https://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html
