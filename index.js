// Code your solution here
function findMatching(drivers, names) {
    /* return drivers.filter(driver => 
    driver.toUpperCase() === names.toUpperCase()
    ); */
    return drivers.filter(function(driver) {
        if (driver.toUpperCase() === names.toUpperCase()) {
            return true;
        } else if (driver.toUpperCase() !== names.toUpperCase()) {
            return false;
        }
    })
}

function fuzzyMatch(array, string) {
    return array.filter(driver => driver.startsWith(string));
}

function matchName(array, string) {
    return array.filter(obj => obj.name === string);
}