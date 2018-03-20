var spamService = require('./services/spamService');
var databaseConnection = require('./databaseConnection');

function dataAccess(){

}

dataAccess.prototype.saveRecord = function saveRecord(firstName, lastName, emailAddress) {
    
    if(!new databaseConnection("(local)", 30, "Contacts").isConnected()){
        return false;
    }

    if (firstName.length <= 10)
    {
        var firstNameRegex = /^[a-z]+$/i
        if(!firstNameRegex.test(firstName)){
            return false;
        }
    }
    else{
        return false;
    }
    
    if(lastName.includes('-')){
        var lastNameParts = lastName.split('-');
        for(i = 0; i< lastNameParts.length; i++){
            var lastNameRegex = /^[a-z]+$/i;

            if(!lastNameRegex.test(lastNameParts[i])){
                return false;
            }
        }
    }
    else if (lastName.length <= 20)
    {
        var lastNameRegex = /^[a-z]+$/i;
        if(!lastNameRegex.test(lastName)){
            return false;
        }
    }
    else{
        return false;
    }

    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRegex.test(emailAddress)){
        return false;
    }

    if(spamService.isKnownSpam(emailAddress)){
        return false;
    }
   
    return true;
}




  module.exports = dataAccess;