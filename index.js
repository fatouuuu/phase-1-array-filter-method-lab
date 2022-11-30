// // Code your solution here
     //use callback fn instead

const drivers = ['Bobby', 'SaMMY', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching (driverNames, name){
//     function checkName(item) {
//         return item.toUpperCase() == name.toUpperCase();
//     }
//     return driverNames.filter(checkName);
// }


function findMatching(driverNames,name){
    let checkDriver = driverNames.filter(item=> item.toUpperCase()=== name.toUpperCase())
    return checkDriver
}


// function fuzzyMatch (driverNames, firstLetters){
//     function checkName(item) {
//         return item.startsWith(firstLetters);
//     }
//     return driverNames.filter(checkName);
// }


function fuzzyMatch(driverNames, firstLetters){
    let checkName = driverNames.filter(item =>item.startsWith(firstLetters))
    return checkName
}


// function matchName (drivers, name){


//     function checkName(driver) {
//         return driver.name == name;
//     }
//     return drivers.filter(checkName);
// }


function matchName (drivers, name){
    let checkName = drivers.filter(drivers=>drivers.name === name)
    return checkName
}