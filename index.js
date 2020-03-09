
var drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
   return drivers.push(name)
}

function destructivelyPrependDriver(name) {
    return drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name) {
    return drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name) {
    return drivers.shift(name)
}

function appendDriver(name) {
    let new_d = [...drivers, name]
    return new_d
}

function prependDriver(name) {
    let pre_d = [name,...drivers]
    return pre_d
}

function removeLastDriver(name) {
    let rem_d = drivers.slice();
    rem_d.pop(name);
    return rem_d
}

function removeFirstDriver(name) {
    const d_d = drivers.slice();
    d_d.shift(name);
    return d_d
}