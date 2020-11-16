(function(){
    "use strict";

    // /**
    //  * TODO:
    //  * Create an array of 4 people's names and store it in a variable called
    //  * 'names'.
    //  */

    var names = ['Bob', 'Sarah', 'Thomas', 'Sage', 'Greg']

    // /**
    //  * TODO:
    //  * Create a log statement that will log the number of elements in the names
    //  * array.
    //  */
    console.log(names.length)
    console.log('There are ' + names.length + ' names in the array');

    console.log('The first name is: ' + names[0]);
    console.log('The second name is: ' + names[1]);
    console.log('The third name is: ' + names[2]);
    console.log('The fourth name is: ' + names[3]);
    console.log('The fifth name is: ' + names[4]);

    // /**
    //  *
    //  * TODO:
    //  * Create log statements that will print each of the names individually by
    //  * accessing each element's index.
    //  */
    for (var i = 0; i < names.length; i++) {
        console.log('The name at index ' + i + ' is: ' + names[i]);
    }
    // /**
    //  * TODO:
    //  * Write some code that uses a for loop to log every item in the names
    //  * array.
    //  */
    //
    // /**
    //  * TODO:
    //  * Refactor your above code to use a `forEach` loop
    //  */
    names.forEach(function(name) {
        return console.log('The name at index '+ i + ' is: ' + names[i]);
    })



    // /**
    //  * TODO:
    //  * Create the following three functions, each will accept an array and
    //  * return an an element from it
    //  * - first: returns the first item in the array
    //  * - second: returns the second item in the array
    //  * - last: returns the last item in the array
    //  *
    //  * Example:
    //  *  > first([1, 2, 3, 4, 5]) // returns 1
    //  *  > second([1, 2, 3, 4, 5]) // returns 2
    //  *  > last([1, 2, 3, 4, 5]) // return 5
    //  */

    var questions = ['Who?', 'What?', 'When?', 'Where?', 'Why?']

    function first(question){
        console.log(questions[0]);
    }
    first();

    function second(question){
        console.log(questions[1]);
    }
    second();

    function last(question){
        console.log(questions[questions.length - 1]);
    }
    last();

})();