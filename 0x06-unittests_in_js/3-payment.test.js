const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const { expect } = require('chai');

describe('Test sendPaymentRequestToApi', () => {
    it('Checks the SUM of values', () => {
        const calcNumSpy = sinon.spy(Utils, 'calculateNumber');
        // const consoleSpy = sinon.spy(console, 'log');

        const apiRequestRes = sendPaymentRequestToApi(100, 20);

        expect(calcNumSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.equal(true);
        // expect(consoleSpy.calledWithExactly('The total is: 120')).to.equal(true);
        expect(Utils.calculateNumber('SUM', 100, 20)).to.equal(apiRequestRes);
        calcNumSpy.restore();
    });
});