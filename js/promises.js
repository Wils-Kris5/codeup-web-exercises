"use strict";
//Handle An API Promise
// Create a file named promises.js inside of your js directory and link it to an HTML file of your choice.
//
// Generate a Personal Access Token for the GitHub API.
// We will use this so that we don't get rate limited when talking to the GitHub API. You can add the token to your requests ike this:
//  Create a function that accepts a GitHub username, and returns a promise that resolves returning just the date of the last commit that user made.
//  Reference the github api documentation to achieve this.
//
 fetch(url, {headers: {'Authorization': 'GIT_HUB_TOKEN'}});




     function lastPushDate(username) {
         return fetch(`https://api.github.com/users/${wils-kris5}/events`, {
             headers: {
                 'Authorization': 'token' +
                     GIT_HUB_TOKEN
             }
         })
             .then(response => response.json())
             .then(response => response[0].created_at)
             .catch(console.error)
     }
         console.log(lastPushDate('Wils-Kris5'));
         







