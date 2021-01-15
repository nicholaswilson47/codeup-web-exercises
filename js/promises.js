const url = 'https://api.github.com/users'
const events ='/events'

const getLastCommitDate = (username) => {
    return fetch(url + username + events, {headers: {'Authorization': `token ${GITHUB_API_TOKEN}`}})
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data.filter(event=>event.type === 'PushEvent')
        })
        .then(pushEvents =>{
            console.log(pushEvents[0].created_at);
            return pushEvents[0].created_at;
        })
}
console.log(getLastCommitDate('nicholaswilson47'));


//     Create Your Own Promise
// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

const wait = (ms) => {
    return new Promise( (resolve, reject)=>{
      setTimeout(resolve,ms);
      reject();
    })

}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));
wait(5000).then(() => console.log('When will we see this?'));
// 1. As a bonus make sure the promise resolves with the milliseconds in return, so you can make the console log message more dynamic.