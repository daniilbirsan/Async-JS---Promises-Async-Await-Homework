// ex. 4
// write a promisify function,
// like a wrapper for other functions
import fetch from "node-fetch";


// you should pass a callback to it, and arguments to that callback
const promisify = (functionAsCallback, ...argsToFunction) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(functionAsCallback(...argsToFunction));
        } catch (error) {
            reject(error);
        }
    })
}

// it should return a promise, so you can call .then on this function
const fetchSomeDataFromAnAPI = async (link, objectKey) => {
    const res = await fetch(link);
    const apiData = await res.json();
    return apiData[objectKey];
};
const promisifiedFunction = promisify(
    fetchSomeDataFromAnAPI,
    "https://api.publicapis.org/entries",
    'count'
);
promisifiedFunction.then((apiResponse) => console.log(apiResponse)).catch((err) => console.log(err));