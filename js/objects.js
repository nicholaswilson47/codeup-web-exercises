(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        firstName: "Nicholas",
        lastName: "Wilson"
    };

    console.log(person.firstName)
    console.log(person.lastName)
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function () {
        return("Hello from " + this.firstName + " " +this.lastName +"!");
    };
    console.log()

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    //     if(amount > 200){
    //         console.log(amount - (amount *.12))
    //         return console.log(name + "'s original total is" + amount + ".")
    //         return console.log(name + "'s discount will be" +(amount*.12)+". "+name+"'s new total will be"+(amount - (amount*.12))+".")
    //     } else {
    //         return console.log(name + "'s original total is" + amount + ". " + name + "does not get a discount.")
    //     }
    // }
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
     ];

    shoppers.forEach(function(shopper){
      if(shopper.amount >200) {
          console.log("Hello there, "+ shopper.name + "! Your total before any discount is "+shopper.amount.toFixed(2)+ ".since that's over 200 you get a 12% discount that means your new total is $"+ (shopper.amount*.88).toFixed(2)+".");
      } else{
          console.log("hello, " +shopper.name+" .Your total is $" +shopper.amount.toFixed(2))
      }
    })

//     shoppers.forEach(function isDiscount(shoppers.name , shoppers.amount)){
//         if(shoppers.amount > 200){
//             console.log(shoppers.amount - (shoppers.amount *.12))
//             return console.log(shoppers.name + "'s original total is" + shoppers.amount + ".")
//             return console.log(shoppers.name + "'s discount will be" +(shoppers.amount*.12)+". "+shoppers.name+"'s new total will be"+(shoppers.amount - (shoppers.amount*.12))+".")
//          } else {
//             return console.log(shoppers.name + "'s original total is" +shoppers.amount+ ". " + shoppers.name + "does not get a discount.")
//     }
// }


    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "Cat's Cradle",
            author: {
                firstName: "Kurt",
                lastName: "Vonnegut",
            }
        },
        {
            title: "The Lord of the Rings",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien",
            }
        },
        {
            title: "The Return of the King",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien",
            }
        },
        {
            title: "The Time Machine",
            author: {
                firstName: "H.G.",
                lastName: "Wells",
            }
        },
        {
            title: "A Dance of Dragons",
            author: {
                firstName: "George",
                lastName: "Martin",
            }
        },
    ];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    function showBookInfo(book){
        var str = "Title: " + book.title+ "\n";
        str += "Author: " +book.author.firstName + " "+book.author.lastName;
        return str;
    }
    books.forEach(function(book,index){
        console.log("Book #" + (index+1) + "\n" +showBookInfo(book));
    })

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();