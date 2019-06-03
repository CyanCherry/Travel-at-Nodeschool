// Truly name of this exercise is "Basic: Every Some"

checkUsersValid = goodUsers => submittedUsers => submittedUsers.every(
    submittedUser => goodUsers.some(goodUser => goodUser.id === submittedUser.id)
);

module.exports = checkUsersValid;