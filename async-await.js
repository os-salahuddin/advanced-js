// callback function and setTimeout
async function sayMessage(message, callback)
{
    return setTimeout(function () {
        callback(message);
    }, 2000);
}

// use of async and await
async function sayHello() {
    return await sayMessage('hello', console.log);
}

sayHello().then((r) => {
   console.log(r);
});

