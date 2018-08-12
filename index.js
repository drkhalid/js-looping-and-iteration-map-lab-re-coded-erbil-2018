// Code your solution in this file.
function lowerCaseDrivers(list){
  return list.map((name)=> name.toLowerCase())
}

function attributesToPhrase(list){
  
  return list.map(function(fullName){
    let myObj ={};
    myObj.firstName.assign(fullName.split(' ')[0]);
    myObj.lastName.assign(fullName.split(' ')[1])
    return myObj;
    })
  
 
 
}