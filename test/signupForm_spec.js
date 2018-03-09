var expect = require('chai').expect;
var signupForm = require('../signupForm');

describe('signupForm.signup()', function () {
  it('should save for all 3 fields valid input', function () {
    
    // 1. ARRANGE
    var firstName = "J";
    var lastName = "W";
    var emailAddress = "wheelie33@gmail.com"

    // 2. ACT
    var saved = signupForm.signUp(firstName, lastName, emailAddress);

    // 3. ASSERT
    expect(saved).to.be.true;

  });
});
