const getAge = function(death, birth){
  if(!death){
    death =  new Date().getFullYear();
  }
  return death-birth;
}

const findTheOldest = function(person) {
  return person.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfDeath, oldest.yearOfBirth);
    const currentAge = getAge(currentPerson.yearOfDeath, currentPerson.yearOfBirth);
    return oldestAge < currentAge ? currentPerson : oldest;
  });
}


// Do not edit below this line
module.exports = findTheOldest;
