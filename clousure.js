//Clousure
function person()
{
    let name = 'salahuddin';
    return function(profession) {
        return name + ' is a ' + profession + ' professional'
    }
}

let personObj = new person();
global.console.log(personObj('SE'));
