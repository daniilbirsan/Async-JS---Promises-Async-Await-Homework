// ex. 1
// Promise['Method'] -> ~ all that always returns either it's success or error
// [ 'success', 'error' ]

// well it returns an array with objects, but thouse objects can be handled so.allSettled I think is the answer
Promise.allSettled([
    Promise.resolve('test'),
    Promise.resolve('test2'),
    Promise.reject('error')
]).then(res => {
    console.log(res)
})