// Code your solution in this file.
function lowerCaseDrivers(list){
  return list.map((name)=> name.toLowerCase())
}

function attributesToPhrase(list){
  return list.map(function (driver){
    const first = driver.split(' ')[0];
    const second = driver.split(' ')[1];
    return {firstName: first,lastName:second}
 
})}
