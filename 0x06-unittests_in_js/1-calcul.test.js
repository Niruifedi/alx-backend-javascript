const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
    it("checking sum", function() {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
    it("checking sum", function() {
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
    it("checking sum", function() {
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });
    it("checking sum", function() {
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });
    it("checking sum", function() {
        assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
    });
    it("checking Subtract", function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
    it("checking Subtract", function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });
    it("checking Subtract", function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
    });
    it("checking Subtract", function() {
        assert.strictEqual(calculateNumber('SUBTRACT', 150, 70), 80);
    });
    it("checking Divide", function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
    it("checking Divide", function() {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), "Error");
    });
    it("checking Divide", function() {
        assert.strictEqual(calculateNumber('DIVIDE', 3.7, 1.2), 4);
    });
    it("checking Divide", function() {
        assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    });
});
