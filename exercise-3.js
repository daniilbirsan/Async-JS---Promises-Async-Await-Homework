// ex. 3
// add error handling for fetch (based on statuses, ok property)

// fetch('https://jsonplaceholder.typicode.com/post')
//   .then(res => {
//     // here should go the logic
//   })

import fetch from "node-fetch";

fetch('https://jsonplaceholder.typicode.com/post')
    .then(async response => {
        // checks if the response has the json header, tests if the response is in a json
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson ? await response.json() : null; // waits for the response if data is json and converts it to JS object

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response status
            const error = (data && data.message) || response.status;
            return Promise.reject(error); // returns the error in catch block
        }

    })
    .catch(error => {
        console.error('There was an error!', error);
    });