//use of fetch
import fetch from 'node-fetch'
fetch('https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/')
    .then((response) => {
        console.log(response.status);
    }).catch((error) => {
        console.log(error);
});

