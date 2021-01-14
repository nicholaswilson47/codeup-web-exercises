const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


let minThreeLangs = users.filter(user => user.languages.length >= 3);
console.log(minThreeLangs);

let userEmails = users.map(user => user.email);
console.log(userEmails);

let yearsExp = user.reduce((total , user ) => total +user.yearsOfExperience, 0);
console.log(yearsExp + " total experience, average " + (yearsExp/users.length) + " years experience per user");

let longestEmail = users.reduce((currentLongest, user) => user.email.length > currentLongest.email.length ? user : currentLongest);
console.log(longestEmailUser.name + "has the longest email address, with " + longestEmailUser.email);


let userNames = user.reduce((listOfNames, user) => , "Your instructors are: ")