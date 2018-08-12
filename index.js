// Code your solution in this file.
function lowerCaseDrivers(list){
  return list.map((name)=> name.toLowerCase())
}

function attributesToPhrase(list){
  
  return list.map(function(fullName){
    const first = fullName.split(' ');
    const second = fullName.split(' ');
    return {firstName: first,lastName:second}
 
})}