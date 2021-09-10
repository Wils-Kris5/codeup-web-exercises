"use strict";
//Handle An API Promise
// Create a file named promises.js inside of your js directory and link it to an HTML file of your choice.
//
// Generate a Personal Access Token for the GitHub API.
// We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests ike this:
//  Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.
//  Reference the github api documentation to achieve this.
//
//  fetch(url, {headers: {'Authorization': 'GIT_HUB_TOKEN'}});


         //  fetch(`https://api.github.com/users/Wils-Kris5/events`, {
         //      method: 'GET'
         //     headers: {'Authorization': GIT_HUB_TOKEN
         //     }
         // })
         //     .then(response => response.json())
         //     .then(response => response[0].created_at)
         //     .catch(console.error)
         //
         // console.log(lastPushDate('Wils-Kris5'));
         
   fetch('https://api.github.com/users/wils-kris5/events', {
    method: 'GET',
    headers: {'Authorization': 'GITHUB_TOKEN'}})
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        const mostRecent = data.find(({type})=> type === 'PushEvent')
        return new Date(mostRecent.created_at).toDateString()
    }).catch(console.log)






