const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        let currentAge = getAge(current.yearOfBirth, current.yearOfDeath);
        return oldestAge<currentAge ? current : oldest;
    });
};

const getAge = function(born, died) {
    if (!died) {
        died = new Date().getFullYear();
    }
    return died-born;
};

// Do not edit below this line
module.exports = findTheOldest;
