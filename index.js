// Code your solution in this file.
function lowerCaseDrivers(list){
  return list.map((name)=> name.toLowerCase())
}

function nameToAttributes(list){
  return list.map(function (driver){
    let first = driver.split(' ')[0];
    let second = driver.split(' ')[1];
    return {firstName: first, lastName:second}});}

