var dataAccess = require("./dataAccess");

function signUp(firstName, lastName, emailAddress) {
    var saved = dataAccess.saveRecord(firstName, lastName, emailAddress);
    return saved;
  }

  module.exports = {
      signUp: signUp
  };