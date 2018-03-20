var expect = require('chai').expect;
var signupForm = require('../signupForm');

describe('signupForm.signup()', function () {

  cleanData = {
    firstName: "Jason",
    lastName:  "Whelehon",
    emailAddress: "wheelie33@gmail.com"
  };

  it('should pass a sanity check', function(){
    expect(1).to.equal(1);
  });

  it('should save for all 3 fields valid input', function () {
    var saved = new signupForm().signUp(cleanData.firstName, cleanData.lastName, cleanData.emailAddress);
    expect(saved).to.be.true;
  });

  it('should not save if email is missing TLD', function(){
    var saved = new signupForm().signUp(cleanData.firstName, cleanData.lastName, "wheelie33@gmail");
    expect(saved).to.be.false;
  });

  it('should not save a first name longer than 10 characters', function(){
    var saved = new signupForm().signUp('JasonJasonJasonJasonJason', cleanData.lastName, cleanData.emailAddress);
    expect(saved).to.be.false;
  });

  it('should not save a last name longer than 20 characters', function(){
    var saved = new signupForm().signUp(cleanData.firstName, "WhelehonWhelehonWhelehonWhelehonWhelehon", cleanData.emailAddress);
    expect(saved).to.be.false;
  });

  it('should save a first name exactly 10 characters long', function(){
    var saved = new signupForm().signUp("JasonJason", cleanData.lastName, cleanData.emailAddress);
    expect(saved).to.be.true;
  });

  it('should save a last name exactly 20 characters long', function(){
    var saved = new signupForm().signUp(cleanData.firstName, "WhelehonWhelehonWhel", cleanData.emailAddress);
    expect(saved).to.be.true;
  });
  
  it('should not save a known spam email address', function(){
    var saved = new signupForm().signUp(cleanData.firstName, cleanData.lastName, "knownspam@spam.com");
    expect(saved).to.be.false;

  });

  it('should save a known non-spam email address', function(){
    var saved = new signupForm().signUp(cleanData.firstName, cleanData.lastName, "notspam@not-spam.com");
    expect(saved).to.be.true;

  });

});
