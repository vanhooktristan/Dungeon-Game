var Nightmare = require("nightmare");
var expect = require("chai").expect;

describe("Monster Slayer", function() {
  // The default tests in mocha is 2 seconds.
  // Extending it to 30 seconds to have time to load the pages

  this.timeout(30000);
  it("should open the game's first page", function(done) {
    // ID for the login button.
    Nightmare({ show: true })
      .goto("https://monster-slayer-ku.herokuapp.com/")
      // Click the catalog link
      .click('#start_button')
      
      .wait(5000)
      // Evaluate the title
      .evaluate(function() {
        return document.title;
      })
      .end()
      // Asset the title is as expected
      .then(function(title) {
        expect(title).to.equal("Monster Slayer");
        done()
      });
  });

  it("should throw an error for fun", function() {
    throw new Error("Failed on purpose, just to make the Mocha output more interesting.");
    done();
  });
});
