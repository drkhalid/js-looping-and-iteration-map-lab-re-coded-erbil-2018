// Code your solution in this file.
function lowerCaseDrivers(list){
  return list.map((name)=> name.toLowerCase())
}

function nameToAttributes(list){
  return list.map(function (driver){
    let first = driver.split(' ')[0];
    let second = driver.split(' ')[1];
    return {firstName: first, lastName:second}});}

{ name: 'Bobby',   hometown: 'Pittsburgh'  },
  { name: 'Sammy',   hometown: 'New York'    },
  { name: 'Sally',   hometown: 'Cleveland'   },
  { name: 'Annette', hometown: 'Los Angeles' },
  { name: 'Bobby',   hometown: 'Tampa Bay'   }
];
expect(attributesToPhrase(drivers)).to.eql([
  'Bobby is from Pittsburgh', 'Sammy is from New York', 'Sally is from Cleveland', 'Annette is from Los Angeles', 'Bobby is from Tampa Bay'
]);


function attributesToPhrase(list){
  return list.map(function(driverDetails){
    return
  })
}

