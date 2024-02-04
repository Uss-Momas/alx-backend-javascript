const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const { expect } = require('chai');
const { afterEach, beforeEach } = require('mocha');

describe('Test calculateNumber', () => {
    let consoleSpy;
    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });
    it('Test 1', () => {
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);
        expect(consoleSpy.callCount).to.equal(1);
    });

    it('Test 2', () => {
        sendPaymentRequestToApi(10, 10);
        expect(consoleSpy.calledWithExactly('The total is: 20')).to.equal(true);
        expect(consoleSpy.callCount).to.equal(1);
    });
});