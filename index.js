// Code your solution in this file.
function lowerCaseDrivers(list){
  return list.map((name)=> name.toLowerCase())
}

function attributesToPhrase(list){
  let myObj ={}
  return list.map(function(fullName){
    myObj.firstName.assign(fullName.split(' ')[0]);
    myObj.lastName.assign(fullName.split(' ')[1])
    
  })
  
 
 
}