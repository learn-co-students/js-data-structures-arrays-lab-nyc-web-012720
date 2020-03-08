// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
     return drivers.concat(name);
}

function prependDriver(name) {
    return [name,...drivers];
}

function removeLastDriver(){
    return drivers.slice(0, drivers.length -1);
    //.slice takes in two arguments first argmuent 0 is index to begin in the array
    // second argument is drivers.length -1 which removes the last driver.
}

function removeFirstDriver() {
    return drivers.slice(1);
    //returns the arrary starting from index 1 (removing driver at 0 index)
}


