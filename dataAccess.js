var spamService = require('./services/spamService');


function saveRecord(firstName, lastName, emailAddress) {
    if (firstName.length > 10)
    {
        return false;
    }
    
    
    if (lastName.length > 20)
    {
        return false;
    }

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(emailAddress)){
        return false;
    }

    if(spamService.isKnownSpam(emailAddress)){
        return false;
    }
   
    return true;
  }

  module.exports = {
    saveRecord: saveRecord
  };