var expect = require('chai').expect;
var signupForm = require('../signupForm');

describe('signupForm.signup()', function () {

  cleanData = {
    firstName: "Jason",
    lastName:  "Whelehon",
    emailAddress: "wheelie33@gmail.com"
  };

  it('should save for all 3 fields valid input', function () {
    var saved = signupForm.signUp(cleanData.firstName, cleanData.lastName, cleanData.emailAddress);
    expect(saved).to.be.true;
  });

  it('should not save if email is missing TLD', function(){
    var saved = signupForm.signUp(cleanData.firstName, cleanData.lastName, "wheelie33@gmail");
    expect(saved).to.be.false;
  });

});
