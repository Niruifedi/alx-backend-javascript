const assert = require('assert')
const calculateNumber = require('./0-calcul')

describe("calculateNumber", function () {
    it("checking if numbers round", function() {
        assert.equal(calculateNumber(1, 3), 4);
    });
    it("checking if numbers round", function() {
        assert.equal(calculateNumber(1, 3.7), 5);
    });
    it("checking if numbers round", function() {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });
    it("checking if numbers round", function() {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
    it("checking zero", function() {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });
    it("checking negative values", function() {
        assert.strictEqual(calculateNumber(-1.3, -4.5), -5);
    });
});
