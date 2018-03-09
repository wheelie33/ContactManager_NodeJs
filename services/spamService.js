function isKnownSpam(emailAddress){
    if(emailAddress === "knownspam@spam.com")
    {return true;}
    else{return false;}
}

module.exports = {
    isKnownSpam: isKnownSpam
  };