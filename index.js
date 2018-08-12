// Code your solution in this file.
function lowerCaseDrivers(list){
  return list.map((name)=> name.toLowerCase())
}

function attributesToPhrase(list){
  
  return list.map(function(fullName){
    const first = fullName.split(' ')[0];
    const second = fullName.split(' ')[1];
    return {firstName: first,lastName:second}
 
})}