// callback function and setTimeout
function showMessage(message)
{
    console.log(message);
}
function displayMessage(message, callback)
{
    console.log('some work done');
    let newMessage = message + ' after some work done';
    callback(newMessage);
}

displayMessage('hello world', showMessage);