//use of fetch
import fetch from 'node-fetch'
export default class getFetchData {
    async fetchData() {
        try {
            let response = await fetch('https://www.geeksforgeeks.org/difference-between-fetch-and-axios-js-for-making-http-requests/');
            console.log(response.status);
        } catch (error) {
            console.log(error);
        }
    }
}