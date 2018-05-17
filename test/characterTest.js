var formatNames = require("../public/assets/js/character.js");
var expect = require("chai").expect;

describe("validateForm", function () {

    it("is expected to return a false value if the name is not populated", function () {
        expect(validateForm(
            {
                name: "",
                level: 1,
                strength: strength,
                vitality: vitality,
                agility: agility,
                image: image
            })).to.equal("false");
    });

});