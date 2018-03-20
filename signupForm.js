var dataAccess = require("./dataAccess");

function signUpForm(){

}

signUpForm.prototype.signUp = function signUp(firstName, lastName, emailAddress) {
    return new dataAccess().saveRecord(firstName, lastName, emailAddress);
  }

  module.exports = signUpForm;