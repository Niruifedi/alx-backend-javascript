const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./2-calcul_chai");
const { expect } = require("chai");

describe("calculateNumber", function () {
    it("checking sum", function() {
        const res = calculateNumber('SUM', 1.4, 4.5);
        expect(res).to.equal(6);
    });
    it("checking sum", function() {
        const res = calculateNumber('SUM', 1, 3.7);
        expect(res).to.equal(5);
    });
    it("checking sum", function() {
        const res = calculateNumber('SUM', 1.2, 3.7);
        expect(res).to.equal(5);
    });
    it("checking sum", function() {
        const res = calculateNumber('SUM', 1.5, 3.7);
        expect(res).to.equal(6);
    });
    it("checking sum", function() {
        const res = calculateNumber('SUM', 0, 0);
        expect(res).to.equal(0);
    });
    it("checking Subtract", function() {
        const res = calculateNumber('SUBTRACT', 1.4, 4.5);
        expect(res).to.equal(-4);
    });
    it("checking Subtract", function() {
        const res = calculateNumber('SUBTRACT', 1.2, 3.7);
        expect(res).to.equal(-3);
    });
    it("checking Subtract", function() {
        const res = calculateNumber('SUBTRACT', 3.7, 1.5);
        expect(res).to.equal(2);
    });
    it("checking Subtract", function() {
        const res = calculateNumber('SUBTRACT', 150, 70);
        expect(res).to.equal(80);
    });
    it("checking Divide", function() {
        const res = calculateNumber('DIVIDE', 1.4, 4.5);
        expect(res).to.equal(0.2);
    });
    it("checking Divide", function() {
        const res = calculateNumber('DIVIDE', 1.4, 0);
        expect(res).to.equal("Error");
    });
    it("checking Divide", function() {
        const res = calculateNumber('DIVIDE', 3.7, 1.2);
        expect(res).to.equal(4);
    });
    it("checking Divide", function() {
        const res = calculateNumber('DIVIDE', 10, 2);
        expect(res).to.equal(5);
    });
});
