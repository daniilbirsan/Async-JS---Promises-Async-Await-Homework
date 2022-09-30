// ex. 2
// differences between  Promise.race()  VS  Promise.any();
// with words / examples

//The main difference between “any” and “race” is that race executes callback function for both resolved and rejected promises, but “any” function executes on the first successful return of promise from the list.

var mailPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Mail")
    }, 3500)
});

var messagePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Message")
    }, 800)
});

var alertPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Alert")
    }, 200)
});

Promise.any([mailPromise, messagePromise, alertPromise]).then((resolved) => {
    console.log(`[Any] Data was sent by: ${resolved}`)
});
// Expected output "[Any] Data was sent by: Message" because it is first successful return

Promise.race([mailPromise, messagePromise, alertPromise]).then((resolved) => {
    console.log(`[Race] Data was sent by: ${resolved}`)
}, (resolved) => {
    console.log(`[Race] Data was sent by: ${resolved}`)
});

// Expected output "[Race] Data was sent by: Alert" because the callback function is invoked once the rejection is received. 