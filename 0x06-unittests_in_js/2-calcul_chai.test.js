const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;


describe('Calculate Number function SUM test cases', () => {
    it('Should return 6', () => {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('Should return 5', () => {
        expect(calculateNumber('SUM', 0, 4.5)).to.equal(5);
    });

    it('Should return 0', () => {
        expect(calculateNumber('SUM', 0, 0)).to.equal(0);
    });

    it('Should return 0', () => {
        expect(calculateNumber('SUM', 0, 0.4)).to.equal(0);
    });

    it('Should return -1', () => {
        expect(calculateNumber('SUM', -1, 0)).to.equal(-1);
    });
});


describe('CalculateNumber function SUBTRACT test cases', () => {
    it('Should return -4', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('Should return -1', () => {
        expect(calculateNumber('SUBTRACT', -1, 0)).to.equal(-1);
    });

    it('Should return -3', () => {
        expect(calculateNumber('SUBTRACT', -1, 2)).to.equal(-3);
    });

    it('Should return -7', () => {
        expect(calculateNumber('SUBTRACT', -4, 2.5)).to.equal(-7);
    });

    it('Should return -2', () => {
        expect(calculateNumber('SUBTRACT', -1, 1.2)).to.equal(-2);
    });

    it('Should return 0', () => {
        expect(calculateNumber('SUBTRACT', -2, -2)).to.equal(0);
    });
});

describe('CalculateNumber function DIVIDE test cases', () => {
    it('Should return 0.2', () => {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(.2);
    });

    it('Should return 5', () => {
        expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    });

    it('Should return 2', () => {
        expect(calculateNumber('DIVIDE', 11.5, 6.3)).to.equal(2);
    });

    it('Should return 2.5', () => {
        expect(calculateNumber('DIVIDE', 5.3, 1.6)).to.equal(2.5);
    });

    it('Should return Error', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});