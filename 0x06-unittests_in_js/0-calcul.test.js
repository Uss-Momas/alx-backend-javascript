const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Calculate number function test', () => {
    it('Should return 0', () => {
        assert.equal(calculateNumber(0, 0), 0);
    });

    it('Should return -1', () => {
        assert.equal(calculateNumber(0, -1), -1);
    });

    it('Should return 4', () => {
        assert.equal(calculateNumber(1, 3), 4);
    });

    it('Should return 5', () => {
        assert.equal(calculateNumber(1, 3.7), 5);
    });

    it('Should return 5', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });

    it('Should return 6', () => {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });

    it('Should return 3', () => {
        assert.equal(calculateNumber(-1, 3.7), 3);
    });

    it('Should return 4', () => {
        assert.equal(calculateNumber(1, 3.3), 4);
    });

    it('Should return -2', () => {
        assert.equal(calculateNumber(-1, -1), -2);
    });

    it('Should return -4', () => {
        assert.equal(calculateNumber(1, -5), -4);
    });
});