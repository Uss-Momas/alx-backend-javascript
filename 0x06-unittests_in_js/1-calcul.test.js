const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Calculate Number function SUM test cases', () => {
    it('Should return 6', () => {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('Should return 5', () => {
        assert.equal(calculateNumber('SUM', 0, 4.5), 5);
    });

    it('Should return 0', () => {
        assert.equal(calculateNumber('SUM', 0, 0), 0);
    });

    it('Should return 0', () => {
        assert.equal(calculateNumber('SUM', 0, 0.4), 0);
    });

    it('Should return -1', () => {
        assert.equal(calculateNumber('SUM', -1, 0), -1);
    });
});

describe('CalculateNumber function SUBTRACT test cases', () => {
    it('Should return -4', ()=>{
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('Should return -1', ()=>{
        assert.equal(calculateNumber('SUBTRACT', -1, 0), -1);
    });

    it('Should return -3', ()=>{
        assert.equal(calculateNumber('SUBTRACT', -1, 2), -3);
    });

    it('Should return -7', ()=>{
        assert.equal(calculateNumber('SUBTRACT', -4, 2.5), -7);
    });

    it('Should return -2', ()=>{
        assert.equal(calculateNumber('SUBTRACT', -1, 1.2), -2);
    });

    it('Should return 0', ()=>{
        assert.equal(calculateNumber('SUBTRACT', -2, -2), 0);
    });
});

describe('CalculateNumber function DIVIDE test cases', () => {
    it('Should return 0.2', ()=>{
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('Should return 5', ()=>{
        assert.equal(calculateNumber('DIVIDE', 10, 2), 5);
    });

    it('Should return 2', ()=>{
        assert.equal(calculateNumber('DIVIDE', 11.5, 6.3), 2);
    });

    it('Should return 2.5', ()=>{
        assert.equal(calculateNumber('DIVIDE', 5.3, 1.6), 2.5);
    });

    it('Should return Error', ()=>{
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});